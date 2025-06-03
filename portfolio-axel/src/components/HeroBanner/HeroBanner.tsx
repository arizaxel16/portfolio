import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"
import HERO_IMG from "../../assets/HERO_BG.jpg"

export default function HeroBanner() {
    const { t } = useTranslation()

    const scrollToSection = (id: string) => {
        const section = document.getElementById(id)
        if (section) {
            section.scrollIntoView({ behavior: "smooth" })
        }
    }

    return (
        <section
            className={cn(
                "relative h-screen flex items-center justify-center bg-center bg-no-repeat bg-cover overflow-hidden",
            )}
            style={{ backgroundImage: `url(${HERO_IMG})` }}
        >
            <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/80 z-0" />

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="relative z-10 max-w-5xl text-center px-6"
            >
                <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-4 drop-shadow-md">
                    {t("hero.title")}
                </h1>

                <p className="text-xl md:text-2xl text-neutral-200 mb-8 max-w-3xl mx-auto">
                    {t("hero.subtitle")}
                </p>

                <div className="flex justify-center flex-wrap gap-4">
                    <Button
                        variant="default"
                        className="text-lg px-6 py-6 shadow-lg transition-transform duration-150 hover:scale-95 active:scale-90"
                        onClick={() => scrollToSection("work")}
                    >
                        {t("hero.cta.primary")}
                    </Button>
                    <Button
                        variant="outline"
                        className="text-lg px-6 py-6 border-white text-black transition-transform duration-150 hover:scale-95 active:scale-90"
                        onClick={() => scrollToSection("contact")}
                    >
                        {t("hero.cta.secondary")}
                    </Button>
                </div>
            </motion.div>
        </section>
    )
}
