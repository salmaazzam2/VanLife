import { Link } from "react-router-dom";
import aboutImg from "../assets/aboutImage.png";

function About() {
  return (
    <div className="h-full bg-[#FFF7ED]">
      <img src={aboutImg} className="h-1/3 w-full lg:h-1/2"/>
      <div className="mt-8 mx-5 text-center">
        <h1 className="text-2xl font-bold leading-snug">Don’t squeeze in a sedan when you could relax in a van.</h1>
        <p className="mt-4 text-lg">
          Our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are recertified before each trip to ensure your
          travel plans can go off without a hitch.
        <br />
        (Hitch costs extra 😉)
        </p>
        <p className="mt-2 text-lg">
          Our team is full of vanlife enthusiasts who know firsthand the magic
          of touring the world on 4 wheels.
        </p>
        <div className="bg-[#FFCC8D] w-5/6 mx-auto h-30 lg:h-30 lg:w-4/6 my-3 px-4 py-2 rounded-md text-start">
        <h2 className="font-semibold text-lg mt-3 lg:mt-5">Your destination is waiting.
        Your van is ready.</h2>
        <Link to="/vans"><button className="bg-black text-white px-4 py-2 my-3 lg:mt-4 rounded-lg hover:bg-gradient-to-r from-black to-violet-950 duration-200 transition-colors ease-linear">Explore our vans!</button></Link>
        </div>
      </div>
    </div>
  );
}

export default About;
