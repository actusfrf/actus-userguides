# Option (OPTN)

## Description
Calculates straight option pay-off for any basic CT as underlying (PAM, ANN etc.) but also SWAPS, FXOUT, STK and COM. Single, periodic and continuous strike is supported.

## Real-world Instrument Examples (but not limited to)
European, American and Bermudan options with Interest rate, FX and stock futures as underlying instruments.

## Required Terms
- contractDealDate
- contractID
- contractRole
- contractStructure
- contractType
- counterpartyID
- creatorID
- currency
- maturityDate
- optionExerciseEndDate
- optionExerciseType
- optionStrike1
- optionType
- priceAtPurchaseDate
- purchaseDate
- statusDate

## Conditional Groups
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
- cycleAnchorDateOfOptionality
- cycleOfOptionality
- delinquencyPeriod
- delinquencyRate
- deliverySettlement
- endOfMonthConvention
- gracePeriod
- marketObjectCode
- marketValueObserved
- nonPerformingDate
- optionStrike2
- seniority
- settlementCurrency
- settlementPeriod

## Notes
- `contractType` is automatically set to "OPTN" when using the class.
