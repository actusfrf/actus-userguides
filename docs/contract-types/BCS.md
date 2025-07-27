# Boundary Controlled Switch (BCS)

## Description
A boundary controlled switch is a derivative contract with subcontract legs which can be activated (knocked in) or extinguished (knocked out) when the underlying asset price reaches a specified value.  The underlying asset may be a stock, index, or exchange-traded fund. Boundary controlled switch contracts with a single boundary are currently defined.

## Real-world Instrument Examples (but not limited to)
Knock-in and Knock-out barrier options with a single boundary. Bonus contracts with payout when underlying asset price remains above or below a specified level for specified period.

## Required Terms
- boundaryDirection
- boundaryEffect
- boundaryLegInitiallyActive
- boundaryMonitoringAnchorDate
- boundaryMonitoringCycle
- boundaryMonitoringEndDate
- boundaryValue
- contractDealDate
- contractID
- contractRole
- contractStructure
- contractType
- maturityDate
- priceAtPurchaseDate
- purchaseDate
- statusDate

## Conditional Groups
### Group 1
* **Drivers**: terminationDate
* **Required if triggered**: priceAtTerminationDate
* **Optional**: None

## Standalone Optional Terms
- businessDayConvention
- calendar
- deliverySettlement
- endOfMonthConvention
- marketObjectCode
- marketValueObserved
- settlementPeriod

## Notes
- `contractType` is automatically set to "BCS" when using the class.
