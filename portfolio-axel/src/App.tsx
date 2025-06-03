import './App.css'
import HeroBanner from "@/components/HeroBanner/HeroBanner"
import Header from "@/components/Header/Header.tsx";
import Skills from "@/components/Skills/Skills.tsx";
import Work from "@/components/Work/Work.tsx";

function App() {
    return (
        <main className="min-h-screen flex flex-col">
            <Header />
            <HeroBanner />
            <Skills />
            <Work />
        </main>
    )
}

export default App
