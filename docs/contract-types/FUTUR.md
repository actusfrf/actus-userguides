# Future (FUTUR)

## Description
Keeps track of value changes for any basic CT as underlying (PAM, ANN etc. but also FXOUT, STK, COM). Handles margining calls.

## Real-world Instrument Examples (but not limited to)
Standard interest rate, FX, stock and commodity futures.

## Required Terms
- contractDealDate
- contractID
- contractRole
- contractStructure
- contractType
- counterpartyID
- creatorID
- currency
- futuresPrice
- maturityDate
- priceAtPurchaseDate
- purchaseDate
- statusDate

## Conditional Groups
### Group 1
* **Drivers**: initialMargin
* **Required if triggered**: clearingHouse
* **Optional**: maintenanceMarginLowerBound, maintenanceMarginUpperBound, cycleAnchorDateOfMargining, cycleOfMargining, variationMargin

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
- `contractType` is automatically set to "FUTUR" when using the class.
