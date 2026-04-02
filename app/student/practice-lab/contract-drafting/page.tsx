'use client'
import { useState, useMemo } from 'react'
import StudentLayout from '@/components/layouts/StudentLayout'
import Link from 'next/link'

// ── Types & Templates ────────────────────────────────────────────────────────

type ContractType = 'nda' | 'service' | 'lease' | 'employment';

interface Template {
  title: string;
  id: string;
  image: string;
  icon: string;
  color: string;
  description: string;
  initialDraft: string;
  clauses: string[];
  legalReference: string[];
  tips: { title: string; text: string }[];
  facts: string;
}

const contractTemplates: Record<ContractType, Template> = {
  nda: {
    title: 'Non-Disclosure Agreement (NDA)',
    id: 'CORP-NDA-2025',
    image: '/img/illustrations/nda.png',
    icon: 'tabler-shield-lock',
    color: 'primary',
    description: 'Ensure confidentiality of proprietary information and trade secrets between parties.',
    initialDraft: `NON-DISCLOSURE AGREEMENT\n\nThis NON-DISCLOSURE AGREEMENT (the "Agreement") is entered into this [Date], by and between:\n\n[Party A Name], a company incorporated under the laws of [Jurisdiction] ("Disclosing Party");\n\nAND\n\n[Party B Name], an individual/entity residing at/incorporated in [Address] ("Receiving Party").\n\n1. PURPOSE OF DISCLOSURE\nThe Disclosing Party wishes to disclose certain Confidential Information for the purpose of [Description of Project/Collaboration].`,
    clauses: ['Definition of Confidential Information', 'Obligations of the Receiving Party', 'Exclusions from Confidential Information', 'Term and Termination', 'Governing Law'],
    legalReference: ['Indian Contract Act, 1872', 'Specific Relief Act, 1963', 'IT Act, 2000 (Data Protection)'],
    tips: [
      { title: 'Clarity is Key', text: 'Ensure the definition of "Confidential Information" is broad but specific enough to be enforceable.' },
      { title: 'Survival Clause', text: 'Specify that confidentiality obligations continue even after the agreement expires.' }
    ],
    facts: 'A tech startup is sharing its source code and business projections with a potential investor for a funding round.'
  },
  service: {
    title: 'Master Service Agreement',
    id: 'CORP-MSA-V3',
    image: '/img/illustrations/service_agreement.png',
    icon: 'tabler-file-settings',
    color: 'info',
    description: 'A framework for project-based services, outlining deliverables, payment, and intellectual property.',
    initialDraft: `MASTER SERVICE AGREEMENT\n\nThis Master Service Agreement ("Agreement") is made effective as of [Date], by and between:\n\n[Service Provider Name] ("Provider")\nAND\n[Client Name] ("Client").\n\n1. SERVICES\nProvider shall perform the services described in the Statement of Work (SOW) attached hereto as Exhibit A.\n\n2. FEES AND PAYMENT\nClient shall pay Provider the fees set forth in the SOW within 30 days of receipt of invoice.`,
    clauses: ['Scope of Work & Deliverables', 'Intellectual Property Ownership', 'Payment Terms & Late Fees', 'Limitation of Liability', 'Indemnification'],
    legalReference: ['Section 2 of Contract Act', 'Sales of Goods Act, 1930', 'Copyright Act, 1957'],
    tips: [
      { title: 'IP Assignment', text: 'Clearly state that IP rights transfer to the client only upon full payment.' },
      { title: 'Scope Creep', text: 'Include a robust "Change Order" process to handle extra requests.' }
    ],
    facts: 'A digital agency is being hired by a retail brand to develop a custom E-commerce platform over a 6-month period.'
  },
  lease: {
    title: 'Residential Lease Deed',
    id: 'PROP-LD-2025',
    image: '/img/illustrations/lease_deed.png',
    icon: 'tabler-home-share',
    color: 'success',
    description: 'Formalize the rental of residential property, covering security deposits and maintenance.',
    initialDraft: `LEASE DEED\n\nThis DEED OF LEASE is made at [City] on this [Date], by and between:\n\n[Landlord Name], s/o [Father's Name], residing at [Address] (the "Lessor");\n\nAND\n\n[Tenant Name], s/o [Father's Name], residing at [Address] (the "Lessee").\n\n1. PROPERTY\nThe Lessor hereby leases to the Lessee the residential premises situated at [Full Address of Flat/House].\n\n2. RENT AND DEPOSIT\nThe monthly rent shall be Rs. [Amount] payable in advance by the 5th of each month.`,
    clauses: ['Lock-in Period', 'Security Deposit Refund', 'Permitted Use & Maintenance', 'Sub-letting Prohibition', 'Termination Notice'],
    legalReference: ['Transfer of Property Act, 1882', 'State Rent Control Acts', 'Model Tenancy Act, 2021'],
    tips: [
      { title: 'Maintenance Breakdown', text: 'Clearly distinguish between minor repairs (Tenant) and structural issues (Landlord).' }
    ],
    facts: 'An individual is renting out their furnished 2BHK apartment in South Delhi to a corporate professional for a period of 11 months.'
  },
  employment: {
    title: 'Employment Contract',
    id: 'HR-EMP-CORE',
    image: '/img/illustrations/employment_contract.png',
    icon: 'tabler-user-plus',
    color: 'warning',
    description: 'Define the relationship between employer and employee, including role, compensation, and conduct.',
    initialDraft: `EMPLOYMENT AGREEMENT\n\nDate: [Current Date]\n\nDear [Employee Name],\n\nWe are pleased to offer you the position of [Job Title] at [Company Name] (the "Company") on the following terms:\n\n1. COMMENCEMENT DATE\nYour employment will commence on [Joining Date].\n\n2. REMUNERATION\nYour total Annual CTC will be Rs. [Amount], inclusive of fixed and variable components as per Annexure A.`,
    clauses: ['Job Responsibilities & Probation', 'Non-Compete & Non-Solicitation', 'Notice Period & Garden Leave', 'Code of Conduct & Ethics', 'Dispute Resolution'],
    legalReference: ['Shops & Establishments Act', 'Industrial Disputes Act, 1947', 'Labor Codes (Pending)'],
    tips: [
      { title: 'Non-Compete Limits', text: 'In India, post-employment non-competes are often unenforceable. Focus on non-solicitation instead.' }
    ],
    facts: 'A mid-sized logistics firm is hiring a Senior Operations Manager with access to sensitive client data and supply chain strategy.'
  }
}

