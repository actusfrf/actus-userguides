# Plain Vanilla Swap (SWPPV)

## Description
Plain vanilla swaps where the underlyings are always two identical PAMÂ´s however with one leg fixed and the other variable.

## Real-world Instrument Examples (but not limited to)
More than 90% of all interest rate swaps follow this simple pattern.

## Required Terms
- contractDealDate
- contractID
- contractRole
- contractType
- counterpartyID
- creatorID
- currency
- dayCountConvention
- initialExchangeDate
- marketObjectCodeOfRateReset
- maturityDate
- nominalInterestRate
- nominalInterestRate2
- notionalPrincipal
- rateSpread
- statusDate

## Conditional Groups
### Group 2
* **Drivers**: cycleAnchorDateOfInterestPayment, cycleOfInterestPayment
* **Required if triggered**: None
* **Optional**: None

### Group 5
* **Drivers**: purchaseDate
* **Required if triggered**: priceAtPurchaseDate
* **Optional**: None

### Group 6
* **Drivers**: terminationDate
* **Required if triggered**: priceAtTerminationDate
* **Optional**: None

### Group 9
* **Drivers**: None
* **Required if triggered**: None
* **Optional**: cycleAnchorDateOfRateReset, cycleOfRateReset, cyclePointOfRateReset, fixingPeriod, nextResetRate, rateMultiplier

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

## Notes
- `contractType` is automatically set to "SWPPV" when using the class.
