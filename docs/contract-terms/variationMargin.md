---
id: variationMargin
title: Variation Margin
sidebar_label: Variation Margin
---

## Variation Margin

**Acronym**: `MRVM`  
**Identifier**: `variationMargin`  
**Group**: `Margining`  
**Type**: `Real`  
**Default**: ``  

### Description
MRVM reflects the accrued but not yet paid margin as per SD.  
Open traded positions are revalued by the exchange at the end of every trading day using mark-to-market valuation. Often clearing members do not credit or debit their clients daily with MRVM, but rather use a Maintenance Margin. If the balance falls outside MRMML (and MRMMU), then  capital must be added (is refunded) to reach the original margin amount MRIM. We can also say that MVO+MRVM is equal to the reference value as per last margin update.

### Allowed Values
- `Positive`
