import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import About from "../pages/about";
import Contact from "../pages/contact";
import Movies from "../pages/movies";
import Series from "../pages/series";
import Novedades from "../pages/novedades";
import Masvistas from '../pages/masvistas';




export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
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
        path: "/movies",
        element: <Movies />,
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
