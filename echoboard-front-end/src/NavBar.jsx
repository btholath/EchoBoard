import {Link} from "react-router-dom";


export default function NavBar() {
    return (
        <nav>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/articles">Articles</a></li>
                <li><a href="/articles/individual">Individual Article</a></li>
            </ul>
        </nav>
    )
}
