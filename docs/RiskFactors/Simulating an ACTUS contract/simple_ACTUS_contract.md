---
sidebar_position: 1
---


# Contract Specifications

## 1. **PAMnoRF (Fixed Coupon Bullet Loan)**
- **Contract Type**: PAM (Principal at Maturity)
- **Interest Rate**: Fixed at 2% per annum
- **Business Days**: Weekdays (`calendar: WEEKDAY`)
- **Start Date**: 2015-01-01 (`statusDate`)
- **Maturity Date**: 2020-01-02
- **Interest Payment**: Yearly (`cycleOfInterestPayment: P1YL0`), starting from 2016-01-02
- **Principal Repayment**: Full repayment at maturity
- **Day Count Convention**: 30E/360 (30-day months)
- **Currency**: USD

## 2. **PAMwRF (Variable Coupon Bullet Loan)**
- **Contract Type**: PAM (Variable Rate)
- **Interest Rate**: Adjusted annually (`cycleOfRateReset: P1YL1`), based on:
  - **Base Rate**: UST5Y (`marketObjectCodeOfRateReset`)
  - **Rate Spread**: +1%
- **Start Date**: 2015-01-01
- **Maturity Date**: 2020-01-02
- **Interest Payment**: Semi-annual (`cycleOfInterestPayment: P6ML0`), starting from 2016-01-02
- **Principal Repayment**: Full repayment at maturity
- **Rate Reset**: First on 2015-07-02, then yearly

## 3. **ANNnoRF (Fixed Rate Annuity/Mortgage)**
- **Contract Type**: ANN (Annuity)
- **Interest Rate**: Fixed
- **Start Date**: 2015-01-01
- **Maturity Date**: 2020-01-02
- **Payment Schedule**: 
  - **Interest Payments**: Yearly (`cycleOfInterestPayment: P1YL0`)
  - **Principal Repayments**: Yearly (`cycleOfPrincipalRedemption: P1YL0`), starting from 2016-01-02
- **Total Payment**: Fixed sum covering both principal + interest

## 4. **ANNwRF (Variable Rate Annuity/Mortgage)**
- **Contract Type**: ANN (Variable Rate)
- **Interest Rate**: Adjusted annually, same as PAMwRF
- **Start Date**: 2015-01-01
- **Maturity Date**: 2020-01-02
- **Payment Schedule**:
  - **Interest Payments**: Yearly
  - **Principal Repayments**: Yearly, starting from 2016-01-02
- **Total Payment**: Varies as interest rate changes

---

Each contract follows the ACTUS standard, allowing precise cash flow calculations based on predefined financial scenarios.

For more details, visit the [ACTUS Financial Research Foundation](https://www.actusfrf.org).
