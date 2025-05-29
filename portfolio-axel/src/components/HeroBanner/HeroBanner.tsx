import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function HeroBanner() {
    return (
        <section
            className={cn(
                "relative h-screen flex items-center justify-center text-white text-center bg-cover bg-center px-4",
                "bg-[url('/HERO-BG.jpg')]"
            )}
        >
            {/* Optional overlay for readability */}
            <div className="absolute inset-0 bg-black/60 z-0" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 max-w-3xl"
            >
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                    Axel – Information Technology Engineer
                </h1>
                <p className="text-lg md:text-2xl mb-6">
                    Building robust, scalable, and intuitive digital solutions.
                </p>
                <Button variant="secondary" className="text-lg px-6 py-2">
                    View My Work
                </Button>
            </motion.div>
        </section>
    )
}
