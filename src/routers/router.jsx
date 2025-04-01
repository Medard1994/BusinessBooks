import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../home/Home";
import Shop from "../shop/Shop";
import About from "../component/About";
import Blog from "../component/Blog";
import SingleBook from "../shop/SingleBook";
import DashboardLayout from "../dashboard/DashboardLayout";
import DashBoard from "../dashboard/DashBoard";
import UploadBooks from "../dashboard/UploadBooks";
import ManageBooks from "../dashboard/ManageBooks";
import EditBooks from "../dashboard/EditBooks";
import SignUp from "../component/SignUp";
import Login from "../component/Login";
import Logout from "../component/Logout";
import PrivateRouter from "../privateRouter/PrivateRouter";
import Mustread from "../readMore/Mustread";
import Thinking from "../readMore/Thinking";
import Manegement from "../readMore/Manegement";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/shop", element: <Shop /> },
      { path: "/about", element: <About /> },
      { path: "/blog", element: <Blog /> },
      { path: "/mustread/:id", element: <Mustread /> },
      { path: "/thinking/:id", element: <Thinking /> },
      { path: "/manegement/:id", element: <Manegement /> },
      {
        path: "book/:id",
        element: <SingleBook />,
        loader: ({ params }) =>
          fetch(`https://backend-book-5gk7.onrender.com/book/${params.id}`).then((res) =>
            res.json()
          ),
      },
      { path: "/privateRouter", element: <PrivateRouter /> },
    ],
  },
  {
    path: "/admin/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "/admin/dashboard",
        element: <PrivateRouter><DashBoard /></PrivateRouter>,
      },
      { path: "upload", element: <UploadBooks /> },
      { path: "manage", element: <ManageBooks /> },
      {
        path: "edit-book/:id",
        element: <EditBooks />,
        loader: ({ params }) =>
          fetch(`https://backend-book-5gk7.onrender.com/book/${params.id}`).then((res) =>
            res.json()
          ),
      },
    ],
  },
  { path: "/sign-up", element: <SignUp /> },
  { path: "/login", element: <Login /> },
  { path: "/logout", element: <Logout /> },
]);

export default router;
