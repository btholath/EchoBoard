
import express from 'express';
import cors from 'cors';
import { createServer } from 'http';
import { Server } from 'socket.io';
import { config } from 'dotenv';
import {MongoClient, ServerApiVersion} from 'mongodb';
import admin from 'firebase-admin';
import fs from 'fs';

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
const PORT = process.env.PORT || 3000;

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


app.post('/api/articles/:name/upvote-v1', (req, res) => {
    const { name } = req.params;
    const article = articleInfo.find(article => article.name === name);
    if (article) {
        article.upvotes += 1;
        res.status(200).send(`Article ${name} now has ${article.upvotes} upvotes, hooray!`);
        res.send(`Article ${name} now has ${article.upvotes} upvotes!`);
        res.json(article);
    } else {
        res.status(404).send('Article not found');
    }
});


app.post('/api/articles/:name/upvote', async (req, res) => {
    
    try {
        const { name } = req.params;
        const updatedArticle = await db.collection('articles').findOneAndUpdate(
            { name },
            { $inc: { upvotes: 1 } },
            { returnDocument: 'after' } // or { returnOriginal: false } in older drivers
        );

        if (updatedArticle) {
            res.json(updatedArticle);
        } else {
            res.status(404).send('Article not found');
        }
    } catch (err) {
        console.error(err);
        res.status(500).send('Error upvoting article');
    }
});



app.post('/api/articles/:name/comment-v1', (req, res) => {
    const { name } = req.params;
    const { postedBy, text } = req.body;
    const article = articleInfo.find(article => article.name === name);
    if (article) {
        article.comments.push({postedBy, text});
        //res.status(200).send(`Comment added to article ${name}`);
        res.json(article);
    } else {
        res.status(404).send('Article not found');
    }
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




async function start(){
    await connect_to_db().catch(console.error);
    app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    });
}

start().catch(console.error);