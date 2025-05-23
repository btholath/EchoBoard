import React from "react";
import { Link } from "react-router-dom";

export default function ArticleList({articles}) {
  return (
        <>
            {articles.map(({ name, title, content }) => (
                <div key={name} style={{ marginBottom: '1.5rem' }}>
                    <Link to={`/articles/${name}`}>
                        <h3>{title}</h3>
                        <p>{content[0].substring(0, 150)}...</p>
                        <strong>Read more</strong>
                    </Link>
                </div>
            ))}
        </>
    );
}
