// ArticlePage.jsx
import React from 'react';
import {useState} from 'react';
import { useParams, useLoaderData } from 'react-router-dom';
import axios from 'axios';
import articles from '../article-content';
import CommentsList from './CommentsList';

export default function ArticlePage() {
  const { name } = useParams();
  const { upvotes: initialUpvotes, comments} = useLoaderData();
  const [upvotes, setUpvotes] = useState(initialUpvotes);

  const article = articles.find((article) => article.name === name);

  if (!article) {
    return <h2>Article not found</h2>;
  }


  async function onUpvoteClicked() {
    const response = await axios.post('/api/articles/'+ name + '/upvote');
    const updatedArticleData = response.data;
    setUpvotes(updatedArticleData.upvotes);
    console.log(`Article ${name} now has ${upvotes} upvotes!`);
  }
  return (
    <>
      <h1>{article.title}</h1>
      <button onClick={onUpvoteClicked}>Upvote</button>
      <p>This article has {upvotes} upvotes!</p>

      {article.content.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}

      <CommentsList comments={comments} />
    </>
  );
}



export async function loader({ params }) {
  const response = await axios.get(`/api/articles/${params.name}`);
  const { upvotes, comments } = response.data;
  return { upvotes, comments };
}
