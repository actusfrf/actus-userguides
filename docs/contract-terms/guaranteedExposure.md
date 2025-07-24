---
id: guaranteedExposure
title: Guaranteed Exposure
sidebar_label: Guaranteed Exposure
---

## Guaranteed Exposure

**Acronym**: `CEGE`  
**Identifier**: `guaranteedExposure`  
**Group**: `Counterparty`  
**Type**: `Enum`  
**Default**: ``  

### Description
Defines which value of the exposure is covered:
- NO: Nominal Value
- NI: Nominal plus Interest
- MV: Market Value

### Allowed Values
- **Nominal Value** (`NO`) (`nominalValue` / `0`): Nominal value of the exposure is covered.
- **Nominal Value plus Interest** (`NI`) (`nominalValuePlusInterest` / `1`): Nominal value of the exposure plus interest accrued is covered.
- **Market Value** (`MV`) (`marketValue` / `2`): Market value of the exposure is covered.
