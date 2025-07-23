---
id: nominalInterestRate
title: Nominal Interest Rate
sidebar_label: Nominal Interest Rate
---

## Nominal Interest Rate

**Acronym**: `IPNR`  
**Identifier**: `nominalInterestRate`  
**Group**: `Interest`  
**Type**: `Real`  
**Default**: ``  

### Description
The nominal interest rate which will be used to calculate accruals and the next interest payment at the next IP date. NT multiplied with IPNR is the base for the interest payment calculation. The relevant time period is a function of IPDC. 
If the contract is variable (RRANX set) this field is periodically updated per SD. 
In the case of plan vanilla interest rate swaps (IRSPV) this defines the rate of fixed leg.
