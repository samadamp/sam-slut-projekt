import { useContext, useMemo, useState } from "react";
import { BookContext, BookContextType } from "../state/BookContext";
import BasicRated from "../ratings/CurrentlyRated";
import { Link } from "react-router-dom";

export default function MarkedBooks() {
  const { favoriteBooks, readBooks, removeFromFavorites, setBookDetails } = useContext(
    BookContext
  ) as BookContextType;
  const getCoverUrl = (coverId: number) => {
    return `https://covers.openlibrary.org/b/id/${coverId}-M.jpg`;
  };

  const pageSize = 4;

  const [favoriteCurrentPage, setFavoriteCurrentPage] = useState(1);
  const [readCurrentPage, setReadCurrentPage] = useState(1);

  const handleFavoriteBookClick = (book: any) => {
    setBookDetails(book);
  };

  const handleReadBookClick = (book: any) => {
    setBookDetails(book);
  };

  const favoriteNextPage = () => {
    setFavoriteCurrentPage((prevPage) =>
      Math.min(prevPage + 1, Math.ceil(favoriteBooks.length / pageSize))
    );
  };
  const favoritePrevPage = () => {
    setFavoriteCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const readNextPage = () => {
    setReadCurrentPage((prevPage) =>
      Math.min(prevPage + 1, Math.ceil(readBooks.length / pageSize))
    );
  };
  const readPrevPage = () => {
    setReadCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const totalPagesRead = useMemo(() => {
    return readBooks.reduce((total, book) => total + (book.totalPages || 0), 0);
  }, [readBooks]);

  const totalBooksRead = readBooks.length;

  return (
    <div className="flex flex-row justify-center items-start gap-10 mt-8">
      <div className="flex flex-col w-1/2  p-4 rounded-lg">
        <h1 className="text-center mb-4 text-2xl">My Favorite Books</h1>
        {favoriteBooks.length > 0 ? (
          <div className="flex justify-center">
            <div className="rounded p-4">
              <div className="flex justify-center items-start gap-6 flex-wrap">
                {favoriteBooks
                  .slice(
                    (favoriteCurrentPage - 1) * pageSize,
                    favoriteCurrentPage * pageSize
                  )
                  .map((book, index) => (
                    <div className="flex flex-col items-center" key={index}>
                      <Link to={`/OnBooks${book.key}`} key={`book_${book.key}`} onClick={() => handleFavoriteBookClick(book)}>
                        <div>
                          <img
                            className="max-w-xs h-48 object-cover"
                            src={getCoverUrl(book.cover_i)}
                            alt={book.title}
                          />
                        </div>
                      </Link>
                      <button
                        onClick={() => removeFromFavorites(book)}
                        className="text-red-500 mt-5"
                      >
                        Remove
                      </button>
                    </div>
                  ))}
              </div>
              <div className="flex justify-center mt-4">
                <button
                  className="px-4 py-2 text-2xl cursor-pointer"
                  onClick={favoritePrevPage}
                  disabled={favoriteCurrentPage === 1}
                >
                  {"<"}
                </button>
                <button
                  className="px-4 py-2 text-2xl cursor-pointer"
                  onClick={favoriteNextPage}
                  disabled={
                    favoriteCurrentPage ===
                    Math.ceil(favoriteBooks.length / pageSize)
                  }
                >
                  {">"}
                </button>
              </div>
            </div>
          </div>
        ) : (
          <p className="text-center">No favorite books added yet.</p>
        )}
      </div>

      <div className="flex flex-col w-1/2  p-4 rounded-lg">
        <h1 className="text-center mb-4 text-2xl">My Read Books</h1>
        {readBooks.length > 0 ? (
          <div className="flex justify-center">
            <div className="rounded p-4">
              <div className="flex justify-center items-start gap-6 flex-wrap">
                {readBooks
                  .slice(
                    (readCurrentPage - 1) * pageSize,
                    readCurrentPage * pageSize
                  )
                  .map((book, index) => (
                    <div className="flex flex-col items-center" key={index}>
                      <Link to={`/OnBooks${book.key}`} key={`book_${book.key}`} onClick={() => handleReadBookClick(book)}>
                        <div>
                          <img
                            className="max-w-xs h-48 object-cover"
                            src={getCoverUrl(book.cover_i)}
                            alt={book.title}
                          />
                        </div>
                      </Link>
                      <p>{book.review}</p>
                      <p>Total Pages: {book.totalPages}</p>
                      <p>
                        <BasicRated rating={book.rating} />
                      </p>
                    </div>
                  ))}
              </div>
              <div className="flex justify-center mt-4">
                <button
                  className="px-4 py-2 text-2xl cursor-pointer"
                  onClick={readPrevPage}
                  disabled={readCurrentPage === 1}
                >
                  {"<"}
                </button>
                <button
                  className="px-4 py-2 text-2xl cursor-pointer"
                  onClick={readNextPage}
                  disabled={
                    readCurrentPage === Math.ceil(readBooks.length / pageSize)
                  }
                >
                  {">"}
                </button>
              </div>
              <div className="text-center mb-4">
                Total Pages Read: {totalPagesRead}
              </div>
              <div className="text-center mb-4">
                Total Books Read: {totalBooksRead}
              </div>
            </div>
          </div>
        ) : (
          <p className="text-center">No read books added yet.</p>
        )}
      </div>
    </div>
  );
}
