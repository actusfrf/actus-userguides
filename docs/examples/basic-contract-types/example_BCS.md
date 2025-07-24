# Basic BCS Example

## Contract Definition
```python
import pandas as pd
from awesome_actus_lib import BCS, PublicActusService, ReferenceIndex

contract = BCS(
    contractID="brcsw01A",
    contractRole="BUY",
    boundaryValue=60,
    boundaryDirection="DECR",
    boundaryEffect="knockINFirstLeg",
    boundaryLegInitiallyActive="NULL",
    boundaryMonitoringAnchorDate="2020-01-01T00:00:00",
    boundaryMonitoringCycle="P1ML1",
    boundaryMonitoringEndDate="2020-03-30T00:00:00",
    statusDate="2020-01-01T00:00:00",
    boundaryCrossedFlag=False,
    currency="USD",
    calendar="NC",
    contractDealDate="2020-01-01T00:00:00",
    purchaseDate="2020-01-02T00:00:00",
    maturityDate="2020-03-30T00:00:00",
    priceAtPurchaseDate=10,
    settlementPeriod="P1D",
    deliverySettlement="S",
    contractStructure=[{'object': {'marketObjectCode': 'AAPL'}, 'referenceType': 'MOC', 'referenceRole': 'externalReferenceIndex'}, {'object': {'contractType': 'OPTNS', 'contractID': 'brcsw01A-leg1', 'contractRole': 'BUY', 'currency': 'USD', 'calendar': 'NC', 'statusDate': '2020-01-01T00:00:00', 'maturityDate': '2020-03-30T00:00:00', 'optionExerciseType': 'E', 'optionType': 'P', 'settlementPeriod': 'P1D', 'optionStrike1': '65', 'quantity': '5', 'contractStructure': [{'object': {'marketObjectCode': 'AAPL'}, 'referenceType': 'MOC', 'referenceRole': 'UDL'}]}, 'referenceType': 'CNT', 'referenceRole': 'FIL'}],
    creatorID="Creator-01",
    counterpartyID="Counterparty-01"
)
rf_data_AAPL = pd.DataFrame({
    "date": ["2020-01-01", "2020-02-01", "2020-03-01", "2020-03-30"],
    "value": [66.0, 60.0, 59.0, 58.0]
})
rf_AAPL = ReferenceIndex(marketObjectCode="AAPL", source=rf_data_AAPL)
service = PublicActusService()
event_stream = service.generateEvents(portfolio=contract, riskFactors=[rf_AAPL])
print(event_stream.events_df)

```

## Generated Events
| type   | time             |   payoff | currency   |   nominalValue |   nominalRate |   nominalAccrued | contractId   |
|:-------|:-----------------|---------:|:-----------|---------------:|--------------:|-----------------:|:-------------|
| PRD    | 2020-01-02T00:00 |      -10 | USD        |              0 |             0 |                0 | brcsw01A     |
| PRD    | 2020-02-01T00:00 |        0 | USD        |              0 |             0 |                0 | brcsw01A     |
| TD     | 2020-03-30T00:00 |        0 | USD        |              0 |             0 |                0 | brcsw01A     |
| MD     | 2020-03-30T00:00 |        0 | USD        |              0 |             0 |                0 | brcsw01A     |
| XD     | 2020-03-30T00:00 |        0 | USD        |              0 |             0 |                0 | brcsw01A     |
| STD    | 2020-03-31T00:00 |       -7 | USD        |              0 |             0 |                0 | brcsw01A     |
