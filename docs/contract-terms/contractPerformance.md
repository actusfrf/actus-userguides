---
id: contractPerformance
title: Contract Performance
sidebar_label: Contract Performance
---

## Contract Performance

**Acronym**: `PRF`  
**Identifier**: `contractPerformance`  
**Group**: `Counterparty`  
**Type**: `Enum`  
**Default**: `PF`  

### Description
Indicates the current contract performance status. Different states of the contract range from performing to default.

### Allowed Values
- **Performant** (`PF`) (`performant` / `0`): Contract is performing according to terms and conditions.
- **Delayed** (`DL`) (`delayed` / `1`): Contractual payment obligations are delayed according to the Grace Period.
- **Delinquent** (`DQ`) (`delinquent` / `2`): Contractual payment obligations are delinquent according to the Delinquency Period.
- **Default** (`DF`) (`default` / `3`): Contract defaulted on payment obligations according to Delinquency Period.
- **Matured** (`MA`) (`matured` / `4`): Contract matured.
- **Terminated** (`TE`) (`terminated` / `5`): Contract has been terminated.
