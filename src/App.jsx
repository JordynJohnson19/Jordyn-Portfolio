import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './styles/App.css'
import Navbar from "./components/Navbar";
import ProjectCard from "./components/ProjectCard";
import projects from "./data/projects";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <section id="home" className="section hero-section">
          <p className="intro-text">Hello, my name is</p>

          <h1>Jordyn Johnson</h1>

          <h2>AI and Machine Learning Portfolio</h2>

          <p className="hero-description">
            Computer Science student at Alabama A&amp;M University specializing
            in artificial intelligence, machine learning, computer vision, and
            automation.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="button primary-button">
              View Projects
            </a>

            <a href="#contact" className="button secondary-button">
              Contact Me
            </a>
          </div>
        </section>

        <section id="about" className="section">
          <h2>About Me</h2>

          <p>
            I am an AI-focused Computer Science student with experience in
            machine learning, computer vision, robotics, automation, and data
            processing.
          </p>
        </section>

        <section id="projects" className="section">
  <p className="section-label">Featured Work</p>
  <h2>Projects</h2>

  <p className="section-description">
    Projects involving computer vision, language models, multimodal AI, and
    real-world automation.
  </p>

  <div className="project-grid">

  {projects.map((project) => (
    <ProjectCard
      key={project.title}
      title={project.title}
      status={project.status}
      description={project.description}
      technologies={project.technologies}
    />
  ))}

</div>
</section>
        <section id="skills" className="section">
          <h2>Skills</h2>

          <p>
            Python, C++, JavaScript, SQL, PyTorch, Pandas, OpenCV, MediaPipe,
            React, and Git.
          </p>
        </section>

        <section id="contact" className="section">
          <h2>Contact</h2>

          <p>Email: JordynJohnson80@gmail.com</p>
        </section>
      </main>
    </>
  );
}

export default App;