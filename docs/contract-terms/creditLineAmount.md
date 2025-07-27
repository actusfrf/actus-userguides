---
id: creditLineAmount
title: Credit Line Amount
sidebar_label: Credit Line Amount
---

## Credit Line Amount

**Acronym**: `CLA`  
**Identifier**: `creditLineAmount`  
**Group**: `Notional Principal`  
**Type**: `Real`  
**Default**: ``  

### Description
If defined, gives the total amount that can be drawn from a credit line. The remaining amount that can still be drawn is given by CLA-NT.
For ANN, NAM, the credit line can only be drawn prior to PRANX-1PRCL.
For CRL, the remaining amount that can still be drawn is given by CLA-Sum(NT of attached contracts).

### Allowed Values
- `Positive`
