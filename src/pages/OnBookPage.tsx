import React, { useContext, useEffect, useState } from "react";
import BasicRating from "../Components/rating";
import BasicRated from "../Components/rated";
import TextNav from "../Components/NavBar";
import { BookContext, BookContextType } from "../Components/BookContext";

export default function OnBookPage() {
  const { bookDetails } = useContext(BookContext) as BookContextType;
  const [description, setDescription] = useState<string | null>(null);
  const [isExpanded, setIsExpanded] = useState(false); // State to track if description is expanded

  const getCoverUrl = (coverId: number) => {
    return `https://covers.openlibrary.org/b/id/${coverId}-M.jpg`;
  };

  const fetchBookDescription = async () => {
    try {
      if (bookDetails) {
        const response = await fetch(`https://openlibrary.org${bookDetails.key}.json`);
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
  }, [bookDetails]); // Fetch description whenever bookDetails change

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  const truncatedDescription = description ? `${description.substring(0, 300)}...` : '';

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
                  <button>Add to favs</button>
                  <button>Add to Next book</button>
                  <button>Already Read?</button>
                  <div className="border-b-2 border-b-cardColor border-opacity-50">
                    <BasicRating />
                  </div>
                  <div className="mt-4">leave a review</div>
                  <button>📖</button>
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
                  <button className="border rounded py-1 font-bold text-xl my-2" onClick={toggleDescription}>
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
