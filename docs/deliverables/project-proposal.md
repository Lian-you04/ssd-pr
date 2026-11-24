# Project Proposal

> **Deliverable 1** — SecureShop E-Commerce Platform

## 1. Project Title
**SecureShop** — Secure E-Commerce Platform

## 2. Team Members & Responsibilities

| Member | Primary Role | Responsibilities |
|--------|-------------|-----------------|
| Member 1 | Project Coordinator & Secure-Development Lead | Backend auth/authz, session management, secure implementation, architecture decisions |
| Member 2 | Security-Requirements Analyst & Threat-Modelling Lead | Security requirements spec, threat model, abuse cases, risk assessment, design review |
| Member 3 | Security-Testing Lead & Frontend Lead | Frontend UI, security testing (SAST/DAST), test portfolio, findings management |
| Member 4 | DevSecOps & Supply-Chain Lead | CI/CD pipeline, SBOM, SCA, deployment, secrets management, documentation |

## 3. Problem Statement
Build a secure e-commerce platform that demonstrates security engineering across the entire software development lifecycle. The platform allows customers to browse and purchase products while administrators manage the product catalog and orders.

## 4. Target Users
- **Customers**: General users who register, browse products, and place orders
- **Administrators**: Staff members who manage products, orders, and user accounts

## 5. Application Scope
- User registration and authentication (JWT, bcrypt)
- Product catalog management (CRUD — admin only)
- Shopping cart management
- Order placement and tracking
- Admin dashboard with order/user management
- Security logging and audit trail

## 6. Principal Assets
User credentials, personal data, order data, session tokens, admin privileges, product catalog, audit logs

## 7. Technology Stack
- **Frontend**: React 18, React Router, Axios
- **Backend**: Node.js, Express.js
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: JWT + bcrypt, HTTP-only cookies
- **Security Testing**: Jest, OWASP ZAP, ESLint Security, Gitleaks
- **CI/CD**: GitHub Actions
- **SBOM**: CycloneDX

## 8. Preliminary Security Concerns
- Credential storage and password policy
- Session management and token security
- Input validation and injection prevention
- Authorization enforcement (RBAC)
- Rate limiting and DoS prevention
- Supply-chain security (dependency management)
- Secret management in CI/CD
- Secure error handling and logging

## 9. Planned Deliverables
1. Project Proposal
2. Security Requirements Specification
3. Threat Model & Secure Design Review
4. Secure Implementation
5. Security Testing Portfolio
6. Supply-Chain & CI/CD Evidence
7. Final Security Assurance Report
8. Final Demonstration & Oral Defense

## 10. Project Schedule

| Week | Milestone | Deliverable |
|------|-----------|-------------|
| 2 | Project approval | Proposal |
| 3 | Requirements baseline | Security requirements spec |
| 4 | Threat-model review | Threat model |
| 5 | Architecture review | Architecture docs |
| 7 | First secure prototype | Auth, session mgmt, core workflow |
| 8 | Authorization review | RBAC implementation + negative tests |
| 10 | Code-review checkpoint | Peer reviews, SAST, secret scanning |
| 11 | Security-testing checkpoint | DAST, fuzzing, remediation records |
| 12 | Supply-chain checkpoint | SBOM, SCA, dependency decisions |
| 13 | CI/CD checkpoint | Automated security pipeline |
| 14 | Release candidate | Retesting, residual risks, draft report |
| 15 | Final submission | All deliverables + demo |
