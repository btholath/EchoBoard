
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



## This launches MongoDB and uses ~/data/db for data storage.
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




## Setup Firebase project
### echoboard-b994f
. Create Firebase Project
In the Firebase Console:
Go to https://console.firebase.google.com
Click “Add project”
Enable Google Analytics if desired
After setup, go to Authentication → Sign-in method
Enable Email/Password


##Add Firebase to your web app

Use npm

Use a <script> tag
If you're already using npm and a module bundler such as webpack or Rollup, you can run the following command to install the latest SDK (Learn more):

@btholath ➜ /workspaces/EchoBoard/echoboard-front-end (main) $ npm install firebase


Then, initialize Firebase and begin using the SDKs for the products you'd like to use.

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCo-FjJFd_oEss_s6EPtxr6y8xOsAdbAUI",
  authDomain: "echoboard-b994f.firebaseapp.com",
  projectId: "echoboard-b994f",
  storageBucket: "echoboard-b994f.firebasestorage.app",
  messagingSenderId: "460081465840",
  appId: "1:460081465840:web:5773d6ff95583863a9f535"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
Note: This option uses the modular JavaScript SDK, which provides reduced SDK size.

Learn more about Firebase for web: Get Started, Web SDK API Reference, Samples


Create Account failed: FirebaseError: Firebase: Error (auth/configuration-not-found).
    at createErrorInternal (assert.ts:146:55)
    at _fail (assert.ts:65:9)
    at _performFetchWithErrorHandling (index.ts:243:9)
    at async _performSignInRequest (index.ts:264:26)
    at async createUserWithEmailAndPassword (email_and_password.ts:302:20)
    at async createAccount (CreateAccountPage.jsx:21:13)

## Add Firebase Auth to Node.js (backend)
@btholath ➜ /workspaces/EchoBoard/echoboard-back-end (main) $ npm install firebase-admin


## Host ReactJS application in Google Cloud ( from development mode to production-ready) deployment.
### prepare app for release

1. Build the React Frontend
- This creates a dist/ folder (or build/ if CRA).
- It contains static production files (HTML, JS, CSS) optimized for deployment.

@btholath ➜ /workspaces/EchoBoard (main) $ cd echoboard-front-end
@btholath ➜ /workspaces/EchoBoard/echoboard-front-end (main) $ npm run build

> echoboard-front-end@0.0.0 build
> vite build

vite v5.4.19 building for production...
✓ 111 modules transformed.
dist/index.html                   0.46 kB │ gzip:   0.29 kB
dist/assets/index-DFTIUlFQ.css    1.32 kB │ gzip:   0.64 kB
dist/assets/index-CHJGx839.js   400.06 kB │ gzip: 111.63 kB
✓ built in 2.50s


2. Move dist/ into the Backend
@btholath ➜ /workspaces/EchoBoard/echoboard-front-end (main) $ mv dist ../echoboard-back-end/dist

Then, update .gitignore in the backend:
/dist

3. Serve dist/ with Express
Update your server.js

🔁 Add this at the top:
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


Serve static files and fallback route:
Add this below your API routes:
app.use(express.static(path.join(__dirname, '../dist')));

app.get(/^\/(?!api).*/, (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

This will serve the static frontend from Express for non-API routes.
^\/(?!api).* is a regex: it matches anything not starting with /api.


4. Use Dynamic Port Binding
Update your PORT logic:
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

Result:
Now:
Your frontend and backend are served from the same Express server.
You no longer need to run npm run dev for the frontend.
This makes deploying to platforms like Render, Railway, Google Cloud, or Heroku much easier.


### setting up hosting for MongoDB
To complete the release:

Switch from mongodb://127.0.0.1:27017 to a hosted MongoDB URI.

Use MongoDB Atlas and store the URI in .env:
MONGO_URI=mongodb+srv://<user>:<pass>@cluster.mongodb.net/echoboard-db

Then in code
const uri = process.env.MONGO_URI;


### Set environment variables

### Deploy application


## Shutdown app in Google cloud.
