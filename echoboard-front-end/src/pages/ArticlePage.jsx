// ArticlePage.jsx
import React from 'react';
import { useParams, useLoaderData } from 'react-router-dom';
import axios from 'axios';
import articles from '../article-content';

export default function ArticlePage() {
  const { name } = useParams();
  const { upvotes, comments } = useLoaderData();

  const article = articles.find((article) => article.name === name);

  if (!article) {
    return <h2>Article not found</h2>;
  }

  return (
    <div>
      <h1>{article.title}</h1>
      <p>This article has {upvotes} upvotes!</p>

      {article.content.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}

      <h3>Comments</h3>
      <ul>
        {comments.map((c, i) => (
          <li key={i}>{c.text}</li>
        ))}
      </ul>
    </div>
  );
}
