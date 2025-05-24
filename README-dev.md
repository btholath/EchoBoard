
## setup React app use Vite version 5.5.2

-- @btholath ➜ /workspaces/EchoBoard (main) $ npm create vite@latest
@btholath ➜ /workspaces/EchoBoard (main) $ npm create vite@5.5.2


@btholath ➜ /workspaces/EchoBoard (main) $ npm create vite@5.5.2
Need to install the following packages:
create-vite@5.5.2
Ok to proceed? (y) y


> npx
> cva

✔ Project name: … echoboard-front-end
✔ Select a framework: › React
✔ Select a variant: › JavaScript

Scaffolding project in /workspaces/EchoBoard/echoboard-front-end...

Done. Now run:

  cd echoboard-front-end
  npm install
  npm run dev

npm notice
npm notice New major version of npm available! 10.8.2 -> 11.4.1
npm notice Changelog: https://github.com/npm/cli/releases/tag/v11.4.1
npm notice To update run: npm install -g npm@11.4.1
npm notice
@btholath ➜ /workspaces/EchoBoard (main) $ npm install -g npm@11.4.1

@btholath ➜ /workspaces/EchoBoard (main) $ cd echoboard-front-end
@btholath ➜ /workspaces/EchoBoard/echoboard-front-end (main) $ npm install
@btholath ➜ /workspaces/EchoBoard/echoboard-front-end (main) $ npm run dev

## github setup
git init
git remote add origin https://github.com/btholath/EchoBoard.git
git add .
git commit -m "Initial commit"
git push -u origin main
git remote -v

## Add .gitignore for Vite ReactJs app


## Add React Router to the app
@btholath ➜ /workspaces/EchoBoard/echoboard-front-end (main) $ npm install react-router-dom@6.4



## Setup Node.js for backend app using Javascript
Using express web framework for Node.js

@btholath ➜ /workspaces/EchoBoard (main) $ mkdir echoboard-back-end
@btholath ➜ /workspaces/EchoBoard (main) $ cd echoboard-back-end/
@btholath ➜ /workspaces/EchoBoard/echoboard-back-end (main) $ npm init -y  // creates package.json file
@btholath ➜ /workspaces/EchoBoard/echoboard-back-end (main) $ npm install express
npm install cors dotenv mongodb redis @socket.io/redis-adapter socket.io
npm list --depth=0

@btholath ➜ /workspaces/EchoBoard/echoboard-back-end (main) $ node src/server.js 
Server is running on port 3000

In Postman
use POST to https://studious-space-enigma-w5rwvgrjx5pcgwrw-3000.app.github.dev/hello with Body raw 
{
    "name":"Biju"

}

## Enable to run the server.js even when changes are being made to it
@btholath ➜ /workspaces/EchoBoard/echoboard-back-end (main) $ npm install --save-dev nodemon
@btholath ➜ /workspaces/EchoBoard/echoboard-back-end (main) $ npx nodemon src/server.js
[nodemon] 3.1.10
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,cjs,json
[nodemon] starting `node src/server.js`
Server is running on port 3000

or, you can also make following addition to the package.json scripts, and then run the server.js by command "npm run dev"
"scripts": {
    "dev": "npx nodemon src/server.js"
  },


## Install MongoDB 7.0 version in GitHub Codespace
### installing MongoDB 7.0 on Ubuntu 20.04 (focal) in your GitHub Codespace
cat /etc/os-release
uname -a

sudo rm /etc/apt/sources.list.d/mongodb-org-7.0.list
echo "deb [ signed-by=/usr/share/keyrings/mongodb-server-7.0.gpg ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/7.0 multiverse" | \
sudo tee /etc/apt/sources.list.d/mongodb-org-7.0.list
sudo apt-get update
sudo apt-get install -y mongodb-org
mkdir -p ~/data/db
mongod --dbpath ~/data/db
which mongod
dpkg -l | grep mongo
@btholath ➜ /workspaces/EchoBoard (main) $ mongosh
Current Mongosh Log ID: 6830b575879419a633c59f34
Connecting to:          mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.5.1
MongoNetworkError: connect ECONNREFUSED 127.0

//This launches MongoDB and uses ~/data/db for data storage.
@btholath ➜ /workspaces/EchoBoard (main) mkdir -p ~/data/db
@btholath ➜ /workspaces/EchoBoard (main) mongod --dbpath ~/data/db

confirm It's Working
Open a second terminal and run:
mongosh


@btholath ➜ /workspaces/EchoBoard (main) $ mongosh
Current Mongosh Log ID: 6830b6260d2ff2b79cc59f34
Connecting to:          mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.5.1
Using MongoDB:          7.0.20
Using Mongosh:          2.5.1

For mongosh info see: https://www.mongodb.com/docs/mongodb-shell/


To help improve our products, anonymous usage data is collected and sent to MongoDB periodically (https://www.mongodb.com/legal/privacy-policy).
You can opt-out by running the disableTelemetry() command.

------
   The server generated these startup warnings when booting
   2025-05-23T17:52:43.504+00:00: Access control is not enabled for the database. Read and write access to data and configuration is unrestricted
   2025-05-23T17:52:43.504+00:00: This server is bound to localhost. Remote systems will be unable to connect to this server. Start the server with --bind_ip <address> to specify which IP addresses it should serve responses from, or with --bind_ip_all to bind to all interfaces. If this behavior is desired, start the server with --bind_ip 127.0.0.1 to disable this warning
   2025-05-23T17:52:43.504+00:00: For customers running MongoDB 7.0, we suggest changing the contents of the following sysfsFile
   2025-05-23T17:52:43.504+00:00: vm.max_map_count is too low
------

test> 

test> use echoboard-db
switched to db echoboard-db

// 1. Delete all existing records from 'articles' collection
db.articles.deleteMany({})

// 2. Insert new records
echoboard-db> 
db.articles.insertMany([
  { name: 'learn-node', upvotes: 0, comments: [] },
  { name: 'learn-react', upvotes: 0, comments: [] },
  { name: 'mongodb', upvotes: 0, comments: [] }
])


echoboard-db> db.articles.find({}).pretty()

echoboard-db> db.articles.findOne({name: "learn-node"})
{
  _id: ObjectId('6830b6d50d2ff2b79cc59f35'),
  name: 'learn-node',
  upvotes: 0,
  comments: []
}
echoboard-db> 

echoboard-db> db.articles.findOne({"upvotes": 0})
{
  _id: ObjectId('6830b6d50d2ff2b79cc59f35'),
  name: 'learn-node',
  upvotes: 0,
  comments: []
}
echoboard-db> 

echoboard-db> db.articles.find({"upvotes": 0})


## Install Mongodb driver into our app to use from Express within our backend-app
@btholath ➜ /workspaces/EchoBoard/echoboard-back-end (main) $ npm install mongodb


## Install axios in front-end app to connect to APIs
@btholath ➜ /workspaces/EchoBoard/echoboard-front-end (main) $ npm install axios
