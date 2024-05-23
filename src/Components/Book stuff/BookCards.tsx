import {  useState } from "react";
import { Link } from "react-router-dom";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { pagnationUtil, getTotalPages } from "../../utils/UtilFunctions";
import { BookTypes } from "../../types"; 

type BookListProps = {
  books: BookTypes[];
  category: string;
  onBookClick: (book: BookTypes) => void;
}

const BookCards = ({ books, category, onBookClick }: BookListProps) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handleNextPage = () => {
    if (currentPage < getTotalPages(books )) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const booksToShow = pagnationUtil(books, currentPage);

  return (
    <Card sx={{ height: 460 ,width: 1200, backgroundColor: '#FFFFFF', borderRadius: '20px' }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" className="text-Primary">
          {category} Books
        </Typography>
        <div className="flex flex-row items-center justify-center gap-9 w-fill">
          {booksToShow.map((book, index) => (
            <div className="flex flex-col items-center justify-center" key={index}>
              <Link to={`/Onbooks${book.key}`} onClick={() => onBookClick(book)}>
                <div>
                  <img
                    className="max-w-xs cursor-pointer w-48 h-80 object-cover rounded-xl"
                    src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
                    alt={book.title}
                  />
                </div>
                <Typography gutterBottom variant="body1" component="div">
                  <u className="flex justify-center items-center text-Primary">{book.title.length > 30 ? `${book.title.substring(0, 20)}...` : book.title}</u>
                </Typography>
              </Link>
            </div>
          ))}
        </div>
      </CardContent>
      {getTotalPages(books) > 1 && (
        <div className="font-bold flex justify-center items-center text-2xl gap-8 text-Primary" >
          <button onClick={handlePrevPage}>{"<"}</button>
          <span>{currentPage}/{getTotalPages(books)}</span>
          <button onClick={handleNextPage}>{">"}</button>
        </div>
      )}
    </Card>
  );
};

export default BookCards;