// ── Main Component ──────────────────────────────────────────────────────────

export default function ContractDraftingPage() {
  const [step, setStep] = useState<'selection' | 'drafting'>('selection');
  const [docType, setDocType] = useState<ContractType | null>(null);

  const [briefOpen, setBriefOpen] = useState(true);
  const [checkedClauses, setCheckedClauses] = useState<boolean[]>([]);

  // Memoized Template Data
  const template = useMemo(() => {
    return docType ? contractTemplates[docType] : null;
  }, [docType]);

  // Handle Selection
  const startDrafting = (type: ContractType) => {
    setDocType(type);
    setCheckedClauses(new Array(contractTemplates[type].clauses.length).fill(false));
    setStep('drafting');
  };

  return (
    <div className="min-vh-100 d-flex flex-column" style={{
      backgroundColor: '#f1f1f2',
      fontFamily: 'var(--bs-font-sans-serif)',
      overflow: 'hidden'
    }}>
      <style dangerouslySetInnerHTML={{
        __html: `
        .paper-studio {
          background-color: #fff;
          box-shadow: 0 10px 40px rgba(0,0,0,0.06), 0 0 1px rgba(0,0,0,0.1);
          width: 100%;
          max-width: 850px;
          margin: 40px auto;
          min-height: 1056px;
          position: relative;
          padding: 80px 100px;
          border-radius: 4px;
        }
        .editor-textarea {
          width: 100%; border: none; outline: none; resize: none;
          font-family: 'Times New Roman', serif; font-size: 1.1rem;
          line-height: 2; color: #2c3e50; background: transparent; overflow: hidden;
        }
        .studio-glass { backdrop-filter: blur(10px); background: rgba(255, 255, 255, 0.85); }
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(0,0,0,0.1); border-radius: 10px; }
        .brief-item { transition: all 0.2s ease; border: 1px solid transparent; }
        .brief-item:hover { background: rgba(var(--bs-primary-rgb), 0.05); border-color: rgba(var(--bs-primary-rgb), 0.1); }
        
        .doc-card { transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1); cursor: pointer; border: none; overflow: hidden; }
        .doc-card:hover { transform: translateY(-10px); box-shadow: 0 20px 40px rgba(0,0,0,0.12) !important; }
        .doc-card .card-img-top { height: 160px; object-fit: contain; padding: 20px; transition: transform 0.4s ease; }
        .doc-card:hover .card-img-top { transform: scale(1.1); }
        .illustration-bg { height: 160px; display: flex; align-items: center; justify-content: center; position: relative; }
        .illustration-bg::after { content: ''; position: absolute; bottom: 0; left: 0; right: 0; height: 40%; background: linear-gradient(to top, #fff, transparent); }
      `}} />

      {/* ── SELECTION STEP ── */}
      {step === 'selection' && (
        <div className="flex-grow-1 d-flex flex-column align-items-center justify-content-center p-4 overflow-auto custom-scrollbar">
          <div className="text-center mb-5" style={{ maxWidth: 700 }}>
            <span className="badge bg-label-warning mb-3 px-3 py-2 rounded-pill text-uppercase fw-bold" style={{ letterSpacing: 1.5 }}>Corporate Skills Lab</span>
            <p className="text-body-secondary fs-5 mb-0">Master the art of commercial drafting. Select a contract type to begin crafting enforceable legal instruments based on real-world business scenarios.</p>
          </div>

          <div className="row g-4 w-100" style={{ maxWidth: 1100 }}>
            {(Object.keys(contractTemplates) as ContractType[]).map((key) => {
              const t = contractTemplates[key];
              return (
                <div key={key} className="col-md-6 col-lg-3">
                  <div className="card h-100 doc-card shadow-sm" onClick={() => startDrafting(key)}>
                    <div className={`illustration-bg bg-label-${t.color} bg-opacity-10`}>
                      <img src={t.image} alt={t.title} className="card-img-top" />
                    </div>
                    <div className="card-body p-4 text-center d-flex flex-column">
                      <h5 className="fw-bold mb-2 text-heading" style={{ fontSize: '1rem' }}>{t.title}</h5>
                      <p className="extra-small text-body-secondary mb-4 flex-grow-1 lh-base">{t.description}</p>
                      <button className={`btn btn-label-${t.color} w-100 rounded-pill fw-bold border-0`}>
                        Draft Contract
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-5 pt-4 text-center">
            <Link href="/student/practice-lab" className="text-body-secondary text-decoration-none d-flex align-items-center justify-content-center gap-2 fw-medium">
              <i className="ti tabler-arrow-left"></i> Back to All Labs
            </Link>
          </div>
        </div>
      )}

      {/* ── DRAFTING STEP ── */}
      {step === 'drafting' && template && (
        <>
          <nav className="sticky-top studio-glass border-bottom shadow-xs d-flex align-items-center justify-content-between px-4" style={{ height: 64, zIndex: 100 }}>
            <div className="d-flex align-items-center gap-4">
              <button
                onClick={() => setStep('selection')}
                className="btn btn-icon btn-text-secondary rounded-pill"
                title="Change Contract Type"
              >
                <i className="ti tabler-chevron-left fs-4"></i>
              </button>
              <div className="d-flex flex-column">
                <div className="d-flex align-items-center gap-2">
                  <span className={`badge bg-label-${template.color} px-2 py-1`}>
                    <i className={`ti ${template.icon} me-1`}></i> {template.title}
                  </span>
                  <h6 className="mb-0 fw-bold d-none d-sm-block">Drafting Workspace</h6>
                </div>
                <small className="text-body-secondary d-flex align-items-center gap-1 extra-small">
                  Drafting <i className="ti tabler-chevron-right icon-xs"></i> {template.id}
                </small>
              </div>
            </div>

            <div className="d-flex align-items-center gap-3">
              <div className="d-none d-md-flex align-items-center gap-3 pe-3 border-end">
                <div className="text-end">
                  <p className="mb-0 small fw-semibold">Auto-saved</p>
                  <p className="mb-0 extra-small text-body-secondary">Seconds ago</p>
                </div>
              </div>
              <div className="d-flex gap-2">
                <button className="btn btn-label-secondary btn-sm px-3">
                  <i className="ti tabler-eye me-1"></i> Preview
                </button>
                <button className="btn btn-primary btn-sm px-4 shadow-sm">
                  <i className="ti tabler-check me-1"></i> Finalize
                </button>
              </div>
            </div>
          </nav>

          <div className="d-flex flex-grow-1 overflow-hidden position-relative">
            {/* ── Left Sidebar: Contract Brief ── */}
            <aside className="studio-glass border-end d-flex flex-column flex-shrink-0 transition-all custom-scrollbar overflow-auto" style={{ width: briefOpen ? 320 : 0, opacity: briefOpen ? 1 : 0 }}>
              <div className="p-4">
                <div className="d-flex align-items-center justify-content-between mb-4">
                  <h6 className="mb-0 fw-bold text-uppercase small" style={{ letterSpacing: 0.5 }}>
                    <i className="ti tabler-notes text-warning me-2"></i> Drafting Brief
                  </h6>
                  <span className="badge bg-label-info extra-small">Commercial</span>
                </div>

                <div className="card shadow-none border-0 bg-label-secondary mb-4">
                  <div className="card-body p-3">
                    <p className="extra-small fw-bold text-uppercase mb-2">Scenario Facts</p>
                    <p className="small text-heading lh-base mb-0">{template.facts}</p>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="extra-small fw-bold text-uppercase mb-3 opacity-75">Essential Clauses</p>
                  {template.clauses.map((clause, i) => (
                    <div key={i} className={`brief-item rounded p-2 mb-1 d-flex gap-2 align-items-start cursor-pointer ${checkedClauses[i] ? 'opacity-50' : ''}`}
                      onClick={() => { const n = [...checkedClauses]; n[i] = !n[i]; setCheckedClauses(n) }}>
                      <div className={`mt-1 flex-shrink-0 d-flex align-items-center justify-content-center rounded-circle border ${checkedClauses[i] ? 'bg-warning border-warning' : 'border-secondary'}`} style={{ width: 14, height: 14 }}>
                        {checkedClauses[i] && <i className="ti tabler-check text-white" style={{ fontSize: 10 }}></i>}
                      </div>
                      <span className={`extra-small lh-base ${checkedClauses[i] ? 'text-decoration-line-through' : 'text-heading'}`}>{clause}</span>
                    </div>
                  ))}
                </div>

                <div className="p-3 bg-white rounded border shadow-xs mb-4">
                  <p className="extra-small fw-bold text-uppercase mb-2 opacity-75">Legal Framework</p>
                  <div className="d-flex flex-wrap gap-1 mb-0">
                    {template.legalReference.map(s => <span key={s} className="badge bg-label-secondary extra-small">{s}</span>)}
                  </div>
                </div>

                {template.tips.map((tip, i) => (
                  <div key={i} className="alert alert-label-warning p-3 mb-3 border-0">
                    <p className="extra-small fw-bold mb-1"><i className="ti tabler-bulb me-1"></i> {tip.title}</p>
                    <p className="extra-small mb-0 opacity-75">{tip.text}</p>
                  </div>
                ))}
              </div>
            </aside>

            <div className="d-flex align-items-center justify-content-center bg-white border-end cursor-pointer shadow-sm" style={{ width: 24, zIndex: 10 }} onClick={() => setBriefOpen(!briefOpen)}>
              <i className={`ti ${briefOpen ? 'tabler-chevron-left' : 'tabler-chevron-right'} fs-6 text-body-secondary`}></i>
            </div>

            <main className="flex-grow-1 overflow-auto custom-scrollbar d-flex flex-column align-items-center pb-5 position-relative" style={{ background: '#f8f9fa' }}>
              <div className="sticky-top mt-4 mb-2 z-3">
                <div className="card shadow-sm border rounded-pill px-3 py-1 d-flex flex-row gap-1 align-items-center studio-glass border-opacity-50">
                  <button className="btn btn-icon btn-sm btn-text-secondary rounded-circle"><i className="ti tabler-bold"></i></button>
                  <button className="btn btn-icon btn-sm btn-text-secondary rounded-circle"><i className="ti tabler-italic"></i></button>
                  <button className="btn btn-icon btn-sm btn-text-secondary rounded-circle"><i className="ti tabler-list-numbers"></i></button>
                  <div className="vr mx-1 opacity-25"></div>
                  <button className="btn btn-sm btn-label-warning rounded-pill px-3 extra-small fw-bold">Commercial Clause</button>
                  <button className="btn btn-sm btn-text-warning rounded-pill px-3 extra-small fw-bold"><i className="ti tabler-square-plus me-1"></i>Obligation</button>
                </div>
              </div>

              <div className="paper-studio">
                <textarea
                  className="editor-textarea"
                  placeholder="In the name of..."
                  style={{ minHeight: '100%' }}
                  defaultValue={template.initialDraft}
                ></textarea>
              </div>

              <button className="btn btn-warning rounded-pill shadow-lg d-flex align-items-center gap-2 position-fixed" style={{ bottom: '2rem', right: '2rem', padding: '0.8rem 1.5rem', zIndex: 1040, animation: 'pulse-warning 2s infinite' }}
                data-bs-toggle="offcanvas" data-bs-target="#offcanvasContractAI">
                <i className="ti tabler-sparkles fs-4"></i>
                <span className="fw-bold">Drafting Assistant</span>
              </button>
              <style dangerouslySetInnerHTML={{ __html: `@keyframes pulse-warning { 0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(255, 159, 67, 0.4); } 70% { transform: scale(1.05); box-shadow: 0 0 0 10px rgba(255, 159, 67, 0); } 100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(255, 159, 67, 0); } }` }} />
            </main>

            <div className="offcanvas offcanvas-end studio-glass shadow-lg" tabIndex={-1} id="offcanvasContractAI" aria-labelledby="offcanvasContractAILabel" style={{ width: 400, borderLeft: '1px solid rgba(255, 159, 67, 0.1)' }}>
              <div className="offcanvas-header border-bottom py-4">
                <div className="d-flex align-items-center gap-2" id="offcanvasContractAILabel">
                  <div className="avatar avatar-sm"><span className="avatar-initial rounded-circle bg-warning"><i className="ti tabler-robot text-white"></i></span></div>
                  <h5 className="offcanvas-title fw-bold text-uppercase small mb-0">Contract AI</h5>
                </div>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas"></button>
              </div>
              <div className="offcanvas-body p-0 custom-scrollbar d-flex flex-column">
                <div className="flex-grow-1 overflow-auto p-4">
                  <div className="chat-history d-flex flex-column gap-4">
                    <div className="bg-label-warning p-3 rounded-3 position-relative" style={{ borderBottomLeftRadius: 0 }}>
                      <p className="extra-small fw-bold text-warning mb-1">LexAI Contractor</p>
                      <p className="small mb-0 lh-base">I've loaded the boilerplate for <b>{template.title}</b>. Make sure to tailor the [Placeholder] fields to the scenario facts. Need help with a specific clause?</p>
                    </div>
                  </div>
                </div>
                <div className="p-4 border-top studio-glass mt-auto">
                  <div className="input-group input-group-merge shadow-xs border rounded-pill overflow-hidden bg-white">
                    <span className="input-group-text border-0 ps-3 bg-transparent"><i className="ti tabler-message-2 text-body-secondary"></i></span>
                    <input className="form-control border-0 shadow-none extra-small py-2" placeholder="Ask Contract AI..." />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
