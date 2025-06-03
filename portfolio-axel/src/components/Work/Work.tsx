import { useState } from "react"
import { useTranslation } from "react-i18next"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { motion } from "framer-motion"

// ─── Subcomponent Templates ────────────────────────────────────────────────────
interface EntryProps {
    date: string
    title: string
    subtitle?: string
    description: string | string[]
    imgSrc?: string // optional photo/logo URL
}

// Experience entry: blue accent
function ExperienceEntry({ date, title, subtitle, description, imgSrc }: EntryProps) {
    return (
        <div className="flex flex-col lg:flex-row lg:items-start">
            <div className="lg:w-1/4 text-sm text-gray-400 mb-2 lg:mb-0">{date}</div>
            <div className="hidden lg:flex items-center justify-center w-8">
                <div className="h-4 w-4 rounded-full bg-blue-500" />
            </div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="lg:w-3/4"
            >
                <Card className="rounded-lg shadow-lg border border-blue-200 bg-white">
                    <CardContent className="p-6 space-y-2">
                        <div className="flex items-center space-x-3">
                            {imgSrc && (
                                <Avatar className="h-10 w-10">
                                    <AvatarImage src={imgSrc} alt={`${title} logo`} />
                                    <AvatarFallback>{title.charAt(0)}</AvatarFallback>
                                </Avatar>
                            )}
                            <div>
                                <h3 className="text-xl font-semibold text-blue-700">{title}</h3>
                                {subtitle && (
                                    <span className="text-sm text-blue-500">{subtitle}</span>
                                )}
                            </div>
                        </div>
                        {typeof description === "string" ? (
                            <p className="text-gray-700">{description}</p>
                        ) : (
                            <ul className="list-disc list-inside text-gray-700">
                                {description.map((line, idx) => (
                                    <li key={idx}>{line}</li>
                                ))}
                            </ul>
                        )}
                    </CardContent>
                </Card>
            </motion.div>
        </div>
    )
}

// Project entry: green accent
function ProjectEntry({ date, title, subtitle, description, imgSrc }: EntryProps) {
    return (
        <div className="flex flex-col lg:flex-row lg:items-start">
            <div className="lg:w-1/4 text-sm text-gray-400 mb-2 lg:mb-0">{date}</div>
            <div className="hidden lg:flex items-center justify-center w-8">
                <div className="h-4 w-4 rounded-full bg-green-500" />
            </div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="lg:w-3/4"
            >
                <Card className="rounded-lg shadow-lg border border-green-200 bg-white">
                    <CardContent className="p-6 space-y-2">
                        <div className="flex items-center space-x-3">
                            {imgSrc && (
                                <Avatar className="h-10 w-10">
                                    <AvatarImage src={imgSrc} alt={`${title} icon`} />
                                    <AvatarFallback>{title.charAt(0)}</AvatarFallback>
                                </Avatar>
                            )}
                            <div>
                                <h3 className="text-xl font-semibold text-green-700">{title}</h3>
                                {subtitle && (
                                    <span className="text-sm text-green-500">{subtitle}</span>
                                )}
                            </div>
                        </div>
                        {typeof description === "string" ? (
                            <p className="text-gray-700">{description}</p>
                        ) : (
                            <ul className="list-disc list-inside text-gray-700">
                                {description.map((line, idx) => (
                                    <li key={idx}>{line}</li>
                                ))}
                            </ul>
                        )}
                    </CardContent>
                </Card>
            </motion.div>
        </div>
    )
}

