# Linear Amortizer (LAM)

## Description
Principal payment fully at IED. Principal repaid periodically in constant amounts till MD. Interest gets reduced accordingly. If variable rate, only interest payment is recalculated. Fixed and variable rates.

## Real-world Instrument Examples (but not limited to)
Many amortizing loans.

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

### Group 2
* **Drivers**: cycleAnchorDateOfInterestPayment, cycleOfInterestPayment
* **Required if triggered**: None
* **Optional**: cyclePointOfInterestPayment

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
* **Drivers**: cycleAnchorDateOfRateReset, cycleOfRateReset
* **Required if triggered**: rateSpread, marketObjectCodeOfRateReset
* **Optional**: lifeCap, lifeFloor, periodCap, periodFloor, cyclePointOfRateReset, fixingPeriod, nextResetRate, rateMultiplier

## Standalone Optional Terms
- accruedInterest
- businessDayConvention
- calendar
- capitalizationEndDate
- contractPerformance
- creditLineAmount
- delinquencyPeriod
- delinquencyRate
- endOfMonthConvention
- gracePeriod
- marketObjectCode
- marketValueObserved
- maturityDate
- nextPrincipalRedemptionPayment
- nonPerformingDate
- premiumDiscountAtIED
- seniority
- settlementCurrency

## Notes
- `contractType` is automatically set to "LAM" when using the class.
