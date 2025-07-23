---
sidebar_position: 2
---


#  Contract Simulation

Now that we have defined ACTUS contracts, let's simulate their cash flows under a market risk scenario using **ACTUS Quickstart**.

## How Simulation Works
To request a contract simulation, we need:
1. **A curl command** – Sends a REST request to the ACTUS service.
2. **JSON request data** – Includes:
   - Contract details
   - Market risk scenario to apply
3. **Service API call** – Specifies:
   - Target ACTUS service (`http://localhost:8083/`)
   - Command to execute (`rf2/eventsBatch` for batch simulation)

##  Running  Simulations

We use the `source` command to run a simulation.

## Running Principal At Maturity (PAM) Contract Simulations 
```bash
source scn01PAMnoRF_eb.txt
```
This simulates the **PAMnoRF (Fixed Coupon Bullet Loan)** under **risk scenario "scn01"**. Since it has a **fixed** interest rate, the cash flows remain unchanged, even with different market conditions.

For the **PAMwRF (Variable Coupon Bullet Loan)**:

```bash
source scn01PAMwRF_eb.txt
```

- **Interest rate is variable**, based on **UST5Y (US Treasury 5-Year Rate)**.
- The scenario **scn01** provides a projected market rate.
- The interest payments change based on this projection.

## Running Annuity/Mortgage Contract Simulations
Similarly, we can simulate annuity/mortgage contracts:
```bash
source scn01ANNnoRF_eb.txt # Fixed-rate annuity (no effect from market rates) 
source scn01ANNwRF_eb.txt # Variable-rate annuity (market-sensitive)
```
- **ANNnoRF (Fixed-Rate Annuity)**: Cash flows remain the same.
- **ANNwRF (Variable-Rate Annuity)**: Cash flows depend on future **UST5Y** projections.

##  Simulating Multiple Contracts
Instead of simulating one contract at a time, we can run **a portfolio of contracts** in a single request. The API will return a list of **cash flows for each contract**, identified by their **contractID**.

---

###  Key Takeaways
- Fixed-rate contracts **don’t change** with market scenarios.
- Variable-rate contracts **adjust cash flows** based on projected interest rates.
- The API can handle **single or multiple** contract simulations.

**For more details, visit:** [ACTUS Financial Research Foundation](https://www.actusfrf.org)


