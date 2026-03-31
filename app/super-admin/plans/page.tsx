'use client';
import SuperAdminLayout from '@/components/layouts/SuperAdminLayout';

const plans = [
  {
    name: 'Starter', price: '₹1,999', annual: '₹19,990', color: 'info', bg: 'bg-label-info',
    limits: [['Max Students', '200'], ['Max Courses', '10'], ['Max Tutors', '3'], ['AI Tokens/mo', '10,000'], ['Storage', '10 GB']],
    features: [['Live Classes', false], ['Practice Lab', false], ['Custom Branding', false], ['API Access', false]],
    institutes: 98,
  },
  {
    name: 'Growth', price: '₹4,999', annual: '₹49,990', color: 'primary', bg: 'bg-label-primary',
    limits: [['Max Students', '1,000'], ['Max Courses', '50'], ['Max Tutors', '15'], ['AI Tokens/mo', '50,000'], ['Storage', '50 GB']],
    features: [['Live Classes', true], ['Practice Lab', true], ['Custom Branding', false], ['API Access', false]],
    institutes: 102, popular: true,
  },
  {
    name: 'Pro', price: '₹12,999', annual: '₹1,29,990', color: 'success', bg: 'bg-label-success',
    limits: [['Max Students', 'Unlimited'], ['Max Courses', 'Unlimited'], ['Max Tutors', 'Unlimited'], ['AI Tokens/mo', '2,00,000'], ['Storage', '200 GB']],
    features: [['Live Classes', true], ['Practice Lab', true], ['Custom Branding', true], ['API Access', true]],
    institutes: 48,
  },
];

export default function PlansPage() {
  return (
    <SuperAdminLayout active="/super-admin/plans" title="Plans & Pricing" breadcrumb="Home / Plans & Pricing">
      <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-4">
        <div>
          <h5 className="mb-1">Manage Subscription Plans</h5>
          <p className="text-body-secondary mb-0">Manage plans available to institutes on the LexEd platform.</p>
        </div>
        <button className="btn btn-primary">
          <i className="ti tabler-plus me-1"></i>Create New Plan
        </button>
      </div>

      <div className="row g-4">
        {plans.map(plan => (
          <div key={plan.name} className="col-xl-4 col-md-6">
            <div className={`card h-100 ${plan.popular ? 'border border-primary' : ''}`}>
              {plan.popular && (
                <div className="position-absolute top-0 end-0 m-3">
                  <span className="badge bg-primary text-uppercase">Most Popular</span>
                </div>
              )}
              <div className={`card-header text-center py-5 ${plan.bg}`}>
                <div className={`text-${plan.color} fw-bold text-uppercase mb-2`}>{plan.name}</div>
                <div className="d-flex align-items-center justify-content-center mb-1">
                  <h1 className="h1 fw-bold mb-0">{plan.price}</h1>
                  <span className="text-body-secondary ms-1 mt-auto pb-2">/month</span>
                </div>
                <div className="text-body-secondary small">{plan.annual}/year (save 17%)</div>
                <div className={`mt-3 fw-semibold text-${plan.color}`}>
                  <i className="ti tabler-building me-1"></i>{plan.institutes} active institutes
                </div>
              </div>
              <div className="card-body pt-4">
                <div className="text-uppercase text-body-secondary small fw-bold mb-3 border-bottom pb-1">Platform Limits</div>
                <ul className="list-unstyled mb-4">
                  {plan.limits.map(([k, v]) => (
                    <li key={k} className="d-flex justify-content-between mb-2">
                      <span className="text-body-secondary">{k}</span>
                      <span className="fw-bold">{v}</span>
                    </li>
                  ))}
                </ul>

                <div className="text-uppercase text-body-secondary small fw-bold mb-3 border-bottom pb-1">Features</div>
                <ul className="list-unstyled mb-4">
                  {plan.features.map(([k, v]) => (
                    <li key={k as string} className="d-flex justify-content-between mb-2">
                      <span className="text-body-secondary">{k as string}</span>
                      <i className={`ti ${v ? 'tabler-circle-check text-success' : 'tabler-circle-x text-danger'} fs-4`}></i>
                    </li>
                  ))}
                </ul>

                <div className="d-flex gap-2 mt-4">
                  <button className={`btn btn-${plan.color} flex-grow-1`}>Edit Plan</button>
                  <button className="btn btn-label-danger btn-icon">
                    <i className="ti tabler-trash"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SuperAdminLayout>
  );
}
