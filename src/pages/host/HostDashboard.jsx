/* eslint-disable react-refresh/only-export-components */
import { useLoaderData } from "react-router-dom"
import { getHostVans } from "../../api/api"
import { Link } from "react-router-dom"
import { useMemo } from "react"

export async function loader() {
    return await getHostVans()
}

function HostDashboard() {

    const loaderData = useLoaderData()
    const hostVans = useMemo(() => loaderData.map((van) => {
        const id = van[1].id.stringValue;
        return (
          <Link to={`${id}`} key={van[0]}>
            <div className="flex mb-4 items-center bg-pink-100 rounded-lg p-1">
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
    <div>
        <div className="bg-[#FFEAD0] p-4 mt-5">
            <h2 className="text-2xl font-extrabold">Welcome!</h2>
            <div className="flex justify-between items-center">
            <p className="text-gray-400">Income last <span className="underline">30 days</span></p>
            <Link to="income" className="text-sm underline">Details</Link>
            </div>
            <h1 className="text-3xl">$2,260</h1>
        </div>
        <div className="bg-[#FFDDB2] p-4 flex justify-between items-center">
            <p className="text-lg font-bold">Review score <span className="text-base">⭐5.0<span className="text-gray-400">/5</span></span></p>
            <Link to="reviews" className="text-sm underline">Details</Link>        </div>
        <div className="m-7">
            <div className="flex justify-between items-center">
               <p className="text-xl font-semibold"> Your listed vans</p>
               <Link to="vans" className="text-sm underline">View all</Link>
            </div>
            {hostVans}
        </div>
    </div>
  )
}

export default HostDashboard