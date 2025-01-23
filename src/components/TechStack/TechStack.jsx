import React from "react";
import "./TechStack.scss";
import TechTag from "./TechTag";

function TechStack() {
    const techs = ["Java",
        "Python",
        "Spring Boot",
        "React",
        "Node.js",
        "Javascript",
        "R Studio",
        "GitHub",
        "Jenkins",
        "Rabbitmq",
        "Android Studio"
    ]
    
    return (
        <div className="container-techstack">
            {techs.map((tech) => (
                <TechTag name={tech} />
            ))}
        </div>
    );
}

export default TechStack;
