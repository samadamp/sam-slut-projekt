import { useState, createContext, ReactNode } from "react";
import { BookTypes } from "../types";




export type BookContextType = {
  bookDetails: BookTypes | null;
  setBookDetails: React.Dispatch<React.SetStateAction<BookTypes | null>>;
  favoriteBooks: BookTypes[];
  addToFavorites: (book: BookTypes) => void;
  removeFromFavorites: (book: BookTypes) => void;
  readBooks: BookTypes[];
  addToRead: (
    book: BookTypes,
    review: string,
    totalPages: number,
    rating: number | null
  ) => void;
}

export const BookContext = createContext<BookContextType | undefined>(
  undefined
);

interface BookProviderProps {
  children: ReactNode;
}

export const BookProvider = ({ children }: BookProviderProps) => {
  const [bookDetails, setBookDetails] = useState<BookTypes | null>(null);
  const [favoriteBooks, setFavoriteBooks] = useState<BookTypes[]>([]);
  const [readBooks, setReadBooks] = useState<BookTypes[]>([]);

  const addToFavorites = (book: BookTypes) => {
    setFavoriteBooks((prevBooks) => {
      const isBookInFavorites = prevBooks.some(
        (favoriteBook) => favoriteBook.key === book.key
      );
      if (!isBookInFavorites) {
        return [...prevBooks, book];
      } else {
        return prevBooks.filter(
          (favoriteBook) => favoriteBook.key !== book.key
        );
      }
    });
  };

  const removeFromFavorites = (book: BookTypes) => {
    setFavoriteBooks((prevBooks) =>
      prevBooks.filter((favoriteBook) => favoriteBook.key !== book.key)
    );
  };

  const addToRead = (
    book: BookTypes,
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
