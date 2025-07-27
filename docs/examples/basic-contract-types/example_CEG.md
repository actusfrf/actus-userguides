# Basic CEG Example

## Contract Definition
```python
import pandas as pd
from awesome_actus_lib import CEG, PublicActusService

contract = CEG(
    contractID="guarantee01",
    contractRole="BUY",
    guaranteedExposure="NO",
    contractStructure=[{'object': {'contractIdentifier': 'US91282XYZ01'}, 'referenceType': 'CID', 'referenceRole': 'COVE'}],
    currency="USD",
    calendar="NC",
    contractDealDate="2020-01-01T00:00:00",
    statusDate="2020-01-01T00:00:00",
    purchaseDate="2020-01-02T00:00:00",
    priceAtPurchaseDate=10,
    maturityDate="2020-12-31T00:00:00",
    notionalPrincipal=1000000,
    creditEventTypeCovered="DF",
    settlementPeriod="P0D",
    creatorID="Creator-01",
    counterpartyID="Counterparty-01"
)

service = PublicActusService()
event_stream = service.generateEvents(portfolio=contract, riskFactors=[])
print(event_stream.events_df)

```

## Generated Events
| type   | time             |   payoff | currency   |   nominalValue |   nominalRate |   nominalAccrued | contractId   |
|:-------|:-----------------|---------:|:-----------|---------------:|--------------:|-----------------:|:-------------|
| PRD    | 2020-01-02T00:00 |      -10 | USD        |          1e+06 |             0 |                0 | guarantee01  |
| MD     | 2020-12-31T00:00 |        0 | USD        |          0     |             0 |                0 | guarantee01  |
