import { NavLink } from "react-router-dom";
import { useState } from "react";
import {createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase/firebase'

function SignUp() {
  const [details, setDetails] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value

    setDetails(prev => ({...prev, [name]: value}))

  };

  const handleSubmit = () => {
createUserWithEmailAndPassword(auth, details.email, details.password)
  .then((userCredential) => {

    const user = userCredential.user;
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
  }
  return (
    <div className="flex flex-col text-center mx-16 my-24">
      <h1 className="text-3xl font-bold mb-8">Sign up for an account</h1>
      <input
        type="email"
        value={details.email}
        name="email"
        placeholder="Enter your email"
        onChange={handleChange}
        className="border rounded-lg border-black h-10 mt-5 placeholder-black indent-2 p-3"
      />
      <input
        type="password"
        value={details.password}
        name="password"
        placeholder="Enter your password"
        onChange={handleChange}
        className="border rounded-lg border-black h-10 mt-5 placeholder-black indent-2 p-3"
      />
      <button className="bg-orange-500 p-3 text-white text-2xl rounded-lg my-6" onClick={handleSubmit}>
        Sign Up
      </button>
      <p className="text-xl font-bold mt-5">
        Already have an account?{" "}
        <NavLink to="/signIn" className="text-orange-500 ">
          Sign In
        </NavLink>
      </p>
    </div>
  );
}

export default SignUp;
