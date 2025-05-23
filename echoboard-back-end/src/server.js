
import express from 'express';
import cors from 'cors';
import { createServer } from 'http';
import { Server } from 'socket.io';
import { config } from 'dotenv';
import {MongoClient, ServerApiVersion} from 'mongodb';

const articleInfo = [
    {name: 'learn-node', upvotes:0, comments: []},
    {name: 'learn-react', upvotes:0, comments: []},
    {name: 'mongodb', upvotes:0, comments: []},
]


const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
config();
const PORT = process.env.PORT || 3000;


app.get('/api/articles/:name', async (req, res) => {
    const { name } = req.params;
    const uri = 'mongodb://127.0.0.1:27017';
    const client = new MongoClient(uri, { serverApi: ServerApiVersion.v1 });

    try {
        await client.connect();
        const db = client.db('echoboard-db');
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
        await client.close();
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


app.post('/api/articles/:name/upvote', (req, res) => {
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


app.post('/api/articles/:name/comment', (req, res) => {
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


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}
);