import PropTypes from "prop-types";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";
import { Navigate, useLocation } from "react-router-dom";

function PrivateRoute(props) {
  const { children } = props || {};
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <>
        <div className="flex justify-center items-center min-h-[50vh]">
          <span className="loading loading-bars loading-lg"></span>
        </div>
      </>
    );
  }

  if (!user) {
    return <Navigate to={"/login"} state={location.pathname}></Navigate>;
  }

  return children;
}

PrivateRoute.propTypes = {
  children: PropTypes.object,
};

export default PrivateRoute;
