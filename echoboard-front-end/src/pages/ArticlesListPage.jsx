import React from "react";
import ArticleList from "./ArticleList";  // import ArticleList component
import articles from "../article-content";

// This component renders a list of articles with preview content and navigation links.
export default function ArticlesListPage() {
    return (
        <>
            <h1>Articles</h1>
            <ArticleList articles={articles} />
            {/* The ArticleList component is used to display a list of articles.
                It takes the articles array as a prop and renders each article with a title, preview content, and a link to the full article.
            */}
            {/* The articles prop is passed to the ArticleList component, which is an array of article objects imported from the article-content.js file. */}
            {/* Each article object contains a name, title, and content properties. */}
            {/* The ArticleList component maps over the articles array and renders each article with a link to its full content. */}
            {/* The Link component from react-router-dom is used to create a link to the full article page. */}
            {/* The to prop of the Link component is set to /articles/${name}, where name is the name of the article. */}
            {/* This will create a link to the full article page for each article in the list. */}  
        </>
    );
}
