import { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { AuthContext } from "../ContextApi/AuthContext";

let ProtectedRoute = ({ children, props }) => {
  let USER = useContext(AuthContext);
  
  return (
    <Route
      {...props}
      render={props =>
        USER ?  children  : <Redirect to="/signin" {...props} />
      }
    />
  );
};

export default ProtectedRoute;
