# Architecture — SecureShop

> Security Architecture & Design Decisions

## 1. System Context Diagram

<!-- TODO: Add C4 Level 1 diagram -->

## 2. Component Diagram

<!-- TODO: Add C4 Level 2 diagram -->

## 3. Data Flow Diagram

<!-- TODO: Add DFD with trust boundaries marked -->

## 4. Deployment Architecture

```
┌─────────────────────────────────────────────────┐
│                   Client Side                    │
│  [React SPA]  ←→  Browser (HTTP-only cookies)   │
└───────────────────────┬─────────────────────────┘
                        │ HTTPS (TLS 1.2+)
                        ▼
┌─────────────────────────────────────────────────┐
│                 Server Side                      │
│  [Express.js API]                                │
│    ├── Helmet (security headers)                 │
│    ├── CORS (whitelist origin)                   │
│    ├── Rate Limiter                              │
│    ├── JWT Auth Middleware                        │
│    ├── RBAC Authorization Middleware             │
│    ├── Input Validation (Joi)                    │
│    ├── Error Handler (sanitized)                 │
│    └── Security Logger (Winston)                 │
└───────────────────────┬─────────────────────────┘
                        │
                        ▼
┌─────────────────────────────────────────────────┐
│                 Data Layer                       │
│  [PostgreSQL]                                    │
│    ├── Prisma ORM (parameterized queries)        │
│    ├── UUID primary keys                         │
│    └── Encrypted connections                     │
└─────────────────────────────────────────────────┘
```

## 5. Authentication Flow

1. User submits credentials → POST /api/auth/login
2. Server validates input, verifies password with bcrypt
3. Server generates JWT (short-lived access token + refresh token)
4. Access token set in HTTP-only, Secure, SameSite=Strict cookie
5. Refresh token stored server-side (DB)
6. Subsequent requests include cookie automatically
7. Middleware verifies JWT signature and expiration

## 6. Authorization Model (RBAC)

- **Deny by default**: All routes require explicit permission
- **Middleware chain**: authenticate → authorize(role) → controller
- **Server-side enforcement**: No client-only checks
- **Object-level checks**: Users can only access their own resources

## 7. Security Controls Summary

| Control | Threat Addressed | Where Enforced | Rationale | Limitations | Residual Risk |
|---------|-----------------|----------------|-----------|-------------|---------------|
| bcrypt hashing | Credential theft | Auth service | Adaptive hashing resists GPU attacks | Cost factor must be tuned | Low |
| JWT in HTTP-only cookies | XSS token theft | Auth middleware | Browser cannot access via JS | Requires CSRF protection | Low |
| Helmet headers | Various web attacks | Express middleware | Industry-standard header security | Does not cover all attacks | Low |
| Joi validation | Injection, XSS | Validation middleware | Allowlist-based input sanitization | Complex payloads may pass | Low |
| Rate limiting | Brute-force, DoS | Express middleware | Limits request frequency | Distributed attacks bypass | Medium |
| Prisma ORM | SQL injection | Data layer | Parameterized queries by design | ORM bugs possible | Very Low |

## 8. External Services & Dependencies

<!-- TODO: List all external dependencies and their trust level -->

## 9. Logging & Monitoring Architecture

<!-- TODO: Document log flow, storage, retention, and access controls -->
