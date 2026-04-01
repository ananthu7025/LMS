'use client';
import AdminLayout from '@/components/layouts/AdminLayout';

// In a real app this would be fetched from DB using params.id
const receipts: Record<string, {
  id: string; date: string; method: string; status: string;
  student: { name: string; email: string; phone: string; batch: string; city: string };
  course: { name: string; type: string; duration: string; validity: string; originalFee: number; discount: number; paid: number };
}> = {
  'TXN-8821': {
    id: 'TXN-8821', date: 'March 28, 2025', method: 'UPI', status: 'Paid',
    student: { name: 'Arjun Mehta',   email: 'arjun.mehta@gmail.com',   phone: '+91 98765 43210', batch: 'Batch A', city: 'New Delhi'  },
    course:  { name: 'Criminal Law Fundamentals', type: 'Full Course Access', duration: '24 hours', validity: '12 months', originalFee: 4999, discount: 500, paid: 4499 },
  },
  'TXN-7743': {
    id: 'TXN-7743', date: 'March 26, 2025', method: 'Card', status: 'Paid',
    student: { name: 'Sunita Kapoor', email: 'sunita.kapoor@gmail.com',  phone: '+91 99887 76655', batch: 'Batch A', city: 'Mumbai'     },
    course:  { name: 'Constitutional Law', type: 'Full Course Access', duration: '18 hours', validity: '12 months', originalFee: 2999, discount: 0, paid: 2999 },
  },
  'TXN-7612': {
    id: 'TXN-7612', date: 'March 25, 2025', method: 'Net Banking', status: 'Pending',
    student: { name: 'Vikram Joshi',  email: 'vikram.joshi@gmail.com',   phone: '+91 91234 56789', batch: 'Batch B', city: 'Pune'       },
    course:  { name: 'CLAT 2025 Preparation', type: 'Full Course Access', duration: '32 hours', validity: '12 months', originalFee: 3999, discount: 500, paid: 3499 },
  },
  'TXN-7401': {
    id: 'TXN-7401', date: 'March 22, 2025', method: 'UPI', status: 'Paid',
    student: { name: 'Deepa Nair',    email: 'deepa.nair@gmail.com',     phone: '+91 92345 67890', batch: 'Batch B', city: 'Bangalore'  },
    course:  { name: 'Criminal Law Fundamentals', type: 'Full Course Access', duration: '24 hours', validity: '12 months', originalFee: 4999, discount: 500, paid: 4499 },
  },
  'TXN-7290': {
    id: 'TXN-7290', date: 'March 20, 2025', method: 'Wallet', status: 'Failed',
    student: { name: 'Karan Singh',   email: 'karan.singh@gmail.com',    phone: '+91 95678 90123', batch: 'Batch B', city: 'Chandigarh' },
    course:  { name: 'Evidence Act Deep Dive', type: 'Full Course Access', duration: '14 hours', validity: '12 months', originalFee: 1999, discount: 0, paid: 1999 },
  },
  'TXN-7155': {
    id: 'TXN-7155', date: 'March 18, 2025', method: 'Card', status: 'Refunded',
    student: { name: 'Pooja Verma',   email: 'pooja.verma@gmail.com',    phone: '+91 96789 01234', batch: 'Batch A', city: 'Hyderabad'  },
    course:  { name: 'Constitutional Law', type: 'Full Course Access', duration: '18 hours', validity: '12 months', originalFee: 2999, discount: 0, paid: 2999 },
  },
  'TXN-7044': {
    id: 'TXN-7044', date: 'March 15, 2025', method: 'UPI', status: 'Paid',
    student: { name: 'Rahul Sharma',  email: 'rahul.sharma@gmail.com',   phone: '+91 93456 78901', batch: 'Batch A', city: 'Jaipur'     },
    course:  { name: 'CLAT 2025 Preparation', type: 'Full Course Access', duration: '32 hours', validity: '12 months', originalFee: 3999, discount: 500, paid: 3499 },
  },
  'TXN-6901': {
    id: 'TXN-6901', date: 'March 12, 2025', method: 'Wallet', status: 'Paid',
    student: { name: 'Meera Iyer',    email: 'meera.iyer@gmail.com',     phone: '+91 94567 89012', batch: 'Batch C', city: 'Chennai'    },
    course:  { name: 'Contract Law Basics', type: 'Full Course Access', duration: '10 hours', validity: '12 months', originalFee: 1999, discount: 0, paid: 1999 },
  },
};

