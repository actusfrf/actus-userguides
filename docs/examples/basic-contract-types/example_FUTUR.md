# Basic FUTUR Example

## Contract Definition
```python
import pandas as pd
from awesome_actus_lib import FUTUR, PublicActusService, ReferenceIndex

contract = FUTUR(
    contractID="future01",
    contractRole="BUY",
    contractStructure=[{'object': {'marketObjectCode': 'AAPL'}, 'referenceType': 'MOC', 'referenceRole': 'UDL'}],
    currency="USD",
    calendar="NC",
    contractDealDate="2020-01-01T00:00:00",
    statusDate="2020-01-01T00:00:00",
    purchaseDate="2020-01-02T00:00:00",
    priceAtPurchaseDate=10,
    maturityDate="2020-03-30T00:00:00",
    futuresPrice=80,
    settlementPeriod="P0D",
    deliverySettlement="S",
    creatorID="Creator-01",
    counterpartyID="Counterparty-01"
)
rf_data_AAPL = pd.DataFrame({
    "date": ["2020-03-30", "2020-06-30", "2020-09-30"],
    "value": [63.70, 91.20, 115.81]
})
rf_AAPL = ReferenceIndex(marketObjectCode="AAPL", source=rf_data_AAPL)
rf_data_MSFT = pd.DataFrame({
    "date": ["2020-03-30", "2020-06-30", "2020-09-30"],
    "value": [160.23, 203.50, 210.33]
})
rf_MSFT = ReferenceIndex(marketObjectCode="MSFT", source=rf_data_MSFT)
service = PublicActusService()
event_stream = service.generateEvents(portfolio=contract, riskFactors=[rf_AAPL, rf_MSFT])
print(event_stream.events_df)

```

## Generated Events
| type   | time             |   payoff | currency   |   nominalValue |   nominalRate |   nominalAccrued | contractId   |
|:-------|:-----------------|---------:|:-----------|---------------:|--------------:|-----------------:|:-------------|
| PRD    | 2020-01-02T00:00 |    -10   | USD        |              0 |             0 |                0 | future01     |
| MD     | 2020-03-30T00:00 |      0   | USD        |              0 |             0 |                0 | future01     |
| XD     | 2020-03-30T00:00 |      0   | USD        |              0 |             0 |                0 | future01     |
| STD    | 2020-03-30T00:00 |    -16.3 | USD        |              0 |             0 |                0 | future01     |
