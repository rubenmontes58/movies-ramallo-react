import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { router } from "./router";
import { RouterProvider } from "react-router-dom";


import App from './App'
import NavBar from './components/NavBar';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='container'>
  <NavBar/>
       

    <App/>
    </div>
  
  
  <RouterProvider router={router} />
   
  </React.StrictMode>,
)