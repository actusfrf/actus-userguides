# Exotic Linear Amortizer (LAX)

## Description
Exotic version of LAM. However step ups with respect to (i) Principal, (ii) Interest rates are possible. Highly flexible to match totally irregular principal payments. Principal can also be paid out in steps.

## Real-world Instrument Examples (but not limited to)
A special version of this kind are teaser rate loans and mortgages.

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
* **Drivers**: arrayCycleAnchorDateOfInterestPayment, arrayCycleOfInterestPayment
* **Required if triggered**: None
* **Optional**: cyclePointOfInterestPayment

### Group 3
* **Drivers**: interestCalculationBase
* **Required if triggered**: interestCalculationBaseAmount
* **Optional**: cycleAnchorDateOfInterestCalculationBase, cycleOfInterestCalculationBase

### Group 4
* **Drivers**: arrayCycleAnchorDateOfPrincipalRedemption, arrayCycleOfPrincipalRedemption, arrayNextPrincipalRedemptionPayment, arrayIncreaseDecrease
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

### Group 7
* **Drivers**: scalingEffect
* **Required if triggered**: marketObjectCodeOfScalingIndex, scalingIndexAtContractDealDate, notionalScalingMultiplier, interestScalingMultiplier
* **Optional**: cycleAnchorDateOfScalingIndex, cycleOfScalingIndex

### Group 8
* **Drivers**: prepaymentEffect
* **Required if triggered**: None
* **Optional**: prepaymentPeriod, optionExerciseEndDate, cycleAnchorDateOfOptionality, cycleOfOptionality, penaltyType, penaltyRate

### Group 9
* **Drivers**: arrayCycleAnchorDateOfRateReset
* **Required if triggered**: arrayRate, arrayFixedVariable, marketObjectCodeOfRateReset
* **Optional**: arrayCycleOfRateReset, lifeCap, lifeFloor, periodCap, periodFloor, cyclePointOfRateReset, fixingPeriod, nextResetRate, rateMultiplier

## Standalone Optional Terms
- accruedInterest
- businessDayConvention
- calendar
- capitalizationEndDate
- contractPerformance
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
- `contractType` is automatically set to "LAX" when using the class.
