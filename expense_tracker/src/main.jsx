import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css'
import Layout from './assets/components/Layout';
import Home from './assets/pages/Home/index.jsx'
import AddCategory from './assets/pages/AddCategory/index.jsx'
import CostForm from './assets/pages/CostForm/index.jsx'
import IncomeForm from './assets/pages/IncomeForm/index.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout />,
    children:[
      {
        path:"",
        element:<Home />
      },
      {
        path:"addcategory",
        element:<AddCategory />
      },
      {
        path:"costform",
        element:<CostForm />
      },
      {
        path:"incomeform",
        element:<IncomeForm />
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
