/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom"

function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center h-full">
      <h1 className="text-6xl px-6 font-bold text-center leading-snug"> Sorry the page you were looking for wasn't found </h1>
      <Link>
        <button className="bg-black  h-20 text-4xl text-white px-4 py-2 mt-5 lg:mt-4 rounded-lg hover:bg-gradient-to-r from-black to-violet-950 duration-200 transition-colors ease-linear mb-7">
          Back to home
        </button>
      </Link>
    </div>
  );
}

export default NotFound;
