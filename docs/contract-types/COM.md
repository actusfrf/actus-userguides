# Commodity (COM)

## Description
This is not a financial contract in its propper sense. However it traks movements of commodities such as oil, gas or even houses. Such commodities can serve as underlyings of commodity futures, guarantees or simply asset positions.

## Real-world Instrument Examples (but not limited to)
Oil, gas, electricity, houses etc.

## Required Terms
- contractDealDate
- contractID
- contractRole
- contractType
- creatorID
- currency
- priceAtPurchaseDate
- purchaseDate
- quantity
- statusDate
- unit

## Conditional Groups
### Group 6
* **Drivers**: terminationDate
* **Required if triggered**: priceAtTerminationDate
* **Optional**: None

## Standalone Optional Terms
- counterpartyID
- marketObjectCode
- marketValueObserved

## Notes
- `contractType` is automatically set to "COM" when using the class.
