import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Layout from './components/Layout/index';
import Home from './pages/Home/index';
import AddCategory from './pages/AddCategory/index';
import CostForm from './pages/CostForm/index';
import IncomeForm from './pages/IncomeForm/index';
import TransactionList from './pages/TransactionList/index';

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
      },
      {
        path:"transactionlist",
        element:<TransactionList />
      }
    ]
  }
]);

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Root element not found');
}

createRoot(rootElement).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);