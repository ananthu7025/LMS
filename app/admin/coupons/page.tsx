'use client';
import { useState } from 'react';
import AdminLayout from '@/components/layouts/AdminLayout';

const coupons = [
  { code: 'WELCOME30', value: '30%', expiry: 'Apr 30', used: '42 / 100',       status: 'Active' },
  { code: 'SAVE500',   value: '₹500',expiry: 'Mar 31', used: '18 / 50',        status: 'Active' },
  { code: 'STUDENT20', value: '20%', expiry: 'Jun 30', used: '234 / Unlimited', status: 'Active' },
  { code: 'CLAT2025',  value: '15%', expiry: 'Dec 31', used: '89 / 200',       status: 'Active' },
  { code: 'LAUNCH50',  value: '50%', expiry: 'Jan 31', used: '500 / 500',      status: 'Expired' },
];

export default function CouponsPage() {
  const [showForm, setShowForm] = useState(true);
  const [discountType, setDiscountType] = useState<'%'|'₹'>('%');

  return (
    <AdminLayout title="Coupons & Discounts" breadcrumb="Home / Coupons">
      <div className="row g-4">

        {/* Table */}
        <div className="col-xl-8">
          <div className="card h-100">
            <div className="card-header d-flex justify-content-between align-items-center">
              <h6 className="fw-bold mb-0">Active Coupons</h6>
              <button className="btn btn-primary btn-sm" onClick={() => setShowForm(true)}>
                <i className="ti tabler-plus me-1"></i>Create Coupon
              </button>
            </div>
            <div className="table-responsive">
              <table className="table table-hover">
                <thead><tr><th>Code</th><th>Discount</th><th>Expiry</th><th>Usage</th><th>Status</th><th>Actions</th></tr></thead>
                <tbody>
                  {coupons.map(c => (
                    <tr key={c.code}>
                      <td><code className="bg-light px-2 py-1 rounded fw-bold">{c.code}</code></td>
                      <td className="fw-bold text-success">{c.value} off</td>
                      <td className="text-body-secondary">{c.expiry}</td>
                      <td>{c.used}</td>
                      <td><span className={`badge ${c.status === 'Active' ? 'bg-label-success' : 'bg-label-secondary'}`}>{c.status}</span></td>
                      <td>
                        <div className="d-flex gap-2">
                          <button className="btn btn-sm btn-outline-secondary">Edit</button>
                          {c.status === 'Active' && <button className="btn btn-sm btn-outline-warning">Disable</button>}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Create Coupon form */}
        {showForm && (
          <div className="col-xl-4">
            <div className="card">
              <div className="card-body">
                <h6 className="fw-bold mb-4">
                  <i className="ti tabler-tag me-2 text-primary"></i>Create New Coupon
                </h6>
                <div className="mb-3">
                  <label className="form-label">Coupon Code</label>
                  <div className="input-group">
                    <input className="form-control" defaultValue="SUMMER25" />
                    <button className="btn btn-outline-secondary">Auto</button>
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-label">Discount Type</label>
                  <div className="d-flex gap-2">
                    {(['%','₹'] as const).map(t => (
                      <button key={t} onClick={() => setDiscountType(t)} className={`btn flex-grow-1 ${discountType === t ? 'btn-primary' : 'btn-outline-secondary'}`}>
                        {t === '%' ? '% Percentage' : '₹ Fixed Amount'}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="row g-2 mb-3">
                  <div className="col-6">
                    <label className="form-label">Value</label>
                    <input className="form-control" type="number" defaultValue={25} />
                  </div>
                  <div className="col-6">
                    <label className="form-label">Min Cart (₹)</label>
                    <input className="form-control" type="number" defaultValue={0} />
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-label">Applicable Courses</label>
                  {['All Courses','Criminal Law Fundamentals','CLAT 2025 Preparation'].map((c, i) => (
                    <div key={c} className="form-check">
                      <input className="form-check-input" type="checkbox" defaultChecked={i === 0} id={`c${i}`} />
                      <label className="form-check-label small" htmlFor={`c${i}`}>{c}</label>
                    </div>
                  ))}
                </div>
                <div className="row g-2 mb-4">
                  <div className="col-6">
                    <label className="form-label">Expiry Date</label>
                    <input className="form-control" type="date" defaultValue="2025-06-30" />
                  </div>
                  <div className="col-6">
                    <label className="form-label">Usage Limit</label>
                    <input className="form-control" type="number" placeholder="Unlimited" />
                  </div>
                </div>
                <button className="btn btn-primary w-100">
                  <i className="ti tabler-tag me-1"></i>Save Coupon
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </AdminLayout>
  );
}
