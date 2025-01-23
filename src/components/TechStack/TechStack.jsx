import React from "react";
import "./TechStack.scss";
import TechTag from "./TechTag";

function TechStack() {
  const technologies = [
    "Java",
    "Python",
    "Javascript",
    "R Studio",
    "React",
    "Node.js",
  ];

  const toolsFrameworks = [
    "Spring Boot",
    "GitHub",
    "Jenkins",
    "Rabbitmq",
    "Android Studio",
  ];

  return (
    <div className="container-techstack">
      <div className="category">
        <h2>Technologies</h2>
        <div className="tech-list">
          {technologies.map((tech) => (
            <TechTag key={tech} name={tech} />
          ))}
        </div>
      </div>
      <div className="category">
        <h2>Tools & Frameworks</h2>
        <div className="tech-list">
          {toolsFrameworks.map((tool) => (
            <TechTag key={tool} name={tool} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default TechStack;
