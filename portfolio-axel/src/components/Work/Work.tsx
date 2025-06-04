// src/components/Work.tsx
import { useState } from "react"
import { useTranslation } from "react-i18next"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"

interface EntryProps {
    date: string
    title: string
    subtitle?: string
    description: string
    logoSrc?: string       // optional badge/logo
    imageSrc?: string      // optional image
    videoSrc?: string      // optional video
    url?: string           // optional link URL
}

const isVideo = (src: string) => src.endsWith(".mp4") || src.endsWith(".webm")
const isImage = (src: string) =>
    src.endsWith(".png") || src.endsWith(".jpg") || src.endsWith(".jpeg") || src.endsWith(".gif")

// ─── Subcomponent Templates ────────────────────────────────────────────────────

// Redesigned card layout: media at top, then text, then link.
function ExperienceEntry({
                             date,
                             title,
                             subtitle,
                             description,
                             logoSrc,
                             imageSrc,
                             videoSrc,
                             url,
                         }: EntryProps) {
    const CardWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) =>
        url ? (
            <a href={url} target="_blank" rel="noopener noreferrer">
                {children}
            </a>
        ) : (
            <>{children}</>
        )

    return (
        <div className="flex flex-col lg:flex-row lg:items-start">
            {/* Date Column */}
            <div className="lg:w-1/4 text-sm text-gray-400 mb-4 lg:mb-0">{date}</div>

            {/* Timeline Dot (desktop only) */}
            <div className="hidden lg:flex items-center justify-center w-8">
                <div className="h-4 w-4 -mt-0.5 rounded-full bg-blue-500 transition-all duration-300" />
            </div>

            {/* Card Content */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                className="lg:w-3/4"
            >
                <CardWrapper>
                    <Card className="group rounded-lg shadow-xl border-2 border-transparent hover:border-blue-500 bg-white">
                        <CardContent className="p-6 space-y-6">
                            {/* Media Section */}
                            {(logoSrc || imageSrc || videoSrc) && (
                                <div className="flex flex-col md:flex-row gap-4">
                                    {logoSrc && (
                                        <Avatar className="h-12 w-12">
                                            <AvatarImage src={logoSrc} alt={`${title} logo`} />
                                            <AvatarFallback>{title.charAt(0)}</AvatarFallback>
                                        </Avatar>
                                    )}
                                    {imageSrc && isImage(imageSrc) && (
                                        <img
                                            src={imageSrc}
                                            alt={`${title} image`}
                                            className="w-full md:w-1/2 rounded-lg object-cover"
                                        />
                                    )}
                                    {videoSrc && isVideo(videoSrc) && (
                                        <video
                                            src={videoSrc}
                                            controls
                                            className="w-full md:w-1/2 rounded-lg object-cover"
                                        />
                                    )}
                                </div>
                            )}

                            {/* Text Section */}
                            <div className="space-y-2">
                                <h3 className="text-2xl font-bold text-blue-700">{title}</h3>
                                {subtitle && (
                                    <span className="text-sm text-blue-500 italic">{subtitle}</span>
                                )}
                                <p className="text-gray-800">{description}</p>
                            </div>

                            {/* Link Section */}
                            {url && (
                                <div>
                                    <a
                                        href={url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center text-blue-600 hover:underline"
                                    >
                                        <ExternalLink className="mr-1 h-4 w-4" />
                                        Visit Link
                                    </a>
                                </div>
                            )}
                        </CardContent>
                    </Card>
                </CardWrapper>
            </motion.div>
        </div>
    )
}

function ProjectEntry({
                          date,
                          title,
                          subtitle,
                          description,
                          logoSrc,
                          imageSrc,
                          videoSrc,
                          url,
                      }: EntryProps) {
    const CardWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) =>
        url ? (
            <a href={url} target="_blank" rel="noopener noreferrer">
                {children}
            </a>
        ) : (
            <>{children}</>
        )

    return (
        <div className="flex flex-col lg:flex-row lg:items-start">
            <div className="lg:w-1/4 text-sm text-gray-400 mb-4 lg:mb-0">{date}</div>
            <div className="hidden lg:flex items-center justify-center w-8">
                <div className="h-4 w-4 -mt-0.5 rounded-full bg-green-500 transition-all duration-300" />
            </div>
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                className="lg:w-3/4"
            >
                <CardWrapper>
                    <Card className="group rounded-lg shadow-xl border-2 border-transparent hover:border-green-500 bg-white">
                        <CardContent className="p-6 space-y-6">
                            {(logoSrc || imageSrc || videoSrc) && (
                                <div className="flex flex-col md:flex-row gap-4">
                                    {logoSrc && (
                                        <Avatar className="h-12 w-12">
                                            <AvatarImage src={logoSrc} alt={`${title} logo`} />
                                            <AvatarFallback>{title.charAt(0)}</AvatarFallback>
                                        </Avatar>
                                    )}
                                    {imageSrc && isImage(imageSrc) && (
                                        <img
                                            src={imageSrc}
                                            alt={`${title} image`}
                                            className="w-full md:w-1/2 rounded-lg object-cover"
                                        />
                                    )}
                                    {videoSrc && isVideo(videoSrc) && (
                                        <video
                                            src={videoSrc}
                                            controls
                                            className="w-full md:w-1/2 rounded-lg object-cover"
                                        />
                                    )}
                                </div>
                            )}
                            <div className="space-y-2">
                                <h3 className="text-2xl font-bold text-green-700">{title}</h3>
                                {subtitle && (
                                    <span className="text-sm text-green-500 italic">{subtitle}</span>
                                )}
                                <p className="text-gray-800">{description}</p>
                            </div>
                            {url && (
                                <div>
                                    <a
                                        href={url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center text-green-600 hover:underline"
                                    >
                                        <ExternalLink className="mr-1 h-4 w-4" />
                                        Visit Link
                                    </a>
                                </div>
                            )}
                        </CardContent>
                    </Card>
                </CardWrapper>
            </motion.div>
        </div>
    )
}

function EventEntry({
                        date,
                        title,
                        subtitle,
                        description,
                        logoSrc,
                        imageSrc,
                        videoSrc,
                        url,
                    }: EntryProps) {
    const CardWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) =>
        url ? (
            <a href={url} target="_blank" rel="noopener noreferrer">
                {children}
            </a>
        ) : (
            <>{children}</>
        )

    return (
        <div className="flex flex-col lg:flex-row lg:items-start">
            <div className="lg:w-1/4 text-sm text-gray-400 mb-4 lg:mb-0">{date}</div>
            <div className="hidden lg:flex items-center justify-center w-8">
                <div className="h-4 w-4 -mt-0.5 rounded-full bg-purple-500 transition-all duration-300" />
            </div>
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                className="lg:w-3/4"
            >
                <CardWrapper>
                    <Card className="group rounded-lg shadow-xl border-2 border-transparent hover:border-purple-500 bg-white">
                        <CardContent className="p-6 space-y-6">
                            {(logoSrc || imageSrc || videoSrc) && (
                                <div className="flex flex-col md:flex-row gap-4">
                                    {logoSrc && (
                                        <Avatar className="h-12 w-12">
                                            <AvatarImage src={logoSrc} alt={`${title} logo`} />
                                            <AvatarFallback>{title.charAt(0)}</AvatarFallback>
                                        </Avatar>
                                    )}
                                    {imageSrc && isImage(imageSrc) && (
                                        <img
                                            src={imageSrc}
                                            alt={`${title} image`}
                                            className="w-full md:w-1/2 rounded-lg object-cover"
                                        />
                                    )}
                                    {videoSrc && isVideo(videoSrc) && (
                                        <video
                                            src={videoSrc}
                                            controls
                                            className="w-full md:w-1/2 rounded-lg object-cover"
                                        />
                                    )}
                                </div>
                            )}
                            <div className="space-y-2">
                                <h3 className="text-2xl font-bold text-purple-700">{title}</h3>
                                {subtitle && (
                                    <span className="text-sm text-purple-500 italic">{subtitle}</span>
                                )}
                                <p className="text-gray-800">{description}</p>
                            </div>
                            {url && (
                                <div>
                                    <a
                                        href={url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center text-purple-600 hover:underline"
                                    >
                                        <ExternalLink className="mr-1 h-4 w-4" />
                                        Visit Link
                                    </a>
                                </div>
                            )}
                        </CardContent>
                    </Card>
                </CardWrapper>
            </motion.div>
        </div>
    )
}

// ─── Data Transfer Objects (editable lists) ─────────────────────────────────────
interface WorkDTO {
    date: string
    title: string
    subtitle?: string
    description: string
    logoSrc?: string
    imageSrc?: string
    videoSrc?: string
    url?: string
}

const EXPERIENCE_LIST: WorkDTO[] = [
    {
        date: "Jan 2025 – Present",
        title: "Rango",
        subtitle: "Founder",
        description:
            "Founded a university professor review site with 100+ active users [rangoprofe.com].",
        logoSrc: "/logos/rango-logo.png",
        url: "https://rangoprofe.com",
    },
    {
        date: "Nov 2024",
        title: "Frontend Developer",
        subtitle: "Freelance",
        description:
            "Built and deployed a spa business' website to increase client traffic [relajatespa.com].",
        logoSrc: "/logos/spa-logo.png",
        imageSrc: "/images/spa-screenshot.png",
        url: "https://relajatespa.com",
    },
    {
        date: "Sept 2024 – Oct 2024",
        title: "Android Developer",
        subtitle: "Freelance",
        description:
            "Built a mobile app for a spa business with in-app reservations and admin panel.",
        logoSrc: "/logos/spa-logo.png",
        videoSrc: "/vid/spa-demo.mp4",
        url: "https://play.google.com/spa-app",
    },
]

const PROJECTS_LIST: WorkDTO[] = [
    {
        date: "Nov 2024",
        title: "Gesture Recognition AI",
        subtitle: "University Project",
        description:
            "Developed a hand gesture tracker with Python for gesture and emotion recognition.",
        videoSrc: "/vid/GESTURE.mp4",
        url: "https://github.com/username/gesture-ai",
    },
    {
        date: "May 2024",
        title: "Elevator Circuit Design",
        subtitle: "University Project",
        description:
            "Built a fully functional small-scale elevator with digital logic.",
        videoSrc: "/vid/ELEVATOR.mp4",
        url: "https://github.com/username/elevator-design",
    },
]

const EVENTS_LIST: WorkDTO[] = [
    {
        date: "May 2024",
        title: "2nd Place – Game Jam",
        subtitle: "Team “ByteBuilders”",
        description: "Created a sci-fi horror game with Unreal Engine.",
        logoSrc: "/events/hackathon-badge.png",
        imageSrc: "/images/game-jam-screenshot.png",
        url: "https://itch.io/jam/game-jam",
    },
    {
        date: "Nov 2022",
        title: "UniSabana Hackathon '22",
        subtitle: "Universidad de la Sabana",
        description: "Participated in my first ever hackathon.",
        url: "https://unisabana.edu/hackathon22",
    },
]

// ─── Main Work Component ───────────────────────────────────────────────────────
export default function Work() {
    const { t } = useTranslation()
    const [tabValue, setTabValue] = useState<string>("experience")

    return (
        <div className="w-full bg-black">
            <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="max-w-5xl mx-auto px-4 py-16 text-white"
            >
                <h2 className="text-3xl font-bold mb-2 text-center">
                    {t("work.title", "Work")}
                </h2>
                <p className="text-center text-gray-300 mb-10">
                    {t(
                        "work.subtitle",
                        "Professional Roles, Personal Projects & Key Events"
                    )}
                </p>

                <Tabs value={tabValue} onValueChange={setTabValue}>
                    <TabsList className="flex flex-wrap justify-center gap-2 mb-6">
                        <TabsTrigger value="experience">
                            {t("work.experienceTab", "Experience")}
                        </TabsTrigger>
                        <TabsTrigger value="projects">
                            {t("work.projectsTab", "Projects")}
                        </TabsTrigger>
                        <TabsTrigger value="events">
                            {t("work.eventsTab", "Events")}
                        </TabsTrigger>
                    </TabsList>

                    <TabsContent value="experience">
                        <div className="relative">
                            <div className="hidden lg:block absolute left-1/4 top-0 h-full w-px bg-gray-700" />
                            <div className="space-y-12">
                                {EXPERIENCE_LIST.map((item, idx) => (
                                    <ExperienceEntry key={idx} {...item} />
                                ))}
                            </div>
                        </div>
                    </TabsContent>

                    <TabsContent value="projects">
                        <div className="relative">
                            <div className="hidden lg:block absolute left-1/4 top-0 h-full w-px bg-gray-700" />
                            <div className="space-y-12">
                                {PROJECTS_LIST.map((item, idx) => (
                                    <ProjectEntry key={idx} {...item} />
                                ))}
                            </div>
                        </div>
                    </TabsContent>

                    <TabsContent value="events">
                        <div className="relative">
                            <div className="hidden lg:block absolute left-1/4 top-0 h-full w-px bg-gray-700" />
                            <div className="space-y-12">
                                {EVENTS_LIST.map((item, idx) => (
                                    <EventEntry key={idx} {...item} />
                                ))}
                            </div>
                        </div>
                    </TabsContent>
                </Tabs>
            </motion.section>
        </div>
    )
}
