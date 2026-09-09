function Contact() {
  return (
    <section id="contact" className="contact-section">

      <div className="contact-heading">
        <p className="section-tag">CONTACT ME</p>

        <h2>Let's Work Together</h2>

        <p>
          Have a project idea or want to get in touch?
          Feel free to contact me.
        </p>
      </div>

      <div className="contact-container">

        <div className="contact-info">

          <div className="contact-item">
            <h3>Email</h3>
            <p>dhruvraval673@gmail.com</p>
          </div>

          <div className="contact-item">
            <h3>GitHub</h3>
            <a href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer">
              Visit GitHub →
            </a>
          </div>

          <div className="contact-item">
            <h3>LinkedIn</h3>
            <a href="https://www.linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer">
              Visit LinkedIn →
            </a>
          </div>

        </div>

        <form className="contact-form">

          <input type="text" placeholder="Your Name" required />

          <input type="email" placeholder="Your Email" required />

          <textarea
            rows="6"
            placeholder="Your Message"
            required
          ></textarea>

          <button type="submit" className="btn primary-btn">
            Send Message
          </button>

        </form>

      </div>

    </section>
  );
}

export default Contact;