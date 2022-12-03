import { Navigate } from "react-router-dom";
import { element, bool } from "prop-types";

function ProtectedRoute({user, children}) {
    if (!user) {
        return <Navigate to="/users/register" replace />;
    }

    return children;
}

ProtectedRoute.propTypes = {
    user: bool,
    children: element
}

export default ProtectedRoute