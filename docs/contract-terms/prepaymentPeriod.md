---
id: prepaymentPeriod
title: Prepayment Period
sidebar_label: Prepayment Period
---

## Prepayment Period

**Acronym**: `PPP`  
**Identifier**: `prepaymentPeriod`  
**Group**: `Counterparty`  
**Type**: `Period`  
**Default**: `P0D`  

### Description
If real payment happens before scheduled payment date minus PPP, then it is considered a prepayment. Effect of prepayments are further described in PPEF and related fields.

### Allowed Values
- `ISO8601 Duration`
