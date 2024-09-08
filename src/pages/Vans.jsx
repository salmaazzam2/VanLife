/* eslint-disable react-refresh/only-export-components */
import { getVans, getTypeVans } from "../api/api";
import { Link, NavLink, useLoaderData, useLocation } from "react-router-dom";

export async function loader({ request }) {
  const url = new URL(request.url);
  const searchTerm = url.searchParams.get("type");
  const data = searchTerm ? await getTypeVans(searchTerm) : await getVans()
  return data
}
function Vans() {
  const loaderData = useLoaderData();

  const vansData = loaderData.map((van) => {
    const id = van[1].id.stringValue;
    return (
      <Link to={`${id}`} key={van[0]}>
        <div className="flex flex-col mb-4 items-center">
          <img
            src={encodeURI(van[1].imageUrl.stringValue)}
            className="w-48 h-48 object-fit rounded-lg"
          />
          <h3 className="text-xl">{van[1].name.stringValue}</h3>
          <h3 className="my-2">${van[1].price.integerValue}/day</h3>
          <button
            className={`${
              van[1].type.stringValue === "luxury"
                ? "luxury"
                : van[1].type.stringValue === "simple"
                ? "simple"
                : "rugged"
            }`}
          >
            {van[1].type.stringValue}
          </button>
        </div>
      </Link>
    );
  });
  1

const {search} = useLocation()
const type = new URLSearchParams(search).get('type')
  return (
    <div className="mt-5 px-10">
      <h1 className="text-2xl mb-3">Explore our van options</h1>
      <div className="flex gap-10 items-center">
        <NavLink
          to="?type=simple"
          className={({ isActive }) =>
            `filtering-button ${isActive && type === "simple"? "simple-active" : ""}`
          }
        >
          Simple
        </NavLink>
        <NavLink
          to="?type=luxury"
          className={({ isActive }) =>
            `filtering-button ${isActive && type === "luxury" ? "luxury-active" : ""}`
          }
        >
          Luxury
        </NavLink>
        <NavLink
          to="?type=rugged"
          className={({ isActive }) =>
            `filtering-button ${isActive && type === "rugged" ? "rugged-active" : ""}`
          }
        >
          Rugged
        </NavLink>
        <Link to="" className="underline text-[#4D4D4D]">
          Clear Filters{" "}
        </Link>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 mt-10 lg:grid-cols-3">{vansData}</div>
    </div>
  );
}

export default Vans;
