'use client';
import { useState } from 'react';
import SuperAdminLayout from '@/components/layouts/SuperAdminLayout';

// ── Data ──────────────────────────────────────────────────────────────────────

const plans = [
  {
    name: 'Starter', color: 'info', price: 1999, annual: 19990,
    institutes: 98, revenue: '₹1,95,902',
    limits: [
      { label: 'Max Students',  value: '200'    },
      { label: 'Max Courses',   value: '10'     },
      { label: 'Max Tutors',    value: '3'      },
      { label: 'AI Tokens/mo',  value: '10,000' },
      { label: 'Storage',       value: '10 GB'  },
    ],
    features: [
      { label: 'Live Classes',      on: false },
      { label: 'Practice Lab',      on: false },
      { label: 'Custom Branding',   on: false },
      { label: 'API Access',        on: false },
      { label: 'Priority Support',  on: false },
    ],
  },
  {
    name: 'Growth', color: 'primary', price: 4999, annual: 49990,
    institutes: 102, revenue: '₹5,09,898', popular: true,
    limits: [
      { label: 'Max Students',  value: '1,000'  },
      { label: 'Max Courses',   value: '50'     },
      { label: 'Max Tutors',    value: '15'     },
      { label: 'AI Tokens/mo',  value: '50,000' },
      { label: 'Storage',       value: '50 GB'  },
    ],
    features: [
      { label: 'Live Classes',      on: true  },
      { label: 'Practice Lab',      on: true  },
      { label: 'Custom Branding',   on: false },
      { label: 'API Access',        on: false },
      { label: 'Priority Support',  on: false },
    ],
  },
  {
    name: 'Pro', color: 'success', price: 12999, annual: 129990,
    institutes: 48, revenue: '₹6,23,952',
    limits: [
      { label: 'Max Students',  value: 'Unlimited'  },
      { label: 'Max Courses',   value: 'Unlimited'  },
      { label: 'Max Tutors',    value: 'Unlimited'  },
      { label: 'AI Tokens/mo',  value: '2,00,000'   },
      { label: 'Storage',       value: '200 GB'     },
    ],
    features: [
      { label: 'Live Classes',      on: true },
      { label: 'Practice Lab',      on: true },
      { label: 'Custom Branding',   on: true },
      { label: 'API Access',        on: true },
      { label: 'Priority Support',  on: true },
    ],
  },
];

// ── Component ─────────────────────────────────────────────────────────────────

