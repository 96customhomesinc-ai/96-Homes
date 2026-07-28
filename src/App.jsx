import { useState } from "react";

export default function Homes96Website() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const logo = "/logo-transparent.png";
  const formSubmitted = new URLSearchParams(window.location.search).get("submitted") === "true";

  const projects = [
    {
      title: "Exterior Custom Home",
      type: "Custom Home",
      location: "Calgary, Alberta",
      details: "A custom home exterior designed and built with thoughtful proportions, durable materials, and careful attention to every finishing detail.",
      highlights: ["Custom exterior design", "Quality material selections", "Complete construction management"],
      image: "/images/hero-home.jpg",
    },
    {
      title: "Custom Home Interior",
      type: "Custom Home",
      location: "Calgary, Alberta",
      details: "A bright, open-concept interior created for modern family living with custom finishes and a highly functional layout.",
      highlights: ["Open-concept layout", "Custom kitchen design", "Premium interior finishes"],
      image: "/images/custom-residential.jpg",
    },
    {
      title: "Kitchen Renovation",
      type: "Renovation",
      location: "Calgary, Alberta",
      details: "A modern kitchen transformation featuring improved functionality, updated cabinetry, and refined finishes.",
      highlights: ["Improved layout", "Updated cabinetry", "Modern fixtures and finishes"],
      image: "/images/kitchen-renovation.jpg",
    },
    {
      title: "Bathroom Renovation",
      type: "Residential Renovation",
      location: "Calgary, Alberta",
      details: "An elegant bathroom renovation combining comfort, practical storage, and clean contemporary finishes.",
      highlights: ["Glass shower", "Custom vanity", "Updated fixtures and finishes"],
      image: "/images/bathroom-renovation-2.jpeg",
    },
    {
      title: "Basement Development",
      type: "Residential",
      location: "Calgary, Alberta",
      details: "A finished basement designed to maximize usable living space with a comfortable bar and entertainment area.",
      highlights: ["Custom bar area", "Entertainment-focused layout", "Durable coordinated finishes"],
      image: "/images/basement-bar.jpeg",
    },
    {
      title: "Complete Home Renovation",
      type: "Renovation & Remodeling",
      location: "Calgary, Alberta",
      details: "A full-home transformation featuring modern upgrades, improved flow, and elevated interior details throughout.",
      highlights: ["Full-space transformation", "Improved interior flow", "Custom finish selections"],
      image: "/images/luxury-renovation.jpg",
    },
  ];

  const processSteps = [
    {
      title: "Initial Consultation",
      text: "We take the time to understand your vision, goals, budget, and timeline while answering your questions.",
      icon: "◌",
    },
    {
      title: "Planning & Design",
      text: "We coordinate plans, selections, estimates, and project details so everything is ready before construction begins.",
      icon: "▧",
    },
    {
      title: "Construction",
      text: "We manage each phase with quality craftsmanship, regular communication, and careful attention to detail.",
      icon: "⌁",
    },
    {
      title: "Final Walkthrough",
      text: "We complete a thorough walkthrough to ensure the finished project meets our standards—and yours.",
      icon: "✓",
    },
  ];

  const services = [
    {
      title: "Custom Home Building",
      text:
        "From concept to completion, we build high-quality homes designed around your vision.",
    },
    {
      title: "General Contracting",
      text:
        "We manage construction with a hands-on, organized approach that keeps timelines and quality on track.",
    },
    {
      title: "Commercial Construction",
      text:
        "Professional build-outs for offices, retail, and commercial developments.",
    },
    {
      title: "Residential Renovations",
      text:
        "Full-home transformations and upgrades built to last.",
    },
  ];

  const highlights = [
    "Luxury Custom Homes",
    "Commercial Construction",
    "Premium Renovations",
    "Expert Project Management",
  ];

  return (
    <div className="min-h-screen bg-stone-50 text-slate-900">
      <header className="sticky top-0 z-50 border-b border-stone-200 bg-stone-50/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div className="flex items-center gap-4">
            <img
              src={logo}
              alt="96 Homes"
              className="h-24 w-auto object-contain drop-shadow-sm mt-1"
            />
          </div>

          <nav className="hidden items-center gap-8 text-sm text-slate-600 md:flex">
            <a href="#about" className="hover:text-black">About</a>
            <a href="#gallery" className="hover:text-black">Projects</a>
            <a href="#services" className="hover:text-black">Services</a>
            <a href="#contact" className="hover:text-black">Contact</a>
          </nav>

          <div className="relative flex items-center gap-3">
            <a
              href="tel:+14039169696"
              className="hidden rounded-full bg-black px-6 py-2 text-sm text-white hover:opacity-90 md:block"
            >
              Call Now
            </a>
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className="rounded-full border border-stone-300 bg-white p-3 text-slate-900 shadow-sm hover:bg-stone-100"
              aria-label="Open menu"
            >
              <span className="block h-0.5 w-6 bg-slate-900"></span>
              <span className="mt-1.5 block h-0.5 w-6 bg-slate-900"></span>
              <span className="mt-1.5 block h-0.5 w-6 bg-slate-900"></span>
            </button>

            {menuOpen && (
              <div className="absolute right-0 top-14 w-64 rounded-2xl border border-stone-200 bg-white p-3 text-sm shadow-xl">
                {[
                  ["About Us", "#about"],
                  ["Our Process", "#process"],
                  ["Gallery", "#gallery"],
                  ["Contact Us", "#contact"],
                ].map(([label, href]) => (
                  <a
                    key={label}
                    href={href}
                    onClick={() => setMenuOpen(false)}
                    className="block rounded-xl px-4 py-3 font-medium text-slate-700 hover:bg-stone-100 hover:text-black"
                  >
                    {label}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden bg-gradient-to-b from-stone-100 via-stone-50 to-white">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.06] blur-[0.5px] pointer-events-none">
          <img src={logo} alt="96 Homes" className="w-[650px] opacity-5 blur-[0.5px]" />
        </div>

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 py-24 lg:grid-cols-2 lg:px-8 lg:py-28">
          <div>
            <p className="inline-flex rounded-full border border-stone-300 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.24em] text-stone-700">
              96 Homes • Builder & General Contractor
            </p>

            <h1 className="mt-6 text-5xl font-semibold leading-tight sm:text-6xl">
              Luxury residential and commercial construction, built properly.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              From custom homes to complete renovations, we bring your vision to life with expert craftsmanship, innovative design, and a commitment to excellence. Every project is thoughtfully planned and meticulously executed to deliver lasting quality, exceptional value, and a space you'll be proud to call your own.
            </p>

            <div className="mt-10 flex flex-wrap gap-4 items-center">
              <a href="mailto:info@96homes.ca" className="rounded-full border border-black px-6 py-3 text-sm font-medium hover:bg-black hover:text-white transition">Email Us</a>
              <a href="tel:+14039169696" className="rounded-full border border-black px-6 py-3 text-sm font-medium hover:bg-black hover:text-white transition">Call Us</a>
              <a href="#gallery" className="rounded-full bg-black px-6 py-3 text-sm font-medium text-white hover:opacity-90">View Projects</a>
              <a href="#services" className="rounded-full border border-stone-300 px-6 py-3 text-sm font-medium hover:bg-black hover:text-white transition">Our Services</a>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2">
              {highlights.map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-sm font-medium text-white shadow-sm">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-[2rem] shadow-2xl ring-1 ring-stone-200">
              <img
                src="/images/hero-home.jpg"
                alt="Luxury construction project"
                className="h-[560px] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-stone-500">About</p>
          <h2 className="mt-3 text-4xl font-semibold">About 96 Homes</h2>
          <p className="mt-6 text-lg text-slate-600 leading-8">
            Our journey began with a home we designed and built for our own family—a custom duplex that allowed us to stay close to our mother while each enjoying the comfort and privacy of our own home. That experience reinforced our belief that a home is more than just a building—it's a place where families grow, connect, and create lasting memories.
          </p>
          <p className="mt-6 text-lg text-slate-600 leading-8">
            At 96 Homes, no project is too big or too small for us. We are committed to taking on any job and delivering it with the highest level of care and craftsmanship. With our team of skilled tradespeople, we work closely with you to bring your vision to life and turn it into a reality. Built on years of hands-on experience, we have earned a reputation for delivering residential and commercial projects with quality craftsmanship, attention to detail, and reliable service.
          </p>
        </div>
      </section>

      <section id="gallery" className="bg-stone-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.24em] text-stone-500">Completed Work Gallery</p>
              <h2 className="mt-3 text-4xl font-semibold">View Our Recent Projects</h2>
              <p className="mt-4 max-w-2xl text-slate-600">Explore residential construction, renovations, and completed spaces by 96 Homes.</p>
            </div>
            <a href="#contact" className="w-fit rounded-full border border-black px-6 py-3 text-sm font-medium transition hover:bg-black hover:text-white">Discuss Your Project</a>
          </div>

          <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <article key={project.title} className="group overflow-hidden rounded-[1.5rem] bg-white shadow-sm ring-1 ring-stone-200 transition hover:-translate-y-1 hover:shadow-xl">
                <div className="overflow-hidden">
                  <img src={project.image} alt={project.title} className="h-64 w-full object-cover transition duration-500 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="mt-2 text-sm text-slate-500">{project.type} <span aria-hidden="true">•</span> {project.location}</p>
                  <p className="mt-4 text-sm leading-6 text-slate-600">{project.details}</p>
                  <button type="button" onClick={() => setSelectedProject(project)} className="mt-5 inline-flex rounded-full border border-slate-900 bg-white px-5 py-2.5 text-sm font-semibold uppercase tracking-wide text-slate-900 transition hover:bg-slate-900 hover:text-white">
                    View Project →
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {selectedProject && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/70 p-4" role="dialog" aria-modal="true" aria-label={selectedProject.title} onClick={() => setSelectedProject(null)}>
          <div className="max-h-[90vh] w-full max-w-3xl overflow-auto rounded-[2rem] bg-white shadow-2xl" onClick={(event) => event.stopPropagation()}>
            <img src={selectedProject.image} alt={selectedProject.title} className="h-72 w-full object-cover sm:h-96" />
            <div className="p-7 sm:p-10">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-stone-500">{selectedProject.type} • {selectedProject.location}</p>
                  <h2 className="mt-2 text-3xl font-semibold">{selectedProject.title}</h2>
                </div>
                <button type="button" onClick={() => setSelectedProject(null)} className="rounded-full border border-stone-300 px-4 py-2 text-sm hover:bg-stone-100" aria-label="Close project details">Close</button>
              </div>
              <p className="mt-6 leading-7 text-slate-600">{selectedProject.details}</p>
              <h3 className="mt-7 font-semibold">Project highlights</h3>
              <ul className="mt-3 grid gap-2 text-slate-600 sm:grid-cols-2">
                {selectedProject.highlights.map((highlight) => <li key={highlight}>• {highlight}</li>)}
              </ul>
              <a href="#contact" onClick={() => setSelectedProject(null)} className="mt-8 inline-block rounded-full bg-black px-6 py-3 text-sm font-medium text-white hover:opacity-90">Start a Similar Project</a>
            </div>
          </div>
        </div>
      )}

      <section id="services" className="py-24 bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-center text-sm font-medium uppercase tracking-[0.24em] text-stone-300">Services</p>
          <h2 className="mt-3 text-center text-4xl font-semibold">What We Build</h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {services.map((s) => (
              <div key={s.title} className="rounded-[1.75rem] border border-white/10 bg-white/5 p-8 transition hover:bg-white/10">
                <h3 className="text-xl font-semibold">{s.title}</h3>
                <p className="mt-3 text-slate-300">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="bg-white py-28 text-slate-900">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-center text-sm font-medium uppercase tracking-[0.24em] text-stone-500">Our Process</p>
          <h2 className="mx-auto mt-3 max-w-4xl text-center text-4xl font-semibold sm:text-5xl">A Clear Process. A Better Building Experience.</h2>
          <p className="mx-auto mt-5 max-w-2xl text-center leading-7 text-slate-600">
            From the first conversation to the final walkthrough, we keep every step organized, transparent, and focused on delivering exceptional results.
          </p>

          <div className="relative mt-16 grid gap-12 md:grid-cols-4 md:gap-6">
            <div className="absolute left-[12%] right-[12%] top-8 hidden h-px bg-stone-300 md:block" aria-hidden="true" />
            {processSteps.map((step, index) => (
              <article key={step.title} className="relative text-center">
                <div className="relative z-10 mx-auto flex h-16 w-16 items-center justify-center rounded-full border-2 border-slate-900 bg-white text-lg font-semibold text-slate-900 shadow-sm">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div className="mx-auto mt-7 flex h-11 w-11 items-center justify-center text-2xl text-slate-700" aria-hidden="true">{step.icon}</div>
                <h3 className="mt-4 text-xl font-semibold text-slate-900">{step.title}</h3>
                <p className="mx-auto mt-3 max-w-xs text-sm leading-6 text-slate-600">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-slate-900 py-24 text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-stone-300">Ready to Start?</p>
            <h2 className="mt-3 text-4xl font-semibold sm:text-5xl">Let’s Build Something Exceptional Together.</h2>
            <p className="mt-6 max-w-xl leading-8 text-slate-300">
              Whether you're planning a custom home, renovation, basement development, or commercial project, we'd love to hear about your vision.
            </p>
            <div className="mt-8 space-y-3 text-sm text-slate-200">
              <p>📧 <a href="mailto:info@96homes.ca" className="underline underline-offset-4">info@96homes.ca</a></p>
              <p>📞 <a href="tel:+14039169696" className="underline underline-offset-4">(403) 916-9696</a></p>
              <p>📍 Calgary, Alberta</p>
            </div>
          </div>
          <div>
          {formSubmitted && (
            <div className="mt-8 rounded-2xl border border-green-200 bg-green-50 px-5 py-4 text-sm text-green-800" role="status">
              Thank you. Your inquiry has been sent to info@96homes.ca. Our team will contact you soon.
            </div>
          )}

          <form
            action="https://formsubmit.co/info@96homes.ca"
            method="POST"
            className="grid gap-5 rounded-[2rem] bg-white p-6 text-left text-slate-900 shadow-2xl ring-1 ring-white/10 md:p-8"
          >
            <input type="hidden" name="_subject" value="New project inquiry from 96homes.ca" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_next" value="https://96homes.ca/?submitted=true#contact" />
            <input type="hidden" name="_autoresponse" value="Thank you for contacting 96 Homes. We have received your project inquiry and will get back to you as soon as possible." />
            <input type="text" name="_honey" className="hidden" tabIndex="-1" autoComplete="off" />

            <div className="grid gap-5 md:grid-cols-2">
              <label className="grid gap-2 text-sm font-medium text-slate-700">
                Name <span className="sr-only">required</span>
                <input name="name" type="text" placeholder="Your full name" required autoComplete="name" className="rounded-xl border border-stone-300 bg-white p-3 font-normal" />
              </label>
              <label className="grid gap-2 text-sm font-medium text-slate-700">
                Email <span className="sr-only">required</span>
                <input name="email" type="email" placeholder="you@example.com" required autoComplete="email" className="rounded-xl border border-stone-300 bg-white p-3 font-normal" />
              </label>
              <label className="grid gap-2 text-sm font-medium text-slate-700">
                Phone number
                <input name="phone" type="tel" placeholder="(403) 555-0123" autoComplete="tel" className="rounded-xl border border-stone-300 bg-white p-3 font-normal" />
              </label>
              <label className="grid gap-2 text-sm font-medium text-slate-700">
                Project type
                <select name="project_type" defaultValue="" className="rounded-xl border border-stone-300 bg-white p-3 font-normal">
                  <option value="" disabled>Select a project type</option>
                  <option>Custom home</option>
                  <option>Home renovation</option>
                  <option>Basement development</option>
                  <option>Commercial construction</option>
                  <option>Other</option>
                </select>
              </label>
              <label className="grid gap-2 text-sm font-medium text-slate-700 md:col-span-2">
                Preferred start date
                <input name="preferred_start_date" type="date" className="rounded-xl border border-stone-300 bg-white p-3 font-normal" />
              </label>
            </div>

            <label className="grid gap-2 text-sm font-medium text-slate-700">
              Tell us about your project <span className="sr-only">required</span>
              <textarea name="message" placeholder="Tell us about your project, location, approximate timeline, and what you would like to build or renovate." required className="min-h-[160px] rounded-xl border border-stone-300 bg-white p-3 font-normal" />
            </label>

            <p className="text-xs leading-5 text-slate-500">
              By submitting this form, you agree that 96 Homes may contact you about your project inquiry.
            </p>
            <button type="submit" className="rounded-full bg-black py-3.5 font-medium text-white transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2">
              Request a Consultation
            </button>
          </form>
          </div>
        </div>
      </section>

      <footer className="border-t border-stone-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-slate-600 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <img src={logo} alt="96 Homes" className="h-14 w-auto object-contain opacity-90" />
            <span className="tracking-wide">96 Homes</span>
          </div>
          <div className="flex flex-col gap-1 md:flex-row md:items-center md:gap-6">
            <a href="mailto:info@96homes.ca" className="hover:text-black">info@96homes.ca</a>
            <a href="tel:+14039169696" className="hover:text-black">(403) 916-9696</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
