import { Navigate } from "react-router";

export interface PrivateRouteProps {
    children: React.ReactNode;
}

export const PrivateRoute = ({ children }: PrivateRouteProps) => {
    // if () {
    //     return children
    // }

    return <Navigate to="/auth" replace />
}