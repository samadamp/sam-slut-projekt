import SearchComponent from "./SearchComponent";
import { Link } from "react-router-dom";


const TextNav = () => {

    return (
        <>
        <div className="flex items-center  gap-96 bg-navColor p-4 rounded-b-xl ">

        <Link to ="/">{<h1 className="ml-5 text-4xl">Pankys Library</h1>}</Link>
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