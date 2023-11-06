import React from 'react'
import {
    createBrowserRouter,
    Navigate,
} from "react-router-dom";
import Shop from "../pages/Shop"
import Layout from '../components/Layout';
import Auth from '../pages/Auth';
import Checkout from '../pages/Checkout';
import PurchasedItems from '../pages/PurchasedItems';
import { PrivateRoute } from './PrivateRoute';



export interface PrivateRouteProps {
    children: React.ReactNode;
}

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <Layout>
                {/* <PrivateRoute>
                </PrivateRoute> */}
                <Shop />
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
                {/* <PrivateRoute>
                </PrivateRoute> */}
                <Checkout />
            </Layout>
        ),
    },
    {
        path: "/purchased-items",
        element: (
            <Layout>
                {/* <PrivateRoute>
                </PrivateRoute> */}
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