import React from "react";
import ArticleList from "./ArticleList";  // import ArticleList component
import articles from "../article-content";

// This component renders a list of articles with preview content and navigation links.
export default function ArticlesListPage() {
    return (
        <>
            <h1>Articles</h1>
            <ArticleList articles={articles} />
        </>
    );
}
