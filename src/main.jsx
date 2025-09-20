import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Us from './components/Us/Us.jsx'
import Layout from './components/Layout/Layout.jsx'
import Clients from './components/Clients/Clients.jsx'
import Contact from './components/Contact/Contact.jsx'
const router = createBrowserRouter([
   {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/About", element: <About /> },
      { path: "/Us", element: <Us /> },
      { path: "/contact", element: <Contact /> },
      {path:"/Clients", element:<Clients/>}
    ]
  },
  { path: "*", element: <div>Not Found</div> }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
