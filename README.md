# SodaApp - (12-26-2021 update)

MERN SodaVendingMachine Application

## Installation
Use the package manager [pip](https://pip.pypa.io/en/stable/) to install foobar.

```bash
pip install foobar
```

## How To Run Project
```bash
mkdir [whateverYouWant]
cd [whateverYouWant]
git clone git@github.com:BDPeppers/SodaProject.git
```


## Starting Server
```bash
cd server
npm start
```

## Starting Client
```
cd soda-app
npm start
```

## Figma/Brainstroming Notes:

[Notes](https://www.figma.com/file/Ft2cezRsqzBklfIQ9fJOEQ/Soda?node-id=0%3A1)


## Bugs
1. after inputting the desired soda QTY you must click outside of the text field
2. update API doesn't work (couldn't figure out the connection_err)


## Work To Be Completed
1. secure MongoDB credentials
2. debug MongoDb configs
3. debug update API (restock and sodaQuantity update were to use the same API)


## Improvements to Make
1. Create an account dashboard
* account components will manage Account Balance (additional users, and sodas purchases)
2. Incorporate Redux to better manage state throughout the client application
* this would reduce GET requests (sodaInformation would be fetched and updated in redux store vs in each component)
3. Improvements on UX/UI
4. User Testing (find bugs)
5. Fix Bugs


TechStack - (MERN)
FrontEnd - ReactJs
Backend - Express, MongoDB, NodeJs