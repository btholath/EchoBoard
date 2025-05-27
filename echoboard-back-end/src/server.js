
import express from 'express';
import cors from 'cors';
import { createServer } from 'http';
import { Server } from 'socket.io';
import { config } from 'dotenv';
import {MongoClient, ServerApiVersion} from 'mongodb';
import admin from 'firebase-admin';
import fs from 'fs';

import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);



// Initialize Firebase Admin SDK
const credentials = JSON.parse(
    fs.readFileSync('./credentials.json', 'utf8')
)


admin.initializeApp({
  credential: admin.credential.cert(credentials)
});


/*
const articleInfo = [
    {name: 'learn-node', upvotes:0, comments: []},
    {name: 'learn-react', upvotes:0, comments: []},
    {name: 'mongodb', upvotes:0, comments: []},
]
*/

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
config();


let db;
let client;

async function connect_to_db() {
    const uri = 'mongodb://127.0.0.1:27017';
    client = new MongoClient(uri, { serverApi: ServerApiVersion.v1 });
    try {
        await client.connect();
        db = client.db('echoboard-db');
        console.log('Connected to MongoDB');
    } catch (err) {
        console.error('MongoDB connection error:', err);
        process.exit(1); // Exit app if DB connection fails
    }
}

app.use(express.static(path.join(__dirname, '../dist')));

// when api calls do not begin with/api, serve the index.html file
app.get(/^\/(?!api).*/, (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});


app.get('/api/articles/:name', async (req, res) => {
    const { name } = req.params;
    try {
        const article = await db.collection('articles').findOne({ name });
        if (article) {
            res.json(article);
        } else {
            res.status(404).send('Article not found');
        }
    } catch (err) {
        console.error(err);
        res.status(500).send('Something went wrong');
    } finally {
        console.log('Request completed');
    }
});



app.get('/hello', (req, res) => {
  res.send('Hello from a GET endpoint!');
});


app.get('/hello/:name', (req, res) => {
  res.send('Hello '+ req.params.name + ' from a GET endpoint!');
});

app.post('/hello', (req, res) => {
    res.send('Hello ' + req.body.name + ' from a POST endpoint!');
});


// Protecting endpoints using Firebase Admin SDK
app.use(async function(req, res, next) {
  const { authtoken } = req.headers;

  if (authtoken) {
    const user = await admin.auth().verifyIdToken(authtoken);
    req.user = user;
    next();
  } else {
    res.sendStatus(400);
  }
});



app.post('/api/articles/:name/upvote', async (req, res) => {
  const { name } = req.params;
  const { uid } = req.user;

  const article = await db.collection('articles').findOne({ name });

  const upvoteIds = article.upvoteIds || [];
  const canUpvote = uid && !upvoteIds.includes(uid);

  if (canUpvote) {
    const updatedArticle = await db.collection('articles').findOneAndUpdate({ name }, {
      $inc: { upvotes: 1 },
      $push: { upvoteIds: uid },
    }, {
      returnDocument: "after",
    });

    res.json(updatedArticle);
  } else {
    res.sendStatus(403);
  }
});



app.post('/api/articles/:name/comments', async (req, res) => {
  const { name } = req.params;
  const { postedBy, text } = req.body;
  const newComment = { postedBy, text };

  const updatedArticle = await db.collection('articles').findOneAndUpdate({ name }, {
    $push: { comments: newComment }
  }, {
    returnDocument: 'after',
  });

  res.json(updatedArticle);
});


app.post('/api/articles/:name/comments', async(req, res) => {
    const { name } = req.params;
    const { postedBy, text } = req.body;
    const newComment = { postedBy, text };

    const updatedArticle = await db.collection('articles').findOneAndUpdate(
        { name },
        { $push: { comments: newComment } },
        { returnDocument: 'after' }
    );

    try {
    if (updatedArticle) {
        res.json(updatedArticle);
    } else {
        res.status(404).send('Article not found');
    }
    } catch (err) {
        console.error(err);
        res.status(500).send('Error adding comment');
    }
});


const PORT = process.env.PORT || 8000;

async function start() {
  await connect_to_db();
  app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  });
}

start();

