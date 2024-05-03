import { Link } from "react-router-dom"
import TextNav from "../Components/NavBar";
import BookCards from "../Components/BookCards";







export default function HomePage() {
    return (
        <div>
        <TextNav />
        <BookCards />
        <Link to="/on-books/:bookId">Press here to go to book description</Link>
        
        <Link to ="/">Press here to go home</Link>
        </div>
    );
}