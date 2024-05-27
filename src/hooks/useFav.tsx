import { useState } from 'react';
import { BookTypes } from '../types';

const useFavorites = () => {
  const [favoriteBooks, setFavoriteBooks] = useState<BookTypes[]>([]);

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

  return { favoriteBooks, addToFavorites, removeFromFavorites };
};



export { useFavorites };
