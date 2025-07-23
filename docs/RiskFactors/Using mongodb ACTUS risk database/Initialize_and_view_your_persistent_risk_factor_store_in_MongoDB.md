---
title: "Initialize Risk Factor Store in MongoDB"
---

## Overview

The **ACTUS Basic Quickstart** installs a **MongoDB NoSQL database** inside a **Docker container** running on the workstation. To view the contents of this database, you need to install the **MongoDB command-line client**.

## Installing MongoDB CLI
Follow the instructions at the official MongoDB documentation:  
🔗 [MongoDB CLI Installation Guide](https://www.mongodb.com/docs/mongocli/v1.28/install/)

## Starting the MongoDB Shell (CLI)
Run the following command in your terminal to start the MongoDB shell:
```sh
mongo
```

Once inside the MongoDB client shell, you can use these commands:

**List available databases:**
```
show dbs
```
**Select a database (replace DBNAME with your actual database name):**

```
use DBNAME
```

**Display the name of the currently active database:**

```
db
```

## Working with the riskdata Database

If you have previously run **ACTUS QuickStart validation tests**, a database named `riskdata` will have been created. MongoDB also creates default databases during installation.

The ACTUS QuickStart validations may have created the following collections inside `riskdata`:

`referenceIndex`

`scenario`

`twoDimensionalPrepaymentData`

## Deleting Existing Collections

You can remove these collections using:
```
db.referenceIndex.drop()
db.scenario.drop()
db.twoDimensionalPrepaymentData.drop()
```

After deleting, verify that the riskdata database is empty by running:

```
show collections
```

If this command returns an empty list, the database is now clean and ready for new tests.

## Exiting the MongoDB Shell

Press `Ctrl + C` or use a shell escape command to exit the MongoDB client shell.

