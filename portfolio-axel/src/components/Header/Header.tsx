import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Menu, CodeXml } from "lucide-react"
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher.tsx"
import { useTranslation } from "react-i18next"

const navItems = [
    { id: "about", label: "header.about" },
    { id: "skills", label: "header.skills" },
    { id: "projects", label: "header.projects" },
    { id: "experience", label: "header.experience" },
    { id: "education", label: "header.education" },
    { id: "contact", label: "header.contact" }
]

export default function Header() {
    const { t } = useTranslation()

    const scrollToSection = (id: string) => {
        const section = document.getElementById(id)
        if (section) {
            section.scrollIntoView({ behavior: "smooth" })
        }
    }

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-sm">
            <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
                <CodeXml />

                <div className="hidden md:flex gap-6">
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className="text-sm font-medium text-gray-700 hover:text-black transition-colors"
                        >
                            {t(item.label)}
                        </button>
                    ))}
                </div>

                <div className="flex items-center gap-2">
                    <div className="md:hidden">
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon">
                                    <Menu className="w-5 h-5" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right" className="w-[250px]">
                                <div className="flex flex-col gap-4 mt-6">
                                    {navItems.map((item) => (
                                        <button
                                            key={item.id}
                                            onClick={() => scrollToSection(item.id)}
                                            className="text-base text-left text-gray-700 hover:text-black transition-colors"
                                        >
                                            {t(item.label)}
                                        </button>
                                    ))}
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>

                    <LanguageSwitcher />
                </div>
            </div>
        </header>
    )
}
