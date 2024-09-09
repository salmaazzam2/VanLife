/* eslint-disable react-refresh/only-export-components */
import { useLoaderData } from "react-router-dom";
import { getHostVans } from "../../api/api";
import { Link } from "react-router-dom";
import { useMemo } from "react";

export async function loader() {
  const data = await getHostVans();
  return data;
}

function HostVans() {
  const loaderData = useLoaderData();

  const hostVans = useMemo( () => loaderData.map((van) => {
    const id = van[1].id.stringValue;
    return (
      <Link to={`${id}`} key={van[0]}>
        <div className="flex mb-4 items-center bg-pink-100 rounded-lg p-2">
          <img
            src={encodeURI(van[1].imageUrl.stringValue)}
            className="w-20 h-20 object-fit rounded-lg"
          />
          <div className="ml-3">
            <h3 className="text-xl">{van[1].name.stringValue}</h3>
            <h3 className="my-2">${van[1].price.integerValue}/day</h3>
          </div>
        </div>
      </Link>
    );
  }), [loaderData]);
  return (
    <div className="m-8 flex flex-col gap-2">
      <h1 className="text-2xl font-bold mb-2">Your listed vans</h1>
      {hostVans}
    </div>
  );
}

export default HostVans;
