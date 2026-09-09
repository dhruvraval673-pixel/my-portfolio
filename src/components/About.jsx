function About() {
  return (
    <section id="about" className="about-section">

      <div className="about-content">
        <p className="section-tag">ABOUT ME</p>

        <h2>Who I Am</h2>

        <p>
          I am a passionate developer who enjoys building modern,
          responsive and user-friendly web applications.
        </p>

        <p>
          I enjoy learning new technologies, solving programming
          problems and turning ideas into useful real-world projects.
        </p>

        <p>
          My goal is to continuously improve my development skills
          and create applications that provide a great user experience.
        </p>
      </div>

      <div className="about-info">

        <div className="info-card">
          <h3>Frontend</h3>
          <p>React, JavaScript, HTML, CSS</p>
        </div>

        <div className="info-card">
          <h3>Development</h3>
          <p>Responsive and user-friendly applications</p>
        </div>

      </div>

    </section>
  );
}

export default About;