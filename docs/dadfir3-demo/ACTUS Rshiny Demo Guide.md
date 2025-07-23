---
sidebar_position: 2
---

# ACTUS Rshiny Demo Guide

This guide will help you install and use the ACTUS Rshiny Demo. This demo is a reactive Rshiny application that allows you to run ACTUS cash flow simulations on a single contract or on a portfolio of contracts using a selected interest rate risk scenario. When simulating a portfolio, you can select whether the results should be summarized as a plot of generated profits or liquidity balance and whether this should be a month-by-month or an accumulated plot.

The demo also allows you to upload a CSV/spreadsheet file of ACTUS contracts from your workstation and have the analysis applied to that rather than to the provided example contracts and portfolios.

The demo is currently limited to working with ANN and PAM contract types, although the underlying ACTUS server generating cashflows supports the simulation of all ACTUS contract types.

## Alternate Implementations of the Demo

The cloud-based version of the demo can be accessed by pointing a browser at: [ACTUS Rshiny Demo](https://dadfir3.shinyapps.io/DaDFiR3demo/). This will put you immediately into the reactive demo. (Sometimes you have to click on a 'reload' button and wait for a moment to get the cloud application activated.)

This version of the demo uses the public ACTUS server at [https://demo.actusfrf.org:8080](https://demo.actusfrf.org:8080) to run the simulations. This server is running `actus-webapp V1.0` and therefore supports interest rate and market risk factors but no other risk modeling - as introduced in `actus-webapp V1.1`.

An alternate implementation allows you to run the entire demonstration standalone on your workstation as a collection of three linked docker containers. In this version, the ACTUS server is `actus-webapp V1.1` with a more complete Risk Factor API, and persistent risk scenario data is stored in a Mongo database. There are separate docker containers for:

- The Rshiny demo application - written in R language using the Rshiny package.
- The `actus-webapp V1.1` server - written in Java and built using Maven.
- A MongoDB community edition NoSQL database used to store risk scenario data.

The function provided in these two demo implementations is almost identical. The main difference is that the standalone dockerized demo can be configured to run:

- EITHER with the remote public ACTUS server at `https://demo.actusfrf.org:8080`.
- OR with the local dockerized ACTUS server on your workstation - reached at `http://host.docker.internal:8083`.

## Installing the Docker Demo Version

1. **Prerequisite: Install Docker Desktop**

   - This software enables you to run and manage docker containers and docker images on your workstation.
   - It is free software and available on macOS, MS Windows, and Linux workstations.
   - Get started with Docker at [Docker Documentation](https://docs.docker.com/get-started/hands-on-overview/).
   - The 'Get Docker' section in this guide has download and install instructions.

2. **Pull a Docker Container Image for the MongoDB Database**

   - Pull the image from the public Docker Hub repository:
     ```bash
     docker pull mongodb/mongodb-community-server:6.0-ubi8
     ```
   - The demo is tested with this version but is likely to work with other versions.

3. **Start a Docker Container for MongoDB**

   - Start a container using this image and exporting the MongoDB database service on port localhost:27018:
     ```bash
     docker run --name mongo-server -d -p 27018:27017 mongodb/mongodb-community-server:6.0-ubi8
     ```
   - The running container will be named `mongo-server`. The standard port for a MongoDB service is 27017. Exporting the MongoDB service as port 27018 reduces the risk of conflict with a (non-docker) MongoDB service on your workstation.

4. **Pull an ACTUS Server Image**

   - Pull the image from the public Docker Hub repository:
     ```bash
     docker pull fnparr/actus-server:no_mongo
     ```
   - This version of the ACTUS server uses `actus-webapp V1.1` and `actus-core`, with all persistence provided by a separate MongoDB container.

5. **Start a Container for the ACTUS Server**

   - Start a container using this ACTUS server image:
     ```bash
     docker run --name actus-server-nomongo -d -p 8083:8083 fnparr/actus-server:no_mongo
     ```
   - The new container is called `actus-server-nomongo` and will listen on port 8083 for ACTUS requests.
   - Internally, the `actus-webapp` software is configured to request MongoDB services using `host.docker.internal:27018`.

6. **Pull the ACTUS Rshiny Demo Image**

   - Pull the image from the public Docker Hub repository:
     ```bash
     docker pull fnparr/actus-rshiny-demo:b02
     ```

7. **Start a Container for the ACTUS Rshiny Demo**

   - Start a container using this image:
     ```bash
     docker run --name using-actus-demo -d -p 3500:3838 fnparr/actus-rshiny-demo:b02
     ```
   - Port 3838 is the default request port for Docker containers; we export this to localhost:3500 for the demo service.

8. **Access the Demo**

   - Point a browser at `http://localhost:3500`. The Demo screen should appear.
   - In its default configuration, the demo is actually using the remote public ACTUS service at `https://demo.actusfrf.org:8080`.

9. **Configure for Local Standalone Operation**
   - Click on the **help** tab in the title bar of the demo.
   - Set the server to be: `http://host.docker.internal:8083`.
   - This connects the demo to use the ACTUS server container running on your desktop, which in turn uses the MongoDB container.
   - After this, when you switch back to the Contract or Portfolio tabs, the ACTUS simulations and plots are all being handled standalone.

In the local standalone configuration, the ACTUS server is `actus-webapp V1.1` with support for the ACTUS Risk Factor API, and it is connected to a MongoDB container in which scenario data can be stored persistently. However, the current ACTUS-Rshiny-demo has no support for defining and using new risk scenarios. That capability of the ACTUS server container can be triggered and tested by making direct `curl` requests to `http://localhost:8083` and analyzing the returned data. The ACTUS RFI User Guide in this Git repository provides more detailed information on how to do this.
