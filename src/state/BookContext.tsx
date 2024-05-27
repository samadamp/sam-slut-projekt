import { useState, createContext, ReactNode } from "react";
import { BookTypes } from "../types";
import { useFavorites } from "../hooks/useFav";
import { useReadBooks } from "../hooks/useRead";



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

type BookProviderProps = {
  children: ReactNode;
}

export const BookProvider = ({ children }: BookProviderProps) => {
  const [bookDetails, setBookDetails] = useState<BookTypes | null>(null);
  const {favoriteBooks, addToFavorites, removeFromFavorites} = useFavorites();
  const {readBooks, addToRead} = useReadBooks();

  

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
