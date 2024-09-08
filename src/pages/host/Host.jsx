import { Navigate, Outlet } from "react-router-dom";
import HostNavbar from "../../components/HostNavbar";
import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase/firebase";


function Host() {
 const [currentUser, setCurrentUser] = useState(null)
 const [loading, setLoading] = useState(true)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log(user)
      setCurrentUser(user);
      setLoading(false)
    });
 

  }, []);
  if (loading) {
    return <p>Loading</p>
  }
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
