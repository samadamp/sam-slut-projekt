import { useContext, useMemo, useState } from "react";
import { BookContext, BookContextType } from "../Components/BookContext";


export default function MarkedBooks() {
  const { favoriteBooks, readBooks } = useContext(
    BookContext
  ) as BookContextType;
  const getCoverUrl = (coverId: number) => {
    return `https://covers.openlibrary.org/b/id/${coverId}-M.jpg`;
  };

  
  const pageSize = 5;


  const [favoriteCurrentPage, setFavoriteCurrentPage] = useState(1);
  const [readCurrentPage, setReadCurrentPage] = useState(1);

  
  const favoriteNextPage = () => {
    setFavoriteCurrentPage(prevPage => Math.min(prevPage + 1, Math.ceil(favoriteBooks.length / pageSize)));
  };
  const favoritePrevPage = () => {
    setFavoriteCurrentPage(prevPage => Math.max(prevPage - 1, 1));
  };

  const readNextPage = () => {
    setReadCurrentPage(prevPage => Math.min(prevPage + 1, Math.ceil(readBooks.length / pageSize)));
  };
  const readPrevPage = () => {
    setReadCurrentPage(prevPage => Math.max(prevPage - 1, 1));
  };

  const totalPagesRead = useMemo(() => {
    return readBooks.reduce((total, book) => total + (book.totalPages || 0), 0);
  }, [readBooks])

  return (
    <div>
      

      <div>
        <h1 className="text-center mb-4">My Favorite Books</h1>
        {favoriteBooks.length > 0 ? (
          <div className="flex justify-center">
            <div className="border rounded p-4">
              <div className="flex justify-center items-center gap-6 flex-wrap">
                
                {favoriteBooks.slice((favoriteCurrentPage - 1) * pageSize, favoriteCurrentPage * pageSize).map((book, index) => (
                  <img
                    key={index}
                    className="max-w-xs"
                    src={getCoverUrl(book.cover_i)}
                    alt={book.title}
                  />
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
                  disabled={favoriteCurrentPage === Math.ceil(favoriteBooks.length / pageSize)}
                >
                 {">"}
                </button>
              </div>
            </div>
          </div>
        ) : (
          <p className="text-center">No favorite books added yet.</p>
        )}

<h1 className="text-center mb-4 mt-8">My Read Books</h1>
<div className="text-center mb-4">Total Pages Read: {totalPagesRead}</div>
        {readBooks.length > 0 ? (
          <div className="flex justify-center">
            <div className="border rounded p-4">
              <div className="flex justify-center items-center gap-6 flex-wrap">
                {readBooks.slice((readCurrentPage - 1) * pageSize, readCurrentPage * pageSize).map((book, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <img
                      className="max-w-xs"
                      src={getCoverUrl(book.cover_i)}
                      alt={book.title}
                    />
                    <p>{book.review}</p>
                    <p>Total Pages: {book.totalPages}</p>
                    <p>Rating: {book.rating}</p>
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
                  disabled={readCurrentPage === Math.ceil(readBooks.length / pageSize)}
                >
                  {">"}
                </button>
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