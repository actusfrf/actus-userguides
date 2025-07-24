---
id: interestCalculationBase
title: Interest Calculation Base
sidebar_label: Interest Calculation Base
---

## Interest Calculation Base

**Acronym**: `IPCB`  
**Identifier**: `interestCalculationBase`  
**Group**: `Interest`  
**Type**: `Enum`  
**Default**: `NT`  

### Description
This is important for amortizing instruments. The basis of interest calculation is normally the notional outstanding amount as per SD. This is considered the fair basis and in many countries the only legal basis. If NULL or NTSD is selected, this is the case. 
Alternative bases (normally in order to favor the lending institution) are found. In the extreme case the original balance (PCDD=NT+PDCDD) never gets adjusted. In this case PCDD must be chosen. 
An intermediate case exist wherre balances do get adjusted, however with lags. In this case NTL mut be selected and anchor dates and cycles must be set.

### Allowed Values
- **Notional Outstanding** (`NT`) (`notioalOutstanding` / `0`): Interest accrues on the basis of the notional outstanding.
- **Notional at Initial Exchange** (`NTIED`) (`notionalAtInitialExchange` / `1`): Interest accrues on the basis of the notional value at initial exchange.
- **Notional Outstanding Lagged** (`NTL`) (`notionalLagged` / `2`): Interest accrues on the basis of the lagged notional outstanding.
