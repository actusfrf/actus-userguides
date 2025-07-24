# Foreign Ex-change Outright (FXOUT)

## Description
Two parties agree to exchange two fixed cash flows in different currencies at a certain point in time in future.

## Real-world Instrument Examples (but not limited to)
Any FX-outright transaction at a future date. This is also the underlying of FX-options and FX futures.

## Required Terms
- contractDealDate
- contractID
- contractRole
- contractType
- counterpartyID
- creatorID
- currency
- currency2
- maturityDate
- notionalPrincipal
- notionalPrincipal2
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
* **Drivers**: exerciseDate
* **Required if triggered**: exerciseAmount
* **Optional**: None

## Standalone Optional Terms
- businessDayConvention
- calendar
- contractPerformance
- delinquencyPeriod
- delinquencyRate
- deliverySettlement
- endOfMonthConvention
- gracePeriod
- marketObjectCode
- marketValueObserved
- nonPerformingDate
- seniority
- settlementCurrency
- settlementPeriod

## Notes
- `contractType` is automatically set to "FXOUT" when using the class.
