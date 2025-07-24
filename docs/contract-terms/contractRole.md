---
id: contractRole
title: Contract Role
sidebar_label: Contract Role
---

## Contract Role

**Acronym**: `CNTRL`  
**Identifier**: `contractRole`  
**Group**: `Contract identification`  
**Type**: `Enum`  
**Default**: ``  

### Description
CNTRL defines which position the CRID ( the creator of the contract record ) takes in a contract. For example, whether the contract is an asset or liability, a long or short position for the CRID. 
Most contracts are simple on or off balance sheet positions which are assets, liabilities. Such contracts can also play a secondary role as a collateral. 
The attribute is highly significant since it determines the direction of all cash flows. The exact meaning is given with each CT in the ACTUS High Level Specification document.

### Allowed Values
- **Real Position Asset** (`RPA`) (`realPositionAsset` / `0`): Contract creator takes the asset or lender side.
- **Real Position Liability** (`RPL`) (`realPositionLiability` / `1`): Contract creator takes the liability or borrower side.
- **Receive First Leg** (`RFL`) (`receiveFirstLegl` / `2`): Contract creator receives the first leg.
- **Pay First Leg** (`PFL`) (`payFirstLeg` / `3`): Contract creator pays the first leg.
- **Receive Fix** (`RF`) (`receiveFix` / `4`): Contract creator receives the fixed leg.
- **Pay Fix** (`PF`) (`payFix` / `5`): Contract creator pays the fixed leg.
- **Buyer** (`BUY`) (`buyer` / `6`): Contract creator holds the right to buy the underlying / exercise the option.
- **Seller** (`SEL`) (`seller` / `7`): Contract creator holds the obligation to sell the underlying / deliver the option.
- **Collateral Position** (`COL`) (`collateralPosition` / `8`): Contract represents a collateral to an underlying instrument
- **Close out Netting** (`CNO`) (`closeOutNetting` / `9`): Contract creator and counterparty agree on netting payment obligations of underlying instruments in case of default.
- **Underlying** (`UDL`) (`underlying` / `10`): Contract represents the underlying to a composed contract. Role of the underlying is derived from the parent.
- **Underlying Plus** (`UDLP`) (`underlyingPlus` / `11`): Contract represents the underlying to a composed contract. Role of the underlying is derived from the parent. When considered a standalone contract the underlying’s creator takes the asset side.
- **Underlying Minus** (`UDLM`) (`underlyingMinus` / `12`): Contract represents the underlying to a composed contract. Role of the underlying is derived from the parent. When considered a standalone contract the underlying’s creator takes the liability side.
