---
id: contractType
title: Contract Type
sidebar_label: Contract Type
---

## Contract Type

**Acronym**: `CT`  
**Identifier**: `contractType`  
**Group**: `Contract identification`  
**Type**: `Enum`  
**Default**: ``  

### Description
The ContractType is the most important information. It defines the cash flow generating pattern of a contract. The ContractType information in combination with a given state of the risk factors will produce a deterministic sequence of cash flows which are the basis of any financial analysis.

### Allowed Values
- **Principal at Maturity** (`PAM`) (`principalAtMaturity` / `0`): Lending agreements with full amortization at maturity.
- **Annuity** (`ANN`) (`annuity` / `1`): Lending agreements with fixed periodic payments consisting of an interest and principal portion. The periodic payments are adjusted for variable rate instruments such that maturity remains fixed.
- **Negative Amortizer** (`NAM`) (`negativeAmortizer` / `2`): Lending agreements with fixed periodic payments consisting of an interest and principal portion. Maturity changes for variable rate instruments.
- **Linear Amortizer** (`LAM`) (`linearAmortizer` / `3`): Lending agreements with fixed principal repayment amounts and variable interest payments.
- **Exotic Linear Amortizer** (`LAX`) (`exoticLinearAmortizer` / `4`): Lending agreements with exotic repayment schedules.
- **Call Money** (`CLM`) (`callMoney` / `5`): Lonas that are rolled over as long as they are not called. Once called it has to be paid back after the stipulated notice period.
- **Undefined Maturity Profile** (`UMP`) (`undefinedMaturityProfile` / `6`): Interest paying cash accounts (current / savings / etc.).
- **Cash** (`CSH`) (`cash` / `7`): Represents cash holdings.
- **Stock** (`STK`) (`stock` / `8`): Represents stocks/shares/equity.
- **Commodity** (`COM`) (`commodity` / `9`): Represents commodities.
- **Swap** (`SWAPS`) (`swap` / `10`): An agreement of swapping two legs such as fixed against variable or currency 1 against currency 2 etc.
- **Plain Vanilla Swap** (`SWPPV`) (`plainVanillaSwap` / `11`): Plain vanilla interest rate swaps.
- **Foreign Exchange Outright** (`FXOUT`) (`foreignExchangeOutright` / `12`): An agreement of swapping two cash flows in different currencies at a future point in time.
- **Cap and Floor** (`CAPFL`) (`capFloor` / `13`): An agreement of paying the differential (cap or floor) of a reference rate versus a fixed rate.
- **Future** (`FUTUR`) (`future` / `14`): An agreement of exchanging an underlying instrument against a fixed price in the future.
- **Option** (`OPTNS`) (`option` / `15`): Different types of options on buying an underlying instrument at a fixed price in the future.
- **Credit Enhancement Guarantee** (`CEG`) (`creditEnhancementGuarantee` / `16`): A guarantee / letter of credit by a third party on the scheduled payment obligations of an underlying instrument
- **Credit Enhancement Collateral** (`CEC`) (`creditEnhancementCollateral` / `17`): A collateral securing the scheduled payment obligations of an underlying instrument
