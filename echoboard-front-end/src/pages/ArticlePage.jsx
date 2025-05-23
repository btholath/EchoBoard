// import a react hook
import { useParams } from "react-router-dom";
import articles from "../article-content";

// This component will be rendered when the user navigates to /articles/:name
// The :name part is a dynamic segment, which means that it can be anything
// For example, if the user navigates to /articles/learn-react, the name parameter will be set to "learn-react"
// You can access this parameter using the useParams() hook from react-router-dom
// The useParams() hook returns an object of key/value pairs of URL parameters
// The key is the name of the parameter (in this case, "name") and the value is the value of the parameter (in this case, "learn-react")
// The useParams() hook is used to access the URL parameters in a functional component
// The useParams() hook returns an object of key/value pairs of URL parameters
// The key is the name of the parameter (in this case, "name") and the value is the value of the parameter (in this case, "learn-react")
export default function ArticlePage() {
    const { name } = useParams(); // This will give you the name of the article from the URL
    // The name variable will contain the value of the name parameter from the URL

    const article = articles.find((article) => article.name === name);
    return (
        <>
        <h1>{article.title}</h1>

        <p>{article.content.map((paragraph, index) => {
            return (
                <p key={index}>{paragraph}</p>
            )
        })}</p>
        </>
    )
}