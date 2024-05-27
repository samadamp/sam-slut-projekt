import { BookTypes } from "../types";
import { useState } from "react";
const useReadBooks = () => {
    const [readBooks, setReadBooks] = useState<BookTypes[]>([]);
  
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
        alert('Book is already added to Read books');
      }
    };
  
    return { readBooks, addToRead };
  };

  export { useReadBooks };