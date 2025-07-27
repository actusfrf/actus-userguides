# Call Money (CLM)

## Description
Loans that are rolled over as long as they are not called. Once called it has to be paid back after the stipulated notice period.

## Real-world Instrument Examples (but not limited to)
Interbank loans with call features.

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
- nominalInterestRate
- notionalPrincipal
- statusDate
- xDayNotice

## Conditional Groups
### Group 1
* **Drivers**: feeRate
* **Required if triggered**: feeBasis
* **Optional**: cycleAnchorDateOfFee, cycleOfFee, feeAccrued

### Group 9
* **Drivers**: cycleAnchorDateOfRateReset, cycleOfRateReset
* **Required if triggered**: rateSpread, marketObjectCodeOfRateReset
* **Optional**: fixingPeriod, nextResetRate, rateMultiplier

## Standalone Optional Terms
- accruedInterest
- businessDayConvention
- calendar
- contractPerformance
- cycleAnchorDateOfInterestPayment
- cycleOfInterestPayment
- delinquencyPeriod
- delinquencyRate
- endOfMonthConvention
- gracePeriod
- maturityDate
- nonPerformingDate
- prepaymentPeriod
- seniority
- settlementCurrency

## Notes
- `contractType` is automatically set to "CLM" when using the class.
