import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'c08'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', 'c90'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '59a'),
            routes: [
              {
                path: '/docs/actus-demo/demo-user-guide',
                component: ComponentCreator('/docs/actus-demo/demo-user-guide', '63a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/actus-demo/server-curl-samples',
                component: ComponentCreator('/docs/actus-demo/server-curl-samples', 'dd7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/awesome-actus-lib/architecture',
                component: ComponentCreator('/docs/awesome-actus-lib/architecture', '292'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/awesome-actus-lib/awesome-actus-library',
                component: ComponentCreator('/docs/awesome-actus-lib/awesome-actus-library', 'd1a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/awesome-actus-lib/classes/ActusService',
                component: ComponentCreator('/docs/awesome-actus-lib/classes/ActusService', 'd3c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/awesome-actus-lib/classes/Analysis',
                component: ComponentCreator('/docs/awesome-actus-lib/classes/Analysis', '5cb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/awesome-actus-lib/classes/cashflowstream',
                component: ComponentCreator('/docs/awesome-actus-lib/classes/cashflowstream', '2b3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/awesome-actus-lib/classes/contractModel',
                component: ComponentCreator('/docs/awesome-actus-lib/classes/contractModel', '6f5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/awesome-actus-lib/classes/PAM',
                component: ComponentCreator('/docs/awesome-actus-lib/classes/PAM', '18f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/awesome-actus-lib/classes/Portfolio',
                component: ComponentCreator('/docs/awesome-actus-lib/classes/Portfolio', '3ac'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/awesome-actus-lib/classes/riskfactor',
                component: ComponentCreator('/docs/awesome-actus-lib/classes/riskfactor', '429'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/awesome-actus-lib/classes/RiskService',
                component: ComponentCreator('/docs/awesome-actus-lib/classes/RiskService', 'c3b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/1-extention-for-actus-risk-factors',
                component: ComponentCreator('/docs/category/1-extention-for-actus-risk-factors', '288'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/2-create-sample-risk-factors-in-mongodb',
                component: ComponentCreator('/docs/category/2-create-sample-risk-factors-in-mongodb', '724'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/3-simulate-actus-contract-with-market-risk-scenario',
                component: ComponentCreator('/docs/category/3-simulate-actus-contract-with-market-risk-scenario', '894'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/4-risk-modeling-for-contract-and-counterparty-behaviors',
                component: ComponentCreator('/docs/category/4-risk-modeling-for-contract-and-counterparty-behaviors', 'f30'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/5-future-enhancements-',
                component: ComponentCreator('/docs/category/5-future-enhancements-', 'a30'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/awesome-python-library',
                component: ComponentCreator('/docs/category/awesome-python-library', 'd25'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/introduction-to-actus',
                component: ComponentCreator('/docs/category/introduction-to-actus', 'de9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/competition',
                component: ComponentCreator('/docs/competition', '88e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/contract-terms/accruedInterest',
                component: ComponentCreator('/docs/contract-terms/accruedInterest', 'c33'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/contract-terms/amortizationDate',
                component: ComponentCreator('/docs/contract-terms/amortizationDate', '926'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/contract-terms/arrayCycleAnchorDateOfInterestPayment',
                component: ComponentCreator('/docs/contract-terms/arrayCycleAnchorDateOfInterestPayment', 'd1a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/contract-terms/arrayCycleAnchorDateOfPrincipalRedemption',
                component: ComponentCreator('/docs/contract-terms/arrayCycleAnchorDateOfPrincipalRedemption', 'c1b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/contract-terms/arrayCycleAnchorDateOfRateReset',
                component: ComponentCreator('/docs/contract-terms/arrayCycleAnchorDateOfRateReset', 'e36'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/contract-terms/arrayCycleOfInterestPayment',
                component: ComponentCreator('/docs/contract-terms/arrayCycleOfInterestPayment', '7e6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/contract-terms/arrayCycleOfPrincipalRedemption',
                component: ComponentCreator('/docs/contract-terms/arrayCycleOfPrincipalRedemption', '75f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/contract-terms/arrayCycleOfRateReset',
                component: ComponentCreator('/docs/contract-terms/arrayCycleOfRateReset', 'c77'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/contract-terms/arrayFixedVariable',
                component: ComponentCreator('/docs/contract-terms/arrayFixedVariable', '6cd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/contract-terms/arrayIncreaseDecrease',
                component: ComponentCreator('/docs/contract-terms/arrayIncreaseDecrease', '0a5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/contract-terms/arrayNextPrincipalRedemptionPayment',
                component: ComponentCreator('/docs/contract-terms/arrayNextPrincipalRedemptionPayment', 'e85'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/contract-terms/arrayRate',
                component: ComponentCreator('/docs/contract-terms/arrayRate', 'aa4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/contract-terms/boundaryCrossedFlag',
                component: ComponentCreator('/docs/contract-terms/boundaryCrossedFlag', 'cf9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/contract-terms/boundaryDirection',
                component: ComponentCreator('/docs/contract-terms/boundaryDirection', 'edf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/contract-terms/boundaryEffect',
                component: ComponentCreator('/docs/contract-terms/boundaryEffect', '99d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/contract-terms/boundaryLegInitiallyActive',
                component: ComponentCreator('/docs/contract-terms/boundaryLegInitiallyActive', '6e2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/contract-terms/boundaryMonitoringAnchorDate',
                component: ComponentCreator('/docs/contract-terms/boundaryMonitoringAnchorDate', '74b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/contract-terms/boundaryMonitoringCycle',
                component: ComponentCreator('/docs/contract-terms/boundaryMonitoringCycle', 'a15'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/contract-terms/boundaryMonitoringEndDate',
                component: ComponentCreator('/docs/contract-terms/boundaryMonitoringEndDate', '83e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/contract-terms/boundaryValue',
                component: ComponentCreator('/docs/contract-terms/boundaryValue', '78f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/contract-terms/businessDayConvention',
                component: ComponentCreator('/docs/contract-terms/businessDayConvention', '44e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/contract-terms/calendar',
                component: ComponentCreator('/docs/contract-terms/calendar', '4ff'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/contract-terms/capitalizationEndDate',
                component: ComponentCreator('/docs/contract-terms/capitalizationEndDate', '6e7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/contract-terms/clearingHouse',
                component: ComponentCreator('/docs/contract-terms/clearingHouse', 'eab'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/contract-terms/contract-terms-overview',
                component: ComponentCreator('/docs/contract-terms/contract-terms-overview', '0d5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/contract-terms/contractDealDate',
                component: ComponentCreator('/docs/contract-terms/contractDealDate', '129'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/contract-terms/contractID',
                component: ComponentCreator('/docs/contract-terms/contractID', '559'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/contract-terms/contractPerformance',
                component: ComponentCreator('/docs/contract-terms/contractPerformance', 'ca6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/contract-terms/contractRole',
                component: ComponentCreator('/docs/contract-terms/contractRole', '341'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/contract-terms/contractStructure',
                component: ComponentCreator('/docs/contract-terms/contractStructure', 'b41'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/contract-terms/contractType',
                component: ComponentCreator('/docs/contract-terms/contractType', 'a83'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/contract-terms/counterpartyID',
                component: ComponentCreator('/docs/contract-terms/counterpartyID', '41e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/contract-terms/coverageOfCreditEnhancement',
                component: ComponentCreator('/docs/contract-terms/coverageOfCreditEnhancement', 'a5d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/contract-terms/creatorID',
                component: ComponentCreator('/docs/contract-terms/creatorID', '70f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/contract-terms/creditEventTypeCovered',
                component: ComponentCreator('/docs/contract-terms/creditEventTypeCovered', '58a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/contract-terms/creditLineAmount',
                component: ComponentCreator('/docs/contract-terms/creditLineAmount', '70c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/contract-terms/currency',
                component: ComponentCreator('/docs/contract-terms/currency', '983'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/contract-terms/currency2',
                component: ComponentCreator('/docs/contract-terms/currency2', '205'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/contract-terms/cycleAnchorDateOfDividend',
                component: ComponentCreator('/docs/contract-terms/cycleAnchorDateOfDividend', '08c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/contract-terms/cycleAnchorDateOfFee',
                component: ComponentCreator('/docs/contract-terms/cycleAnchorDateOfFee', '588'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/contract-terms/cycleAnchorDateOfInterestCalculationBase',
                component: ComponentCreator('/docs/contract-terms/cycleAnchorDateOfInterestCalculationBase', 'da5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/contract-terms/cycleAnchorDateOfInterestPayment',
                component: ComponentCreator('/docs/contract-terms/cycleAnchorDateOfInterestPayment', '768'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/contract-terms/cycleAnchorDateOfMargining',
                component: ComponentCreator('/docs/contract-terms/cycleAnchorDateOfMargining', '6b7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/contract-terms/cycleAnchorDateOfOptionality',
                component: ComponentCreator('/docs/contract-terms/cycleAnchorDateOfOptionality', '2f7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/contract-terms/cycleAnchorDateOfPrincipalRedemption',
                component: ComponentCreator('/docs/contract-terms/cycleAnchorDateOfPrincipalRedemption', 'c6b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/contract-terms/cycleAnchorDateOfRateReset',
                component: ComponentCreator('/docs/contract-terms/cycleAnchorDateOfRateReset', '779'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/contract-terms/cycleAnchorDateOfScalingIndex',
                component: ComponentCreator('/docs/contract-terms/cycleAnchorDateOfScalingIndex', 'b84'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/contract-terms/cycleOfDividend',
                component: ComponentCreator('/docs/contract-terms/cycleOfDividend', '646'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/contract-terms/cycleOfFee',
                component: ComponentCreator('/docs/contract-terms/cycleOfFee', '8fd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/contract-terms/cycleOfInterestCalculationBase',
                component: ComponentCreator('/docs/contract-terms/cycleOfInterestCalculationBase', '81d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/contract-terms/cycleOfInterestPayment',
                component: ComponentCreator('/docs/contract-terms/cycleOfInterestPayment', '9ed'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/contract-terms/cycleOfMargining',
                component: ComponentCreator('/docs/contract-terms/cycleOfMargining', '9be'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/contract-terms/cycleOfOptionality',
                component: ComponentCreator('/docs/contract-terms/cycleOfOptionality', '7c6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/contract-terms/cycleOfPrincipalRedemption',
                component: ComponentCreator('/docs/contract-terms/cycleOfPrincipalRedemption', '06c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/contract-terms/cycleOfRateReset',
                component: ComponentCreator('/docs/contract-terms/cycleOfRateReset', '8ec'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/contract-terms/cycleOfScalingIndex',
                component: ComponentCreator('/docs/contract-terms/cycleOfScalingIndex', '92a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/contract-terms/cyclePointOfInterestPayment',
                component: ComponentCreator('/docs/contract-terms/cyclePointOfInterestPayment', 'cdd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/contract-terms/cyclePointOfRateReset',
                component: ComponentCreator('/docs/contract-terms/cyclePointOfRateReset', 'acc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/contract-terms/dayCountConvention',
                component: ComponentCreator('/docs/contract-terms/dayCountConvention', 'a26'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/contract-terms/delinquencyPeriod',
                component: ComponentCreator('/docs/contract-terms/delinquencyPeriod', '0fb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/contract-terms/delinquencyRate',
                component: ComponentCreator('/docs/contract-terms/delinquencyRate', '816'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/contract-terms/deliverySettlement',
                component: ComponentCreator('/docs/contract-terms/deliverySettlement', '209'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/contract-terms/endOfMonthConvention',
                component: ComponentCreator('/docs/contract-terms/endOfMonthConvention', '75c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/contract-terms/exDividendDate',
                component: ComponentCreator('/docs/contract-terms/exDividendDate', '1f6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/contract-terms/exerciseAmount',
                component: ComponentCreator('/docs/contract-terms/exerciseAmount', 'f96'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/contract-terms/exerciseDate',
                component: ComponentCreator('/docs/contract-terms/exerciseDate', 'cfe'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/contract-terms/feeAccrued',
                component: ComponentCreator('/docs/contract-terms/feeAccrued', '347'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/contract-terms/feeBasis',
                component: ComponentCreator('/docs/contract-terms/feeBasis', '067'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/contract-terms/feeRate',
                component: ComponentCreator('/docs/contract-terms/feeRate', 'dc8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/contract-terms/fixingPeriod',
                component: ComponentCreator('/docs/contract-terms/fixingPeriod', 'ab9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/contract-terms/futuresPrice',
                component: ComponentCreator('/docs/contract-terms/futuresPrice', 'a9a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/contract-terms/gracePeriod',
                component: ComponentCreator('/docs/contract-terms/gracePeriod', 'c02'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/contract-terms/guaranteedExposure',
                component: ComponentCreator('/docs/contract-terms/guaranteedExposure', 'b4e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/contract-terms/initialExchangeDate',
                component: ComponentCreator('/docs/contract-terms/initialExchangeDate', '805'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/contract-terms/initialMargin',
                component: ComponentCreator('/docs/contract-terms/initialMargin', 'c2f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/contract-terms/interestCalculationBase',
                component: ComponentCreator('/docs/contract-terms/interestCalculationBase', 'cae'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/contract-terms/interestCalculationBaseAmount',
                component: ComponentCreator('/docs/contract-terms/interestCalculationBaseAmount', '92e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/contract-terms/interestScalingMultiplier',
                component: ComponentCreator('/docs/contract-terms/interestScalingMultiplier', 'fc5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/contract-terms/lifeCap',
                component: ComponentCreator('/docs/contract-terms/lifeCap', '62f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/contract-terms/lifeFloor',
                component: ComponentCreator('/docs/contract-terms/lifeFloor', '4c7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/contract-terms/maintenanceMarginLowerBound',
                component: ComponentCreator('/docs/contract-terms/maintenanceMarginLowerBound', '56d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/contract-terms/maintenanceMarginUpperBound',
                component: ComponentCreator('/docs/contract-terms/maintenanceMarginUpperBound', 'b64'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/contract-terms/marketObjectCode',
                component: ComponentCreator('/docs/contract-terms/marketObjectCode', 'f1b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/contract-terms/marketObjectCodeOfRateReset',
                component: ComponentCreator('/docs/contract-terms/marketObjectCodeOfRateReset', '74d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/contract-terms/marketObjectCodeOfScalingIndex',
                component: ComponentCreator('/docs/contract-terms/marketObjectCodeOfScalingIndex', '3f8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/contract-terms/marketValueObserved',
                component: ComponentCreator('/docs/contract-terms/marketValueObserved', '92a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/contract-terms/maturityDate',
                component: ComponentCreator('/docs/contract-terms/maturityDate', 'bd0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/contract-terms/maximumPenaltyFreeDisbursement',
                component: ComponentCreator('/docs/contract-terms/maximumPenaltyFreeDisbursement', '0b8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/contract-terms/nextDividendPaymentAmount',
                component: ComponentCreator('/docs/contract-terms/nextDividendPaymentAmount', '756'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/contract-terms/nextPrincipalRedemptionPayment',
                component: ComponentCreator('/docs/contract-terms/nextPrincipalRedemptionPayment', '5a5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/contract-terms/nextResetRate',
                component: ComponentCreator('/docs/contract-terms/nextResetRate', '130'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/contract-terms/nominalInterestRate',
                component: ComponentCreator('/docs/contract-terms/nominalInterestRate', 'b03'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/contract-terms/nominalInterestRate2',
                component: ComponentCreator('/docs/contract-terms/nominalInterestRate2', '42f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/contract-terms/nonPerformingDate',
                component: ComponentCreator('/docs/contract-terms/nonPerformingDate', '360'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/contract-terms/notionalPrincipal',
                component: ComponentCreator('/docs/contract-terms/notionalPrincipal', 'a9c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/contract-terms/notionalPrincipal2',
                component: ComponentCreator('/docs/contract-terms/notionalPrincipal2', 'a3e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/contract-terms/notionalScalingMultiplier',
                component: ComponentCreator('/docs/contract-terms/notionalScalingMultiplier', '479'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/contract-terms/optionExerciseEndDate',
                component: ComponentCreator('/docs/contract-terms/optionExerciseEndDate', '794'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/contract-terms/optionExerciseType',
                component: ComponentCreator('/docs/contract-terms/optionExerciseType', '60c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/contract-terms/optionStrike1',
                component: ComponentCreator('/docs/contract-terms/optionStrike1', '6e1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/contract-terms/optionStrike2',
                component: ComponentCreator('/docs/contract-terms/optionStrike2', 'f1a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/contract-terms/optionType',
                component: ComponentCreator('/docs/contract-terms/optionType', '207'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/contract-terms/penaltyRate',
                component: ComponentCreator('/docs/contract-terms/penaltyRate', '755'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/contract-terms/penaltyType',
                component: ComponentCreator('/docs/contract-terms/penaltyType', '6f8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/contract-terms/periodCap',
                component: ComponentCreator('/docs/contract-terms/periodCap', '9af'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/contract-terms/periodFloor',
                component: ComponentCreator('/docs/contract-terms/periodFloor', '6a6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/contract-terms/premiumDiscountAtIED',
                component: ComponentCreator('/docs/contract-terms/premiumDiscountAtIED', '5a7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/contract-terms/prepaymentEffect',
                component: ComponentCreator('/docs/contract-terms/prepaymentEffect', '8d4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/contract-terms/prepaymentPeriod',
                component: ComponentCreator('/docs/contract-terms/prepaymentPeriod', 'e20'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/contract-terms/priceAtPurchaseDate',
                component: ComponentCreator('/docs/contract-terms/priceAtPurchaseDate', '793'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/contract-terms/priceAtTerminationDate',
                component: ComponentCreator('/docs/contract-terms/priceAtTerminationDate', '221'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/contract-terms/purchaseDate',
                component: ComponentCreator('/docs/contract-terms/purchaseDate', '30f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/contract-terms/quantity',
                component: ComponentCreator('/docs/contract-terms/quantity', '8ea'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/contract-terms/rateMultiplier',
                component: ComponentCreator('/docs/contract-terms/rateMultiplier', 'c46'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/contract-terms/rateSpread',
                component: ComponentCreator('/docs/contract-terms/rateSpread', '64e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/contract-terms/scalingEffect',
                component: ComponentCreator('/docs/contract-terms/scalingEffect', '577'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/contract-terms/scalingIndexAtContractDealDate',
                component: ComponentCreator('/docs/contract-terms/scalingIndexAtContractDealDate', '113'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/contract-terms/seniority',
                component: ComponentCreator('/docs/contract-terms/seniority', '6f1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/contract-terms/settlementCurrency',
                component: ComponentCreator('/docs/contract-terms/settlementCurrency', 'b7c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/contract-terms/settlementPeriod',
                component: ComponentCreator('/docs/contract-terms/settlementPeriod', 'ee7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/contract-terms/statusDate',
                component: ComponentCreator('/docs/contract-terms/statusDate', '678'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/contract-terms/terminationDate',
                component: ComponentCreator('/docs/contract-terms/terminationDate', '55d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/contract-terms/unit',
                component: ComponentCreator('/docs/contract-terms/unit', '1f5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/contract-terms/variationMargin',
                component: ComponentCreator('/docs/contract-terms/variationMargin', 'a06'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/contract-terms/xDayNotice',
                component: ComponentCreator('/docs/contract-terms/xDayNotice', '18a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/contract-types/ANN',
                component: ComponentCreator('/docs/contract-types/ANN', '64f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/contract-types/BCS',
                component: ComponentCreator('/docs/contract-types/BCS', '56e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/contract-types/CAPFL',
                component: ComponentCreator('/docs/contract-types/CAPFL', '2ed'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/contract-types/CEC',
                component: ComponentCreator('/docs/contract-types/CEC', '6a7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/contract-types/CEG',
                component: ComponentCreator('/docs/contract-types/CEG', 'bde'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/contract-types/CLM',
                component: ComponentCreator('/docs/contract-types/CLM', 'ce5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/contract-types/COM',
                component: ComponentCreator('/docs/contract-types/COM', 'bcf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/contract-types/CSH',
                component: ComponentCreator('/docs/contract-types/CSH', 'e8c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/contract-types/FUTUR',
                component: ComponentCreator('/docs/contract-types/FUTUR', '0c7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/contract-types/FXOUT',
                component: ComponentCreator('/docs/contract-types/FXOUT', 'e96'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/contract-types/LAM',
                component: ComponentCreator('/docs/contract-types/LAM', '040'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/contract-types/LAX',
                component: ComponentCreator('/docs/contract-types/LAX', '636'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/contract-types/NAM',
                component: ComponentCreator('/docs/contract-types/NAM', '30d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/contract-types/OPTN',
                component: ComponentCreator('/docs/contract-types/OPTN', '668'),
                exact: true
              },
              {
                path: '/docs/contract-types/OPTNS',
                component: ComponentCreator('/docs/contract-types/OPTNS', '3b9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/contract-types/PAM',
                component: ComponentCreator('/docs/contract-types/PAM', '8a6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/contract-types/STK',
                component: ComponentCreator('/docs/contract-types/STK', 'a41'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/contract-types/SWAP',
                component: ComponentCreator('/docs/contract-types/SWAP', 'b62'),
                exact: true
              },
              {
                path: '/docs/contract-types/SWAPS',
                component: ComponentCreator('/docs/contract-types/SWAPS', 'fa2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/contract-types/SWPPV',
                component: ComponentCreator('/docs/contract-types/SWPPV', 'f73'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/contract-types/UMP',
                component: ComponentCreator('/docs/contract-types/UMP', '047'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/dadfir3-demo/About',
                component: ComponentCreator('/docs/dadfir3-demo/About', '3d0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/dadfir3-demo/ACTUS Rshiny Demo Guide',
                component: ComponentCreator('/docs/dadfir3-demo/ACTUS Rshiny Demo Guide', '64a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/dadfir3-demo/Demo User Guide',
                component: ComponentCreator('/docs/dadfir3-demo/Demo User Guide', '693'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/examples/advanced-examples/portfolioExample',
                component: ComponentCreator('/docs/examples/advanced-examples/portfolioExample', '1c5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/examples/advanced-examples/singleContract',
                component: ComponentCreator('/docs/examples/advanced-examples/singleContract', 'd21'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/examples/advanced-examples/VaR_example',
                component: ComponentCreator('/docs/examples/advanced-examples/VaR_example', '076'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/examples/basic-contract-types/example_ANN',
                component: ComponentCreator('/docs/examples/basic-contract-types/example_ANN', '04a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/examples/basic-contract-types/example_BCS',
                component: ComponentCreator('/docs/examples/basic-contract-types/example_BCS', '06d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/examples/basic-contract-types/example_CAPFL',
                component: ComponentCreator('/docs/examples/basic-contract-types/example_CAPFL', '60f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/examples/basic-contract-types/example_CEC',
                component: ComponentCreator('/docs/examples/basic-contract-types/example_CEC', '792'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/examples/basic-contract-types/example_CEG',
                component: ComponentCreator('/docs/examples/basic-contract-types/example_CEG', '16d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/examples/basic-contract-types/example_CLM',
                component: ComponentCreator('/docs/examples/basic-contract-types/example_CLM', '3e9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/examples/basic-contract-types/example_COM',
                component: ComponentCreator('/docs/examples/basic-contract-types/example_COM', 'd5c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/examples/basic-contract-types/example_CSH',
                component: ComponentCreator('/docs/examples/basic-contract-types/example_CSH', '39a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/examples/basic-contract-types/example_FUTUR',
                component: ComponentCreator('/docs/examples/basic-contract-types/example_FUTUR', '5b6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/examples/basic-contract-types/example_FXOUT',
                component: ComponentCreator('/docs/examples/basic-contract-types/example_FXOUT', 'ae4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/examples/basic-contract-types/example_LAM',
                component: ComponentCreator('/docs/examples/basic-contract-types/example_LAM', 'a77'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/examples/basic-contract-types/example_LAX',
                component: ComponentCreator('/docs/examples/basic-contract-types/example_LAX', 'f43'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/examples/basic-contract-types/example_NAM',
                component: ComponentCreator('/docs/examples/basic-contract-types/example_NAM', '625'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/examples/basic-contract-types/example_OPTNS',
                component: ComponentCreator('/docs/examples/basic-contract-types/example_OPTNS', 'ff8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/examples/basic-contract-types/example_PAM',
                component: ComponentCreator('/docs/examples/basic-contract-types/example_PAM', '0f6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/examples/basic-contract-types/example_STK',
                component: ComponentCreator('/docs/examples/basic-contract-types/example_STK', '7b7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/examples/basic-contract-types/example_SWAPS',
                component: ComponentCreator('/docs/examples/basic-contract-types/example_SWAPS', 'd29'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/examples/basic-contract-types/example_SWPPV',
                component: ComponentCreator('/docs/examples/basic-contract-types/example_SWPPV', '4b7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/examples/basic-contract-types/example_UMP',
                component: ComponentCreator('/docs/examples/basic-contract-types/example_UMP', 'c0e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/getting-started/basic-usage',
                component: ComponentCreator('/docs/getting-started/basic-usage', 'd9d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/getting-started/configuration',
                component: ComponentCreator('/docs/getting-started/configuration', '468'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/getting-started/installation',
                component: ComponentCreator('/docs/getting-started/installation', '267'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/guides/common-patterns',
                component: ComponentCreator('/docs/guides/common-patterns', 'b47'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/guides/troubleshooting',
                component: ComponentCreator('/docs/guides/troubleshooting', '69b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', '61d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Introduction/Benefits of ACTUS',
                component: ComponentCreator('/docs/Introduction/Benefits of ACTUS', 'ffe'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Introduction/core_activities',
                component: ComponentCreator('/docs/Introduction/core_activities', '02b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Introduction/Model-for-analytics',
                component: ComponentCreator('/docs/Introduction/Model-for-analytics', 'd80'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Introduction/Overview',
                component: ComponentCreator('/docs/Introduction/Overview', '728'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Introduction/Understanding-Financial-Contracts-and-Systems',
                component: ComponentCreator('/docs/Introduction/Understanding-Financial-Contracts-and-Systems', '184'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/license',
                component: ComponentCreator('/docs/license', '773'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/quickstart',
                component: ComponentCreator('/docs/quickstart', '79e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/RiskFactors/Improvements/extensions',
                component: ComponentCreator('/docs/RiskFactors/Improvements/extensions', '8f0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/RiskFactors/overview/',
                component: ComponentCreator('/docs/RiskFactors/overview/', 'ee6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/RiskFactors/Risk modelling/activating_behaviour_model',
                component: ComponentCreator('/docs/RiskFactors/Risk modelling/activating_behaviour_model', '340'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/RiskFactors/Risk modelling/Distinguishing',
                component: ComponentCreator('/docs/RiskFactors/Risk modelling/Distinguishing', 'a97'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/RiskFactors/Risk modelling/Example_of_contract',
                component: ComponentCreator('/docs/RiskFactors/Risk modelling/Example_of_contract', '42f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/RiskFactors/Risk modelling/Output',
                component: ComponentCreator('/docs/RiskFactors/Risk modelling/Output', '6db'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/RiskFactors/Risk modelling/sample_2d_payment_model',
                component: ComponentCreator('/docs/RiskFactors/Risk modelling/sample_2d_payment_model', 'c6b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/RiskFactors/Simulating an ACTUS contract/output_cashflow_event_series',
                component: ComponentCreator('/docs/RiskFactors/Simulating an ACTUS contract/output_cashflow_event_series', '804'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/RiskFactors/Simulating an ACTUS contract/simple_ACTUS_contract',
                component: ComponentCreator('/docs/RiskFactors/Simulating an ACTUS contract/simple_ACTUS_contract', '861'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/RiskFactors/Simulating an ACTUS contract/with_risk',
                component: ComponentCreator('/docs/RiskFactors/Simulating an ACTUS contract/with_risk', '366'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/RiskFactors/Using mongodb ACTUS risk database/Initialize_and_view_your_persistent_risk_factor_store_in_MongoDB',
                component: ComponentCreator('/docs/RiskFactors/Using mongodb ACTUS risk database/Initialize_and_view_your_persistent_risk_factor_store_in_MongoDB', 'c2c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/RiskFactors/Using mongodb ACTUS risk database/Inserting_Sample_Risk_Data_Reference_Indexes',
                component: ComponentCreator('/docs/RiskFactors/Using mongodb ACTUS risk database/Inserting_Sample_Risk_Data_Reference_Indexes', '3f5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/standard/core-concepts',
                component: ComponentCreator('/docs/standard/core-concepts', 'aed'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/standard/overview',
                component: ComponentCreator('/docs/standard/overview', '199'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'e5f'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
