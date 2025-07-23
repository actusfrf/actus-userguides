---
id: feeBasis
title: Fee Basis
sidebar_label: Fee Basis
---

## Fee Basis

**Acronym**: `FEB`  
**Identifier**: `feeBasis`  
**Group**: `Fees`  
**Type**: `Enum`  
**Default**: ``  

### Description
Basis, on which Fee is calculated. For FEB=’A’, FER is interpreted as an absolute amount to be paid at every FP event and for FEB=’N’, FER represents a rate at which FP amounts accrue on the basis of the contract’s NT.

### Allowed Values
- **Absolute Value** (`A`) (`absoluteValue` / `0`): The fee rate represents an absolute value.
- **Nominal Value of the Underlying** (`N`) (`nonimalValueOfTheUnderlying` / `1`): The fee rate represents a rate that accrues fees on the basis of the nominal value of the underlying.
