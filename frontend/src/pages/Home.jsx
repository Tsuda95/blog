import './Home.css';
import profilePic from '../assets/profile.jpg';

export default function Home() {
  return (
    <div className="home">
      {/* Intro / Hero Section */}
      <section className="intro">
        <img src={profilePic} alt="Tsultrim Tsangtsar" className="profile-pic" />
        <h1>Tsultrim Tsangtsar</h1>
        <p className="title">Junior Full-Stack Developer | Educator</p>
        <p className="location">Joensuu, Finland</p>
        <div className="contact-links">
          <a href="mailto:tdgntsjt@gmail.com">tdgntsjt@gmail.com</a> |{" "}
          <a href="https://github.com/Tsuda95" target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </section>

      {/* Profile Summary */}
      <section className="about">
        <h2>About Me</h2>
        <p>
          I'm a programming student at Riveria with hands-on experience in full-stack web development. 
          I've built a functional blog application with user authentication and commenting features, and 
          I'm passionate about creating my own game someday. I have a background in teaching and mentoring students, 
          and I thrive in collaborative, problem-solving environments.
        </p>
      </section>

      {/* Technical Skills */}
      <section className="skills">
        <h2>Technical Skills</h2>
        <ul>
          <li><strong>Languages:</strong> JavaScript (Node.js, React), Python, SQL, HTML, CSS</li>
          <li><strong>Databases:</strong> MySQL, phpMyAdmin</li>
          <li><strong>Tools:</strong> Docker, Vite, Git/GitHub, AWS (basic)</li>
          <li><strong>Other:</strong> Agile, Teaching, Mentoring</li>
        </ul>
      </section>

      {/* Projects */}
      <section className="projects">
        <h2>Projects</h2>
        <div className="project-list">
          <div className="project-card">
            <h3>Full-Stack Blog Application</h3>
            <p>
              Developed a complete blog platform with CRUD post functionality and a commenting system. 
              Admins have exclusive publishing rights. Built using React, Node.js, MySQL, and Docker.
            </p>
            <a href="https://github.com/Tsuda95/blog" target="_blank" rel="noreferrer">View Project →</a>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="education">
        <h2>Education</h2>
        <ul>
          <li>
            <strong>Riveria – Programming (2024 – Present)</strong><br />
            Courses: Python, Docker, Cloud, MySQL, Node.js, React-Vite.<br />
            MOOC: Python Programming & Fullstack Open (University of Helsinki).
          </li>
          <li>
            <strong>Karelia UAS – International Business (2017 – 2020, incomplete)</strong>
          </li>
        </ul>
      </section>

      {/* Experience */}
      <section className="experience">
        <h2>Experience</h2>
        <ul>
          <li>
            <strong>Educator – SOG Finland (2023 – Present)</strong><br />
            Teaching Python, Scratch; developed and delivered 20+ coding lessons.
          </li>
          <li>
            <strong>Digital Marketing – Responsible Treks, Nepal (2021–2022)</strong><br />
            Managed campaigns and content creation.
          </li>
          <li>
            <strong>Sales & Marketing Intern – Arbonaut (2020–2021)</strong><br />
            Market research and product support.
          </li>
          <li>
            <strong>Teaching Assistant – University of Eastern Finland (2018–2019)</strong><br />
            Supported students in innovation workshops.
          </li>
        </ul>
      </section>

      {/* Contact CTA */}
      <section className="contact-cta">
        <p>Looking for a motivated intern or junior developer?</p>
        <a href="/contact" className="contact-button">Contact Me</a>
      </section>
    </div>
  );
}
