# Basic LAX Example

## Contract Definition
```python
import pandas as pd
from awesome_actus_lib import LAX, PublicActusService

contract = LAX(
    contractID="lax01",
    creatorID="Creator-01",
    counterpartyID="Counterparty-01",
    statusDate="2020-01-01T00:00:00",
    contractRole="RPA",
    calendar="NC",
    businessDayConvention="SCF",
    endOfMonthConvention="SD",
    currency="EUR",
    contractDealDate="2020-01-01T00:00:00",
    initialExchangeDate="2020-01-02T00:00:00",
    maturityDate="2024-12-31T00:00:00",
    notionalPrincipal=100,
    arrayCycleAnchorDateOfInterestPayment="2021-01-01T00:00:00",
    arrayCycleOfInterestPayment="P1YL1",
    nominalInterestRate=0.05,
    dayCountConvention='30E360',
    arrayCycleAnchorDateOfPrincipalRedemption="2021-01-01T00:00:00",
    arrayCycleOfPrincipalRedemption="P1YL1",
    arrayNextPrincipalRedemptionPayment=20,
    arrayIncreaseDecrease="DEC"
)

service = PublicActusService()
event_stream = service.generateEvents(portfolio=contract, riskFactors=[])
print(event_stream.events_df)

```

## Generated Events
| type   | time                          |     payoff | currency   |   nominalValue |   nominalRate |   nominalAccrued | contractId   |
|:-------|:------------------------------|-----------:|:-----------|---------------:|--------------:|-----------------:|:-------------|
| IED    | 2020-01-02T00:00              | -100       | EUR        |            100 |          0.05 |          0       | lax01        |
| PR     | 2021-01-01T00:00              |   20       | EUR        |             80 |          0.05 |          4.98611 | lax01        |
| IP     | 2021-01-01T00:00              |    4.98611 | EUR        |             80 |          0.05 |          0       | lax01        |
| PR     | 2022-01-01T00:00              |   20       | EUR        |             60 |          0.05 |          4       | lax01        |
| IP     | 2022-01-01T00:00              |    4       | EUR        |             60 |          0.05 |          0       | lax01        |
| PR     | 2023-01-01T00:00              |   20       | EUR        |             40 |          0.05 |          3       | lax01        |
| IP     | 2023-01-01T00:00              |    3       | EUR        |             40 |          0.05 |          0       | lax01        |
| PR     | 2024-01-01T00:00              |   20       | EUR        |             20 |          0.05 |          2       | lax01        |
| IP     | 2024-01-01T00:00              |    2       | EUR        |             20 |          0.05 |          0       | lax01        |
| PR     | 2025-01-01T00:00              |   20       | EUR        |              0 |          0.05 |          1       | lax01        |
| IP     | 2025-01-01T00:00              |    1       | EUR        |              0 |          0.05 |          0       | lax01        |
| PR     | 2026-01-01T00:00              |    0       | EUR        |              0 |          0.05 |          0       | lax01        |
| IP     | 2026-01-01T00:00              |    0       | EUR        |              0 |          0.05 |          0       | lax01        |
| PR     | 2027-01-01T00:00              |    0       | EUR        |              0 |          0.05 |          0       | lax01        |
| IP     | 2027-01-01T00:00              |    0       | EUR        |              0 |          0.05 |          0       | lax01        |
| PR     | 2028-01-01T00:00              |    0       | EUR        |              0 |          0.05 |          0       | lax01        |
| IP     | 2028-01-01T00:00              |    0       | EUR        |              0 |          0.05 |          0       | lax01        |
| PR     | 2029-01-01T00:00              |    0       | EUR        |              0 |          0.05 |          0       | lax01        |
| IP     | 2029-01-01T00:00              |    0       | EUR        |              0 |          0.05 |          0       | lax01        |
| PR     | 2030-01-01T00:00              |    0       | EUR        |              0 |          0.05 |          0       | lax01        |
| IP     | 2030-01-01T00:00              |    0       | EUR        |              0 |          0.05 |          0       | lax01        |
| IP     | 2030-06-26T16:50:27.115721636 |    0       | EUR        |              0 |          0.05 |          0       | lax01        |
| MD     | 2030-06-26T16:50:27.115721636 |    0       | EUR        |              0 |          0.05 |          0       | lax01        |
