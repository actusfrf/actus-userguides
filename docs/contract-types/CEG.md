# Guarantee (CEG)

## Description
Guarantee creates a relationship between a guarantor, an obligee and a debtor, moving the exposure from the debtor to the guarantor.

## Real-world Instrument Examples (but not limited to)
Personal guarantee. Government guarantee. Underlyings of CDOÂ´s.

## Required Terms
- contractDealDate
- contractID
- contractRole
- contractStructure
- contractType
- counterpartyID
- creatorID
- currency
- guaranteedExposure
- statusDate

## Conditional Groups
### Group 1
* **Drivers**: feeRate
* **Required if triggered**: feeBasis
* **Optional**: cycleAnchorDateOfFee, cycleOfFee, feeAccrued

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
- coverageOfCreditEnhancement
- creditEventTypeCovered
- delinquencyPeriod
- delinquencyRate
- endOfMonthConvention
- gracePeriod
- maturityDate
- nonPerformingDate
- notionalPrincipal
- settlementCurrency
- settlementPeriod

## Notes
- `contractType` is automatically set to "CEG" when using the class.
