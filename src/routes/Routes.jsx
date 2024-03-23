import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Blogs from "../pages/Blogs/Blogs";
import Blog from "../pages/Blog/Blog";
import Bookmarks from "../pages/Bookmarks/Bookmarks";
import Content from "../components/Content/Content";
import Author from "../components/Author/Author";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
        loader: () => fetch("https://dev.to/api/articles?per_page=20&top=7"),
      },
      {
        path: "/blog/:id",
        element: <Blog></Blog>,
        loader: ({params}) => fetch(`https://dev.to/api/articles/${params.id}`),
        children: [
          {
            index: true,
            element: <Content></Content>,
            loader: ({params}) =>
              fetch(`https://dev.to/api/articles/${params.id}`),
          },
          {
            path: "author",
            element: <Author></Author>,
            loader: ({params}) =>
              fetch(`https://dev.to/api/articles/${params.id}`),
          },
        ],
      },
      {
        path: "/bookmarks",
        element: <Bookmarks></Bookmarks>,
      },
    ],
  },
]);
