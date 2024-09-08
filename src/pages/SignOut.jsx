import { auth } from "../firebase/firebase";
import { signOut } from "firebase/auth";
import { Navigate } from "react-router-dom";
import { useState } from "react";

function SignOut() {
  const [signIn, setSignedIn] = useState(false);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("Sign-out successful.");
        setSignedIn(true);
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
        setSignedIn(false);
      });
  };
  return (
    <>
      {signIn ? (
        <Navigate to="/signIn" />
      ) : (
        <div className="flex flex-col text-center mx-16 my-24">
          <h1 className="text-3xl font-bold mb-8">Sign out</h1>
          <button
            className="bg-orange-500 p-3 text-white text-2xl rounded-lg my-6"
            onClick={handleSignOut}
          >
            Sign out
          </button>
        </div>
      )}
    </>
  );
}

export default SignOut;
