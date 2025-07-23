---
sidebar_position: 1
---

# Contract Behavior Risk Models

In earlier sections, we discussed **market risk**, where all contracts in a simulation experience the same projected market values, leading to consistent and aggregatable cash flows and events. However, real-world financial contracts are also influenced by **contract-specific and counterparty behaviors**, introducing additional uncertainty.

---

## Market Risk vs. Behavior Risk  

| Market Risk | Behavior Risk |
|------------|--------------|
| Affects all contracts equally in a simulation | Varies by contract and counterparty |
| Future market values are the same for all contracts | Future cashflows depend on contract-specific factors |
| Independent of a contract's internal state | Can be influenced by contract terms, counterparty credit rating, and market conditions |

---

## Factors Affecting Contract Behavior Risk  

- **Contract terms** – e.g., prepayment options, credit limits  
- **Additional attributes** – borrower’s credit rating, contract’s business area  
- **Internal contract state** – time to maturity, current interest rate  
- **Market conditions** – future interest rates, liquidity changes  

---

## Examples of Contract Behavior Risks  

### 1. Prepayment Risk  
Some loan contracts permit early repayment, which reduces expected interest income for lenders.  

### 2. Counterparty Default  
A borrower defaults, terminating the contract early, often resulting in principal loss.  

### 3. Deposit/Withdrawal Risk  
Depositors withdraw funds or credit counterparties draw on available credit, affecting liquidity.  

### 4. American Option Exercise Risk  
An American Option holder can choose the time to exercise, impacting future cashflows.  

---

## ACTUS Risk Modeling  

ACTUS includes a basic **Prepayment Risk Model** for **ANN** and **PAM** contracts.  
However, real-world risk models are more complex, involving multiple parameters and various modeling approaches.  

Unlike core ACTUS simulations, which produce **a single deterministic future cashflow**, behavior risk models evaluate different possible outcomes based on contract-specific factors.  

---

## Conclusion  

Understanding **contract behavior risks** is essential for accurate financial modeling. While market risk provides a broad view, behavior risks introduce real-world variability that must be considered in risk assessments.  
