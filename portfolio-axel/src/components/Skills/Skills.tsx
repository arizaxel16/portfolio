import { useState } from "react"
import {
    Tabs,
    TabsList,
    TabsTrigger,
    TabsContent,
} from "@/components/ui/tabs"
import { Card } from "@/components/ui/card"
import { motion } from "framer-motion"

import {
    SiHtml5,
    SiCss3,
    SiSass,
    SiJavascript,
    SiTypescript,
    SiReact,
    SiFlutter,
    SiBootstrap,
    SiTailwindcss,
    SiKotlin,
    SiPython,
    SiSpringboot,
    SiGraphql,
    SiRabbitmq,
    SiPostgresql,
    SiMariadb,
    SiMongodb,
    SiDocker,
    SiKubernetes,
    SiGooglecloud,
    SiNewrelic,
    SiApachejmeter,
    SiUbuntu,
    SiApple,
    SiVirtualbox,
    SiArduino,
    SiRaspberrypi,
    SiNumpy,
    SiPandas,
    SiTensorflow,
    SiGoogleanalytics,
    SiGit,
    SiGithub,
    SiGitlab,
    SiIntellijidea,
    SiAndroidstudio,
    SiPostman,
    SiSwagger,
    SiSonarqube,
    SiWireshark,
    SiApachekafka,
    SiGithubactions,
    SiVite,
    SiCreatereactapp,
    SiJest,
} from "react-icons/si"

import {
    Monitor,
    Layout,
    Server,
    Key,
    Shield,
    Hexagon,
    Layers,
    CloudLightning,
    Database,
    Hash,
    GitPullRequest,
    Terminal,
    FileText,
    ShieldCheck,
    ShieldOff,
    Users,
    FileCode2,
    Settings,
    BookOpenIcon,
    ServerCogIcon,
    ZapIcon,
    CpuIcon,
    Calculator,
} from "lucide-react"
import { TbAccessible } from "react-icons/tb"
import {FaAws, FaBinoculars, FaGoogle, FaJava, FaJenkins, FaNetworkWired, FaNpm, FaWindows} from "react-icons/fa"
import { BiLogoVisualStudio, BiTestTube } from "react-icons/bi"
import { FaMicrochip } from "react-icons/fa6"
import { LuMicrochip } from "react-icons/lu"
import { BsMicrosoftTeams } from "react-icons/bs"
import { useTranslation } from "react-i18next";
import { IoLogoFirebase } from "react-icons/io5";
import { GrMysql } from "react-icons/gr";
import { GoAlertFill } from "react-icons/go";

