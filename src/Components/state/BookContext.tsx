import { useState, createContext, ReactNode } from "react";

export type BookDetailsType = {
  key: any;
  title: string;
  author_name: string;
  first_publish_year: number;
  cover_i: number;
  ratings_average: number
  first_sentence: string;
  description: string;
  review: string;
  totalPages: number;
  rating: number | null;
}

export interface BookContextType {
  bookDetails: BookDetailsType | null;
  setBookDetails: React.Dispatch<React.SetStateAction<BookDetailsType | null>>;
  favoriteBooks: BookDetailsType[];
  addToFavorites: (book: BookDetailsType) => void;
  readBooks: BookDetailsType[];
  addToRead: (
    book: BookDetailsType,
    review: string,
    totalePages: number,
    rating: number | null
  ) => void;
  removeFromFavorites: (book: BookDetailsType) => void;
}

export const BookContext = createContext<BookContextType | undefined>(
  undefined
);

interface BookProviderProps {
  children: ReactNode;
}

export const BookProvider = ({ children }: BookProviderProps) => {
  const [bookDetails, setBookDetails] = useState<BookDetailsType | null>(null);
  const [favoriteBooks, setFavoriteBooks] = useState<BookDetailsType[]>([]);
  const [readBooks, setReadBooks] = useState<BookDetailsType[]>([]);

  const addToFavorites = (book: BookDetailsType) => {
    const isBookInFavorites = favoriteBooks.some(
      (favoriteBook) => favoriteBook.key === book.key
    );
    if (!isBookInFavorites) {
      setFavoriteBooks((prevBooks) => [...prevBooks, book]);
    } else {
      alert("Book is already in favorites.");
    }
  };

  const removeFromFavorites = (book: BookDetailsType) => {
    setFavoriteBooks((prevBooks) =>
      prevBooks.filter((favoriteBook) => favoriteBook.key !== book.key)
    );
  };

  const addToRead = (
    book: BookDetailsType,
    review: string,
    totalPages: number,
    rating: number | null
  ) => {
    const isBookInRead = readBooks.some(
      (readBook) => readBook.key === book.key
    );
    if (!isBookInRead) {
      setReadBooks((prevBooks) => [
        ...prevBooks,
        { ...book, review, totalPages, rating },
      ]);
    } else {
      alert("Book is already added to Read books");
    }
  };

  return (
    <BookContext.Provider
      value={{
        bookDetails,
        setBookDetails,
        favoriteBooks,
        addToFavorites,
        removeFromFavorites,
        readBooks,
        addToRead,
      }}
    >
      {children}
    </BookContext.Provider>
  );
};
