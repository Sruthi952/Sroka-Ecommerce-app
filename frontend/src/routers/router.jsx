import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import CategoryPage from "../pages/Category/CategoryPage";
import Search from "../pages/search/Search";
import ShopPage from "../pages/home/shop/ShopPage";
import SingleProduct from "../pages/home/shop/productDetails/SingleProduct";
import Login from "../components/Login";
import Register from "../components/Register";
import DAshboardLayout from "../pages/dashboard/DAshboardLayout"
import PaymentSuccess from "../components/PaymentSuccess";
import AdminDMain from "../pages/dashboard/admin/dashboard/AdminDMain";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/categories/:categoryName", element: <CategoryPage /> },
      { path: "/search", element: <Search /> },
      { path: "/shop", element: <ShopPage /> },
      { path: "/shop/:id", element: <SingleProduct /> },
      {
  path: "/success",
  element:<PaymentSuccess/>
}

    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  //dashboard routes start
  {
    path: "/dashboard", 
    element:<DAshboardLayout/>,
    children:[
      //user routes
      {path:"",element:<div>User Dashboard</div>},
        {path:"orders",element:<div>User Order</div>},
        {path:"payments",element:<div>User Payments</div>},
        {path:"profile",element:<div>User Profile</div>},
        {path:"reviews",element:<div>User Reviews</div>},
      // admin routes
             {path:"admin",element:<AdminDMain/>},
             {path:"add-new-post",element:<div>New Products</div>},
             {path:"manage-products",element:<div>Manage Post</div>},
             {path:"update-product/:id",element:<div>Update Product</div>},
             {path:"users",element:<div>All Users</div>},
             {path:"manage-orders",element:<div>Manage Orders</div>}
    ]
  },
]);

export default router;
