function App() {
  return (
    <>
      <nav className="navbar">
        <h2 className="logo">Saurabh.dev</h2>

        <ul className="nav-links">
  <li><a href="#home">Home</a></li>
  <li><a href="#about">About</a></li>
  <li><a href="#skills">Skills</a></li>
  <li><a href="#projects">Projects</a></li>
  <li><a href="#contact">Contact</a></li>
</ul>
      </nav>

      <div className="hero">
        <div className="hero" id="home"></div>
        <h1 className="name">Saurabh Pandey</h1>
        <p className="desc">Full Stack Developer</p>

        <div className="buttons">
          <button className="btn primary">View Projects</button>
          <button className="btn secondary">Contact Me</button>
        </div>
      </div>
      <section className="about">
        <section className="about" id="about"></section>
  <h2>About Me</h2>

  <p>
    I am Saurabh Pandey, a passionate Full Stack Developer and Cybersecurity
    enthusiast. I love building modern web applications, solving DSA problems,
    and exploring system security concepts.
  </p>
</section>

      {/* PROJECTS SECTION */}
      <section className="projects">
        <section className="projects" id="projects"></section>
        <h2>Projects</h2>

        <div className="project-grid">
          <div className="card">
            <h3>Portfolio Website</h3>
            <p>Modern responsive developer portfolio.</p>
          </div>

          <div className="card">
            <h3>Cybersecurity Tool</h3>
            <p>Security analysis dashboard project.</p>
          </div>

          <div className="card">
            <h3>Data Dashboard</h3>
            <p>Analytics visualization system.</p>
          </div>
        </div>
      </section>
      <section className="skills">
        <section className="skills" id="skills"></section>
  <h2>Skills</h2>

  <div className="skills-grid">
    <div className="skill">Python</div>
    <div className="skill">C++</div>
    <div className="skill">JavaScript</div>
    <div className="skill">Node.js</div>
    <div className="skill">Express.js</div>
    <div className="skill">MongoDB</div>
    <div className="skill">HTML</div>
    <div className="skill">CSS</div>
    <div className="skill">DSA</div>
    <div className="skill">Cybersecurity</div>
    <div className="skill">Networking</div>
    <div className="skill">Data Analytics</div>
  </div>
</section>
    </>
  );
}

export default App;