# Swap (SWAP)

## Description
Exchange of two basic CTÂ´s (PAM, ANN etc.). Normally one is fixed, the other variable. However all variants possible including different currencies for cross currency swaps, basic swaps or even different principal exchange programs.

## Real-world Instrument Examples (but not limited to)
All kind of swaps. The variety is defined by the underlying CTÂ´s which often are PAM and ANN in all its flavors. With each new basic CT the variety rises.

## Required Terms
- contractDealDate
- contractID
- contractRole
- contractStructure
- contractType
- counterpartyID
- creatorID
- currency
- statusDate

## Conditional Groups
### Group 5
* **Drivers**: purchaseDate
* **Required if triggered**: priceAtPurchaseDate
* **Optional**: None

### Group 6
* **Drivers**: terminationDate
* **Required if triggered**: priceAtTerminationDate
* **Optional**: None

## Standalone Optional Terms
- contractPerformance
- delinquencyPeriod
- delinquencyRate
- deliverySettlement
- gracePeriod
- marketObjectCode
- marketValueObserved
- nonPerformingDate
- seniority
- settlementCurrency

## Notes
- `contractType` is automatically set to "SWAP" when using the class.
