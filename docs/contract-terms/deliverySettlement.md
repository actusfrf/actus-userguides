---
id: deliverySettlement
title: Delivery Settlement
sidebar_label: Delivery Settlement
---

## Delivery Settlement

**Acronym**: `DS`  
**Identifier**: `deliverySettlement`  
**Group**: `Settlement`  
**Type**: `Enum`  
**Default**: `D`  

### Description
Indicates whether the contract is settled in cash or physical delivery.
In case of physical delivery, the underlying contract and associated (future) cash flows are effectively exchanged. In case of cash settlement, the current market value of the underlying contract determines the cash flow exchanged.

### Allowed Values
- **Cash Settlement** (`S`) (`cashSettlement` / `0`): The market value of the underlying is settled.
- **Physical Settlement** (`D`) (`physicalSettlement` / `1`): The underlying is delivered physically.
