# Cap Floors (CAPFL)

## Description
Interest rate option expressed in a maximum or minimum interest rate.

## Real-world Instrument Examples (but not limited to)
Caps and Floor options.

## Required Terms
- contractDealDate
- contractID
- contractRole
- contractStructure
- contractType
- counterpartyID
- creatorID
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

### Group 7
* **Drivers**: None
* **Required if triggered**: None
* **Optional**: lifeCap, lifeFloor

## Standalone Optional Terms
- contractPerformance
- delinquencyPeriod
- delinquencyRate
- gracePeriod
- marketObjectCode
- marketValueObserved
- nonPerformingDate
- seniority
- settlementCurrency

## Notes
- `contractType` is automatically set to "CAPFL" when using the class.
