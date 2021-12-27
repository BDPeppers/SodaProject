How to run project
mkdir [whateverYouWant]
cd [whateverYouWant]
git clone git@github.com:BDPeppers/SodaProject.git

starting the server
cd server
npm start

starting the react client
cd soda-app
npm start

Figma Notes:
https://www.figma.com/file/Ft2cezRsqzBklfIQ9fJOEQ/Soda?node-id=0%3A1

BUGS:
-after inputting the desired soda QTY you must click outside of the textfield
-udpate API doesn't work (couldn't figure out the connection_err)

Work to be completed:
-secure MongoDB credentials
-debug MongoDb configs
-debug update API (restock and sodaQuantity update were to use the same API)

Improvements if given more time:
1.Create an account dashboard 
-account components will manage Acount Balance (additional users, and sodas purchases)
2.Incorporate Redux to better manage state throughout the client application
-this would reduce GET requests (sodaInformation would be fetched and updated in redux store vs in each component)
3.Improvements on UX/UI
4.User Testing (find bugs)
5.Fix Bugs


Project Notes:
all sodas start off with half of their maxQuantity available to vend


TechStack - (MERN)
FrontEnd - ReactJs
Backend - Express, MongoDB, NodeJs