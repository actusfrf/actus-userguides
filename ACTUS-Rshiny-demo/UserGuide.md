# ACTUS Rshiny Demo
This guide will help you install and use the Actus Rshiny Demo 

This demo is a reactive Rshiny application which allows you to run ACTUS cash flow simulations on 
a single contract or on a portfolio of contracts using a selected interest rate risk scenario. When 
simulating a portfolio, in addition to selecting the future interest rate scenario, you can select whether
the results should be summarized as a plot of generated profits or liquidity balance and whether this should 
this should be a month by month or an accumulated plot. 

The demo also allows you to upload a csv/spreadsheet file of ACTUS contracts from your workstation and have 
the analysis applied to that rather than to the provided example contracts and portfolios. 

The demo is currently limited to working with ANN and PAM contract types ( although the underlying actus-server 
generating cashflows does support simulation of all ACTUS contract types ) 

## Alternate implementations of the demo
The cloud-based version of the demo can be accessed by pointing a browser at:
https://dadfir3.shinyapps.io/DaDFiR3demo/.
This will put you immediately into the reactive demo. ( Sometimes you have to click on a 'reload' button and
wait for a moment to get the cloud application activated.) 

This version of the demo uses the public ACTUS server at https://dem.actusfrf.org:8080 to run the simulations.
This server is running actus-webapp V1.0 and therefore supports interest rate and market risk factors but no 
other risk modelling - as introduced in actus-webapp V1.1

An alternate implementation allows you to run the entire demonstration standalone on your your workstation as 
a collection of three linked docker containers. In this version the ACTUS server is actus-webapp V1.1 with a more 
complete Risk Factor API and persistent risk scenario data is stored in a mongo database. There are separate 
docker containers for:
* the Rshiny demo application  - written in R language using the Rshiny package
* the actus-webapp V 1.1 server - written in java and built using maven
* a mongodb community edition noSQL database used to store risk scenario data

The function provided in these two demo implementations is almost identical. The main difference is that the
standalone dockerized demo can be configured to run 
* EITHER with the remote public ACTUS server at https://demo.actusfrf.org:8080
* OR     with the local dockerized ACTUS server on your workstation - reached at http://host.docker.internal:8083

## Steps to install and configure the Standalone Workstation "dockerized" version of the Demo
1. Having Docker Desktop installed on your workstation is a prerequisite.
   *  This software enables you to run and manage docker containers and docker images on your workstation.
   *  It is free software and available on macOS, MS Windows and linux workstations.
   *  Get started with docker at https://docs.docker.com/get-started/hands-on-overview/
   *  The 'Get Docker' section in this guide has download and install instructions. 
1. Pull a docker container image for the mongodb database from the public dockerhub repository with the command: 
   *  $ docker pull mongodb/mongodb-community-server:6.0-ubi8
   *  The demo is tested with this version; but is likely to work with other versions
   *  mongodb-community-server is free downloadable software from mongo; they publish docker images for all versions.  
1. Start a docker container on your workstation using this image and exporting the mongo database service on port localhost:27018
   *  $ docker run –name mongo-server -d -p 27018:27017 mongodb/mongodb-community-server:6.0-ubi8
   *  The running container will be named mongo-server. The standard port for a mongodb service is 27017.
   *  Exporting the mongodb service as port 27018 reduces the risk of conflict with a (non-docker) mongodb service on your workstation.
1. Pull an actus-server image from the public dockerhub repository with the command:
   *  $ docker pull  fnparr/actus-server:no_mongo
   *  This version of the actus-server uses actus-webappV1.1 and actus-core, with all persistence provided by a separate mongodb container
1. Start a container using this actus-server image with the command:
   *  $ docker run --name actus-server-nomongo -d -p 8083:8083 fnparr/actus-server:no_mongo
   *  The new container is called actus-server-nomongo ; it will listen on port 8083 for ACTUS requests
   *  Internally the actus-webapp software is configured to request mongodb services using  host.docker.internal:27018
1. Pull the actus-rshiny-demo image from the public dockerhub repository using:  
   *  $ docker pull fnparr/actus-rshiny-demo:b02
1. Start a container with this image using the command:  
   *  $ docker run --name using-actus-demo -d -p 3500:3838 fnparr/actus-rshiny-demo:b02
   *  Port 3838 is the default request port for docker containers; we export this to localhost:3500 for the demo service
1. Now point a browser at http://localhost:3500. The Demo screen should appear.
   *  In its default configuration the demo is actually using the remote public ACTUS service at https://demo.actusfrf.org:8080
1. To change this and configure for an all local standalone operation of the demo using the other containers you have installed
   *  Click on the **help** tab in the title bar of the demo
   *  Set the server to be:  http://host.docker.internal:8083 
   *  This connects the demo to use ACTUS server container running on your desktop - which in turn uses the mongodb container
   *  After this when you switch back to the Contract or portfolio tabs, the ACTUS simulations and plots are all being handled standalone.  
       
In the local standalone configuration the actus-server is actus-webapp V1.1 with support for the ACTUS Risk Factor API, and it is connected to a mongodb container in which scenario data can be stored persistently, BUT the current ACTUS-Rshiny-demo has no support for defining and using new risk scenarios. 
That capability of the actus-server container can be triggered and tested by making direct curl requests to http://localhost:8083 and 
analysing the returned data. The ACTUS RFI User Guide in this git repository provides more detailed information on how to do this. 
