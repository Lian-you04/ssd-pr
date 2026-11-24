# SecureShop — Secure E-Commerce Platform

> **Secure Software Development Course Project**
> An e-commerce platform built with security engineered into every phase of the SDLC.

## 🎯 Project Overview

SecureShop is a full-stack e-commerce platform designed with security as a first-class engineering concern. The project demonstrates security requirements analysis, threat modelling, secure architecture, secure implementation, security testing, supply-chain management, and secure CI/CD practices.

## 👥 Team & Roles

| Member | Primary Role | Secondary Responsibilities |
|--------|-------------|---------------------------|
| **Member 1** | Project Coordinator & Secure-Development Lead | Backend auth, session management, overall architecture |
| **Member 2** | Security-Requirements Analyst & Threat-Modelling Lead | Requirements spec, threat model, abuse cases, risk assessment |
| **Member 3** | Security-Testing Lead & Frontend Lead | Frontend development, SAST/DAST, security testing portfolio |
| **Member 4** | DevSecOps & Supply-Chain Lead | CI/CD pipeline, SBOM, SCA, deployment, documentation |

## 🏗️ Tech Stack

| Layer | Technology |
|-------|-----------|
| **Frontend** | React 18, React Router, Axios |
| **Backend** | Node.js, Express.js |
| **Database** | PostgreSQL |
| **Auth** | JWT + bcrypt, HTTP-only cookies |
| **ORM** | Prisma |
| **Testing** | Jest, Supertest, OWASP ZAP, ESLint Security |
| **CI/CD** | GitHub Actions |
| **SBOM** | CycloneDX |

## 🔐 User Roles

- **Customer** — Browse products, manage cart, place orders, view order history
- **Admin** — Manage products, view all orders, manage users, access admin dashboard

## 📁 Project Structure

```
ssd-pr/
├── backend/                    # Express.js API server
│   ├── src/
│   │   ├── config/             # DB, env, security configs
│   │   ├── controllers/        # Route handlers
│   │   ├── middleware/         # Auth, validation, rate-limit, error handler
│   │   ├── models/             # Prisma schema & DB models
│   │   ├── routes/             # API route definitions
│   │   ├── services/           # Business logic layer
│   │   ├── utils/              # Helpers, logger, crypto
│   │   └── validators/         # Input validation schemas
│   ├── tests/
│   │   ├── unit/               # Unit tests
│   │   ├── integration/        # Integration tests
│   │   └── security/           # Security-specific tests
│   ├── prisma/                 # Prisma schema & migrations
│   ├── package.json
│   └── .env.example
├── frontend/                   # React SPA
│   ├── src/
│   │   ├── components/         # UI components (auth, products, cart, admin)
│   │   ├── pages/              # Page-level components
│   │   ├── hooks/              # Custom React hooks
│   │   ├── services/           # API client & interceptors
│   │   ├── utils/              # Frontend utilities
│   │   └── context/            # React context (auth, cart)
│   ├── public/
│   └── package.json
├── docs/                       # Security documentation (all deliverables)
│   ├── security-requirements/  # Deliverable 2
│   ├── threat-model/           # Deliverable 3
│   ├── architecture/           # Architecture diagrams & decisions
│   ├── testing/                # Deliverable 5 — test plans & results
│   ├── supply-chain/           # Deliverable 6 — SBOM, SCA
│   ├── remediation/            # Vulnerability fix records
│   └── deliverables/           # Final report & presentation
├── security/                   # Security tool configurations
│   ├── sast/                   # Static analysis configs
│   ├── dast/                   # Dynamic analysis configs
│   ├── sca/                    # Software composition analysis
│   └── sbom/                   # Generated SBOMs
├── .github/workflows/          # CI/CD pipeline
├── .gitignore
├── .env.example
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js ≥ 18
- PostgreSQL ≥ 14
- npm or yarn

### Installation
```bash
# Clone the repository
git clone <repo-url>
cd ssd-pr

# Install backend dependencies
cd backend && npm install

# Install frontend dependencies
cd ../frontend && npm install

# Set up environment variables
cp backend/.env.example backend/.env
# Edit .env with your database credentials

# Run database migrations
cd backend && npx prisma migrate dev

# Start development servers
# Terminal 1: Backend
cd backend && npm run dev

# Terminal 2: Frontend
cd frontend && npm start
```

## 📋 Deliverables

1. **Project Proposal** — Scope, team, schedule
2. **Security Requirements Specification** — 10+ testable requirements
3. **Threat Model & Secure Design Review** — DFD, STRIDE, threat register
4. **Secure Implementation** — Working app with security controls
5. **Security Testing Portfolio** — SAST, DAST, manual tests, findings
6. **Supply-Chain & CI/CD Evidence** — SBOM, SCA, pipeline security
7. **Final Security Assurance Report** — 15–25 pages
8. **Final Demonstration & Oral Defense** — 15–20 min presentation

## 📄 License

This project is for educational purposes only.
