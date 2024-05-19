import { useContext } from "react";
import TextNav from "../Components/NavBar";
import { BookContext, BookContextType } from "../state/BookContext";
import BookDeets from "../Components/Book stuff/BookDeets";
import Footer from "../Components/Footer";

export default function OnBookPage() {
  const { bookDetails, addToFavorites, addToRead } = useContext(
    BookContext
  ) as BookContextType;

  return (
    <div className="flex flex-col min-h-screen bg-Background">
      <TextNav />
      {bookDetails ? (
        <div className="flex-grow flex flex-col">
        <BookDeets 
        bookDetails={bookDetails}
        addToFavorites={addToFavorites}
        addToRead={addToRead}
        showRating={true}
        />
        </div>
      ) : (
        <div>Loading...</div>
      )}
      <Footer />
    </div>
  );
}