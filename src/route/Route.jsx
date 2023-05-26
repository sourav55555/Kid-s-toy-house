import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Components/Error/ErrorPage";
import Addtoy from "../Components/Home/Addtoy/Addtoy";
import AllToys from "../Components/Home/AllToys/AllToys";
import Blog from "../Components/Home/Blog/Blog";
import Home from "../Components/Home/Home/Home";
import Mytoys from "../Components/Home/Mytoys/Mytoys";
import Login from "../Components/User/Login/Login";
import Registration from "../Components/User/Registration/Registration";
import Main from "../Layout/Main";
import UserLayout from "../Layout/UserLayout";
import PrivateRout from "./PrivateRout";

const router = createBrowserRouter([
        {
          path: "/",
          element: <Main/>,
          errorElement: <ErrorPage/>,
          children:[
            {
                path: "/",
                element: <Home/>
            },
            {
              path: "/addtoy",
              element: <PrivateRout><Addtoy/></PrivateRout>
            },
            {
              path: "/mytoys",
              element: <PrivateRout><Mytoys/></PrivateRout>
            },
            {
              path: "/alltoys",
              element: <AllToys/>
            },
            {
              path: "/blogs",
              element: <Blog/>
            }
          ]
        },
        {
          path: "/user",
          element: <UserLayout/>,
          children:[
            {
              path: "/user",
              element: <Login/>
            },
            {
              path: "/user/register",
              element: <Registration/>
            }
          ]
        }
      ]);

export default router;