---
sidebar_position: 4
---

# Market Risk vs. Behavior Risk 

ACTUS simulations can run under two different scenarios:  

1. **Market Risk Only (`scn01`)**  
2. **Market Risk + Behavior Modeling (`scn02`)**  

These scenarios determine how market data is processed during simulation.  

---

## 1. Market Risk Only Scenario (`scn01`)  

- **Uses `/rf2/eventsBatch` simulation request.**  
- **Optimization:**  
  - All contracts in the batch **use the same market data projections**.  
  - Market data is fetched **once** at the start and stored in memory.  
  - **No need for repeated lookups** during the simulation.  
  - Market data processing happens **entirely within the `actus-service`**.  

###   Why is this Efficient?  
- Since all contracts share the same market data, fetching it once and reusing it **saves computation time**.  
- The `actus-service` can **run the simulation independently** without repeatedly querying the `actus-riskservice`.  
---

## 2. Market Risk + Behavior Modeling Scenario (`scn02`)  

- **Uses `/rf2/scenarioSimulation` request.**  
- **Includes behavior risk modeling**, requiring **more interactions** between components.  

###   Key Differences from `scn01`
- Market data is needed in **two places**:  
  1. **`actus-service`** – For contract-specific cashflow logic.  
  2. **`actus-riskservice`** – For behavior modeling calculations.  
- Market data is **fetched dynamically** rather than stored in memory.  

###   How Does it Work?  
1. The `actus-service` requests market data **from the `actus-riskservice`** whenever needed.  
2. The `actus-service` also **sends the current contract state** to the `actus-riskservice` at each scheduled risk callout.  
3. The `actus-riskservice`:  
   - Retrieves the required market data.  
   - Computes behavior risk effects (e.g., prepayment adjustments).  
   - Returns the behavior impact as an **event** (or null if no impact) to the `actus-service`.  

---

## 3. Summary  

| Feature | Market Risk Only (`scn01`) | Market + Behavior Risk (`scn02`) |
|---------|----------------|----------------------|
| Simulation Command | `/rf2/eventsBatch` | `/rf2/scenarioSimulation` |
| Market Data Handling | Fetched **once**, stored in memory | Looked up dynamically when needed |
| Component Interaction | `actus-service` handles all market data | `actus-service` & `actus-riskservice` interact dynamically |
| Behavior Modeling |  Not included |  Used for contract behavior changes |

**Choosing the Right Simulation Mode:**  
- **Use `/rf2/eventsBatch` (`scn01`)** when simulating contracts **without behavior risk modeling** for **faster performance**.  
- **Use `/rf2/scenarioSimulation` (`scn02`)** when behavior modeling is **needed** (e.g., prepayment, defaults).  

This ensures simulations are both **efficient** and **accurate** based on the risk scenario being used.  
