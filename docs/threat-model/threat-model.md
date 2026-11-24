# Threat Model — SecureShop

> **Deliverable 3** — Threat Model & Secure Design Review

## 1. System Model

### 1.1 Context
SecureShop is a client-server web application. The React SPA communicates with an Express.js REST API over HTTPS. The API connects to a PostgreSQL database. All components are deployed behind a reverse proxy.

### 1.2 Trust Boundaries
- **TB-1**: Internet ↔ Reverse Proxy (untrusted input enters)
- **TB-2**: Reverse Proxy ↔ Express API
- **TB-3**: Express API ↔ PostgreSQL Database
- **TB-4**: Customer role ↔ Admin role (privilege boundary)

### 1.3 Data Flow Diagram

<!-- TODO: Create DFD using draw.io or Mermaid and embed here -->

```
[Customer Browser] --HTTPS--> [Reverse Proxy] --> [Express API] --> [PostgreSQL]
                                                        |
                                                   [Admin Browser]
```

## 2. Threat Identification (STRIDE)

| Threat ID | Category | Description | Affected Asset/Component | Attack Scenario | Existing Controls | Likelihood | Impact | Risk Level | Planned Mitigation | Responsible | Status | Residual Risk |
|-----------|----------|-------------|--------------------------|-----------------|-------------------|------------|--------|------------|-------------------|-------------|--------|---------------|
| T-01 | Spoofing | Credential stuffing attack | Auth endpoint | Automated login with leaked credentials | Rate limiting | High | High | Critical | Account lockout + CAPTCHA consideration | Member 1 | TODO | Low |
| T-02 | Tampering | JWT token manipulation | Session tokens | Modify JWT payload | JWT signature verification | Medium | Critical | High | Strong secret, short expiry | Member 1 | TODO | Low |
| T-03 | Elevation | Vertical privilege escalation | Admin endpoints | Customer accesses admin API | Server-side role check | Medium | Critical | High | Middleware authorization | Member 1 | TODO | Low |
| T-04 | Injection | SQL injection via search | Product search | Malicious query parameters | Prisma ORM (parameterized) | Medium | Critical | High | Input validation + parameterized queries | Member 3 | TODO | Low |
| T-05 | Spoofing | Brute-force login | User accounts | Rapid password guessing | Rate limiting | High | High | Critical | Account lockout + exponential backoff | Member 1 | TODO | Low |
| T-06 | Information Disclosure | Stack trace in error response | Error handler | Trigger 500 error | Custom error handler | Medium | Medium | Medium | Sanitized error responses | Member 1 | TODO | Low |
| T-07 | Repudiation | Unlogged admin actions | Audit trail | Admin deletes product without trace | Winston logger | Medium | High | High | Comprehensive audit logging | Member 4 | TODO | Low |
| T-08 | Tampering | Man-in-the-middle attack | All data in transit | Intercept HTTP traffic | HTTPS enforcement | Low | Critical | Medium | HSTS, TLS 1.2+ only | Member 4 | TODO | Low |
| T-09 | Elevation | Horizontal privilege escalation | User data (orders, cart) | Access other user's resources via ID guessing | Ownership check | Medium | High | High | Server-side ownership validation | Member 1 | TODO | Low |
| T-10 | Denial of Service | API flooding | API availability | Automated mass requests | Express rate-limit | High | Medium | High | Rate limiting + request size limits | Member 4 | TODO | Medium |
| T-11 | Information Disclosure | Secrets in source code | Credentials, API keys | Scan Git history | .gitignore, .env | Medium | Critical | High | Secret scanning in CI | Member 4 | TODO | Low |
| T-12 | Tampering | Vulnerable dependency exploit | Application integrity | Exploit known CVE in dependency | npm audit | Medium | High | High | SCA + automated alerts | Member 4 | TODO | Low |

## 3. Risk Assessment

<!-- TODO: Complete risk matrix and prioritize mitigations -->

## 4. Design Decisions

<!-- TODO: Document security design decisions with rationale -->

## 5. Threat Model Evolution

<!-- TODO: Track changes as architecture evolves -->
