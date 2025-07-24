# Undefined Maturity Profile (UMP)

## Description
Principal paid in and out at any point in time without prefixed schedule. Interest calculated on outstanding and capitalized periodically. Needs link to a behavioral function describing expected flows.

## Real-world Instrument Examples (but not limited to)
Saving products of all kind, current accounts. In some countries even variable rate mortgages can be represented with this CT.

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

## Conditional Groups
### Group 1
* **Drivers**: feeRate
* **Required if triggered**: feeBasis
* **Optional**: cycleAnchorDateOfFee, cycleOfFee, feeAccrued

### Group 6
* **Drivers**: terminationDate
* **Required if triggered**: priceAtTerminationDate
* **Optional**: None

### Group 9
* **Drivers**: cycleAnchorDateOfRateReset, cycleOfRateReset
* **Required if triggered**: rateSpread, marketObjectCodeOfRateReset
* **Optional**: None

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
- maximumPenaltyFreeDisbursement
- nonPerformingDate
- prepaymentPeriod
- seniority
- settlementCurrency
- xDayNotice

## Notes
- `contractType` is automatically set to "UMP" when using the class.
