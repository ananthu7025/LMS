# Style Migration Guide: ledx (Tailwind) → full-version (MUI + Emotion)

## Overview

| | **ledx (current)** | **full-version (target)** |
|---|---|---|
| CSS base | `@import "tailwindcss"` | Tailwind v4 wired to MUI palette tokens |
| Component styling | Custom CSS classes + inline `style={{}}` | MUI components + `sx` prop + emotion |
| Theme system | CSS variables in `globals.css` | MUI `createTheme` + `ThemeProvider` |
| Color/dark mode | Manual CSS vars | MUI color scheme system |
| CSS modules | None | Used per-component |

---

## Step 1: Remove Tailwind as the primary style engine

### 1a. Update `globals.css`

**ledx current (`app/globals.css`):**
```css
@import "tailwindcss";   /* <-- remove this */

:root {
  --primary: #7367F0;
  /* ... custom vars */
}
```

**Replace with full-version pattern:**
```css
@layer theme, base, components, utilities;
@import 'tailwindcss/theme.css' layer(theme) important;
@import 'tailwindcss/utilities.css' layer(utilities) important;
@plugin 'tailwindcss-logical';

@theme {
  /* Wire Tailwind color tokens to MUI palette variables */
  --color-primary: var(--primary-color);
  --color-primaryLight: var(--mui-palette-primary-lightOpacity);
  --color-error: var(--mui-palette-error-main);
  --color-warning: var(--mui-palette-warning-main);
  --color-success: var(--mui-palette-success-main);
  --color-info: var(--mui-palette-info-main);
  --color-textPrimary: var(--mui-palette-text-primary);
  --color-textSecondary: var(--mui-palette-text-secondary);
  --color-backgroundPaper: var(--mui-palette-background-paper);
  --color-backgroundDefault: var(--mui-palette-background-default);
}

:root {
  --border-radius: var(--mui-shape-borderRadius);
  --border-color: var(--mui-palette-divider);
  --primary-color: var(--mui-palette-primary-main);
  --background-color: var(--mui-palette-background-default);
  --header-height: 54px;
}

@layer base {
  *, ::before, ::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    border: 0 solid;
    border-color: var(--border-color, currentColor);
  }
}
```

> Note: Tailwind is still present but only as a utility layer on top of MUI. It is no longer the source of truth for colors, spacing, or components.

### 1b. Update `postcss.config.mjs`

**Add autoprefixer (required by MUI/emotion):**
```js
const config = {
  plugins: {
    '@tailwindcss/postcss': {},
    autoprefixer: {},
  },
}

export default config
```

---

## Step 2: Install MUI + Emotion

```bash
npm install @mui/material @mui/lab @emotion/react @emotion/styled @mui/material-nextjs
npm install stylis stylis-plugin-rtl         # RTL support
npm install tailwindcss-logical              # logical CSS plugin
npm install --save-dev autoprefixer stylelint stylelint-use-logical-spec
```

Remove packages that are no longer needed:
```bash
npm uninstall @tailwindcss/postcss   # replaced by autoprefixer + tailwindcss/postcss combo
```

---

## Step 3: Set up MUI ThemeProvider

### 3a. Create the theme provider

Create `components/theme/index.tsx`:
```tsx
'use client'

import { useMemo } from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter'
import CssBaseline from '@mui/material/CssBaseline'

// Your custom MUI theme (see Step 3b)
import coreTheme from './coreTheme'

export default function CustomThemeProvider({ children }: { children: React.ReactNode }) {
  const theme = useMemo(() => createTheme(coreTheme), [])

  return (
    <AppRouterCacheProvider options={{ prepend: true }}>
      <ThemeProvider theme={theme} defaultMode="light">
        <CssBaseline />
        {children}
      </ThemeProvider>
    </AppRouterCacheProvider>
  )
}
```

### 3b. Create the core theme

Create `components/theme/coreTheme.ts` matching the full-version palette:
```ts
const coreTheme = {
  cssVariables: {
    colorSchemeSelector: 'data',  // enables data-dark attribute for dark mode
  },
  colorSchemes: {
    light: {
      palette: {
        primary: { main: '#7367F0' },
        success: { main: '#28C76F' },
        warning: { main: '#FF9F43' },
        error:   { main: '#EA5455' },
        info:    { main: '#00CFE8' },
        background: {
          default: '#F8F7FA',
          paper:   '#FFFFFF',
        },
        text: {
          primary:   '#4B465C',
          secondary: '#A8AAAE',
        },
        divider: '#DBDADE',
      },
    },
    dark: {
      palette: {
        primary: { main: '#7367F0' },
        background: {
          default: '#25293C',
          paper:   '#2F3349',
        },
      },
    },
  },
}

export default coreTheme
```

