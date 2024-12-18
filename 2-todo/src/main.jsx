import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'
import App from './App.jsx'
import TaskPage from './pages/TaskPage.jsx';

//react-router-dom
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// react-router-dom
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: '/task',
    element: <TaskPage />,
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
