import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Home from "./pages/Home";
import Apart from "./pages/Apart";
import About from "./pages/About";
import Header from "./layout/Header/header";
import Footer from "./layout/Footer";
import Error from "./components/Error";
import './utils/style/index.css';

const HeaderFooterLayout = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
};
const Router = createBrowserRouter([
    {
        element: <HeaderFooterLayout />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/apart",
                element: <Apart/>
            },
            {
                path: "/about",
                element: <About />
            }
        ]
    }
    
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={Router} />
    </React.StrictMode>,
);