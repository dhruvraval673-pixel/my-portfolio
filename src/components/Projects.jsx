import drCloth from "../assets/dr-cloth.png";
import fitZone from "../assets/fit-zone.png";

function Projects() {
  return (
    <section id="projects" className="projects-section">

      <div className="projects-heading">
        <p className="section-tag">MY PROJECTS</p>

        <h2>Projects I've Built</h2>

        <p>
          Here are some of the projects I have worked on using
          modern web technologies.
        </p>
      </div>

      <div className="projects-grid">

        {/* DR Cloth */}
        <div className="project-card">

          <img
            src={drCloth}
            alt="DR Cloth project"
            loading="lazy"
            className="project-image"
          />

          <div className="project-number">01</div>

          <h3>DR Cloth</h3>

          <p>
            A modern clothing website designed to showcase fashion
            products with a clean, attractive and responsive
            user interface.
          </p>

          <div className="project-tech">
            <span>React</span>
            <span>JavaScript</span>
            <span>CSS</span>
          </div>

          <button className="project-btn">
            View Project →
          </button>

        </div>


        {/* Fit Zone Gym */}
        <div className="project-card">

          <img
            src={fitZone}
            alt="Fit Zone Gym project"
            loading="lazy"
            className="project-image"
          />

          <div className="project-number">02</div>

          <h3>Fit Zone Gym</h3>

          <p>
            A responsive fitness website featuring workout programs,
            gym services, trainers and fitness activities.
          </p>

          <div className="project-tech">
            <span>React</span>
            <span>JavaScript</span>
            <span>CSS</span>
          </div>

          <button className="project-btn">
            View Project →
          </button>

        </div>

      </div>

    </section>
  );
}

export default Projects;