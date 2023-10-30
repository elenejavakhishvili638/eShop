import React from 'react'
import {
    createBrowserRouter,
    Navigate,
} from "react-router-dom";
import Home from "../pages/Home"
import Layout from '../components/Layout';
import Auth from '../pages/Auth';
import Checkout from '../pages/Checkout';
import PurchasedItems from '../pages/PurchasedItems';



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
            <Layout>
                <Auth />
            </Layout>
        ),
    },
    {
        path: "/checkout",
        element: (
            <Layout>
                <Checkout />
            </Layout>
        ),
    },
    {
        path: "/purchased-items",
        element: (
            <Layout>
                <PurchasedItems />
            </Layout>
        ),
    },
    {
        path: "*",
        element: <Navigate to="/" replace />,
    },
]);

export default router