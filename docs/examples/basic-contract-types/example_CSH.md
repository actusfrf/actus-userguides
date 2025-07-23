# Basic CSH Example

## Contract Definition
```python
import pandas as pd
from awesome_actus_lib import CSH, PublicActusService

contract = CSH(
    statusDate="2015-07-15T00:00:00",
    contractRole="RPA",
    contractID="csh01",
    currency="CHF",
    notionalPrincipal=1000,
    creatorID="Creator-01",
    counterpartyID="Counterparty-01"
)

service = PublicActusService()
event_stream = service.generateEvents(portfolio=contract, riskFactors=[])
print(event_stream.events_df)

```

## Generated Events
*No events generated or DataFrame is empty.*
