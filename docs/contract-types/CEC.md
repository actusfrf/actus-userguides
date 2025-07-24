# Collateral (CEC)

## Description
Collateral creates a relationship between a collateral an obligee and a debtor, covering the exposure from the debtor with the collateral.

## Real-world Instrument Examples (but not limited to)
Mortgages include a collateral contract. Any coverage with financial or physical collateral.

## Required Terms
- contractDealDate
- contractID
- contractRole
- contractStructure
- contractType
- counterpartyID
- creatorID
- guaranteedExposure
- statusDate

## Conditional Groups
### Group 7
* **Drivers**: exerciseDate
* **Required if triggered**: exerciseAmount
* **Optional**: None

## Standalone Optional Terms
- businessDayConvention
- calendar
- coverageOfCreditEnhancement
- creditEventTypeCovered
- endOfMonthConvention
- settlementPeriod

## Notes
- `contractType` is automatically set to "CEC" when using the class.
