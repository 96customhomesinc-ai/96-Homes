import { useState } from "react";
import "./styles.css";

const projects = [
  {
    title: "Custom Residential Build",
    category: "Residential Construction",
    date: "Completed August 2023",
    description: "A modern custom home built with thoughtful exterior detailing, clean architectural lines, and durable finishes.",
    image: "/images/custom-home-exterior.jpg",
  },
  {
    title: "Custom Kitchen",
    category: "Interior Construction",
    date: "Featured Project",
    description: "A bright, modern kitchen featuring custom cabinetry, a large waterfall island, and carefully coordinated finishes.",
    image: "/images/custom-kitchen.jpg",
  },
];

const services = [
  { title: "Custom Home Building", text: "Complete custom-home construction planned around your vision, lifestyle, and long-term goals." },
  { title: "General Contracting", text: "Reliable oversight of trades, schedules, budgets, quality control, and project delivery." },
  { title: "Commercial Construction", text: "Professional construction and build-outs for offices, retail spaces, and mixed-use properties." },
  { title: "Renovations & Remodeling", text: "Kitchens, bathrooms, basements, additions, and full-property transformations completed with care." },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="container header-inner">
          <a href="#home" className="brand" onClick={closeMenu} aria-label="96 Homes home">
            <img src="/images/logo.png" alt="96 Homes" className="brand-logo" />
          </a>
          <button className="menu-button" type="button" aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(v => !v)}>
            <span /><span /><span />
          </button>
          <nav className={`main-nav ${menuOpen ? "open" : ""}`} aria-label="Main navigation">
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#services" onClick={closeMenu}>Services</a>
            <a href="#projects" onClick={closeMenu}>Projects</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
            <a className="nav-call" href="tel:+14039169696">Call Now</a>
          </nav>
        </div>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-overlay" />
          <img className="hero-image" src="/images/custom-home-exterior.jpg" alt="Custom residential project by 96 Homes" />
          <div className="container hero-content">
            <p className="eyebrow">Calgary Builder & General Contractor</p>
            <h1>Residential and commercial construction built with purpose.</h1>
            <p className="hero-copy">From custom homes to complete renovations, 96 Homes delivers dependable construction, skilled craftsmanship, and careful project management from start to finish.</p>
            <div className="hero-actions">
              <a href="#contact" className="button button-primary">Request a Quote</a>
              <a href="#projects" className="button button-secondary">View Our Work</a>
            </div>
          </div>
        </section>

        <section id="about" className="section about-section">
          <div className="container narrow">
            <p className="section-label">About 96 Homes</p>
            <h2>No project is too big or too small.</h2>
            <p className="lead">At 96 Homes, no project is too big or too small for us. We are ready to take on jobs of all sizes and deliver each one with care, precision, and dependable workmanship. With our team of skilled tradespeople, we work closely with every client to turn their vision into reality. After more than five years in the construction industry, we have gained the practical knowledge and hands-on experience needed to confidently complete a wide range of residential and commercial projects.</p>
          </div>
        </section>

        <section id="services" className="section services-section">
          <div className="container">
            <div className="section-heading">
              <div><p className="section-label light">Our Services</p><h2>What we build</h2></div>
              <p>Quality construction, clear communication, and organized project delivery for homes and commercial spaces.</p>
            </div>
            <div className="service-grid">
              {services.map((service, index) => (
                <article className="service-card" key={service.title}>
                  <span className="service-number">{String(index + 1).padStart(2, "0")}</span>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="section projects-section">
          <div className="container">
            <div className="section-heading dark-text">
              <div><p className="section-label">Selected Projects</p><h2>Work completed by 96 Homes</h2></div>
              <p>Real residential work showcasing our attention to detail and modern construction style.</p>
            </div>
            <div className="project-grid">
              {projects.map(project => (
                <article className="project-card" key={project.title}>
                  <div className="project-image-wrap"><img src={project.image} alt={project.title} className="project-image" /></div>
                  <div className="project-content">
                    <p className="project-category">{project.category}</p>
                    <h3>{project.title}</h3>
                    <p className="project-date">{project.date}</p>
                    <p>{project.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="container cta-inner">
            <div><p className="section-label light">Ready to build?</p><h2>Let’s discuss your next project.</h2></div>
            <a className="button button-light" href="tel:+14039169696">Call (403) 916-9696</a>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="container contact-grid">
            <div className="contact-copy">
              <p className="section-label">Contact</p>
              <h2>Tell us what you want to build.</h2>
              <p>Share a few details about your residential or commercial project and our team will contact you to discuss the next steps.</p>
              <div className="contact-details">
                <a href="mailto:info@96homes.ca">info@96homes.ca</a>
                <a href="tel:+14039169696">(403) 916-9696</a>
                <span>Calgary, Alberta</span>
              </div>
            </div>

            <form className="contact-form" action="https://formsubmit.co/info@96homes.ca" method="POST">
              <input type="hidden" name="_subject" value="New 96 Homes website inquiry" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="false" />
              <label>Full name<input type="text" name="name" required autoComplete="name" /></label>
              <div className="form-row">
                <label>Email<input type="email" name="email" required autoComplete="email" /></label>
                <label>Phone<input type="tel" name="phone" autoComplete="tel" /></label>
              </div>
              <label>Project type<select name="projectType" defaultValue=""><option value="" disabled>Select a project type</option><option>Custom Home</option><option>Residential Renovation</option><option>Commercial Construction</option><option>General Contracting</option><option>Other</option></select></label>
              <label>Project details<textarea name="message" rows="6" required /></label>
              <button className="button button-primary submit-button" type="submit">Send Inquiry</button>
              <p className="form-note">After the website is live, send one test submission and confirm the verification email from FormSubmit.</p>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <img src="/images/logo.png" alt="96 Homes" className="footer-logo" />
          <div className="footer-links"><a href="mailto:info@96homes.ca">info@96homes.ca</a><a href="tel:+14039169696">(403) 916-9696</a></div>
          <p>© {new Date().getFullYear()} 96 Homes. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
