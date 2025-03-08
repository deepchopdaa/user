
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Login from './Component/Login';
import Register from './Component/Register';
import MainLayout from './Component/MainLayout';
import Home from './Component/Home.jsx';
import RouteProtector from './Protector/RouteProtector';
import ProductDetail from './Component/ProductDetail.jsx';
import ContactUs from './Component/ContactUs.js';
import Cart from './Component/Cart.jsx';
import PopularProduct from './Component/PopularProduct.jsx';



function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Login />,
    },
    {
      path: '/register',
      element: <Register />,  
    },
    {
      path: '/home',
      element: <Home />,
    },
    {
      path: '/product',
      element: <ProductDetail />,
    },
    {
      path:'/home/populor',
      element:<PopularProduct/>
    },
    {
      path: '/contactus',
      element: <ContactUs />,
    },
    {
      path: '/cart',
      element: <Cart />,
    },
    {
      path: '/game',
      element: <RouteProtector  element={<MainLayout />} />,
      children: [
        {
          path: '*',
          element: <RouteProtector element={<Home />} />,
        },
      ],
    }
  ]);

  return <RouterProvider router={router} />;
}





// function App() {
//   return (
//     <div className="App">
//         {/* <Login/>
//         <Register/> */}
//         <Navbar/>
//     </div>
//   );
// }

export default App;
