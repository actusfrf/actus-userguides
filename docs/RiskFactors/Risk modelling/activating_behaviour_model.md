---
sidebar_position: 3
---
# Activating the Model for Simulation  

Once a **prepayment behavior model** is included in a risk scenario, individual contracts must specify which behavior models to activate during simulation.  

---

## 1. Why is Activation Needed?  

- **Risk scenarios** list all available behavior models, but not all contracts need every model.  
- **Each contract must specify the relevant behavior models** for accurate risk modeling.  
- Example:  
  - A **loan contract** may need a **prepayment risk model**.  
  - An **American Option contract** would require an **option exercise model**, not a prepayment model.  

---

## 2. User-Defined Contract Terms  

ACTUS contracts can include **custom user-defined terms**. These terms:  
- Are not processed by the **actus-service** directly.  
- Are passed to the **actus-riskservice** during simulation.  

### Prepayment Model Activation  

- The term `"prepaymentModels"` specifies **which prepayment model instances** should be used when simulating a contract.  
- If the specified model is **not available** in the scenario, an **error occurs**.  
- If available, it is **activated for the contract's simulation**.  

---

## 3. Running a Contract Simulation with a Prepayment Model  

To run a contract simulation using a prepayment model, use:  

```bash
 source ppm01PAMwRF_ss.txt
```
# What This Command Does

- Runs an **ACTUS simulation** for the contract `"PAMwRF"`.  
- Uses the **risk scenario** `"scn02"`, which includes the prepayment model `"ppm01"`.  
- Activates `"ppm01"` for prepayment modeling by including the user-defined term.  

```json
"prepaymentModels": ["ppm01"]
```
- Uses the simulation command:
```bash
/rf2/scenarioSimulation
```
instead of the standard /rf2/eventsBatch
