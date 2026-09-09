import { lazy, Suspense } from "react";
import "./App.css";

// Lazy loaded components
const About = lazy(() => import("./components/About"));
const Skills = lazy(() => import("./components/Skills"));
const Projects = lazy(() => import("./components/Projects"));
const Resume = lazy(() => import("./components/Resume"));
const Contact = lazy(() => import("./components/Contact"));

function App() {
  return (
    <div className="app">

     {/* NAVBAR */}
<nav className="navbar">

  <a href="#home" className="logo">
    Dhruv<span>.</span>
  </a>

  <div className="nav-links">
    <a href="#home">Home</a>
    <a href="#about">About</a>
    <a href="#skills">Skills</a>
    <a href="#projects">Projects</a>
    <a href="#resume">Resume</a>
    <a href="#contact">Contact</a>
  </div>

</nav>


      {/* HOME */}
      <section id="home" className="hero">

        <div className="hero-content">

          <p className="welcome">
            WELCOME TO MY PORTFOLIO
          </p>

          <h1>
            Hi, I'm <span>Dhruv Raval</span>
          </h1>

          <h2>
            Full Stack Developer
          </h2>

          <p className="hero-description">
            I create responsive and user-friendly web applications
            using modern web technologies. Explore my projects,
            skills and experience below.
          </p>

          <div className="hero-buttons">

            <a
              href="#projects"
              className="btn primary-btn"
            >
              View My Projects
            </a>

            <a
              href="#contact"
              className="btn secondary-btn"
            >
              Contact Me
            </a>

          </div>

        </div>


        {/* Developer Code Card */}
        <div className="hero-visual">

          <div className="developer-card">

            <div className="card-top">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className="code">

              <p>
                <span className="purple">const</span>{" "}
                developer = {"{"}
              </p>

              <p>
                &nbsp;&nbsp;name:{" "}
                <span className="green">
                  "Dhruv"
                </span>,
              </p>

              <p>
                &nbsp;&nbsp;role:{" "}
                <span className="green">
                  "Developer"
                </span>,
              </p>

              <p>
                &nbsp;&nbsp;skills: [
              </p>

              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span className="green">
                  "React"
                </span>,
              </p>

              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span className="green">
                  "JavaScript"
                </span>,
              </p>

              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span className="green">
                  "HTML"
                </span>,
              </p>

              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span className="green">
                  "CSS"
                </span>
              </p>

              <p>
                &nbsp;&nbsp;]
              </p>

              <p>
                {"}"}
              </p>

            </div>

          </div>

        </div>

      </section>


      {/*  LAZY LOADED SECTIONS */}

      <Suspense
        fallback={
          <div className="loading">
            Loading...
          </div>
        }
      >

        <About />

        <Skills />

        <Projects />

        <Resume />

        <Contact />

      </Suspense>


      {/* FOOTER */}

      <footer>

        <p>
          © 2026 Dhruv Raval. All rights reserved.
        </p>

      </footer>

    </div>
  );
}

export default App;