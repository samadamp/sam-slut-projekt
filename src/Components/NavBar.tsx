import SearchComponent from "./SearchComponent";
import { Link } from "react-router-dom";


const TextNav = () => {

    return (
        <>
        <div className="flex items-center justify-center  gap-96 bg-Primary p-5 rounded-b-xl ">

        
        
        <Link to ="/">{<h1 className="text-4xl ">Pankys Library</h1>}</Link>
        <div className="mr-9">
        <SearchComponent  />
        </div>
        
        <Link className="text-3xl" to ="/myBooks">My Books📚</Link>
        
        </div>
        </>
    )
}

export default TextNav;