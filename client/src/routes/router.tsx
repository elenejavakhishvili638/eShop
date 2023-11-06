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
import { ShopContextProvider } from '../context/shop-context';


export interface PrivateRouteProps {
    children: React.ReactNode;
}

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <ShopContextProvider>
                <Layout>
                    {/* <PrivateRoute>
                </PrivateRoute> */}
                    <Shop />
                </Layout>
            </ShopContextProvider>
        ),
    },
    {
        path: "/auth",
        element: (
            <ShopContextProvider>
                <Layout>
                    <Auth />
                </Layout>
            </ShopContextProvider>
        ),
    },
    {
        path: "/checkout",
        element: (
            <ShopContextProvider>

                <Layout>
                    {/* <PrivateRoute>
                </PrivateRoute> */}
                    <Checkout />
                </Layout>
            </ShopContextProvider>
        ),
    },
    {
        path: "/purchased-items",
        element: (
            <ShopContextProvider>
                <Layout>
                    {/* <PrivateRoute>
                </PrivateRoute> */}
                    <PurchasedItems />
                </Layout>
            </ShopContextProvider>
        ),
    },
    {
        path: "*",
        element: <Navigate to="/" replace />,
    },
]);

export default router