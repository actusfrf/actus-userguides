---
sidebar_position: 2
---

# ACTUS Resources

## Introduction

This repository provides a comprehensive set of resources for understanding and utilizing the ACTUS (Algorithmic Contract Types Unified Standards) framework. The ACTUS framework standardizes the representation of financial contracts and facilitates the modeling, analysis, and management of financial instruments.

## Directory of Resources

### ACTUS Foundation

- **Home**: [ACTUS Financial Research Foundation](https://actusfrf.org)

### Data and Dictionaries

- **Contract Type List and Data Dictionary**: Detailed terms, conventions, and requirements
  - [Taxonomy](https://www.actusfrf.org/taxonomy)
  - [Dictionary](https://www.actusfrf.org/dictionary)
  - [JSON Dictionary](https://github.com/actusfrf/actus-dictionary)

### Technical Specifications

- **Mathematical Description of Contract Behavior**: Technical specs for each contract type
  - [Technical Specs](https://www.actusfrf.org/techspecs)
  - Note: May be compatible with zero-knowledge proofs

### Demos and Guides

- **ACTUS Public Server + Base Demo**: Illustrates cashflows for each contract type
  - [Public Server Demo](https://demo.actusfrf.org:8080)
    1. Select a contract type
    2. Click "DEMO CASE" for predefined examples
    3. Select an example
    4. Click "SEND"
- **User Guides**: Build applications using the ACTUS server in Python, R, etc.
  - [User Guides and Blog](https://github.com/actusfrf/actus-userguides)
- **Example Contracts**: Includes market risk factor data and cashflow simulations
  - [Example Contracts](https://github.com/actusfrf/actus-tests)

### Cloud Demos

- **RShiny Demo**: Demonstrates ACTUS contracts and portfolios with market risk scenarios

  - [Cloud RShiny Demo](https://dadfir3.shinyapps.io/DaDFiR3demo/)

- **Container Image User Guide**: Download and configure container images for standalone ACTUS-RShiny demos
  - [ACTUS-RShiny Demo Guide](https://github.com/actusfrf/actus-userguides/ACTUS-Rshiny-demo)

### Source Code and Docker

- **ACTUS Source Code**: Access the core contract logic by registering as a developer

  - [ACTUS Webapp](https://github.com/actusfrf/actus-webapp/)
  - [ACTUS Core](https://github.com/actusfrf/actus-core)
  - Register at [ACTUS Developers](https://www.actusfrf.org/developers)

- **Supporting R Services**: Source code for the RShiny demo application
  - [FEMSdevPkg](https://github.com/fnparr/FEMSdevPkg)
- **Docker Containers**: Source code for docker containers used in standalone workstation demos
  - [Docker-ACTUS](https://github.com/fnparr/docker-ACTUS)
- **DockerHub Images**:
  - [actus_server:no_mongo](https://dockerhub.io/fnparr/actus_server:no_mongo)
  - [mongodb-community-server:6.0-ubi8](https://dockerhub.io/mongo/mongodb-community-server:6.0-ubi8)
  - [actus-rshiny-demo:b02](https://dockerhub.io/fnparr/actus-rshiny-demo:b02) or latest

## Container ACTUS Demo Architecture

### Overview

The containerized ACTUS demo includes various components and actions:

- **Components**:

  - Downloadable 'ACTUS server' docker container
  - actus-core.jar
  - actus-webapp v1.1 server
  - Interactive app (Shiny, R, FEMSdev)
  - Mongodb server for scenarios and sample contracts

- **Actions**:

  - Enter simple contracts
  - Load contract files
  - Enter simple scenarios
  - Input scenario files
  - Generate reports (P/L, liquidity, valuation, risk, portfolio)
  - Configure the server

- **Public Server**: Point your browser to the [ACTUS Public Server](https://demo.actusfrf.org:8080)

## Contributing to ACTUS Repositories

- **Open Source**: All ACTUS software and documentation are royalty-free public assets.
- **Special Handling**: The actus-core source code has special handling to meet US export requirements. For access, email Allan Mendelowitz.
- **Git Repositories**: Public and cloneable, but branches have owners (master, development, etc. are not writable directly).
- **Contribution Process**:
  1. Create a branch with your name in the relevant repo.
  2. Add software, write issues addressed.
  3. Submit a pull request for approval and integration.

Encouraging wider adoption of ACTUS helps all endeavors using the ACTUS framework.
