import { useContext, useEffect, useState } from "react";
import BasicRating from "../Components/rating";
import BasicRated from "../Components/rated";
import TextNav from "../Components/NavBar";
import { BookContext, BookContextType } from "../Components/BookContext";

export default function OnBookPage() {
  const { bookDetails, addToFavorites, addToRead } = useContext(
    BookContext
  ) as BookContextType;
  const [description, setDescription] = useState<string | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [review, setReview] = useState("");
  const [totalPages, setTotalPages] = useState("");
  const [rating, setRating] = useState<number | null>(0);

  const getCoverUrl = (coverId: number) => {
    return `https://covers.openlibrary.org/b/id/${coverId}-M.jpg`;
  };

  const fetchBookDescription = async () => {
    try {
      if (bookDetails) {
        const response = await fetch(
          `https://openlibrary.org${bookDetails.key}.json`
        );
        const data = await response.json();
        setDescription(data?.description || "Description not available");
      }
    } catch (error) {
      console.error("Error fetching book description:", error);
      setDescription("Description not available");
    }
  };

  useEffect(() => {
    fetchBookDescription();
  }, [bookDetails]);

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  const truncatedDescription = description
    ? `${description.substring(0, 300)}...`
    : "";

  const handleAddToFavorites = () => {
    if (bookDetails) {
      addToFavorites(bookDetails);
    }
  };

  const handleAddToRead = () => {
    setShowReviewForm(true);
  };

  const handleSubmitReview = () => {
    if (bookDetails && review && totalPages && rating !== null) {
      addToRead(bookDetails, review, parseInt(totalPages), rating);
      setShowReviewForm(false);
      setReview("");
      setTotalPages("");
      setRating(0);
    }
  };

  return (
    <div>
      <TextNav />
      <div className=" flex gap-5">
        {bookDetails ? (
          <>
            <div>
              {bookDetails.cover_i && (
                <div className="w-52 my-2 ml-2 border flex flex-col items-center p-3 rounded-2xl">
                  <img
                    src={getCoverUrl(bookDetails.cover_i)}
                    alt={bookDetails.title}
                    className="w-full rounded-2xl"
                  />
                  <button
                    className="border rounded p-1 font-bold text-xl my-3"
                    onClick={handleAddToFavorites}
                  >
                    Add to favs
                  </button>

                  <button
                    className="border rounded p-1 font-bold text-xl my-1 "
                    onClick={handleAddToRead}
                  >
                    Already Read?
                  </button>
                  {showReviewForm && (
                    <div className="flex flex-col items-center mt-4">
                      <textarea
                        value={review}
                        onChange={(e) => setReview(e.target.value)}
                        placeholder="Leave a review"
                        className="border p-2 w-full mt-2"
                      />
                      <input
                        type="number"
                        value={totalPages}
                        onChange={(e) => setTotalPages(e.target.value)}
                        placeholder="Total pages"
                        className="border p-2 w-full mt-2"
                      />
                      <div className="mt-2">
                        <BasicRating
                          value={rating}
                          onChange={(newRating) => setRating(newRating)}
                        />
                      </div>
                      <button
                        onClick={handleSubmitReview}
                        className="bg-blue-500 text-white p-2 mt-2"
                      >
                        Submit
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
            <div>
              <div className="flex">
                <div className="mb-2 text-6xl"> {bookDetails.title}</div>
                <div className="mb-2 text-2xl mt-4 ml-4">
                  {bookDetails.first_publish_year}
                </div>
              </div>
              <div className="w-100">
                {isExpanded ? description : truncatedDescription}
                {description && description.length > 200 && (
                  <button
                    className="border rounded p-1 font-bold text-xl my-2"
                    onClick={toggleDescription}
                  >
                    {isExpanded ? "Read Less" : "Read More"}
                  </button>
                )}
              </div>
              <div className="mb-2 underline font-bold text-xl">
                by {bookDetails.author_name}
              </div>
              <BasicRated rating={bookDetails.ratings_average} />
            </div>
          </>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
}
