## ASSESSMENT
This is your chance to become Sherlock Holmes and fight the bad guys :)

Welcome honorary Riskie! Here is your Mission:

Just imagine: After a long endless job search, you find your new job. “Fraud-Prevention-Officer” at an e-commerce job named Retail24. Fighting the bad guys - that sounds like something you have been looking for. But what is the job of a “Fraud-Prevention-Officer”? It’s pretty simple: You have to keep the bad people out of your online store. It’s like being a bouncer of a club - with a little bit more analytics. And that’s the problem. There is no software to support you. But hey, you got a degree in software development. So, … that should not be the problem!

Your task today is to design and develop apis to help Retail24 understand and detect fraud. Fraud officers will use this system to fetch transactions and figure out if it is fraudulent or not, depending on many different parameters. If transactions are identified as fraudulent, the fraud officer can take action by stopping the delivery or changing the payment method, among other things. With your help we will put an end to online fraud! 

To achieve this objective our data science team has come up with an algorithm to create a graph of all connected transactions. You are entrusted with this transaction graph (attached with email) and need to develop the platform to make it available for the fraud officers. Specifications of the platform are given below:

## Dataset
The dataset given is an array of transaction graphs.
Each transaction graph has an array of children which are also transaction graphs (hint: recursion).
Every child transaction has a connectionInfo which describes how they are connected with the immediate parent.
connectionInfo has confidence and type:
Type stores the connection type and can have values like sameEmail, sameGeoInfo etc.
Confidence can be between 0 to 1, 1 indicates that we are 100% sure this transaction is connected to the immediate parent, .6 means we are 60% sure and so on...

## Workflow
Create the following API endpoint:
GET /api/transactions?transactionId={transactionId}&confidenceLevel={confidence}
The request should return a list of transactions, containing the transaction with the transactionId query param, along with all its children that have a connection confidence same or bigger than the confidenceLevel query param. This should be a flattened structure.
## Important:
There can be multiple levels of children, and children of children are also connected transactions to the main parent
The transactionId can be of any transaction in the provided graph, meaning that it can be of a child transaction as well, and in that case you should return that transaction, along with its children (if any), always taking the confidence level into account
The transaction with the same ID as in the query param should not contain the connectionInfo property, only the other connected transactions
Add a property in the transactions, called combinedConnectionInfo, which should follow this structure: 1) each child combinedConnectionInfo confidence is calculated based on the multiplication of its own connectionInfo confidence with its parent’s connectionInfo confidence (for first level connections, the parent’s confidence will always be 1 - the transaction with the transactionId itself). 2) The combinedConnectionInfo types should be a list of strings containing the connectionInfo type present in the transaction, along with all of the connectionInfo types present in the parents, until getting to the main transaction of transactionId in the query param (first level children will only have a single type, and the others have multiple) 
Deploy your api and send us the link (your choice of cloud platform, Heroku for example is fine)
You are done! Please send us your solution (source code) and the deployed API endpoint and we will get in touch :)

Requirements
Use NodeJS for backend (Typescript preferred)
Authentication is not required for this task
Make sure your code is clean & well formatted as per industry standards.
Please write a Readme containing the instructions to run the code, along with any other info you may find necessary
For the data, make sure to use the test data json file that you are provided with, please don’t edit that file

The complete challenge should be manageable within 3-4 hours. Try to finish the tasks you do "as well as possible" instead of "starting as many as possible". Afterwards send your solution and API endpoint to recruitment@riskident.com. Make sure the attachments don’t exceed 2MB. Alternatively share your solution via a shared link.

Example
Sample Test Data (Please find the full json attached with the email): 
[
  {
    "id": "5c865784922a7a50a46ad50f",
    "index": 0,
    ...
    "children": [
      {
        "id": "5c8657845d3dc63c6d5bb643",
        "index": 0,
        "age": 36,
        "name": "Christa Murray",
        "email": "christamurray@equicom.com",
        "phone": "(989) 478-3521",
        "connectionInfo": {
          "type": "sameGeoInfo",
          "confidence": 0.7
        },
        "geoInfo": {
          "latitude": 43.903515,
          "longitude": 35.924001
        },
        "children": [
          {
            "id": "5c86578486f3aa844adf8bba",
            "index": 0,
            "age": 28,
            "name": "Frazier Conrad",
            "email": "christamurray@equicom.com",
            "phone": "(948) 443-3884",
            "connectionInfo": {
              "type": "sameEmail",
              "confidence": 0.5
            },
            "geoInfo": {
              "latitude": 80.58013,
              "longitude": 41.759403
            }
          },
          ...
        ]
      },
      ...



The mockup below is based on the data snippet provided above.

GET /api/transactions?transactionId=5c865784922a7a50a46ad50f&confidenceLevel=0

Response: 

[
  {
    "id": "5c865784922a7a50a46ad50f",
    "index": 0,
    …
  },
  {
    "id": "5c8657845d3dc63c6d5bb643",
    "index": 0,
    "age": 36,
    "name": "Christa Murray",
    "email": "christamurray@equicom.com",
    "phone": "(989) 478-3521",
    "connectionInfo": {
      "type": "sameGeoInfo",
      "confidence": 0.7
    },
    "combinedConnectionInfo": {
      "types": ["sameGeoInfo"],
      "confidence": 0.7
    },
    …
   },
   {
     "id": "5c86578486f3aa844adf8bba",
     "index": 0,
     "age": 28,
     "name": "Frazier Conrad",
     "email": "christamurray@equicom.com",
     "phone": "(948) 443-3884",
     "connectionInfo": {
       "type": "sameEmail",
       "confidence": 0.5
     },
     "combinedConnectionInfo": {
       "types": ["sameEmail", "sameGeoInfo"],
       "confidence": 0.35
     },
     …
    }
  ]
 


> coding test - sherlock holmes but for fraud.

## Getting Started

> [Technologies](#technologies-used) &middot; [Installations](#installations) &middot; [API Endpoints](#api-endpoints) &middot; [Author](#author)

---

## API Documentation

- [API DOC](https://documenter.getpostman.com/view/4223397/T17M7R4s?version=latest)

---

## Heroku App

Application is deployed to Heroku. Use public URL [https://stark-brook-67508.herokuapp.com/](https://stark-brook-67508.herokuapp.com/) for the base url.

---

## Technologies Used

[node]: (https://nodejs.org)

- [Node.js](node) A run time environment based off Chrome's v8 Engines for writing Javascript server-side applications.
- [Express.js](https://expressjs.com) - Web application framework based on Node.js.

## Installations

#### Getting started

- You need to have Node and NPM installed on your computer.
- Installing [Node](node) automatically comes with npm.

#### Clone

- Clone this project to your local machine `https://github.com/oluwabukolatina/recursion.git`

#### Setup

- Installing the project dependencies
  > Run the command below
  ```shell
  $ npm install
  ```
- Start your node server
  > run the command below
  ```shell
  $ npm start
  ```
- Use `http://localhost:3000` as base url for endpoints

## Author

- [Oluwabukola Tina](https://github.com/oluwabukolatina)
