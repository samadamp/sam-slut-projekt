import { useState } from "react";
import { Link } from "react-router-dom";
import { BookContext, BookContextType } from "./BookContext";
import React, { useContext } from 'react';

const SearchComponent = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([] as any[]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { setBookDetails } = useContext(BookContext) as BookContextType;

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `https://openlibrary.org/search.json?q=${query}`
      );
      const data = await response.json();
      setResults(data.docs);
      setDropdownOpen(true);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const getCoverUrl = (coverId: number) => {
    return `https://covers.openlibrary.org/b/id/${coverId}-M.jpg`;
  };

  const handleBookClick = (book: any) => {
    setBookDetails(book);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
    if (event.target.value === "") {
      setDropdownOpen(false);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder="Enter search query...🔍"
        className="border border-gray-300 rounded-xl px-4 py-2 mr-2 bg-searchColor"
      />

      {dropdownOpen && results.length > 0 && (
        <div className="absolute w-96 mt-2 overflow-auto bg-white border border-gray-300 rounded max-h-100 z-10 bg-searchColor">
          <ul className="py-1">
            {results.slice(0, 10).map((result) => (
              <li
                key={result.key}
                className="px-4 py-2 border-b border-gray-200"
              >
               <Link
                  to={`/Onbooks${result.key}`}
                  onClick={() => handleBookClick(result)}
                  className="flex items-center gap-2"
                >
                  <div className="mb-2">Title: {result.title}</div>
                  <div className="mb-2">Author: {result.author_name}</div>
                  <div className="mb-2">
                    First Publish Year: {result.first_publish_year}
                  </div>
                  {result.cover_i && (
                    <div className="w-36">
                      <img
                        src={getCoverUrl(result.cover_i)}
                        alt={result.title}
                        className="w-full"
                      />
                    </div>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchComponent;
