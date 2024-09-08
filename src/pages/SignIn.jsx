/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from "react";
import { Navigate, NavLink } from "react-router-dom";
import { auth } from "../firebase/firebase";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
function SignIn() {
  const [details, setDetails] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const [currentUser, setCurrentUser] = useState(null);
  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, details.email, details.password)
      .then(() => {
        // Signed in
        setMessage("Signed in successfully");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        setMessage("There was an error signing in");
      });
    setDetails({ email: "", password: "" });
  };
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setDetails((prev) => ({ ...prev, [name]: value }));
  };



  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
       // console.log(user)
      setCurrentUser(user);
    });
  }, []);

  return (
    <>
      {currentUser ? (
        <Navigate to="/host" />
      ) : (
        <div className="flex flex-col text-center mx-16 my-24">
          <h1 className="text-3xl font-bold mb-8">Sign in to your account</h1>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={details.email}
            onChange={handleChange}
            className="border rounded-lg border-black h-10 mt-5 placeholder-black indent-2 p-3"
          />
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={details.password}
            onChange={handleChange}
            className="border rounded-lg border-black h-10 mt-5 placeholder-black indent-2 p-3"
          />
          <button
            className="bg-orange-500 p-3 text-white text-2xl rounded-lg my-6"
            onClick={handleSignIn}
          >
            Sign In
          </button>
          <h2 className="text-xl text-red-600 font-extrabold">{message}</h2>
          <p className="text-xl font-bold mt-5">
            Don't have an account?
            <NavLink to="/signUp" className="text-orange-500 ">
              {" "}
              Create one now
            </NavLink>
          </p>
        </div>
      )}
    </>
  );
}

export default SignIn;
