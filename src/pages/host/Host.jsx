import { Navigate, Outlet } from "react-router-dom";
import HostNavbar from "../../components/HostNavbar";
import { useContext } from "react";

import AuthContext from "../../utils/AuthContext";

function Host() {
  const currentUser = useContext(AuthContext);

  if (currentUser === null) {
    return <Navigate to="/signIn" replace />;
  }

  return (
    <>
      <HostNavbar />
      <Outlet />
    </>
  );
}

export default Host;
