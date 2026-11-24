# Security Testing Portfolio

> **Deliverable 5** — Test plans, tools, results, and findings

## 1. Test Plan

| Test Type | Tool | Target | Responsible |
|-----------|------|--------|-------------|
| Security Unit Tests | Jest + Supertest | Backend API | Member 3 |
| Negative Auth Tests | Jest + Supertest | Auth & authz endpoints | Member 3 |
| SAST | ESLint Security + Semgrep | Source code | Member 3 |
| DAST | OWASP ZAP | Running application | Member 3 |
| SCA | npm audit + OWASP Dep-Check | Dependencies | Member 4 |
| Secret Scanning | Gitleaks | Git history | Member 4 |
| Manual Code Review | Peer review | Security-critical code | All |
| Fuzzing | Jest property-based | Input validation | Member 3 |

## 2. Manual Test Cases

<!-- TODO: Document manual test cases -->

## 3. Automated Scan Results

<!-- TODO: Attach SAST, DAST, SCA reports -->

## 4. Findings Register

| Finding ID | Source | Description | Component | Reproduction | Impact | Likelihood | Severity | Root Cause | Remediation | Fix Reference | Retest Result | Status |
|------------|--------|-------------|-----------|--------------|--------|------------|----------|------------|-------------|---------------|---------------|--------|
| | | | | | | | | | | | | |

## 5. Remediation Evidence

<!-- TODO: For each significant finding, document:
1. Evidence the vulnerability existed
2. Technical explanation of root cause
3. Implemented remediation
4. Test proving the vulnerability is resolved
5. Regression test preventing recurrence
6. Assessment of remaining risk
-->
