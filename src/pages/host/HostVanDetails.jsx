import { useLoaderData, Link } from "react-router-dom";
import { getVan } from "../../api/api";

export async function loader({ params }) {
  const vanData = await getVan(params.id);
  return vanData;
}

function HostVanDetails() {
  const loaderData = useLoaderData();
  const vanData = loaderData.map((van) => {
    const {description, imageUrl, name, price, type } = van[1]
    return(
      <div key={van[0]} className="flex flex-col my-4 mx-4">
      <img
        src={encodeURI(imageUrl.stringValue)}
        className="object-fit rounded-lg"
      />
      <button
        className={`my-2 ${
          type.stringValue === "luxury"
            ? "luxury"
            : type.stringValue === "simple"
            ? "simple"
            : "rugged"
        }`}
      >
        {type.stringValue}
      </button>
      <h3 className="text-2xl font-bold">{name.stringValue}</h3>
      <h3 className="my-2 text-lg"><span className="font-bold">${price.integerValue}</span>/day</h3>
      <p>{description.stringValue}</p>
      <button className="bg-[#FF8C38] p-2 text-white text-lg rounded-lg mt-2 mb-3 text-center font-bold">Rent this van</button>
    </div>
    )
});
  return (
    <div className="mt-5">
      <button>
        <Link to=".." relative="path">
          &larr;
          <span className="text-lg underline text-gray-800">
            Back to all host vans
          </span>
        </Link>
      </button>
      {vanData}
    </div>
  );
}

export default HostVanDetails;
