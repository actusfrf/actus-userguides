# Negative Amortizer (NAM)

## Description
Similar as ANN. However when resetting rate, total amount (interest plus principal) stay constant. MD shifts. Only variable rates.

## Real-world Instrument Examples (but not limited to)
Special class of ARMÂ´s (adjustable rate mortgages), Certain loans.

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
- nextPrincipalRedemptionPayment
- nominalInterestRate
- notionalPrincipal
- rateSpread
- statusDate

## Conditional Groups
### Group 1
* **Drivers**: feeRate
* **Required if triggered**: feeBasis
* **Optional**: cycleAnchorDateOfFee, cycleOfFee, feeAccrued

### Group 3
* **Drivers**: interestCalculationBase
* **Required if triggered**: interestCalculationBaseAmount
* **Optional**: cycleAnchorDateOfInterestCalculationBase, cycleOfInterestCalculationBase

### Group 4
* **Drivers**: None
* **Required if triggered**: None
* **Optional**: cycleAnchorDateOfPrincipalRedemption, cycleOfPrincipalRedemption

### Group 5
* **Drivers**: purchaseDate
* **Required if triggered**: priceAtPurchaseDate
* **Optional**: None

### Group 6
* **Drivers**: terminationDate
* **Required if triggered**: priceAtTerminationDate
* **Optional**: None

### Group 7
* **Drivers**: scalingEffect
* **Required if triggered**: marketObjectCodeOfScalingIndex, scalingIndexAtContractDealDate, notionalScalingMultiplier, interestScalingMultiplier
* **Optional**: cycleAnchorDateOfScalingIndex, cycleOfScalingIndex

### Group 8
* **Drivers**: prepaymentEffect
* **Required if triggered**: None
* **Optional**: prepaymentPeriod, optionExerciseEndDate, cycleAnchorDateOfOptionality, cycleOfOptionality, penaltyType, penaltyRate

### Group 9
* **Drivers**: None
* **Required if triggered**: None
* **Optional**: cycleAnchorDateOfRateReset, cycleOfRateReset, lifeCap, lifeFloor, periodCap, periodFloor, fixingPeriod, nextResetRate, rateMultiplier

## Standalone Optional Terms
- accruedInterest
- businessDayConvention
- calendar
- capitalizationEndDate
- contractPerformance
- creditLineAmount
- cycleAnchorDateOfInterestPayment
- cycleOfInterestPayment
- delinquencyPeriod
- delinquencyRate
- endOfMonthConvention
- gracePeriod
- marketObjectCode
- marketValueObserved
- maturityDate
- nonPerformingDate
- premiumDiscountAtIED
- seniority
- settlementCurrency

## Notes
- `contractType` is automatically set to "NAM" when using the class.
