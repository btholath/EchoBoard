
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
  { name: 'learn-node', upvotes: 0, upvoteIds:[], comments: [] },
  { name: 'learn-react', upvotes: 0, upvoteIds:[], comments: [] },
  { name: 'mongodb', upvotes: 0, upvoteIds:[], comments: [] }
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


Host Mongodb in https://cloud.mongodb.com/
Create a new project named "EchoBoard", a new cluster will leave it the default name which is Cluster0, and choose the AWS as the provider


You need to secure your MongoDB Atlas cluster before you can use it. Set which users and IP addresses can access your cluster now. Read more 

Add a connection IP address
Your current IP address (47.156.0.124) has been added to enable local connectivity. Only an IP address you add to your Access List will be able to connect to your project's clusters. Add more later in Network Access.
Create a database user
This first user will have atlasAdmin  permissions for this project.

We autogenerated a username and password. You can use this or create your own.

You'll need your database user's credentials in the next step. Copy the database user password.
Username
echoboard
Password  <-- copy the password over to your .env file


You need to secure your MongoDB Atlas cluster before you can use it. Set which users and IP addresses can access your cluster now. Read more 

Add a connection IP address
Your current IP address (47.156.0.124) has been added to enable local connectivity. Only an IP address you add to your Access List will be able to connect to your project's clusters. Add more later in Network Access.
Create a database user
A database user has been added to this project. Create another user later in Database Access.
You'll need your database user's credentials in the next step.


Choose Shell, to populate the records

@btholath ➜ /workspaces/EchoBoard (main) $ cat /etc/os-release
NAME="Ubuntu"
VERSION="20.04.6 LTS (Focal Fossa)"
ID=ubuntu
ID_LIKE=debian
PRETTY_NAME="Ubuntu 20.04.6 LTS"
VERSION_ID="20.04"
HOME_URL="https://www.ubuntu.com/"
SUPPORT_URL="https://help.ubuntu.com/"
BUG_REPORT_URL="https://bugs.launchpad.net/ubuntu/"
PRIVACY_POLICY_URL="https://www.ubuntu.com/legal/terms-and-policies/privacy-policy"
VERSION_CODENAME=focal
UBUNTU_CODENAME=focal
@btholath ➜ /workspaces/EchoBoard (main) $ 



1. Select your operating system and download the MongoDB Shell


or Copy download URL
Mongosh(2.5.1) lets you connect to MongoDB to work with your data and configure your database. 2.0.0 or greater is required to work with Atlas Stream Processing

2.
Add <your mongosh's download directory>/bin to your $PATH variable. How to
3. Run your connection string in your command line

Show Password
Use this connection string in your application

mongosh "mongodb+srv://cluster0.heofhcv.mongodb.net/" --apiVersion 1 --username echoboard --password ********

The password for echoboard is included in the connection string for your first time setup. This password will not be available again after exiting this connect flow.
RESOURCES

Open the shell in your IDE where your github codespace have been running and enter
mongosh "mongodb+srv://cluster0.heofhcv.mongodb.net/" --apiVersion 1 --username echoboard --password ********
Before you run the above command you need to allow network access from your ide to the mongodb,
In mongodb dashboard, go to Network Access menu, choose Add IP address and enter 0.0.0.0/0 and set it for a 1 day or 1 week as deemed necessary.

@btholath ➜ /workspaces/EchoBoard (main) $ mongosh "mongodb+srv://cluster0.heofhcv.mongodb.net/" --apiVersion 1 --username echoboard --password ********
Current Mongosh Log ID: 6835fe2dcabe0a378fc59f34
Connecting to:          mongodb+srv://<credentials>@cluster0.heofhcv.mongodb.net/?appName=mongosh+2.5.1
Using MongoDB:          8.0.9 (API Version 1)
Using Mongosh:          2.5.1

For mongosh info see: https://www.mongodb.com/docs/mongodb-shell/

Atlas atlas-e57gn3-shard-0 [primary] test> 

Insert records
Atlas atlas-e57gn3-shard-0 [primary] echoboard-db> db.articles.insertMany([
...   { name: 'learn-node', upvotes: 0, upvoteIds:[], comments: [] },
...   { name: 'learn-react', upvotes: 0, upvoteIds:[], comments: [] },
...   { name: 'mongodb', upvotes: 0, upvoteIds:[], comments: [] }
... ])
... 
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('6835feb4cabe0a378fc59f35'),
    '1': ObjectId('6835feb4cabe0a378fc59f36'),
    '2': ObjectId('6835feb4cabe0a378fc59f37')
  }
}
Atlas atlas-e57gn3-shard-0 [primary] echoboard-db> 

Now we need to get the complete connection string for Mongo.
Go to Mongo dashboard, click on Database, choose Cluster, and click on Connect, and then click on Drivers
mongodb+srv://echoboard:<db_password>@cluster0.heofhcv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0



### Set environment variables
create app.yaml and prod-env.yaml

### Deploy application for purpose of Google's Firebase
install gcloud CLI
https://cloud.google.com/sdk/docs/install

