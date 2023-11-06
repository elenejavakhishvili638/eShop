import { Navigate } from "react-router";

export interface PrivateRouteProps {
    children: React.ReactNode;
}

export const PrivateRoute = ({ children }: PrivateRouteProps) => {
    if (localStorage.getItem("userId")) {
        return children
    }

    return <Navigate to="/auth" replace />
}