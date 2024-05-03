import SearchComponent from "./TestSearch";
import { Link } from "react-router-dom";


const TextNav = () => {

    return (
        <>
        <div className="flex items-center  gap-96 bg-navColor p-4 rounded-b-xl ">
        <h1 className="ml-5 text-4xl">Pankys Library</h1>
        <div className="text-2xl">
        <Link to ="/myBooks">My Books</Link>
        </div>
        <div className="mr-20">  
        <SearchComponent />
        </div>
        </div>
        </>
    )
}

export default TextNav;