### 3c. Wrap the app

Update `app/layout.tsx`:
```tsx
import CustomThemeProvider from '@/components/theme'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <CustomThemeProvider>
          {children}
        </CustomThemeProvider>
      </body>
    </html>
  )
}
```

---

## Step 4: Replace custom CSS classes with MUI components

ledx uses custom classes defined in `globals.css`. Each maps to an MUI equivalent.

### `.card` → `<Card>`
```tsx
// Before (ledx)
<div className="card" style={{ padding: 20 }}>...</div>

// After (full-version style)
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'

<Card>
  <CardContent>...</CardContent>
</Card>
```

### `.btn-primary` → `<Button variant="contained">`
```tsx
// Before
<button className="btn-primary">Save</button>

// After
import Button from '@mui/material/Button'

<Button variant="contained" color="primary">Save</Button>
```

### `.btn-outline` → `<Button variant="outlined">`
```tsx
// Before
<button className="btn-outline">Cancel</button>

// After
<Button variant="outlined">Cancel</Button>
```

### `.badge-*` → `<Chip>` or `<Badge>`
```tsx
// Before
<span className="badge badge-success">Active</span>

// After
import Chip from '@mui/material/Chip'

<Chip label="Active" color="success" size="small" />
```

### `.stat-card` → `<Card>` with `sx` prop
```tsx
// Before
<div className="stat-card">
  <div style={{ width: 52, height: 52, background: '#ede9fd', borderRadius: 12 }}>icon</div>
  <div>value</div>
</div>

// After
<Card sx={{ display: 'flex', alignItems: 'center', gap: 2, p: 2.5 }}>
  <Box sx={{ width: 52, height: 52, bgcolor: 'primary.lightOpacity', borderRadius: 3, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    icon
  </Box>
  <Box>value</Box>
</Card>
```

### `.form-input` / `.form-label` → `<TextField>`
```tsx
// Before
<label className="form-label">Email</label>
<input className="form-input" type="email" />

// After
import TextField from '@mui/material/TextField'

<TextField label="Email" type="email" fullWidth />
```

### `<table>` with manual styles → `<Table>` components
```tsx
// Before
<table>
  <thead><tr><th>Name</th></tr></thead>
  <tbody><tr><td>...</td></tr></tbody>
</table>

// After
import Table from '@mui/material/Table'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'

<Table>
  <TableHead><TableRow><TableCell>Name</TableCell></TableRow></TableHead>
  <TableBody><TableRow><TableCell>...</TableCell></TableRow></TableBody>
</Table>
```

### `.progress-bar` / `.progress-fill` → `<LinearProgress>`
```tsx
// Before
<div className="progress-bar"><div className="progress-fill" style={{ width: '82%' }} /></div>

// After
import LinearProgress from '@mui/material/LinearProgress'

<LinearProgress variant="determinate" value={82} />
```

---

## Step 5: Replace inline `style={{}}` with MUI `sx` prop

The `sx` prop is MUI's shorthand styling system — it reads from the theme and supports responsive values.

```tsx
// Before (ledx — inline style with CSS vars)
<div style={{
  fontSize: 22,
  fontWeight: 700,
  color: 'var(--text-muted)',
  marginTop: 2
}}>
  {value}
</div>

// After (full-version style — sx prop)
import Typography from '@mui/material/Typography'

<Typography variant="h5" color="text.secondary" mt={0.25}>
  {value}
</Typography>
```

**Common `sx` → MUI theme token mappings:**

| inline style (ledx) | `sx` value (MUI) |
|---|---|
| `color: 'var(--text-muted)'` | `color: 'text.secondary'` |
| `color: 'var(--primary)'` | `color: 'primary.main'` |
| `background: 'var(--primary)'` | `bgcolor: 'primary.main'` |
| `border: '1px solid var(--border)'` | `border: 1, borderColor: 'divider'` |
| `borderRadius: 12` | `borderRadius: 3` (MUI uses 4px units) |
| `padding: '20px'` | `p: 2.5` |
| `gap: 16` | `gap: 2` |
| `fontSize: 12` | `typography: 'caption'` or `fontSize: '0.75rem'` |

