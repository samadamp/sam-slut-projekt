import TextNav from "../Components/NavBar";
import BookCards from "../Components/Book stuff/RenderBooks";
import Footer from "../Components/Footer";

export default function HomePage() {
    return (
        <div className="flex flex-col min-h-screen  bg-Background">
            <TextNav />
            <main className="flex-grow flex flex-col justify-center items-center  bg-Background">
                <BookCards />
            </main>
            <Footer />
        </div>
    );
}