/* import { useState } from "react";

const SearchComponent = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([] as any[]);

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `https://openlibrary.org/search.json?q=${query}`
      );
      const data = await response.json();
      setResults(data.docs);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const getCoverUrl = (coverId: number) => {
    return `https://covers.openlibrary.org/b/id/${coverId}-M.jpg`;
  };


  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter search query"
        className="border border-gray-300 rounded px-4 py-2 mr-2"
      />
      <button
        onClick={handleSearch}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Search
      </button>

      {results.length > 0 && (
  <div className="absolute w-full mt-2 overflow-auto bg-white border border-gray-300 rounded max-h-96 z-10">
    <ul className="py-1">
      {results.slice(0,10).map((result) => (
        <li key={result.key} className="px-4 py-2 border-b border-gray-200">
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
        </li>
        
      ))}
    </ul>
  </div>
)}
<h2>hej</h2>
    </div>
  );
};

export default SearchComponent;
 */


import React, { useState } from "react";

const SearchComponent = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([] as any[]);

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `https://openlibrary.org/search.json?q=${query}`
      );
      const data = await response.json();
      setResults(data.docs);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const getCoverUrl = (coverId: number) => {
    return `https://covers.openlibrary.org/b/id/${coverId}-M.jpg`;
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder="Enter search query"
        className="border border-gray-300 rounded px-4 py-2 mr-2"
      />

      {results.length > 0 && (
        <div className="absolute w-full mt-2 overflow-auto bg-white border border-gray-300 rounded max-h-96 z-10">
          <ul className="py-1">
            {results.slice(0, 10).map((result) => (
              <li key={result.key} className="px-4 py-2 border-b border-gray-200">
                <div className="mb-2">Title: {result.title}</div>
                <div className="mb-2">Author: {result.author_name}</div>
                <div className="mb-2">First Publish Year: {result.first_publish_year}</div>
                {result.cover_i && (
                  <div className="w-36">
                    <img
                      src={getCoverUrl(result.cover_i)}
                      alt={result.title}
                      className="w-full"
                    />
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
      <h2>hej</h2>
    </div>
  );
};

export default SearchComponent;

