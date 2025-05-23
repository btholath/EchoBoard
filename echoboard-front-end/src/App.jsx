import {
  createBrowserRouter,  //Creates a router that uses the HTML5 history API (for browser URLs like /home)
  RouterProvider        // Wraps your application with the routing context using the router created by createBrowserRouter
} from 'react-router-dom'

import './App.css';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArticlePage, { loader as articleLoader } from './pages/ArticlePage';
import ArticlesListPage from './pages/ArticlesListPage';
import Layout from './pages/Layout';
import NotFoundPage from './pages/NotFoundPage';
import axios from 'axios';



// <Layout /> will be always rendered, and the appropriate child component (<HomePage />, <AboutPage />, etc.) will be 
// inserted inside it via <Outlet /

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


//It creates a browser-based router instance using the HTML5 History API, based on the routes array you've defined.
/*
  The createBrowserRouter function is a part of the React Router library, which is used for routing in React applications.
  It allows you to define routes and their corresponding components, enabling navigation within your application.

  createBrowserRouter(routes):
  Takes your array of route objects (path + element)
  Converts them into a navigable routing structure that React Router understands
  Enables navigation, route matching, rendering components based on the URL  
*/
const router = createBrowserRouter(routes);

function App() {
  return (
    <>
    <RouterProvider router={router} />
    </>
   
  )
}

export default App;
