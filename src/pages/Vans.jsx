import { getVans, getTypeVans } from "../api/api";
import { Link, NavLink, useLoaderData, useLocation } from "react-router-dom";
import { useMemo } from 'react'

export async function loader({ request }) {
  const url = new URL(request.url);
  const searchTerm = url.searchParams.get("type");
  const data = searchTerm ? await getTypeVans(searchTerm) : await getVans()
  return data
}
function Vans() {
  const loaderData = useLoaderData();

  const vansData = useMemo(() => loaderData.map((van) => {
    const {imageUrl, name, price, type } = van[1]
    const id = van[1].id.stringValue;
    return (
      <Link to={`${id}`} key={van[0]}>
        <div className="flex flex-col mb-4 items-center">
          <img
            src={encodeURI(imageUrl.stringValue)}
            className="w-48 h-48 object-fit rounded-lg"
          />
          <h3 className="text-xl">{name.stringValue}</h3>
          <h3 className="my-2">${price.integerValue}/day</h3>
          <button
            className={`${
              type.stringValue === "luxury"
                ? "luxury"
                : type.stringValue === "simple"
                ? "simple"
                : "rugged"
            }`}
          >
            {type.stringValue}
          </button>
        </div>
      </Link>
    );
  }), [loaderData]);

const filterTypes = ["simple", "rugged", "luxury"]
const {search} = useLocation()
const type = new URLSearchParams(search).get('type')

const filterButtons = () => {
  return filterTypes.map((filterType) => (
    <NavLink key={filterType}
    to={`?type=${filterType}`}
    className={({ isActive }) =>
      `filtering-button ${isActive && type === filterType? `${filterType}-active` : ""}`
    }
  >
    {filterType[0].toUpperCase() + filterType.slice(1)}
  </NavLink>
  ))
}
  return (
    <div className="mt-5 px-10">
      <h1 className="text-2xl mb-3">Explore our van options</h1>
      <div className="flex gap-10 items-center">
     {filterButtons()}
        <Link to="" className="underline text-[#4D4D4D]">
          Clear Filters{" "}
        </Link>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 mt-10 lg:grid-cols-3">{vansData}</div>
    </div>
  );
}

export default Vans;
