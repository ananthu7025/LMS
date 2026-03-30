'use client';
import { useState } from 'react';
import AdminLayout from '@/components/layouts/AdminLayout';

const coupons = [
  { code: 'WELCOME30', type: '%', value: '30%', expiry: 'Apr 30', used: '42 / 100', status: 'Active' },
  { code: 'SAVE500', type: '₹', value: '₹500', expiry: 'Mar 31', used: '18 / 50', status: 'Active' },
  { code: 'STUDENT20', type: '%', value: '20%', expiry: 'Jun 30', used: '234 / Unlimited', status: 'Active' },
  { code: 'CLAT2025', type: '%', value: '15%', expiry: 'Dec 31', used: '89 / 200', status: 'Active' },
  { code: 'LAUNCH50', type: '%', value: '50%', expiry: 'Jan 31', used: '500 / 500', status: 'Expired' },
];

export default function CouponsPage() {
  const [showForm, setShowForm] = useState(true);
  const [discountType, setDiscountType] = useState<'%' | '₹'>('%');
  return (
    <AdminLayout active="/admin/coupons" title="Coupons & Discounts" breadcrumb="Home / Coupons">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 360px', gap: 20 }}>
        {/* Table */}
        <div className="card" style={{ overflow: 'hidden' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '16px 20px', borderBottom: '1px solid var(--border)' }}>
            <div style={{ fontWeight: 700, fontSize: 15 }}>Active Coupons</div>
            <button className="btn-primary" style={{ fontSize: 13 }} onClick={() => setShowForm(true)}>＋ Create Coupon</button>
          </div>
          <table>
            <thead><tr><th>Code</th><th>Discount</th><th>Expiry</th><th>Usage</th><th>Status</th><th>Actions</th></tr></thead>
            <tbody>
              {coupons.map(c => (
                <tr key={c.code}>
                  <td><code style={{ background: '#f3f3f5', padding: '3px 8px', borderRadius: 6, fontSize: 13, fontWeight: 700 }}>{c.code}</code></td>
                  <td style={{ fontWeight: 700, color: 'var(--success)' }}>{c.value} {c.type === '%' ? 'off' : 'off'}</td>
                  <td style={{ color: 'var(--text-muted)', fontSize: 13 }}>{c.expiry}</td>
                  <td style={{ fontSize: 13 }}>{c.used}</td>
                  <td><span className={`badge ${c.status === 'Active' ? 'badge-success' : 'badge-secondary'}`}>{c.status}</span></td>
                  <td>
                    <div style={{ display: 'flex', gap: 6 }}>
                      <button className="btn-outline" style={{ fontSize: 12, padding: '4px 10px' }}>Edit</button>
                      {c.status === 'Active' && <button style={{ background: '#fff5e6', border: 'none', color: 'var(--warning)', borderRadius: 6, padding: '4px 8px', fontSize: 12, cursor: 'pointer', fontWeight: 600 }}>Disable</button>}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Create Coupon form */}
        {showForm && (
          <div className="card" style={{ padding: 20, height: 'fit-content' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 16 }}>
              <div style={{ fontWeight: 700, fontSize: 14 }}>🎟️ Create New Coupon</div>
            </div>
            <div style={{ marginBottom: 14 }}>
              <label className="form-label">Coupon Code</label>
              <div style={{ display: 'flex', gap: 8 }}>
                <input className="form-input" defaultValue="SUMMER25" style={{ flex: 1 }} />
                <button style={{ background: '#f3f3f5', border: '1px solid var(--border)', borderRadius: 8, padding: '0 12px', cursor: 'pointer', fontSize: 12, fontWeight: 600, color: 'var(--text-muted)', whiteSpace: 'nowrap' }}>Auto ⚡</button>
              </div>
            </div>
            <div style={{ marginBottom: 14 }}>
              <label className="form-label">Discount Type</label>
              <div style={{ display: 'flex', gap: 8 }}>
                {(['%', '₹'] as const).map(t => (
                  <button key={t} onClick={() => setDiscountType(t)} style={{ flex: 1, padding: '8px', borderRadius: 8, border: `2px solid ${discountType === t ? 'var(--primary)' : 'var(--border)'}`, background: discountType === t ? 'var(--primary-light)' : '#fff', color: discountType === t ? 'var(--primary)' : 'var(--text-muted)', fontWeight: 700, cursor: 'pointer' }}>
                    {t === '%' ? '% Percentage' : '₹ Fixed Amount'}
                  </button>
                ))}
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 14 }}>
              <div><label className="form-label">Value</label><input className="form-input" type="number" defaultValue={25} /></div>
              <div><label className="form-label">Min Cart Value (₹)</label><input className="form-input" type="number" defaultValue={0} /></div>
            </div>
            <div style={{ marginBottom: 14 }}>
              <label className="form-label">Applicable Courses</label>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8, padding: '8px 0' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13 }}><input type="checkbox" defaultChecked style={{ accentColor: 'var(--primary)' }} /> All Courses</label>
                <label style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13 }}><input type="checkbox" style={{ accentColor: 'var(--primary)' }} /> Criminal Law Fundamentals</label>
                <label style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13 }}><input type="checkbox" style={{ accentColor: 'var(--primary)' }} /> CLAT 2025 Preparation</label>
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 14 }}>
              <div><label className="form-label">Expiry Date</label><input className="form-input" type="date" defaultValue="2025-06-30" /></div>
              <div><label className="form-label">Usage Limit</label><input className="form-input" type="number" placeholder="Unlimited" /></div>
            </div>
            <button className="btn-primary" style={{ width: '100%' }}>🎟️ Save Coupon</button>
          </div>
        )}
      </div>
    </AdminLayout>
  );
}
