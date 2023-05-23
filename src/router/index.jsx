import { createBrowserRouter } from "react-router-dom";
import Movies from "../pages/movies";
import About from "../pages/about";
import Contact from "../pages/contact";

import Series from "../pages/series";
import Novedades from "../pages/novedades";
import Masvistas from '../pages/masvistas';




export const router = createBrowserRouter([
    {
        path: "/",
        element: <Movies />,
    },
    {
        path: "/about",
        element: <About />,
    },
    {
        path: "/contact",
        element: <Contact />,
    },


    {
        path: "/novedades",
        element: <Novedades />,
    },

    {
        path: "/series",
        element: <Series />,
    },
    {
        path: "/masvistas",
        element: <Masvistas />,
    },
    
    
    
    


]);
