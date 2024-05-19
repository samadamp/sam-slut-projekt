import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { BookContext, BookContextType } from "./BookContext";
import useFetchBooks from "../hooks/useFetch"

interface Book {
  key: string;
  title: string;
  cover_id: number;
  authors?: { name: string }[];
  first_publish_year?: number;
  ratings_average?: number;
}

const BookCards = () => {
  const [currentAdventurePage, setCurrentAdventurePage] = useState(1);
  const [currentSurvivalPage, setCurrentSurvivalPage] = useState(1);
  const [currentFantasyPage, setCurrentFantasyPage] = useState(1);
  const { setBookDetails } = useContext(BookContext) as BookContextType;

  const { books: adventureBooks, loading: adventureLoading, error: adventureError } = useFetchBooks(["adventure"]);
  const { books: survivalBooks, loading: survivalLoading, error: survivalError } = useFetchBooks(["survival"]);
  const { books: fantasyBooks, loading: fantasyLoading, error: fantasyError } = useFetchBooks(["fantasy"]);

  const handleAdventureNextPage = () => {
    if (currentAdventurePage < Math.ceil(adventureBooks.length / 5)) {
      setCurrentAdventurePage(currentAdventurePage + 1);
    }
  };

  const handleAdventurePrevPage = () => {
    if (currentAdventurePage > 1) {
      setCurrentAdventurePage(currentAdventurePage - 1);
    }
  };

  const handleSurvivalNextPage = () => {
    if (currentSurvivalPage < Math.ceil(survivalBooks.length / 5)) {
      setCurrentSurvivalPage(currentSurvivalPage + 1);
    }
  };

  const handleSurvivalPrevPage = () => {
    if (currentSurvivalPage > 1) {
      setCurrentSurvivalPage(currentSurvivalPage - 1);
    }
  };

  const handleFantasyNextPage = () => {
    if (currentFantasyPage < Math.ceil(fantasyBooks.length / 5)) {
      setCurrentFantasyPage(currentFantasyPage + 1);
    }
  };

  const handleFantasyPrevPage = () => {
    if (currentFantasyPage > 1) {
      setCurrentFantasyPage(currentFantasyPage - 1);
    }
  };

  const handleBookClick = (book: Book) => {
    const bookDetails = {
      key: book.key,
      title: book.title,
      author_name: book.authors ? book.authors.map(author => author.name).join(", ") : "Unknown author",
      first_publish_year: book.first_publish_year || 0,
      cover_i: book.cover_id,
      ratings_average: book.ratings_average || null,
      first_sentence: "", 
      description: "", 
      review: "", 
      totalPages: 0, 
      rating: null, 
    };

    setBookDetails(bookDetails);
  };

  const startIndexAdventure = (currentAdventurePage - 1) * 5;
  const adventureBooksToShow = adventureBooks.slice(startIndexAdventure, startIndexAdventure + 5);

  const startIndexSurvival = (currentSurvivalPage - 1) * 5;
  const survivalBooksToShow = survivalBooks.slice(startIndexSurvival, startIndexSurvival + 5);

  const startIndexFantasy = (currentFantasyPage - 1) * 5;
  const fantasyBooksToShow = fantasyBooks.slice(startIndexFantasy, startIndexFantasy + 5);

  if (adventureLoading || survivalLoading || fantasyLoading) {
    return <div>Loading...</div>;
  }

  if (adventureError || survivalError || fantasyError) {
    return <div>{adventureError || survivalError || fantasyError}</div>;
  }

  return (
    <div className="flex flex-col justify-center items-center mt-10 gap-10">
      <div>
        <Card sx={{ width: 1200, backgroundColor: '#EDC89C' }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Survival Books
            </Typography>
            <div className="flex flex-row items-center gap-5 ml-20">
              {survivalBooksToShow.map((book, index) => (
                <div
                  className="flex flex-col items-center"
                  key={index}
                >
                  <Link to={`/Onbooks${book.key}`} onClick={() => handleBookClick(book)}>
                    <div>
                      <img
                        className="max-w-xs cursor-pointer"
                        src={`https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg`}
                        alt={book.title}
                      />
                    </div>
                    <Typography gutterBottom variant="body1" component="div">
                      <u>{book.title}</u>
                    </Typography>
                  </Link>
                </div>
              ))}
            </div>
          </CardContent>
        {Math.ceil(survivalBooks.length / 5) > 1 && (
          <div className="font-bold flex justify-center items-center">
            <button onClick={handleSurvivalPrevPage}>{"<"}</button>
            <span>{currentSurvivalPage}/{Math.ceil(survivalBooks.length / 5)}</span>
            <button onClick={handleSurvivalNextPage}>{">"}</button>
          </div>
        )}
        </Card>
      </div>

      <div>
        <Card sx={{ width: 1200, backgroundColor: '#EDC89C' }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Adventure Books
            </Typography>
            <div className="flex flex-row items-center gap-5 w-fill ml-20 ">
              {adventureBooksToShow.map((book, index) => (
                <div
                  className="flex flex-col items-center justify-center"
                  key={index}
                >
                  <Link to={`/Onbooks${book.key}`} onClick={() => handleBookClick(book)}>
                  <div>
                      <img
                        className="max-w-xs cursor-pointer "
                        src={`https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg`}
                        alt={book.title}
                      />
                    </div>
                    <Typography gutterBottom variant="body1" component="div">
                      <u>{book.title}</u>
                    </Typography>
                  </Link>
                </div>
              ))}
            </div>
          </CardContent>
        {Math.ceil(adventureBooks.length / 5) > 1 && (
          <div className="font-bold flex justify-center items-center">
            <button onClick={handleAdventurePrevPage}>{"<"}</button>
            <span>{currentAdventurePage}/{Math.ceil(adventureBooks.length / 5)}</span>
            <button onClick={handleAdventureNextPage}>{">"}</button>
          </div>
        )}
        </Card>
      </div>

      <div>
        <Card sx={{ width: 1200, backgroundColor: '#EDC89C' }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Fantasy Books
            </Typography>
            <div className="flex flex-row items-center gap-5 w-fill ml-20  ">
              {fantasyBooksToShow.map((book, index) => (
                <div
                  className="flex flex-col items-center justify-center"
                  key={index}
                >
                  <Link to={`/Onbooks${book.key}`} onClick={() => handleBookClick(book)}>
                    <div>
                      <img
                        className="max-w-xs cursor-pointer "
                        src={`https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg`}
                        alt={book.title}
                      />
                    </div>
                    <Typography gutterBottom variant="body1" component="div">
                      <u>{book.title}</u>
                    </Typography>
                  </Link>
                </div>
              ))}
            </div>
          </CardContent>
        {Math.ceil(fantasyBooks.length / 5) > 1 && (
          <div className="font-bold flex justify-center items-center">
            <button onClick={handleFantasyPrevPage}>{"<"}</button>
            <span>{currentFantasyPage}/{Math.ceil(fantasyBooks.length / 5)}</span>
            <button onClick={handleFantasyNextPage}>{">"}</button>
          </div>
        )}
        </Card>
      </div>
    </div>
  );
};

export default BookCards;

