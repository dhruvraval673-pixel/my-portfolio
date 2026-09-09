function Skills() {
  return (
    <section id="skills" className="skills-section">

      <div className="skills-heading">
        <p className="section-tag">MY SKILLS</p>

        <h2>Technologies I Work With</h2>

        <p>
          Here are some of the technologies and tools I use
          to build modern web applications.
        </p>
      </div>

      <div className="skills-grid">

        <div className="skill-card">
          <div className="skill-icon">🌐</div>
          <h3>HTML</h3>
          <p>Building structured and accessible web pages.</p>
        </div>

        <div className="skill-card">
          <div className="skill-icon">🎨</div>
          <h3>CSS</h3>
          <p>Creating responsive and attractive user interfaces.</p>
        </div>

        <div className="skill-card">
          <div className="skill-icon">⚡</div>
          <h3>JavaScript</h3>
          <p>Adding dynamic functionality to web applications.</p>
        </div>

        <div className="skill-card">
          <div className="skill-icon">⚛️</div>
          <h3>React</h3>
          <p>Developing reusable and interactive components.</p>
        </div>

        <div className="skill-card">
          <div className="skill-icon">🔧</div>
          <h3>Git & GitHub</h3>
          <p>Managing source code and projects.</p>
        </div>

      </div>

    </section>
  );
}

export default Skills;