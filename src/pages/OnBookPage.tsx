import { useContext } from "react";

import TextNav from "../Components/TextNav";
import { BookContext, BookContextType } from "../Components/BookContext";

export default function OnBookPage() {
  const { bookDetails } = useContext(BookContext) as BookContextType;

  const getCoverUrl = (coverId: number) => {
    return `https://covers.openlibrary.org/b/id/${coverId}-M.jpg`;
  };

  return (
    <div>
      <TextNav />
      {bookDetails ? (
        <div>
          {bookDetails.cover_i && (
            <div className="w-36">
              <img
                src={getCoverUrl(bookDetails.cover_i)}
                alt={bookDetails.title}
                className="w-full"
              />
            </div>
          )}
          <div className="mb-2">Title: {bookDetails.title}</div>
          <div className="mb-2">Author: {bookDetails.author_name}</div>
          <div className="mb-2">
            First Publish Year: {bookDetails.first_publish_year}
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
