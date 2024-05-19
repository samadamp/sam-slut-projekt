import TextNav from "../Components/NavBar";
import MarkedBooks from "../Components/Book stuff/MarkedBooksComponent";
import Footer from "../Components/Footer";

export default function MyBooksPage() {
    return (
        <div className="flex flex-col min-h-screen bg-Backgroun">
        <TextNav />
        <div className="flex-grow flex flex-col">
        <MarkedBooks />
        </div>
        <Footer />
        
        </div>
    );
}