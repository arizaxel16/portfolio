import { useTranslation } from "react-i18next"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"
import { useState } from "react"

const languages = [
    { code: "en", label: "English" },
    { code: "es", label: "Español" },
    { code: "fr", label: "Français" },
]

export default function LanguageSwitcher() {
    const { i18n } = useTranslation()
    const currentLanguage = i18n.language || "en"
    const [selectedLang, setSelectedLang] = useState(currentLanguage)

    const handleChangeLanguage = (lang: string) => {
        i18n.changeLanguage(lang)
        setSelectedLang(lang)
    }

    return (
        <div>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="flex items-center gap-2">
                        <Globe className="w-5 h-5" />
                        <span className="hidden sm:inline text-sm font-medium">
              {languages.find((l) => l.code === selectedLang)?.label || "Language"}
            </span>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    {languages.map((lang) => (
                        <DropdownMenuItem
                            key={lang.code}
                            onClick={() => handleChangeLanguage(lang.code)}
                            className={selectedLang === lang.code ? "font-semibold" : ""}
                        >
                            {lang.label}
                        </DropdownMenuItem>
                    ))}
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}