sudo apt-get update
sudo apt-get install apt-transport-https ca-certificates gnupg curl
curl https://packages.cloud.google.com/apt/doc/apt-key.gpg | sudo gpg --dearmor -o /usr/share/keyrings/cloud.google.gpg
echo "deb [signed-by=/usr/share/keyrings/cloud.google.gpg] https://packages.cloud.google.com/apt cloud-sdk main" | sudo tee -a /etc/apt/sources.list.d/google-cloud-sdk.list

gcloud --version
@btholath ➜ /workspaces/EchoBoard (main) $ gcloud --version
Google Cloud SDK 523.0.1
alpha 2025.05.22
beta 2025.05.22
bq 2.1.17
bundled-python3-unix 3.12.9
core 2025.05.22
gcloud-crc32c 1.0.0
gsutil 5.34
@btholath ➜ /workspaces/EchoBoard (main) $ 
sudo apt-get update && sudo apt-get install google-cloud-cli

Now go to Google Cloud https://console.cloud.google.com
https://console.firebase.google.com/project/echoboard-b994f/settings/serviceaccounts/adminsdk
https://console.cloud.google.com/welcome?project=echoboard-b994f

@btholath ➜ /workspaces/EchoBoard (main) $ gcloud auth login
Go to the following link in your browser, and complete the sign-in prompts:

    https://accounts.google.com/o/oauth2/auth?response_type=code&client_id=32555940559.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Fsdk.cloud.google.com%2Fauthcode.html&scope=openid+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fcloud-platform+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fappengine.admin+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fsqlservice.login+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fcompute+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Faccounts.reauth&state=xizJEfxYT6ntQ0ykSqXjKHuvZxcgE6&prompt=consent&token_usage=remote&access_type=offline&code_challenge=eWuMqGhuk5VeAviHYwiXCZOgQBj8T0AriGWOFa3MZrs&code_challenge_method=S256

Once finished, enter the verification code provided in your browser: 4/0AUJR-x6VfGNS8PwMX1CopJpd8i2fD2ECpAKeMPyXr10uwu-Vb0vlRp-HZePhMVQdw22SFQ

You are now logged in as [biju.tholath@gmail.com].
Your current project is [None].  You can change this setting by running:
  $ gcloud config set project PROJECT_ID
@btholath ➜ /workspaces/EchoBoard (main) $ gcloud config set project echoboard-b994f
Updated property [core/project].
@btholath ➜ /workspaces/EchoBoard (main) $ 


gcloud config set project PROJECT_ID
@btholath ➜ /workspaces/EchoBoard/echoboard-back-end (main) $ gcloud config set project echoboard-b994f
Updated property [core/project].
@btholath ➜ /workspaces/EchoBoard/echoboard-back-end (main) $ 




@btholath ➜ /workspaces/EchoBoard/echoboard-back-end (main) $ gcloud app deploy
@btholath ➜ /workspaces/EchoBoard/echoboard-back-end (main) $ gcloud app deploy
You are creating an app for project [echoboard-b994f].
WARNING: Creating an App Engine application for a project is irreversible and the region
cannot be changed. More information about regions is at
<https://cloud.google.com/appengine/docs/locations>.

WARNING: Starting from March, 2025, App Engine sets the automatic scaling maximum instances
default for standard environment deployments to 20. This change doesn't impact
existing apps. To override the default, specify the new max_instances value in your
app.yaml file, and deploy a new version or redeploy over an existing version.
For more details on max_instances, see
<https://cloud.google.com/appengine/docs/standard/reference/app-yaml.md#scaling_elements>.

Please choose the region where you want your App Engine application located:

 [1] asia-east1    (supports standard and flexible)
 [2] asia-east2    (supports standard and flexible and search_api)
 [3] asia-northeast1 (supports standard and flexible and search_api)
 [4] asia-northeast2 (supports standard and flexible and search_api)
 [5] asia-northeast3 (supports standard and flexible and search_api)
 [6] asia-south1   (supports standard and flexible and search_api)
 [7] asia-southeast1 (supports standard and flexible)
 [8] asia-southeast2 (supports standard and flexible and search_api)
 [9] australia-southeast1 (supports standard and flexible and search_api)
 [10] europe-central2 (supports standard and flexible)
 [11] europe-west   (supports standard and flexible and search_api)
 [12] europe-west2  (supports standard and flexible and search_api)
 [13] europe-west3  (supports standard and flexible and search_api)
 [14] europe-west6  (supports standard and flexible and search_api)
 [15] northamerica-northeast1 (supports standard and flexible and search_api)
 [16] southamerica-east1 (supports standard and flexible and search_api)
 [17] us-central    (supports standard and flexible and search_api)
 [18] us-east1      (supports standard and flexible and search_api)
 [19] us-east4      (supports standard and flexible and search_api)
 [20] us-west1      (supports standard and flexible)
 [21] us-west2      (supports standard and flexible and search_api)
 [22] us-west3      (supports standard and flexible and search_api)
 [23] us-west4      (supports standard and flexible and search_api)
 [24] cancel
Please enter your numeric choice:  18

Creating App Engine application in project [echoboard-b994f] and region [us-east1]....done.                                                                                                                                                                   
Services to deploy:

