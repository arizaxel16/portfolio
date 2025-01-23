import React from "react";
import { FaJava, FaPython, FaReact, FaNodeJs, FaJenkins } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiSpringboot, SiRstudioide, SiRabbitmq } from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";
import { IoLogoAndroid } from "react-icons/io";

import "./TechTag.scss";

const techIcons = {
  Java: { icon: <FaJava />, color: "#f89820" }, // Oracle Java orange
  Python: { icon: <FaPython />, color: "#306998" }, // Python blue
  "Spring Boot": { icon: <SiSpringboot />, color: "#6db33f" }, // Spring green
  React: { icon: <FaReact />, color: "#61dafb" }, // React blue
  "Node.js": { icon: <FaNodeJs />, color: "#68a063" }, // Node.js green
  Javascript: { icon: <IoLogoJavascript />, color: "#f7df1e" }, // JS yellow
  "R Studio": { icon: <SiRstudioide />, color: "#75aadb" }, // RStudio blue
  GitHub: { icon: <AiFillGithub />, color: "#181717" }, // GitHub black
  Jenkins: { icon: <FaJenkins /> , color: "#d24939" }, // Jenkins red
  Rabbitmq: { icon: <SiRabbitmq />, color: "#ff6600" }, // RabbitMQ orange
  "Android Studio": { icon: <IoLogoAndroid />, color: "#3ddc84" }, // Android green
};

function TechTag({ name }) {
  const tech = techIcons[name];

  return (
    <div
      className="container-techtag"
      style={{
        backgroundColor: tech ? tech.color : "#4caf50", // Default to green if color is missing
      }}
    >
      {tech?.icon && <span className="tech-icon">{tech.icon}</span>}
      <h3>{name}</h3>
    </div>
  );
}

export default TechTag;
