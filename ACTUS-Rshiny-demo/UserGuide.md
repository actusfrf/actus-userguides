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
https://docs.docker.com/get-started/publish-your-own-image/ .
This will put you immediately into the reactive demo. ( Sometimes you have to click on a 'reload' button and
wait for a moment to get the cloud application activated.) 

This version of the demo uses the public ACTUS server at https://dem.actusfrf.org:8080 to run the simulations.
This server is running actus-webapp V1.0 and therefore supports interest rate and market risk factors but no 
other risk modellins - as introduced in actus-webapp V1.1

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

## Steps to install the Standalone Workstation "dockerized" version of the Demo
1. Install Docker Desktop on your workstation
2.  
