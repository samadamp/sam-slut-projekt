import { Link } from "react-router-dom"
import TextNav from "../Components/TextNav";
import ImgMediaCard from "../Components/testCard";







export default function HomePage() {
    return (
        <div>
        <TextNav />
        <ImgMediaCard />
        <Link to="/on-books/:bookId">Press here to go to book description</Link>
        
        <Link to ="/">Press here to go home</Link>
        </div>
    );
}