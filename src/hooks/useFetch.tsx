
import { useEffect, useState, useMemo } from "react";
import { BookTypes } from "../types"; 

const useFetchBooks = (inputSubjects: string[], limit: number = 10) => {
  const subjects = useMemo(() => inputSubjects, [JSON.stringify(inputSubjects)]);
  const [books, setBooks] = useState<BookTypes[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const promises = subjects.map(async (subject) => {
          const url = `https://openlibrary.org/search.json?subject=${subject}&limit=${limit}`;
          
          const response = await fetch(url);

          if (!response.ok) {
            throw new Error(`Failed to fetch data for ${subject}: ${response.statusText}`);
          }

          const data = await response.json();
          

          return data.docs.map((doc: any) => ({
            key: doc.key,
            title: doc.title,
            cover_i: doc.cover_i,
            author_name: doc.author_name,
            first_publish_year: doc.first_publish_year,
            ratings_average: doc.ratings_average || 0, 
          }));
        });

        const results = await Promise.all(promises);
        const combinedBooks = results.flat();
        
        setBooks(combinedBooks);
      } catch (error: any) {
        console.error("Error fetching book data:", error.message);
        setError("Failed to load books. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, [subjects, limit]);

  return { books, loading, error };
};

export default useFetchBooks;





