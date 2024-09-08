import reviewsImg from "../../assets/reviewsImg.png";
import reviews from "../../data/reviews";

const Reviews = () => {
  return (
    <ul>
      {reviews.map((review, index) => (
        <>
          <li key={index} className="my-4">
            <p>{review.stars}</p>
            <p className="my-2">
              {review.name}
              <span className="text-gray-400 ml-3">{review.date}</span>
            </p>

            <p>{review.review}</p>
          </li>
          <hr />
        </>
      ))}
    </ul>
  );
};
function HostReviews() {
  return (
    <div className="mt-10 box-border">
      <div className="flex items-center ml-3">
        <h1 className="font-extrabold text-3xl">Your reviews</h1>
        <p className="ml-2 mt-1">
          last <span className="underline">30 days</span>
        </p>
      </div>
      <div className="mt-5 w-4/5 mx-auto">
        <img src={reviewsImg} />
        <Reviews />
      </div>
    </div>
  );
}

export default HostReviews;
