import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Cabinetry from "../../Assets/Projects/Cabinetry.png";
import carrito from "../../Assets/Projects/carrito.png";
import EYWA from "../../Assets/Projects/EYWA.png";
import Inmo from "../../Assets/Projects/Inmo.png";
import amazona from "../../Assets/Projects/amazona.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Cabinetry}
              isBlog={false}
              title="Cabinetry"
              description="Developed based on Bootstra & React"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={carrito}
              isBlog={false}
              title="BM"
              description="I completed a web page using the Angular and Laravel frameworks. This project was a great opportunity to develop my skills in both frameworks and take advantage of their powerful features."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={EYWA}
              isBlog={false}
              title="EYWA (Marketplace)"
              description="Tailwind based project."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Inmo}
              isBlog={false}
              title="INMO VALLEY"
              description="I completed this project using React and Bootstrap. This project involved building a web page with a modern design, robust navigation, and a user-friendly interface.
              I am very proud of the work I did on this project. I used the latest technologies to create a modern website with a user-friend interface. The website looks great on all devices and it is easy to navigate."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={amazona}
              isBlog={false}
              title="MERN Ecommerce"
              description="Welcome to my React and Node tutorial to build a fully-functional e-commerce website exactly like amazon. Open your code editor and follow me for the next hours to build an e-commerce website using MERN stack (MongoDB, ExpressJS, React and Node.JS)."
              ghLink="https://github.com/BMValero/mern-amazona"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