export default function Skills() {
    const { t } = useTranslation()

    const [tabValue, setTabValue] = useState<string>("frontend")

    const TagCard: React.FC<{ icon: React.ReactNode; label: string }> = ({
                                                                             icon,
                                                                             label,
                                                                         }) => (
        <Card className="hover:shadow-sm transition flex flex-row items-center justify-start space-x-1 px-4 py-2 rounded-sm border border-gray-200 bg-white">
            <div className="text-black">{icon}</div>
            <span className="text-sm font-medium">{label}</span>
        </Card>
    )

    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="max-w-5xl mx-auto px-4 py-8"
        >
            <h2 className="text-3xl font-bold mb-6 text-center">{t("skills.title")}</h2>

            <Tabs value={tabValue} onValueChange={setTabValue}>
                <TabsList className="flex flex-wrap justify-center gap-2 mb-6 w-full">
                    <TabsTrigger value="frontend">{t("skills.frontend")}</TabsTrigger>
                    <TabsTrigger value="backend">{t("skills.backend")}</TabsTrigger>
                    <TabsTrigger value="databases">{t("skills.databases")}</TabsTrigger>
                    <TabsTrigger value="devops">{t("skills.devops")}</TabsTrigger>
                    <TabsTrigger value="security">{t("skills.security")}</TabsTrigger>
                    <TabsTrigger value="data">{t("skills.data")}</TabsTrigger>
                    <TabsTrigger value="embedded">{t("skills.embedded")}</TabsTrigger>
                    <TabsTrigger value="tools">{t("skills.tools")}</TabsTrigger>
                </TabsList>

                {/* ──────────────── FRONTEND ──────────────── */}
                <TabsContent value="frontend">
                    <div className="space-y-8">
                        {/* Languages & Markup */}
                        <div>
                            <h3 className="text-xl font-semibold mb-2">
                                Languages
                            </h3>
                            <div className="flex flex-row flex-wrap justify-start items-center gap-2">
                                <TagCard icon={<SiHtml5 size={32} />} label="HTML5" />
                                <TagCard icon={<SiCss3 size={32} />} label="CSS3" />
                                <TagCard icon={<SiSass size={32} />} label="SCSS" />
                                <TagCard icon={<SiJavascript size={32} />} label="JavaScript" />
                                <TagCard icon={<SiTypescript size={32} />} label="TypeScript" />
                            </div>
                        </div>

                        {/* Frameworks & Libraries */}
                        <div>
                            <h3 className="text-xl font-semibold mb-2">
                                Frameworks
                            </h3>
                            <div className="flex flex-row flex-wrap justify-start items-center gap-2">
                                <TagCard icon={<SiReact size={32} />} label="React" />
                                <TagCard icon={<SiCreatereactapp size={32} />} label="React Native" />
                                <TagCard icon={<SiFlutter size={32} />} label="Flutter" />
                                <TagCard icon={<SiBootstrap size={32} />} label="Bootstrap" />
                                <TagCard icon={<SiTailwindcss size={32} />} label="Tailwind CSS" />
                            </div>
                        </div>

                        {/* Styling & UI */}
                        <div>
                            <h3 className="text-xl font-semibold mb-2">UI</h3>
                            <div className="flex flex-row flex-wrap justify-start items-center gap-2">
                                <TagCard icon={<Monitor size={32} />} label="Responsive" />
                                <TagCard icon={<Layout size={32} />} label="UX/UI" />
                                <TagCard icon={<TbAccessible size={32} />} label="a11y" />
                            </div>
                        </div>

                        {/* Build & Bundling */}
                        <div>
                            <h3 className="text-xl font-semibold mb-2">
                                Bundling
                            </h3>
                            <div className="flex flex-row flex-wrap justify-start items-center gap-2">
                                <TagCard icon={<SiVite size={32} />} label="Vite" />
                                <TagCard icon={<FaNpm size={32} />} label="npm" />
                                <TagCard icon={<Layers size={32} />} label="SPA" />
                            </div>
                        </div>

                        {/* Testing (Frontend) */}
                        <div>
                            <h3 className="text-xl font-semibold mb-2">
                                Testing
                            </h3>
                            <div className="flex flex-row flex-wrap justify-start items-center gap-2">
                                <TagCard icon={<SiJest size={32} />} label="Jest" />
                            </div>
                        </div>
                    </div>
                </TabsContent>

                {/* ──────────────── BACKEND & ARCHITECTURE ──────────────── */}
                <TabsContent value="backend">
                    <div className="space-y-8">
                        {/* Languages & Frameworks */}
                        <div>
                            <h3 className="text-xl font-semibold mb-2">
                                Languages &amp; Frameworks
                            </h3>
                            <div className="flex flex-row flex-wrap justify-start items-center gap-2">
                                <TagCard icon={<FaJava size={32} />} label="Java" />
                                <TagCard icon={<SiKotlin size={32} />} label="Kotlin" />
                                <TagCard icon={<SiPython size={32} />} label="Python" />
                                <TagCard icon={<SiSpringboot size={32} />} label="Spring Boot" />
                            </div>
                        </div>

                        {/* API Design & Communication */}
                        <div>
                            <h3 className="text-xl font-semibold mb-2">
                                API Design &amp; Communication
                            </h3>
                            <div className="flex flex-row flex-wrap justify-start items-center gap-2">
                                <TagCard icon={<Server size={32} />} label="REST" />
                                <TagCard icon={<SiGraphql size={32} />} label="GraphQL" />
                                <TagCard icon={<Key size={32} />} label="OAuth" />
                                <TagCard icon={<Shield size={32} />} label="JWT" />
                                <TagCard icon={<CloudLightning size={32} />} label="Serverless" />
                            </div>
                        </div>

                        {/* Architectural Patterns */}
                        <div>
                            <h3 className="text-xl font-semibold mb-2">
                                Architectural Patterns
                            </h3>
                            <div className="flex flex-row flex-wrap justify-start items-center gap-2">
                                <TagCard icon={<Layers size={32} />} label="SOLID" />
                                <TagCard icon={<BookOpenIcon size={32} />} label="DDD" />
                                <TagCard icon={<Hexagon size={32} />} label="Hexagonal" />
                                <TagCard icon={<ServerCogIcon size={32} />} label="Microservices" />
                            </div>
                        </div>

                        {/* Microservices & Messaging */}
                        <div>
                            <h3 className="text-xl font-semibold mb-2">
                                Messaging
                            </h3>
                            <div className="flex flex-row flex-wrap justify-start items-center gap-2">
                                <TagCard icon={<SiRabbitmq size={32} />} label="RabbitMQ" />
                                <TagCard icon={<SiApachekafka size={32} />} label="Kafka" />
                            </div>
                        </div>

                        {/* Scalability & Resilience */}
                        <div>
                            <h3 className="text-xl font-semibold mb-2">
                                Scalability &amp; Resilience
                            </h3>
                            <div className="flex flex-row flex-wrap justify-start items-center gap-2">
                                <TagCard icon={<ServerCogIcon size={32} />} label="Load Balancing" />
                                <TagCard icon={<ZapIcon size={32} />} label="Rate Limiting" />
                            </div>
                        </div>

                        {/* Testing (Backend) */}
                        <div>
                            <h3 className="text-xl font-semibold mb-2">
                                Testing
                            </h3>
                            <div className="flex flex-row flex-wrap justify-start items-center gap-2">
                                <TagCard icon={<BiTestTube size={32} />} label="Mockito" />
                            </div>
                        </div>
                    </div>
                </TabsContent>

                {/* ──────────────── DATABASES & STORAGE ──────────────── */}
                <TabsContent value="databases">
                    <div className="space-y-8">
                        {/* Relational Databases */}
                        <div>
                            <h3 className="text-xl font-semibold mb-2">
                                Relational Databases
                            </h3>
                            <div className="flex flex-row flex-wrap justify-start items-center gap-2">
                                <TagCard icon={<SiPostgresql size={32} />} label="PostgreSQL" />
                                <TagCard icon={<GrMysql size={32} />} label="MySQL" />
                                <TagCard icon={<SiMariadb size={32} />} label="MariaDB" />
                            </div>
                        </div>

                        {/* NoSQL Databases */}
                        <div>
                            <h3 className="text-xl font-semibold mb-2">NoSQL Databases</h3>
                            <div className="flex flex-row flex-wrap justify-start items-center gap-2">
                                <TagCard icon={<SiMongodb size={32} />} label="MongoDB" />
                                <TagCard icon={<IoLogoFirebase size={32} />} label="Firebase" />
                            </div>
                        </div>

                        {/* Core Concepts */}
                        <div>
                            <h3 className="text-xl font-semibold mb-2">
                                Core Concepts
                            </h3>
                            <div className="flex flex-row flex-wrap justify-start items-center gap-2">
                                <TagCard icon={<Database size={32} />} label="SQL" />
                                <TagCard icon={<Database size={32} />} label="DB Design" />
                                <TagCard icon={<Hash size={32} />} label="Indexing" />
                                <TagCard icon={<Layers size={32} />} label="ACID" />
                            </div>
                        </div>
                    </div>
                </TabsContent>

                {/* ──────────────── DEVOPS & MONITORING ──────────────── */}
                <TabsContent value="devops">
                    <div className="space-y-8">
                        {/* CI/CD & IaC */}
                        <div>
                            <h3 className="text-xl font-semibold mb-2">
                                CI/CD
                            </h3>
                            <div className="flex flex-row flex-wrap justify-start items-center gap-2">
                                <TagCard icon={<GitPullRequest size={32} />} label="CI/CD Pipelines" />
                                <TagCard icon={<Terminal size={32} />} label="Infrastructure as Code" />
                                <TagCard icon={<SiGithubactions size={32} />} label="GitHub Actions" />
                                <TagCard icon={<FaJenkins size={32} />} label="Jenkins" />
                            </div>
                        </div>

                        {/* Containerization & Orchestration */}
                        <div>
                            <h3 className="text-xl font-semibold mb-2">
                                Container &amp; Orchestration
                            </h3>
                            <div className="flex flex-row flex-wrap justify-start items-center gap-2">
                                <TagCard icon={<SiDocker size={32} />} label="Docker" />
                                <TagCard icon={<SiKubernetes size={32} />} label="Kubernetes" />
                            </div>
                        </div>

                        {/* Cloud Platforms */}
                        <div>
                            <h3 className="text-xl font-semibold mb-2">Cloud Platforms</h3>
                            <div className="flex flex-row flex-wrap justify-start items-center gap-2">
                                <TagCard icon={<FaAws size={32} />} label="AWS" />
                                <TagCard icon={<SiGooglecloud size={32} />} label="GCP" />
                            </div>
                        </div>

                        {/* Monitoring & Performance Testing */}
                        <div>
                            <h3 className="text-xl font-semibold mb-2">
                                Monitoring
                            </h3>
                            <div className="flex flex-row flex-wrap justify-start items-center gap-2">
                                <TagCard icon={<SiNewrelic size={32} />} label="New Relic" />
                                <TagCard icon={<FileText size={32} />} label="SLF4J" />
                                <TagCard icon={<SiApachejmeter size={32} />} label="JMeter" />
                            </div>
                        </div>
                    </div>
                </TabsContent>

                {/* ──────────────── SECURITY & IT INFRASTRUCTURE ──────────────── */}
                <TabsContent value="security">
                    <div className="space-y-8">
                        {/* Network & System Security */}
                        <div>
                            <h3 className="text-xl font-semibold mb-2">
                                Network &amp; System Security
                            </h3>
                            <div className="flex flex-row flex-wrap justify-start items-center gap-2">
                                <TagCard icon={<Shield size={32} />} label="pfSense" />
                                <TagCard icon={<ShieldCheck size={32} />} label="SSL/TLS" />
                                <TagCard icon={<ShieldOff size={32} />} label="Pen Testing" />
                                <TagCard icon={<GoAlertFill size={32} />} label="Risk Management" />
                                <TagCard icon={<SiWireshark size={32} />} label="Wireshark" />
                            </div>
                        </div>

                        {/* Authentication & Access */}
                        <div>
                            <h3 className="text-xl font-semibold mb-2">
                                Authentication
                            </h3>
                            <div className="flex flex-row flex-wrap justify-start items-center gap-2">
                                <TagCard icon={<Users size={32} />} label="Active Directory" />
                                <TagCard icon={<Key size={32} />} label="OAuth / JWT" />
                            </div>
                        </div>

                        {/* OS & Virtualization */}
                        <div>
                            <h3 className="text-xl font-semibold mb-2">
                                OS &amp; Virtualization
                            </h3>
                            <div className="flex flex-row flex-wrap justify-start items-center gap-2">
                                <TagCard icon={<FaWindows size={32} />} label="Windows" />
                                <TagCard icon={<SiUbuntu size={32} />} label="Ubuntu" />
                                <TagCard icon={<SiApple size={32} />} label="macOS" />
                                <TagCard icon={<SiVirtualbox size={32} />} label="VirtualBox" />
                            </div>
                        </div>

                        {/* Networking & Hardware */}
                        <div>
                            <h3 className="text-xl font-semibold mb-2">
                                Networking &amp; Hardware
                            </h3>
                            <div className="flex flex-row flex-wrap justify-start items-center gap-2">
                                <TagCard icon={<FaNetworkWired size={32} />} label="Cisco" />
                                <TagCard icon={<FaBinoculars size={32} />} label="Zabbix (NOC)" />
                            </div>
                        </div>
                    </div>
                </TabsContent>

                {/* ──────────────── DATA & ANALYTICS ──────────────── */}
                <TabsContent value="data">
                    <div className="space-y-8">
                        {/* Languages & Libraries */}
                        <div>
                            <h3 className="text-xl font-semibold mb-2">
                                Languages &amp; Libraries
                            </h3>
                            <div className="flex flex-row flex-wrap justify-start items-center gap-2">
                                <TagCard icon={<SiPython size={32} />} label="Python" />
                                <TagCard icon={<SiNumpy size={32} />} label="NumPy" />
                                <TagCard icon={<SiPandas size={32} />} label="Pandas" />
                                <TagCard icon={<Calculator size={32} />} label="Matlab" />
                            </div>
                        </div>

                        {/* Machine Learning & AI */}
                        <div>
                            <h3 className="text-xl font-semibold mb-2">
                                Machine Learning &amp; AI
                            </h3>
                            <div className="flex flex-row flex-wrap justify-start items-center gap-2">
                                <TagCard icon={<SiTensorflow size={32} />} label="TensorFlow" />
                                <TagCard icon={<CpuIcon size={32} />} label="ML Concepts" />
                            </div>
                        </div>

                        {/* Web Analytics */}
                        <div>
                            <h3 className="text-xl font-semibold mb-2">Web Analytics</h3>
                            <div className="flex flex-row flex-wrap justify-start items-center gap-2">
                                <TagCard icon={<SiGoogleanalytics size={32} />} label="Google Analytics"/>
                            </div>
                        </div>
                    </div>
                </TabsContent>

                {/* ──────────────── EMBEDDED & HARDWARE ──────────────── */}
                <TabsContent value="embedded">
                    <div className="space-y-8">
                        {/* Digital & Analog Circuits */}
                        <div>
                            <h3 className="text-xl font-semibold mb-2">
                                Digital &amp; Analog Circuits
                            </h3>
                            <div className="flex flex-row flex-wrap justify-start items-center gap-2">
                                <TagCard icon={<FaMicrochip size={32} />} label="Circuit Design" />
                                <TagCard icon={<LuMicrochip size={32} />} label="PIC" />
                                <TagCard icon={<SiArduino size={32} />} label="Arduino" />
                                <TagCard icon={<SiRaspberrypi size={32} />} label="Raspberry Pi"/>
                            </div>
                        </div>

                        {/* Simulation & EDA Tools */}
                        <div>
                            <h3 className="text-xl font-semibold mb-2">
                                Simulation &amp; EDA Tools
                            </h3>
                            <div className="flex flex-row flex-wrap justify-start items-center gap-2">
                                <TagCard icon={<FileCode2 size={32} />} label="Multisim" />
                                <TagCard icon={<ZapIcon size={32} />} label="SPICE" />
                                <TagCard icon={<Settings size={32} />} label="Proteus" />
                            </div>
                        </div>
                    </div>
                </TabsContent>

                {/* ──────────────── TOOLS & UTILITIES ──────────────── */}
                <TabsContent value="tools">
                    <div className="space-y-8">
                        {/* Version Control & Collaboration */}
                        <div>
                            <h3 className="text-xl font-semibold mb-2">
                                Version Control &amp; Collaboration
                            </h3>
                            <div className="flex flex-row flex-wrap justify-start items-center gap-2">
                                <TagCard icon={<SiGit size={32} />} label="Git" />
                                <TagCard icon={<SiGithub size={32} />} label="GitHub" />
                                <TagCard icon={<SiGitlab size={32} />} label="GitLab" />
                            </div>
                        </div>

                        {/* IDEs & Editors */}
                        <div>
                            <h3 className="text-xl font-semibold mb-2">IDEs &amp; Editors</h3>
                            <div className="flex flex-row flex-wrap justify-start items-center gap-2">
                                <TagCard icon={<BiLogoVisualStudio size={32} />} label="VS Code"/>
                                <TagCard icon={<SiIntellijidea size={32} />} label="IntelliJ IDEA"/>
                                <TagCard icon={<SiAndroidstudio size={32} />} label="Android Studio"/>
                            </div>
                        </div>

                        {/* API & Documentation */}
                        <div>
                            <h3 className="text-xl font-semibold mb-2">
                                API &amp; Documentation
                            </h3>
                            <div className="flex flex-row flex-wrap justify-start items-center gap-2">
                                <TagCard icon={<SiPostman size={32} />} label="Postman" />
                                <TagCard icon={<SiSwagger size={32} />} label="Swagger" />
                            </div>
                        </div>

                        {/* CI / Code Quality */}
                        <div>
                            <h3 className="text-xl font-semibold mb-2">
                                CI / Code Quality
                            </h3>
                            <div className="flex flex-row flex-wrap justify-start items-center gap-2">
                                <TagCard icon={<SiSonarqube size={32} />} label="SonarQube" />
                                <TagCard icon={<SiJest size={32} />} label="Jest" />
                                <TagCard icon={<SiGithubactions size={32} />} label="GitHub Actions"/>
                                <TagCard icon={<FaJenkins size={32} />} label="Jenkins" />
                                <TagCard icon={<SiNewrelic size={32} />} label="New Relic" />

                            </div>
                        </div>

                        {/* Communication & Office */}
                        <div>
                            <h3 className="text-xl font-semibold mb-2">
                                Communication &amp; Office
                            </h3>
                            <div className="flex flex-row flex-wrap justify-start items-center gap-2">
                                <TagCard icon={<BsMicrosoftTeams size={32} />} label="Microsoft Teams"/>
                                <TagCard icon={<FaGoogle size={32} />} label="Google Workspace" />
                            </div>
                        </div>
                    </div>
                </TabsContent>
            </Tabs>
        </motion.section>
    )
}
