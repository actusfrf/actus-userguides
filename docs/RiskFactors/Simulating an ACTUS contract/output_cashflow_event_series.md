---
sidebar_position: 3
---

# Cash Flow Simulations

## 1. Understanding Cash Flow Events  
Each simulation generates a series of **cash flow events**, which are categorized as follows:

- **IED (Initial Exchange of Documents)** - Principal transfer at contract initiation.
- **IP (Interest Payment)** - Periodic interest payments.
- **MD (Maturity Date)** - Loan principal repayment at maturity.
- **RR (Rate Reset)** - Changes the interest rate in variable-rate contracts.
- **PRF (Principal Redemption Fix)** - Adjusts the principal payment based on rate changes.
- **PR (Principal Redemption)** - Scheduled loan repayment of principal.

---

## 2. Simulation Results

### 2.1 Fixed Rate Bullet Loan (PAMnoRF)


- **Contract:** Fixed interest, annual payments, full repayment at maturity.
- **Events Summary:**
  - IED: Loan disbursed (-1000.0 USD).
  - IP: Annual interest payments of 20.0 USD.
  - MD: Final repayment of 1000.0 USD at maturity.

| Type | Date       | Payoff (USD) | Nominal Value | Nominal Rate |
|------|-----------|-------------|---------------|--------------|
| IED  | 2015-01-02 | -1000.0     | 1000.0        | 0.02         |
| IP   | 2016-01-02 | 20.0        | 1000.0        | 0.02         |
| IP   | 2017-01-02 | 20.0        | 1000.0        | 0.02         |
| IP   | 2018-01-02 | 20.0        | 1000.0        | 0.02         |
| IP   | 2019-01-02 | 20.0        | 1000.0        | 0.02         |
| IP   | 2020-01-02 | 20.0        | 1000.0        | 0.02         |
| MD   | 2020-01-01 | 1000.0      | 0.0           | 0.02         |

---

### 2.2 Variable Rate Bullet Loan (PAMwRF)
```bash
source scn01PAMwRF_eb.txt 
```
- **Contract:** Variable interest rate, semi-annual payments.
- **Events Summary:**
  - IED: Loan disbursed (-1000.0 USD).
  - RR: Rate resets periodically.
  - IP: Interest payments every 6 months.
  - MD: Final repayment at maturity.

| Type | Date       | Payoff (USD) | Nominal Value | Nominal Rate |
|------|-----------|-------------|---------------|--------------|
| IED  | 2015-01-02 | -1000.0     | 1000.0        | 0.02         |
| RR   | 2015-07-02 | 0.0         | 1000.0        | 0.049        |
| IP   | 2016-01-02 | 34.05       | 1000.0        | 0.049        |
| IP   | 2016-07-02 | 24.50       | 1000.0        | 0.049        |
| RR   | 2016-07-02 | 0.0         | 1000.0        | 0.048        |
| IP   | 2017-01-02 | 24.00       | 1000.0        | 0.048        |
| IP   | 2017-07-02 | 24.00       | 1000.0        | 0.048        |
| MD   | 2020-01-01 | 1000.0      | 0.0           | 0.045        |

---

### 2.3 Fixed Rate Annuity Loan (ANNnoRF)
 

 ```bash
source scn01ANNnoRF_eb.txt
```

- **Contract:** Fixed periodic payments, reducing principal.
- **Events Summary:**
  - IED: Loan disbursed (-1000.0 USD).
  - PRF: Initial principal redemption fix.
  - PR: Periodic principal repayments.
  - IP: Interest payments decrease over time.
  - MD: Final settlement at maturity.

| Type | Date       | Payoff (USD) | Nominal Value | Nominal Rate |
|------|-----------|-------------|---------------|--------------|
| IED  | 2015-01-02 | -1000.0     | 1000.0        | 0.02         |
| PRF  | 2016-01-01 | 0.0         | 1000.0        | 0.02         |
| PR   | 2016-01-02 | 192.16      | 807.84        | 0.02         |
| IP   | 2016-01-02 | 20.00       | 807.84        | 0.02         |
| PR   | 2017-01-02 | 196.00      | 611.84        | 0.02         |
| IP   | 2017-01-02 | 16.16       | 611.84        | 0.02         |
| PR   | 2018-01-02 | 199.92      | 411.92        | 0.02         |
| MD   | 2020-01-02 | 208.00      | 0.0           | 0.02         |

---

### 2.4 Variable Rate Annuity Loan (ANNwRF)
```bash
 source scn01ANNwRF_eb.txt
 ``` 
- **Contract:** Variable interest rate, fixed periodic payments adjusted at rate reset.
- **Events Summary:**
  - IED: Loan disbursed (-1000.0 USD).
  - RR: Rate resets periodically.
  - PRF: Principal redemption fixed after rate reset.
  - PR & IP: Payments adjusted after rate changes.
  - MD: Final settlement at maturity.

| Type | Date       | Payoff (USD) | Nominal Value | Nominal Rate |
|------|-----------|-------------|---------------|--------------|
| IED  | 2015-01-02 | -1000.0     | 1000.0        | 0.02         |
| RR   | 2015-07-02 | 0.0         | 1000.0        | 0.049        |
| PRF  | 2015-07-02 | 0.0         | 1000.0        | 0.049        |
| PR   | 2016-01-02 | 91.88       | 908.12        | 0.049        |
| IP   | 2016-01-02 | 34.50       | 908.12        | 0.049        |
| PR   | 2017-01-02 | 106.85      | 697.14        | 0.048        |
| IP   | 2017-01-02 | 19.29       | 697.14        | 0.048        |
| PR   | 2019-01-02 | 117.59      | 243.37        | 0.046        |
| MD   | 2020-01-02 | 123.07      | 0.0           | 0.045        |

---

## 3. Key Takeaways
- **Fixed Rate Loans**: Payments remain constant, interest does not change.
- **Variable Rate Loans**: Payments vary based on rate reset (RR) events.
- **Bullet Loans (PAM)**: Interest-only payments, full principal repaid at maturity.
- **Annuity Loans (ANN)**: Fixed periodic payments including both principal and interest.

This document serves as a reference for understanding ACTUS-generated cash flow events in various contract simulations.
