import './App.css'
import HeroBanner from "@/components/HeroBanner/HeroBanner"
import Header from "@/components/Header/Header.tsx";

function App() {
    return (
        <main className="min-h-screen flex flex-col">
            <Header />
            <HeroBanner />
        </main>
    )
}

export default App
