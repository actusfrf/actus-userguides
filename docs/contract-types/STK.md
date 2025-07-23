# Stock (STK)

## Description
Any instrument which is bought at a certain amount (market price normally) and then follows an index.

## Real-world Instrument Examples (but not limited to)
All straight stocks.

## Required Terms
- contractDealDate
- contractID
- contractRole
- contractType
- counterpartyID
- creatorID
- currency
- notionalPrincipal
- priceAtPurchaseDate
- purchaseDate
- quantity
- statusDate

## Conditional Groups
### Group 1
* **Drivers**: cycleOfDividend, nextDividendPaymentAmount
* **Required if triggered**: cycleAnchorDateOfDividend
* **Optional**: exDividendDate

### Group 6
* **Drivers**: terminationDate
* **Required if triggered**: priceAtTerminationDate
* **Optional**: None

## Standalone Optional Terms
- businessDayConvention
- calendar
- contractPerformance
- endOfMonthConvention
- marketObjectCode
- marketValueObserved
- nonPerformingDate
- seniority
- settlementCurrency

## Notes
- `contractType` is automatically set to "STK" when using the class.
