'use client';
import { useEffect } from 'react';

/**
 * BootstrapClient
 * ────────────────────────────────────────────
 * Imports Bootstrap 5 JS modules on the client and
 * auto-initialises data-api components (dropdowns, collapses, etc.).
 *
 * Replaces the static `vendor/js/bootstrap.js` + `vendor/libs/popper/popper.js`.
 */
export default function BootstrapClient() {
  useEffect(() => {
    // Dynamic import so this only runs on the client and is tree-shakeable
    import('bootstrap').then((bs) => {
      // Make bootstrap globally available for any components that check window.bootstrap
      if (typeof window !== 'undefined') {
        (window as any).bootstrap = bs;
      }

      // Re-initialise data-api components on the current DOM
      // Bootstrap auto-detects `data-bs-toggle` attributes on DOMContentLoaded,
      // but since Next.js hydrates after that, we need to manually init.

      // Dropdowns
      document.querySelectorAll('[data-bs-toggle="dropdown"]').forEach((el) => {
        bs.Dropdown.getOrCreateInstance(el);
      });

      // Collapses
      document.querySelectorAll('[data-bs-toggle="collapse"]').forEach((el) => {
        bs.Collapse.getOrCreateInstance(el, { toggle: false });
      });

      // Tooltips (if any)
      document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach((el) => {
        new bs.Tooltip(el);
      });

      // Popovers (if any)
      document.querySelectorAll('[data-bs-toggle="popover"]').forEach((el) => {
        new bs.Popover(el);
      });
    });
  }, []);

  return null; // Render nothing
}