export default function PlansPage() {
  const [annual, setAnnual] = useState(false);

  return (
    <SuperAdminLayout title="Plans & Pricing" breadcrumb="Home / Plans & Pricing">

      {/* ── Stat Cards ─────────────────────────────────────────────── */}
      <div className="row g-6 mb-6">
        {[
          { label: 'Total Plans',       value: '3',          change: 'Active',    pos: true,  sub: 'Starter · Growth · Pro', icon: 'tabler-diamond',        color: 'bg-label-primary' },
          { label: 'Subscribed Insts.', value: '248',        change: '+12%',      pos: true,  sub: 'Across all plans',       icon: 'tabler-building',       color: 'bg-label-success' },
          { label: 'MRR',               value: '₹12.3L',     change: '+7.2%',     pos: true,  sub: 'Monthly recurring rev',  icon: 'tabler-currency-rupee', color: 'bg-label-info'    },
          { label: 'ARR (projected)',    value: '₹1.47Cr',   change: 'FY 2025',   pos: true,  sub: 'Annual run rate',        icon: 'tabler-trending-up',    color: 'bg-label-warning' },
        ].map(s => (
          <div key={s.label} className="col-sm-6 col-xl-3">
            <div className="card">
              <div className="card-body">
                <div className="d-flex align-items-start justify-content-between">
                  <div className="content-left">
                    <span className="text-heading">{s.label}</span>
                    <div className="d-flex align-items-center my-1">
                      <h4 className="mb-0 me-2">{s.value}</h4>
                      <p className={`mb-0 ${s.pos ? 'text-success' : 'text-danger'}`}>({s.change})</p>
                    </div>
                    <small className="mb-0">{s.sub}</small>
                  </div>
                  <div className="avatar">
                    <span className={`avatar-initial rounded ${s.color}`}>
                      <i className={`icon-base ti ${s.icon} icon-26px`}></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ── Page header ────────────────────────────────────────────── */}
      <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-6">
        <div>
          <h5 className="mb-1">Subscription Plans</h5>
          <p className="text-body-secondary mb-0 small">Manage plans available to institutes on the LexEd platform.</p>
        </div>
        <div className="d-flex align-items-center gap-4">
          {/* Monthly / Annual toggle */}
          <div className="d-flex align-items-center gap-2">
            <span className={`small fw-semibold ${!annual ? 'text-heading' : 'text-body-secondary'}`}>Monthly</span>
            <div className="form-check form-switch mb-0">
              <input
                className="form-check-input"
                type="checkbox"
                checked={annual}
                onChange={e => setAnnual(e.target.checked)}
              />
            </div>
            <span className={`small fw-semibold ${annual ? 'text-heading' : 'text-body-secondary'}`}>
              Annual <span className="badge bg-label-success ms-1">Save 17%</span>
            </span>
          </div>
          <button
            className="btn btn-primary"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasCreatePlan"
          >
            <i className="ti tabler-plus me-1"></i>Create Plan
          </button>
        </div>
      </div>

      {/* ── Plan Cards ─────────────────────────────────────────────── */}
      <div className="row g-6">
        {plans.map(plan => {
          const displayPrice = annual
            ? `₹${Math.round(plan.annual / 12).toLocaleString()}`
            : `₹${plan.price.toLocaleString()}`;
          const billingNote = annual
            ? `₹${plan.annual.toLocaleString()} billed annually`
            : 'Billed monthly';

          return (
            <div key={plan.name} className="col-xl-4 col-md-6">
              <div className={`card h-100 position-relative${plan.popular ? ' border border-2 border-primary' : ''}`}
                style={plan.popular ? { boxShadow: '0 4px 24px rgba(115,103,240,0.15)' } : {}}>

                {plan.popular && (
                  <div className="position-absolute top-0 start-50 translate-middle">
                    <span className="badge bg-primary rounded-pill px-3 py-2 text-uppercase" style={{ fontSize: 10, letterSpacing: 1 }}>
                      Most Popular
                    </span>
                  </div>
                )}

                {/* Plan header */}
                <div className={`card-header text-center py-6 bg-label-${plan.color}`}>
                  <span className={`badge bg-label-${plan.color} text-${plan.color} text-uppercase fw-bold mb-3`} style={{ fontSize: 11, letterSpacing: 1 }}>
                    {plan.name}
                  </span>
                  <div className="d-flex align-items-start justify-content-center">
                    <sub className={`h4 text-${plan.color} mb-auto mt-2`}>₹</sub>
                    <h1 className={`mb-0 text-${plan.color} fw-bold`} style={{ fontSize: 48, lineHeight: 1 }}>
                      {displayPrice.replace('₹', '')}
                    </h1>
                    <sub className="h6 fw-normal mt-auto mb-2 text-body-secondary ms-1">/mo</sub>
                  </div>
                  <p className="text-body-secondary small mb-3 mt-1">{billingNote}</p>
                  <div className={`text-${plan.color} fw-semibold small`}>
                    <i className="icon-base ti tabler-building icon-sm me-1"></i>
                    {plan.institutes} active institutes
                  </div>
                </div>

                <div className="card-body">
                  {/* Limits */}
                  <p className="text-uppercase text-body-secondary small fw-bold mb-3 border-bottom pb-2" style={{ letterSpacing: 0.8 }}>
                    Platform Limits
                  </p>
                  <ul className="list-unstyled mb-5">
                    {plan.limits.map(l => (
                      <li key={l.label} className="d-flex justify-content-between align-items-center mb-2">
                        <span className="text-body-secondary small">{l.label}</span>
                        <span className="fw-semibold small">{l.value}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Features */}
                  <p className="text-uppercase text-body-secondary small fw-bold mb-3 border-bottom pb-2" style={{ letterSpacing: 0.8 }}>
                    Features
                  </p>
                  <ul className="list-unstyled mb-6">
                    {plan.features.map(f => (
                      <li key={f.label} className="d-flex justify-content-between align-items-center mb-2">
                        <span className="text-body-secondary small">{f.label}</span>
                        <i className={`icon-base ti ${f.on ? 'tabler-circle-check text-success' : 'tabler-circle-x text-danger'} icon-md`}></i>
                      </li>
                    ))}
                  </ul>

                  {/* Revenue */}
                  <div className={`bg-label-${plan.color} rounded p-3 mb-5`}>
                    <div className="d-flex justify-content-between align-items-center">
                      <span className="small text-body-secondary">Monthly Revenue</span>
                      <span className={`fw-bold text-${plan.color}`}>{plan.revenue}</span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="d-flex gap-2">
                    <button className={`btn btn-${plan.color} flex-grow-1`}>
                      <i className="ti tabler-pencil me-1"></i>Edit Plan
                    </button>
                    <div className="dropdown">
                      <button className="btn btn-label-secondary btn-icon dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                        <i className="ti tabler-dots-vertical"></i>
                      </button>
                      <div className="dropdown-menu dropdown-menu-end">
                        <a className="dropdown-item" href="#">Duplicate</a>
                        <a className="dropdown-item" href="#">View Subscribers</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item text-danger" href="#">Delete Plan</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* ── Offcanvas — Create Plan ─────────────────────────────────── */}
      <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasCreatePlan" style={{ width: 420 }}>
        <div className="offcanvas-header border-bottom">
          <h5 className="offcanvas-title">Create New Plan</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas"></button>
        </div>
        <div className="offcanvas-body p-6">
          <form onSubmit={e => e.preventDefault()}>
            <div className="mb-5">
              <label className="form-label fw-semibold">Plan Name</label>
              <input className="form-control" placeholder="e.g. Enterprise" />
            </div>
            <div className="row g-4 mb-5">
              <div className="col-6">
                <label className="form-label fw-semibold">Monthly Price (₹)</label>
                <input className="form-control" type="number" placeholder="0" />
              </div>
              <div className="col-6">
                <label className="form-label fw-semibold">Annual Price (₹)</label>
                <input className="form-control" type="number" placeholder="0" />
              </div>
            </div>
            <div className="row g-4 mb-5">
              <div className="col-6">
                <label className="form-label fw-semibold">Max Students</label>
                <input className="form-control" type="number" placeholder="Unlimited = 0" />
              </div>
              <div className="col-6">
                <label className="form-label fw-semibold">Max Courses</label>
                <input className="form-control" type="number" placeholder="Unlimited = 0" />
              </div>
              <div className="col-6">
                <label className="form-label fw-semibold">Max Tutors</label>
                <input className="form-control" type="number" placeholder="Unlimited = 0" />
              </div>
              <div className="col-6">
                <label className="form-label fw-semibold">Storage (GB)</label>
                <input className="form-control" type="number" placeholder="0" />
              </div>
            </div>
            <p className="fw-semibold mb-3 small text-uppercase text-body-secondary" style={{ letterSpacing: 0.8 }}>Features</p>
            {['Live Classes', 'Practice Lab', 'Custom Branding', 'API Access', 'Priority Support'].map(f => (
              <div key={f} className="form-check form-switch mb-3">
                <input className="form-check-input" type="checkbox" id={`feat-${f}`} />
                <label className="form-check-label" htmlFor={`feat-${f}`}>{f}</label>
              </div>
            ))}
            <div className="d-flex gap-3 mt-6">
              <button type="submit" className="btn btn-primary flex-grow-1">Create Plan</button>
              <button type="reset" className="btn btn-label-secondary" data-bs-dismiss="offcanvas">Cancel</button>
            </div>
          </form>
        </div>
      </div>

    </SuperAdminLayout>
  );
}
