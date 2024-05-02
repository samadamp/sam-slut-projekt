import {useState, useEffect} from 'react';

const TestApi: React.FC = () => {
    const [books, setBooks] = useState<any[]>([]);

useEffect(() => {
    const fetchApi = async () => {

        try {
            const response = await fetch("https://openlibrary.org/search.json?q=")
            const data = await response.json();
            setBooks(data.docs)
            console.log(data);
            
        } catch (error) {
            console.error("Error fetching data: ", error);
        }
        };
        
        

        fetchApi();


        return () => {}

}, []);
   

return (
    <div>
        <h1>Books</h1>
        <ul>
            {books.map((book, index) => (
                /* index === 0 && */
                <li key={index}><strong>{book.title}</strong></li>
            ))}
        </ul>
    </div>
);
};





    export default TestApi;