const institute = {
  name:    'LexEd Institute of Legal Studies',
  address: 'Plot 14, Knowledge Park, Sector 62',
  city:    'Noida, Uttar Pradesh — 201309',
  phone:   '+91 120-456-7890',
  email:   'admin@lexed.in',
  gstin:   '09ABCDE1234F1Z5',
};

const statusStyle: Record<string, string> = {
  Paid: 'bg-label-success', Pending: 'bg-label-warning', Failed: 'bg-label-danger', Refunded: 'bg-label-secondary',
};

const stampColor: Record<string, { border: string; color: string; label: string }> = {
  Paid:     { border: '#28C76F', color: '#28C76F', label: 'PAID'     },
  Pending:  { border: '#FF9F43', color: '#FF9F43', label: 'PENDING'  },
  Failed:   { border: '#FF4C51', color: '#FF4C51', label: 'FAILED'   },
  Refunded: { border: '#808390', color: '#808390', label: 'REFUNDED' },
};

const fmt = (n: number) => '₹' + n.toLocaleString('en-IN');

export default function ReceiptPage({ params }: { params: { id: string } }) {
  const r = receipts[params.id] ?? receipts['TXN-8821'];
  const stamp = stampColor[r.status];

  return (
    <AdminLayout title="Receipt" breadcrumb={`Home / Revenue / ${r.id}`}>
      <div className="row invoice-preview">

        {/* ── Receipt Card ─────────────────────────────────────────── */}
        <div className="col-xl-9 col-md-8 col-12 mb-md-0 mb-6">
          <div className="card p-sm-12 p-6 position-relative">

            {/* Status stamp */}
            <div
              className="position-absolute d-none d-sm-flex align-items-center justify-content-center"
              style={{
                top: 36, right: 48,
                border: `3px solid ${stamp.color}`,
                color: stamp.color,
                fontWeight: 800,
                padding: '4px 18px',
                borderRadius: 6,
                fontSize: 18,
                transform: 'rotate(-10deg)',
                opacity: 0.7,
                letterSpacing: 3,
                pointerEvents: 'none',
              }}
            >
              {stamp.label}
            </div>

            {/* ── Header ─────────────────────────────────────────── */}
            <div
              className="card-body rounded mb-6"
              style={{ background: '#7367F010', padding: '1.5rem 1.75rem' }}
            >
              <div className="d-flex justify-content-between flex-xl-row flex-md-column flex-sm-row flex-column align-items-xl-center align-items-md-start align-items-sm-center align-items-start gap-4">

                {/* Brand */}
                <div className="mb-xl-0 mb-4">
                  <div className="d-flex align-items-center gap-2 mb-4">
                    <div
                      style={{
                        width: 40, height: 40, borderRadius: 10, flexShrink: 0,
                        background: 'linear-gradient(135deg, #7367F0 0%, #9E95F5 100%)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                      }}
                    >
                      <i className="ti tabler-gavel" style={{ fontSize: 20, color: '#fff' }}></i>
                    </div>
                    <span className="fw-bold text-heading" style={{ fontSize: 22 }}>LexEd</span>
                  </div>
                  <p className="mb-1 text-heading">{institute.address}</p>
                  <p className="mb-1 text-heading">{institute.city}</p>
                  <p className="mb-1 text-heading">{institute.phone}</p>
                  <p className="mb-0 text-heading">{institute.email}</p>
                </div>

                {/* Receipt meta */}
                <div>
                  <h5 className="mb-4 fw-bold text-primary">Receipt #{r.id}</h5>
                  <table>
                    <tbody>
                      <tr>
                        <td className="text-body-secondary pe-4 pb-1">Date Paid:</td>
                        <td className="fw-medium text-heading">{r.date}</td>
                      </tr>
                      <tr>
                        <td className="text-body-secondary pe-4 pb-1">Payment Method:</td>
                        <td className="fw-medium text-heading">{r.method}</td>
                      </tr>
                      <tr>
                        <td className="text-body-secondary pe-4 pb-1">Status:</td>
                        <td><span className={`badge ${statusStyle[r.status]}`}>{r.status}</span></td>
                      </tr>
                      <tr>
                        <td className="text-body-secondary pe-4">GSTIN:</td>
                        <td className="fw-medium text-heading">{institute.gstin}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* ── Receipt To / Payment Info ───────────────────────── */}
            <div className="card-body px-0 pb-6">
              <div className="row">
                <div className="col-xl-6 col-md-12 col-sm-5 col-12 mb-xl-0 mb-md-6 mb-sm-0 mb-6">
                  <h6 className="mb-3">Receipt To:</h6>
                  <p className="fw-semibold text-heading mb-1">{r.student.name}</p>
                  <p className="mb-1 text-body-secondary">{r.student.email}</p>
                  <p className="mb-1 text-body-secondary">{r.student.phone}</p>
                  <p className="mb-1 text-body-secondary">Batch: <span className="text-heading fw-medium">{r.student.batch}</span></p>
                  <p className="mb-0 text-body-secondary">{r.student.city}</p>
                </div>
                <div className="col-xl-6 col-md-12 col-sm-7 col-12">
                  <h6 className="mb-3">Enrollment Details:</h6>
                  <table>
                    <tbody>
                      <tr>
                        <td className="text-body-secondary pe-4 pb-2">Transaction ID:</td>
                        <td><code className="text-primary fw-semibold">{r.id}</code></td>
                      </tr>
                      <tr>
                        <td className="text-body-secondary pe-4 pb-2">Course Access:</td>
                        <td className="fw-medium text-heading">{r.course.validity}</td>
                      </tr>
                      <tr>
                        <td className="text-body-secondary pe-4 pb-2">Content Hours:</td>
                        <td className="fw-medium text-heading">{r.course.duration}</td>
                      </tr>
                      <tr>
                        <td className="text-body-secondary pe-4">Access Type:</td>
                        <td className="fw-medium text-heading">{r.course.type}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* ── Items Table ─────────────────────────────────────── */}
            <div className="table-responsive border rounded">
              <table className="table m-0">
                <thead>
                  <tr>
                    <th>Course</th>
                    <th>Type</th>
                    <th>Duration</th>
                    <th>List Price</th>
                    <th className="text-end">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div className="fw-semibold text-heading">{r.course.name}</div>
                      <small className="text-body-secondary">Online course enrollment</small>
                    </td>
                    <td className="text-nowrap">{r.course.type}</td>
                    <td className="text-nowrap">{r.course.duration} of content</td>
                    <td className="text-body-secondary">
                      {r.course.discount > 0
                        ? <s>{fmt(r.course.originalFee)}</s>
                        : fmt(r.course.originalFee)
                      }
                    </td>
                    <td className="text-end fw-semibold text-heading">{fmt(r.course.paid)}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* ── Summary ─────────────────────────────────────────── */}
            <div className="table-responsive">
              <table className="table m-0 table-borderless">
                <tbody>
                  <tr>
                    <td className="align-top ps-0 pe-6 py-6">
                      <p className="fw-semibold text-heading mb-2">Note:</p>
                      <p className="text-body-secondary mb-0" style={{ maxWidth: 340, fontSize: 13 }}>
                        Thank you for enrolling with LexEd! You now have full access to{' '}
                        <span className="fw-medium text-heading">{r.course.name}</span>.
                        This is a computer-generated receipt and does not require a physical signature.
                      </p>
                    </td>
                    <td className="px-0 py-6 text-body-secondary" style={{ width: 150 }}>
                      <p className="mb-2">Course Fee:</p>
                      {r.course.discount > 0 && <p className="mb-2">Discount:</p>}
                      <p className="mb-2 border-bottom pb-2">GST (18%, incl.):</p>
                      <p className="mb-0 fw-semibold text-heading">Total Paid:</p>
                    </td>
                    <td className="text-end px-0 py-6" style={{ width: 120 }}>
                      <p className="fw-medium text-heading mb-2">{fmt(r.course.originalFee)}</p>
                      {r.course.discount > 0 && (
                        <p className="fw-medium text-success mb-2">-{fmt(r.course.discount)}</p>
                      )}
                      <p className="fw-medium text-body-secondary mb-2 border-bottom pb-2">Inclusive</p>
                      <p className="fw-bold text-heading mb-0">{fmt(r.course.paid)}</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <hr className="mt-0 mb-5" />

            {/* Footer note */}
            <div className="card-body p-0">
              <p className="text-body-secondary mb-0" style={{ fontSize: 12 }}>
                <span className="fw-semibold text-heading">{institute.name}</span>
                {' · '}GSTIN: {institute.gstin}
                {' · '}For support contact: <a href={`mailto:${institute.email}`} className="text-primary">{institute.email}</a>
              </p>
            </div>

          </div>
        </div>

        {/* ── Action Sidebar ───────────────────────────────────────── */}
        <div className="col-xl-3 col-md-4 col-12">
          <div className="card">
            <div className="card-body d-flex flex-column gap-3">

              <button className="btn btn-primary d-flex align-items-center justify-content-center gap-2 w-100">
                <i className="icon-base ti tabler-download icon-xs"></i>Download Receipt
              </button>

              <button className="btn btn-label-secondary d-flex align-items-center justify-content-center gap-2 w-100">
                <i className="icon-base ti tabler-printer icon-xs"></i>Print
              </button>

              <button className="btn btn-label-secondary d-flex align-items-center justify-content-center gap-2 w-100">
                <i className="icon-base ti tabler-send icon-xs"></i>Send to Student
              </button>

              <hr className="my-1" />

              <a href="/admin/revenue" className="btn btn-label-secondary d-flex align-items-center justify-content-center gap-2 w-100">
                <i className="icon-base ti tabler-arrow-left icon-xs"></i>Back to Revenue
              </a>

            </div>
          </div>

          {/* Quick info card */}
          <div className="card mt-4">
            <div className="card-body">
              <h6 className="fw-semibold mb-3">Student</h6>
              <div className="d-flex align-items-center gap-3 mb-3">
                <div className="avatar">
                  <span className="avatar-initial rounded-circle bg-label-primary">
                    {r.student.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <div className="fw-semibold text-heading" style={{ fontSize: 13 }}>{r.student.name}</div>
                  <small className="text-body-secondary">{r.student.email}</small>
                </div>
              </div>
              <a href="/admin/students/1" className="btn btn-sm btn-label-primary w-100">
                <i className="ti tabler-user me-1"></i>View Profile
              </a>
            </div>
          </div>

          {/* Course card */}
          <div className="card mt-4">
            <div className="card-body">
              <h6 className="fw-semibold mb-3">Course</h6>
              <div className="d-flex align-items-center gap-3 mb-3">
                <div className="avatar">
                  <span className="avatar-initial rounded bg-label-primary">
                    <i className="icon-base ti tabler-book icon-lg"></i>
                  </span>
                </div>
                <div>
                  <div className="fw-semibold text-heading" style={{ fontSize: 13 }}>{r.course.name}</div>
                  <small className="text-body-secondary">{r.course.duration}</small>
                </div>
              </div>
              <a href="/admin/courses/1" className="btn btn-sm btn-label-secondary w-100">
                <i className="ti tabler-external-link me-1"></i>View Course
              </a>
            </div>
          </div>

        </div>
      </div>
    </AdminLayout>
  );
}
