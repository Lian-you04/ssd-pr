# Security Requirements Specification

> **Deliverable 2** — SecureShop E-Commerce Platform

## 1. Functional Overview

SecureShop is a web-based e-commerce platform that allows customers to browse products, manage shopping carts, place orders, and view order history. Admin users can manage products, view all orders, and manage user accounts.

## 2. Asset Inventory

| Asset ID | Asset | Sensitivity | Description |
|----------|-------|-------------|-------------|
| A-01 | User credentials | Critical | Email, password hashes |
| A-02 | Personal data | High | Names, shipping addresses |
| A-03 | Order data | High | Order history, amounts |
| A-04 | Payment info | Critical | Payment method details |
| A-05 | Product catalog | Medium | Product data, pricing |
| A-06 | Session tokens | Critical | JWT access & refresh tokens |
| A-07 | Admin privileges | Critical | Admin role capabilities |
| A-08 | Audit logs | High | Security event records |

## 3. User Roles

| Role | Permissions |
|------|------------|
| **Customer** | Register, login, browse products, manage own cart, place orders, view own orders, write reviews |
| **Admin** | All customer permissions + manage products (CRUD), view all orders, change order status, manage users, view dashboard |

## 4. Security Requirements

| ID | Requirement | Justification | Related Asset/Threat | Priority | Acceptance Criteria | Verification Method | Status |
|----|------------|---------------|---------------------|----------|--------------------|--------------------|--------|
| SR-01 | Passwords MUST be hashed with bcrypt (cost ≥ 12) | Protect credentials at rest | A-01 / T-01 | Critical | No plaintext passwords in DB | Unit test + DB inspection | TODO |
| SR-02 | Authentication MUST use JWT in HTTP-only, Secure, SameSite cookies | Prevent XSS token theft | A-06 / T-02 | Critical | Cookies set with correct attributes | Integration test | TODO |
| SR-03 | Server-side authorization MUST check role on every protected endpoint | Prevent privilege escalation | A-07 / T-03 | Critical | Negative tests pass for unauthorized access | Security tests | TODO |
| SR-04 | All user input MUST be validated server-side with allowlist rules | Prevent injection attacks | A-05 / T-04 | Critical | Malicious payloads rejected | Security tests + DAST | TODO |
| SR-05 | Account lockout MUST activate after 5 failed login attempts | Prevent brute-force attacks | A-01 / T-05 | High | Account locked after threshold | Unit test | TODO |
| SR-06 | Error responses MUST NOT expose stack traces or internal details | Prevent information disclosure | All / T-06 | High | No internal info in 4xx/5xx responses | Manual + DAST | TODO |
| SR-07 | Security events MUST be logged with timestamp, user, IP, event type | Support incident investigation | A-08 / T-07 | High | Log file contains required fields | Unit test + log review | TODO |
| SR-08 | HTTPS MUST be enforced for all communications | Protect data in transit | A-01, A-02 / T-08 | Critical | No HTTP endpoints in production | Config review | TODO |
| SR-09 | Users MUST NOT access other users' orders or cart data | Prevent horizontal escalation | A-03 / T-09 | Critical | Cross-user access returns 403 | Security tests | TODO |
| SR-10 | Rate limiting MUST be enforced on authentication endpoints | Prevent DoS and brute-force | A-01 / T-10 | High | 429 returned after threshold | Integration test | TODO |
| SR-11 | Secrets MUST NOT be committed to source code | Prevent credential leakage | A-06 / T-11 | Critical | Secret scan passes clean | CI secret scan | TODO |
| SR-12 | Dependencies MUST be audited for known vulnerabilities | Supply-chain security | All / T-12 | High | No critical CVEs in dependencies | SCA / npm audit | TODO |

## 5. Abuse / Misuse Cases

<!-- TODO: Document at least 5 abuse cases with attacker profile, goal, attack steps, and expected controls -->

| ID | Attacker | Goal | Attack Scenario | Existing Controls | Expected Result |
|----|----------|------|-----------------|-------------------|-----------------|
| AC-01 | External attacker | Steal user credentials | Brute-force login | Rate limiting, account lockout | Account locked, IP logged |
| AC-02 | Authenticated customer | Access admin panel | Direct URL to /api/admin/* | Server-side role check | 403 Forbidden |
| AC-03 | Authenticated customer | View another user's orders | Modify order ID in API call | Ownership check in controller | 403 Forbidden |
| AC-04 | External attacker | SQL injection | Malicious search query | Parameterized queries (Prisma) | Query rejected |
| AC-05 | External attacker | XSS attack | Script in product review | Input validation, output encoding | Script sanitized |

## 6. Traceability Matrix

<!-- TODO: Map SR → Threat → Implementation → Test -->
