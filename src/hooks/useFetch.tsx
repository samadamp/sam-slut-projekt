import { useEffect, useState } from "react";

interface Book {
  key: string;
  title: string;
  cover_id: number;
  authors?: { name: string }[];
  first_publish_year?: number;
  ratings_average?: number;
}

const useFetchBooks = (subjects: string[]) => {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const promises = subjects.map(async (subject) => {
          const response = await fetch(`https://openlibrary.org/subjects/${subject}.json`);
          if (!response.ok) {
            throw new Error(`Failed to fetch data for ${subject}`);
          }
          const data = await response.json();
          return data.works.map((work: any) => ({
            key: work.key,
            title: work.title,
            cover_id: work.cover_id,
            authors: work.authors,
            first_publish_year: work.first_publish_year,
            ratings_average: work.ratings_average,
          }));
        });

        const results = await Promise.all(promises);
        const combinedBooks = results.flat();
        setBooks(combinedBooks);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching book data:", error);
        setError("Failed to load books. Please try again later.");
        setLoading(false);
      }
    };

    fetchBooks();
  }, [subjects]);

  return { books, loading, error };
};

export default useFetchBooks;
