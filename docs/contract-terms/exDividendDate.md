---
id: exDividendDate
title: Ex Dividend Date
sidebar_label: Ex Dividend Date
---

## Ex Dividend Date

**Acronym**: `DVEX`  
**Identifier**: `exDividendDate`  
**Group**: `Dividend`  
**Type**: `Timestamp`  
**Default**: ``  

### Description
In case contract is traded between DVEX and next DV payment date (i.e. PRD > DVEX & PRD < next DV payment date), then the old holder of the contract (previous to the trade) receives the next DV payment. In other words, the next DV payment is cancelled for the new (after the trade) holder of the contract.

### Allowed Values
- `ISO8601 Datetime`
