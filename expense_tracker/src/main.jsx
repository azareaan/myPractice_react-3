import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css'
import Layout from './components/Layout';
import Home from './pages/Home/index.jsx'
import AddCategory from './pages/AddCategory/index.jsx'
import CostForm from './pages/CostForm/index.jsx'
import IncomeForm from './pages/IncomeForm/index.jsx'

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
