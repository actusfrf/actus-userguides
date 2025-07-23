# Basic STK Example

## Contract Definition
```python
import pandas as pd
from awesome_actus_lib import STK, PublicActusService

contract = STK(
    contractID="stk01",
    contractRole="RPA",
    contractDealDate="2012-12-28T00:00:00",
    statusDate="2012-12-30T00:00:00",
    notionalPrincipal=1000,
    currency="USD",
    purchaseDate="2013-01-01T00:00:00",
    priceAtPurchaseDate=1100,
    endOfMonthConvention="EOM",
    quantity=1,
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
| PRD    | 2013-01-01T00:00 |    -1100 | USD        |              0 |             0 |                0 | stk01        |