// Event entry: purple accent
function EventEntry({ date, title, subtitle, description, imgSrc }: EntryProps) {
    return (
        <div className="flex flex-col lg:flex-row lg:items-start">
            <div className="lg:w-1/4 text-sm text-gray-400 mb-2 lg:mb-0">{date}</div>
            <div className="hidden lg:flex items-center justify-center w-8">
                <div className="h-4 w-4 rounded-full bg-purple-500" />
            </div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="lg:w-3/4"
            >
                <Card className="rounded-lg shadow-lg border border-purple-200 bg-white">
                    <CardContent className="p-6 space-y-2">
                        <div className="flex items-center space-x-3">
                            {imgSrc && (
                                <Avatar className="h-10 w-10">
                                    <AvatarImage src={imgSrc} alt={`${title} badge`} />
                                    <AvatarFallback>{title.charAt(0)}</AvatarFallback>
                                </Avatar>
                            )}
                            <div>
                                <h3 className="text-xl font-semibold text-purple-700">{title}</h3>
                                {subtitle && (
                                    <span className="text-sm text-purple-500">{subtitle}</span>
                                )}
                            </div>
                        </div>
                        {typeof description === "string" ? (
                            <p className="text-gray-700">{description}</p>
                        ) : (
                            <ul className="list-disc list-inside text-gray-700">
                                {description.map((line, idx) => (
                                    <li key={idx}>{line}</li>
                                ))}
                            </ul>
                        )}
                    </CardContent>
                </Card>
            </motion.div>
        </div>
    )
}

// ─── Data Transfer Objects (editable lists) ─────────────────────────────────────
interface WorkDTO {
    date: string
    title: string
    subtitle?: string
    description: string | string[]
    imgSrc?: string
}

const EXPERIENCE_LIST: WorkDTO[] = [
    {
        date: "Jan 2023 – Jun 2023",
        title: "Frontend Developer @ XYZ Company",
        subtitle: "Freelance",
        description: [
            "Built responsive dashboards using React, TypeScript & Tailwind CSS",
            "Integrated RESTful APIs and optimized performance by 30%",
            "Collaborated with designers to improve accessibility (WCAG 2.1)",
        ],
        imgSrc: "/logos/xyz-company.png",
    },
    {
        date: "Aug 2022 – Dec 2022",
        title: "Intern @ Universidad de La Sabana",
        subtitle: "Teaching Assistant – Computer Science Dept.",
        description:
            "Assisted in grading assignments and hosting lab sessions for Data Structures course.",
    },
]

const PROJECTS_LIST: WorkDTO[] = [
    {
        date: "Aug 2022",
        title: "Rango – Professor Reviews Platform",
        subtitle: "Personal Project",
        description:
            "Built with React, Vite, ShadCN UI and Node.js. Enables students to rate and review professors at Universidad de La Sabana.",
        imgSrc: "/projects/rango-logo.png",
    },
    {
        date: "May 2022",
        title: "Portfolio Website",
        subtitle: "Personal Project",
        description:
            "Developed a responsive portfolio using Vite + TSX, Tailwind CSS, and ShadCN UI components.",
    },
]

const EVENTS_LIST: WorkDTO[] = [
    {
        date: "Mar 2022",
        title: "1st Place – University Hackathon",
        subtitle: "Team “ByteBuilders”",
        description:
            "Created a real‐time chat app integrated with Firebase & Flutter. Received recognition for best UX/UI design.",
        imgSrc: "/events/hackathon-badge.png",
    },
    {
        date: "Nov 2021",
        title: "Attended DevOps Conference",
        subtitle: "Bogotá Tech Summit",
        description:
            "Participated in workshops on CI/CD pipelines, Kubernetes best practices, and AWS serverless architectures.",
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
                className="max-w-5xl mx-auto px-4 py-12 text-white"
            >
                <h2 className="text-3xl font-bold mb-2 text-center">
                    {t("work.title", "Work")}
                </h2>
                <p className="text-center text-gray-300 mb-8">
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
                            <div className="space-y-8">
                                {EXPERIENCE_LIST.map((item, idx) => (
                                    <ExperienceEntry key={idx} {...item} />
                                ))}
                            </div>
                        </div>
                    </TabsContent>

                    <TabsContent value="projects">
                        <div className="relative">
                            <div className="hidden lg:block absolute left-1/4 top-0 h-full w-px bg-gray-700" />
                            <div className="space-y-8">
                                {PROJECTS_LIST.map((item, idx) => (
                                    <ProjectEntry key={idx} {...item} />
                                ))}
                            </div>
                        </div>
                    </TabsContent>

                    <TabsContent value="events">
                        <div className="relative">
                            <div className="hidden lg:block absolute left-1/4 top-0 h-full w-px bg-gray-700" />
                            <div className="space-y-8">
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
