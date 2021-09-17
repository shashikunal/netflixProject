import { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { AuthContext } from "../ContextApi/AuthContext";

let ProtectedRoute = ({ Component, props }) => {
  let USER = useContext(AuthContext);
  return (
    <Route
      {...props}
      render={props =>
        USER ? Component : <Redirect to="/signin" {...props} />
      }
    />
  );
};

export default ProtectedRoute;
