import  { useState, createContext, ReactNode } from 'react';

export interface BookDetailsType {
  title: string;
  author_name: string;
  first_publish_year: number;
  cover_i: number | null;
  ratings_average: number | null;
  first_sentence: string;
}

export interface BookContextType {
  bookDetails: BookDetailsType | null;
  setBookDetails: React.Dispatch<React.SetStateAction<BookDetailsType | null>>;
}

export const BookContext = createContext<BookContextType | undefined>(undefined);

interface BookProviderProps {
  children: ReactNode;
}

export const BookProvider = ({ children }: BookProviderProps) => {
  const [bookDetails, setBookDetails] = useState<BookDetailsType | null>(null);

  return (
    <BookContext.Provider value={{ bookDetails, setBookDetails }}>
      {children}
    </BookContext.Provider>
  );
};