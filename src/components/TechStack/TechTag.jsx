import React from "react";
import { FaJava, FaPython, FaReact, FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiSpringboot, SiRstudioide, SiRabbitmq } from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";
import { DiJenkins } from "react-icons/di";
import { IoLogoAndroid } from "react-icons/io";

import "./TechTag.scss";

const techIcons = {
    Java: <FaJava />,
    Python: <FaPython />,
    "Spring Boot": <SiSpringboot />,
    React: <FaReact />,
    "Node.js": <FaNodeJs />,
    Javascript: <IoLogoJavascript />,
    "R Studio": <SiRstudioide />,
    GitHub: <AiFillGithub />,
    Jenkins: <DiJenkins />,
    Rabbitmq: <SiRabbitmq />,
    "Android Studio": <IoLogoAndroid />,
};

function TechTag({ name }) {
    const icon = techIcons[name];

    return (
        <div className="container-techtag">
            {icon && <span className="tech-icon">{icon}</span>}
            <h3>{name}</h3>
        </div>
    );
}

export default TechTag;
