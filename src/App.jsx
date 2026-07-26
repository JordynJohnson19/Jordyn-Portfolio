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

        <section id="about" className="section about-section">
  <div className="about-content">
    <div className="about-text">
      <p className="section-label">About Me</p>

      <h2>Computer Science Student Focused on Artificial Intelligence</h2>

      <p>
        I am a senior Computer Science student at Alabama A&M University with
        experience in artificial intelligence, machine learning, computer
        vision, cybersecurity, and software development.
      </p>

      <p>
        My work includes building computer vision applications, evaluating
        vision-language models, developing financial language-model projects,
        and improving identity and access management workflows during my
        cybersecurity internship.
      </p>

      <p>
        I am currently preparing for an entry-level AI, machine learning, or
        software engineering role where I can apply my technical skills to
        real-world problems.
      </p>
    </div>

    <div className="about-details">
      <div className="about-detail">
        <span>Education</span>
        <strong>B.S. Computer Science</strong>
      </div>

      <div className="about-detail">
        <span>University</span>
        <strong>Alabama A&M University</strong>
      </div>

      <div className="about-detail">
        <span>Focus</span>
        <strong>Artificial Intelligence and Machine Learning</strong>
      </div>

      <div className="about-detail">
        <span>Career Goal</span>
        <strong>AI/ML or Software Engineering</strong>
      </div>
    </div>
  </div>
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
      githubUrl={project.githubUrl}
      projectUrl={project.projectUrl}
    />
  ))}

</div>
</section>
        <section id="skills" className="section skills-section">
  <p className="section-label">Technical Skills</p>

  <h2>Tools and Technologies</h2>

  <p className="section-description">
    Technologies I have used through coursework, internships, research, and
    personal projects.
  </p>

  <div className="skills-grid">
    <div className="skill-category">
      <h3>Artificial Intelligence</h3>

      <div className="skill-list">
        <span>Machine Learning</span>
        <span>Computer Vision</span>
        <span>Large Language Models</span>
        <span>Vision-Language Models</span>
        <span>Model Evaluation</span>
        <span>Data Preprocessing</span>
      </div>
    </div>

    <div className="skill-category">
      <h3>Programming</h3>

      <div className="skill-list">
        <span>Python</span>
        <span>JavaScript</span>
        <span>React</span>
        <span>HTML</span>
        <span>CSS</span>
        <span>C++</span>
        <span>SQL</span>
      </div>
    </div>

    <div className="skill-category">
      <h3>AI and Data Tools</h3>

      <div className="skill-list">
        <span>Pandas</span>
        <span>NumPy</span>
        <span>OpenCV</span>
        <span>MediaPipe</span>
        <span>Scikit-learn</span>
        <span>Gemini API</span>
      </div>
    </div>

    <div className="skill-category">
      <h3>Cloud and Development</h3>

      <div className="skill-list">
        <span>AWS</span>
        <span>Git</span>
        <span>GitHub</span>
        <span>VS Code</span>
        <span>Vite</span>
        <span>Linux</span>
      </div>
    </div>
  </div>
</section>
      </main>
    </>
  );
}

export default App;