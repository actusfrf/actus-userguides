# Basic COM Example

## Contract Definition
```python
import pandas as pd
from awesome_actus_lib import COM, PublicActusService

contract = COM(
    contractID="com01",
    statusDate="2014-12-30T00:00:00",
    contractDealDate="2014-12-15T00:00:00",
    purchaseDate="2015-03-30T00:00:00",
    priceAtPurchaseDate=700,
    contractRole="RPL",
    currency="USD",
    quantity=2,
    unit="BRL",
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
| PRD    | 2015-03-30T00:00 |     1400 | USD        |              0 |             0 |                0 | com01        |
