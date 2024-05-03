import { useContext } from "react";
import BasicRating from "../Components/rating";
import BasicRated from "../Components/rated";

import TextNav from "../Components/NavBar";
import { BookContext, BookContextType } from "../Components/BookContext";

export default function OnBookPage() {
  const { bookDetails } = useContext(BookContext) as BookContextType;

  const getCoverUrl = (coverId: number) => {
    return `https://covers.openlibrary.org/b/id/${coverId}-M.jpg`;
  };

  return (
    <div>
      <TextNav />
      <div className=" flex gap-5">
      {bookDetails ? (
        <><div>
                  {bookDetails.cover_i && (
                      <div className="w-52 my-2 ml-2 border flex flex-col items-center p-3 rounded-2xl">
                          <img
                              src={getCoverUrl(bookDetails.cover_i)}
                              alt={bookDetails.title}
                              className="w-full rounded-2xl" />
                              
                           
                              <button>Add to favs</button>
                              <button>Add to Next book</button>
                              <button>Already Read?</button>

                                <div className="border-b-2 border-b-cardColor border-opacity-50" >
                              <BasicRating />
                              </div>
                              <div className="mt-4">leave a review</div>
                              <button>📖</button>

                              
                      </div>
                  )}
              </div><div>
                <div className="flex">
                      <div className="mb-2 text-6xl"> {bookDetails.title}</div>
                      <div className="mb-2 text-2xl mt-4 ml-4">
                           {bookDetails.first_publish_year}
                      </div>
                
                      </div>
                      <div className="w-100">{bookDetails.first_sentence}</div>
                      <div className="mb-2 underline font-bold text-xl">by {bookDetails.author_name}</div>
                      <BasicRated rating={bookDetails.ratings_average} />
                  </div></>
                  
                  
                ) : (
                    <div>Loading...</div>
                )}
        </div>
        </div>
  );
}
