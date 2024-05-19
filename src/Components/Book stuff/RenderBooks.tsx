import { useContext } from "react";
import { BookContext, BookContextType } from "../state/BookContext";
import useFetchBooks from "../../hooks/useFetch";
import BookCards from "./BookCards";
import { Book } from "../../types";

const RenderBooks = () => {
  const { setBookDetails } = useContext(BookContext) as BookContextType;

  const {
    books: adventureBooks,
    loading: adventureLoading,
    error: adventureError,
  } = useFetchBooks(["Adventure"]);
  const {
    books: survivalBooks,
    loading: survivalLoading,
    error: survivalError,
  } = useFetchBooks(["Survival"]);
  const {
    books: fantasyBooks,
    loading: fantasyLoading,
    error: fantasyError,
  } = useFetchBooks(["Fantasy"]);

  const handleBookClick = (book: Book) => {
    const bookDetails = {
      key: book.key,
      title: book.title,
      author_name: book.author_name
        ? book.author_name.join(", ")
        : "Unknown author",
      first_publish_year: book.first_publish_year || 0,
      cover_i: book.cover_i,
      ratings_average: book.ratings_average || 0,
      first_sentence: "",
      description: "",
      review: "",
      totalPages: 0,
      rating: null,
    };

    setBookDetails(bookDetails);
  };

  if (adventureLoading || survivalLoading || fantasyLoading) {
    <div className="flex-grow flex flex-col justify-center items-center">
      <div>Loading...</div>
    </div>;
  }

  if (adventureError || survivalError || fantasyError) {
    <div className="flex-grow flex flex-col justify-center items-center">
      {adventureError || survivalError || fantasyError}
    </div>;
  }

  return (
    <div className="flex flex-col justify-center items-center mt-10 gap-10">
      <BookCards
        books={survivalBooks}
        category="Survival"
        onBookClick={handleBookClick}
      />
      <BookCards
        books={adventureBooks}
        category="Adventure"
        onBookClick={handleBookClick}
      />
      <BookCards
        books={fantasyBooks}
        category="Fantasy"
        onBookClick={handleBookClick}
      />
    </div>
  );
};

export default RenderBooks;
