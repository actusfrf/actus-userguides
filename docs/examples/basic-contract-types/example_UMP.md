# Basic UMP Example

## Contract Definition
```python
import pandas as pd
from awesome_actus_lib import UMP, PublicActusService

contract = UMP(
    contractID="ump01",
    statusDate="2012-12-15T00:00:00",
    contractRole="RPA",
    currency="USD",
    contractDealDate="2012-12-15T00:00:00",
    initialExchangeDate="2013-01-01T00:00:00",
    notionalPrincipal=1000,
    dayCountConvention='30E360',
    xDayNotice="P1M",
    nominalInterestRate=0,
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
| IED    | 2013-01-01T00:00 |    -1000 | USD        |           1000 |             0 |                0 | ump01        |