---

## Step 6: Replace sidebar inline styles with MUI Drawer

```tsx
// Before (ledx AdminSidebar — full of inline styles)
<div style={{ width: 260, minHeight: '100vh', background: 'var(--sidebar-bg)', position: 'fixed' }}>
  ...
</div>

// After (full-version style)
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'

<Drawer
  variant="permanent"
  sx={{
    width: 260,
    '& .MuiDrawer-paper': {
      width: 260,
      bgcolor: 'background.paper',
      borderRight: 'none',
    }
  }}
>
  <List>
    {navItems.map(item => (
      <ListItemButton
        key={item.href}
        href={item.href}
        selected={active === item.href}
        sx={{ borderRadius: 2, mb: 0.5 }}
      >
        {item.label}
      </ListItemButton>
    ))}
  </List>
</Drawer>
```

---

## Step 7: Migrate CSS globals cleanup

Once all components use MUI, **delete these blocks from `globals.css`** — they are fully replaced by MUI:

```css
/* DELETE — replaced by MUI Button */
.btn-primary { ... }
.btn-outline { ... }

/* DELETE — replaced by MUI Card */
.card { ... }
.stat-card { ... }

/* DELETE — replaced by MUI Chip */
.badge { ... }
.badge-success { ... }
.badge-warning { ... }
.badge-error { ... }
.badge-info { ... }
.badge-primary { ... }
.badge-secondary { ... }

/* DELETE — replaced by MUI TextField */
.form-input { ... }
.form-label { ... }

/* DELETE — replaced by MUI Table */
table, thead th, tbody td, tbody tr { ... }

/* DELETE — replaced by MUI LinearProgress */
.progress-bar { ... }
.progress-fill { ... }

/* DELETE — replaced by MUI Switch */
.toggle { ... }
.toggle::after { ... }
.toggle.off { ... }

/* DELETE — replaced by MUI ListItemButton */
.sidebar-link { ... }
.sidebar-link:hover { ... }
.sidebar-link.active { ... }
```

Keep only the root layout variables and any truly custom non-MUI styles.

---

## Step 8: Add stylelint (optional, matches full-version)

Create `.stylelintrc.json`:
```json
{
  "plugins": ["stylelint-use-logical-spec"],
  "overrides": [
    {
      "customSyntax": "postcss-styled-syntax",
      "files": ["**/*.{js,ts,jsx,tsx}"]
    }
  ],
  "rules": {
    "liberty/use-logical-spec": "always"
  }
}
```

This enforces logical CSS properties (e.g. `margin-inline` instead of `margin-left`) matching the full-version's RTL-ready approach.

---

## Migration Checklist

- [ ] Updated `globals.css` — removed `@import "tailwindcss"`, added MUI layer config
- [ ] Updated `postcss.config.mjs` — added `autoprefixer`
- [ ] Installed `@mui/material`, `@emotion/react`, `@emotion/styled`, `@mui/material-nextjs`
- [ ] Installed `tailwindcss-logical`
- [ ] Created `components/theme/index.tsx` (ThemeProvider wrapper)
- [ ] Created `components/theme/coreTheme.ts` (palette matching ledx CSS vars)
- [ ] Updated `app/layout.tsx` to wrap with `CustomThemeProvider`
- [ ] Replaced `.card` divs → `<Card>` + `<CardContent>`
- [ ] Replaced `.btn-primary` → `<Button variant="contained">`
- [ ] Replaced `.btn-outline` → `<Button variant="outlined">`
- [ ] Replaced `.badge-*` spans → `<Chip>`
- [ ] Replaced `.form-input` / `.form-label` → `<TextField>`
- [ ] Replaced `<table>` manual styling → MUI Table components
- [ ] Replaced `.progress-bar` → `<LinearProgress>`
- [ ] Replaced `.sidebar-link` nav → MUI `<Drawer>` + `<ListItemButton>`
- [ ] Replaced all `style={{ color: 'var(--...)' }}` → `sx={{ color: 'theme.token' }}`
- [ ] Deleted replaced CSS classes from `globals.css`
- [ ] Added `.stylelintrc.json` (optional)
