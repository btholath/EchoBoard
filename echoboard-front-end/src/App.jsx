import {
  createBrowserRouter,  //Creates a router that uses the HTML5 history API (for browser URLs like /home)
  RouterProvider        // Wraps your application with the routing context using the router created by createBrowserRouter
} from 'react-router-dom'
import axios from 'axios';
import './App.css';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArticlePage, { loader as articleLoader } from './pages/ArticlePage';
import ArticlesListPage from './pages/ArticlesListPage';
import Layout from './pages/Layout';
import NotFoundPage from './pages/NotFoundPage';


const routes = [{
  path: '/',
  element: <Layout />,
  errorElement: <NotFoundPage />,
  children: [{
    path: '/',
    element: <HomePage />
  }, {
    path: '/about',
    element: <AboutPage />
  }, {
    path: '/articles',
    element: <ArticlesListPage />
  }, {
    path: '/articles/:name', // -> /articles/learn-react
    element: <ArticlePage />,
    loader: articleLoader,
  }]
}]


const router = createBrowserRouter(routes);

function App() {
  return (
    <>
    <RouterProvider router={router} />
    </>
  );
}

export default App;
