import React from 'react'
import {
    createBrowserRouter,
    Navigate,
} from "react-router-dom";
import Home from "../pages/Home"
import Layout from '../components/Layout';



export interface PrivateRouteProps {
    children: React.ReactNode;
}

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <Layout>
                <Home />
            </Layout>
        ),
    },
    {
        path: "/auth",
        element: (
            // <Layout>
            <Home />
            // </Layout>
        ),
    },
    {
        path: "/checkout",
        element: (
            // <Layout>
            <Home />
            // </Layout>
        ),
    },
    {
        path: "/purchased-items",
        element: (
            // <Layout>
            <Home />
            // </Layout>
        ),
    },
    {
        path: "*",
        element: <Navigate to="/" replace />,
    },
]);

export default router