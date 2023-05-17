
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import Home from './pages/home/Home';
import UserList from './pages/userList/UserList';
import Users from './pages/users/Users';



const AppLayout=()=>(
  <>
    <Outlet/>
  </>
)

const HomeLayout=()=>(
  <>
    <Outlet/>
  </>
)


const router = createBrowserRouter([
  {
    element:<HomeLayout/>,
    children:[
      {
        path: "/",
        element: <Home/>,
      }      
    ],
  },
  {
    element:<AppLayout/>,
    children:[
      {
        path: "/users-list",
        element: <UserList/>,
      },
      {
        path: "/users",
        element: <Users/>,
      },
    ],
  }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />
);



