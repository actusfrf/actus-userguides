# Basic CEC Example

## Contract Definition
```python
import pandas as pd
from awesome_actus_lib import CEC, PublicActusService, ReferenceIndex

contract = CEC(
    contractID="collateral01",
    contractRole="BUY",
    guaranteedExposure="NO",
    contractStructure=[{'object': {'contractType': 'PAM', 'contractID': 'US91282XYZ01', 'statusDate': '2020-01-01T00:00:00', 'contractDealDate': '2020-01-01T00:00:00', 'currency': 'USD', 'notionalPrincipal': '1000000', 'initialExchangeDate': '2020-01-02T00:00:00', 'maturityDate': '2020-12-31T00:00:00', 'nominalInterestRate': '0.03', 'cycleAnchorDateOfInterestPayment': '2020-02-01T00:00:00', 'cycleOfInterestPayment': 'P1ML0', 'dayCountConvention': 'A365', 'endOfMonthConvention': 'SD', 'contractRole': 'RPA'}, 'referenceType': 'CNT', 'referenceRole': 'COVE'}, {'object': {'contractType': 'COM', 'contractID': 'GOLD01X12DF3VW', 'statusDate': '2020-01-01T00:00:00', 'contractDealDate': '2020-01-01T00:00:00', 'currency': 'USD', 'contractRole': 'RPA', 'creatorId': 'PartyXYZ', 'marketObjectCode': 'GOLD', 'quantity': '1', 'unit': 'ONC'}, 'referenceType': 'CNT', 'referenceRole': 'COVI'}],
    currency="USD",
    calendar="NC",
    contractDealDate="2020-01-01T00:00:00",
    statusDate="2020-01-01T00:00:00",
    creditEventTypeCovered="DF",
    settlementPeriod="P0D",
    creatorID="Creator-01",
    counterpartyID="Counterparty-01"
)
rf_data_GOLD = pd.DataFrame({
    "date": ["2020-09-19"],
    "value": [10000000]
})
rf_GOLD = ReferenceIndex(marketObjectCode="GOLD", source=rf_data_GOLD)
service = PublicActusService()
event_stream = service.generateEvents(portfolio=contract, riskFactors=[rf_GOLD])
print(event_stream.events_df)

```

## Generated Events
| type   | time             |   payoff | currency   |   nominalValue |   nominalRate |   nominalAccrued | contractId   |
|:-------|:-----------------|---------:|:-----------|---------------:|--------------:|-----------------:|:-------------|
| MD     | 2020-12-31T00:00 |        0 | USD        |              0 |             0 |                0 | collateral01 |