descriptor:                  [/workspaces/EchoBoard/echoboard-back-end/app.yaml]
source:                      [/workspaces/EchoBoard/echoboard-back-end]
target project:              [echoboard-b994f]
target service:              [default]
target version:              [20250528t012553]
target url:                  [https://echoboard-b994f.ue.r.appspot.com]
target service account:      [echoboard-b994f@appspot.gserviceaccount.com]

@btholath ➜ /workspaces/EchoBoard/echoboard-back-end (main) $ 




--Grant Storage Access to the App Engine default service account
Use the following gcloud command to assign the required role:

gcloud projects add-iam-policy-binding echoboard-b994f \
  --member="serviceAccount:echoboard-b994f@appspot.gserviceaccount.com" \
  --role="roles/storage.admin"
This gives full access to GCS buckets, which is fine for development. For production, you might prefer using roles/storage.objectAdmin or roles/storage.objectCreator.

Updated IAM policy for project [echoboard-b994f].
bindings:
- members:
  - serviceAccount:service-460081465840@gcp-gae-service.iam.gserviceaccount.com
  role: roles/appengine.serviceAgent
- members:
  - serviceAccount:service-460081465840@gcp-sa-artifactregistry.iam.gserviceaccount.com
  role: roles/artifactregistry.serviceAgent
- members:
  - serviceAccount:460081465840@cloudbuild.gserviceaccount.com
  role: roles/cloudbuild.builds.builder
- members:
  - serviceAccount:service-460081465840@gcp-sa-cloudbuild.iam.gserviceaccount.com
  role: roles/cloudbuild.serviceAgent
- members:
  - serviceAccount:460081465840-compute@developer.gserviceaccount.com
  - serviceAccount:echoboard-b994f@appspot.gserviceaccount.com
  role: roles/editor
- members:
  - serviceAccount:service-460081465840@gcp-sa-firebase.iam.gserviceaccount.com
  role: roles/firebase.managementServiceAgent
- members:
  - serviceAccount:firebase-adminsdk-fbsvc@echoboard-b994f.iam.gserviceaccount.com
  role: roles/firebase.sdkAdminServiceAgent
- members:
  - serviceAccount:firebase-adminsdk-fbsvc@echoboard-b994f.iam.gserviceaccount.com
  role: roles/firebaseauth.admin
- members:
  - serviceAccount:service-460081465840@gcp-sa-firestore.iam.gserviceaccount.com
  role: roles/firestore.serviceAgent
- members:
  - serviceAccount:firebase-adminsdk-fbsvc@echoboard-b994f.iam.gserviceaccount.com
  role: roles/iam.serviceAccountTokenCreator
- members:
  - user:biju.tholath@gmail.com
  role: roles/owner
- members:
  - serviceAccount:echoboard-b994f@appspot.gserviceaccount.com
  role: roles/storage.admin
etag: BwY2KC18ZT4=
version: 1
@btholath ➜ /workspaces/EchoBoard/echoboard-back-end (main) $ 

@btholath ➜ /workspaces/EchoBoard/echoboard-back-end (main) $ gcloud app deploy



@btholath ➜ /workspaces/EchoBoard/echoboard-back-end (main) $ gcloud app deploy
Services to deploy:

descriptor:                  [/workspaces/EchoBoard/echoboard-back-end/app.yaml]
source:                      [/workspaces/EchoBoard/echoboard-back-end]
target project:              [echoboard-b994f]
target service:              [default]
target version:              [20250528t013436]
target url:                  [https://echoboard-b994f.ue.r.appspot.com]
target service account:      [echoboard-b994f@appspot.gserviceaccount.com]


Do you want to continue (Y/n)?  Y

Beginning deployment of service [default]...
╔════════════════════════════════════════════════════════════╗
╠═ Uploading 0 files to Google Cloud Storage                ═╣
╚════════════════════════════════════════════════════════════╝
File upload done.
Updating service [default]...done.                                                                                                                                                                                                                            
Setting traffic split for service [default]...done.                                                                                                                                                                                                           
Deployed service [default] to [https://echoboard-b994f.ue.r.appspot.com]

You can stream logs from the command line by running:
  $ gcloud app logs tail -s default

To view your application in the web browser run:
  $ gcloud app browse
@btholath ➜ /workspaces/EchoBoard/echoboard-back-end (main) $ 


@btholath ➜ /workspaces/EchoBoard/echoboard-back-end (main) $ gcloud app browse
Did not detect your browser. Go to this link to view your app:
https://echoboard-b994f.ue.r.appspot.com
@btholath ➜ /workspaces/EchoBoard/echoboard-back-end (main) $ 



1. Attach a Billing Account to Your Project
Go to the Google Cloud Console Billing Page
https://console.firebase.google.com/?pli=1

Select or create a billing account

Go to Manage Billing Accounts

Click “My projects”

Find your project echoboard-b994f

Click "Change billing account" and link it

2. Enable App Engine Billing API (if prompted)
Sometimes, Google prompts you to enable related billing services. Approve those if requested.

3. Re-run Deployment
Once billing is attached:


gcloud app deploy

## Shutdown app in Google cloud.
