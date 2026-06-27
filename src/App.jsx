import { useState } from "react";

export default function Homes96Website() {
  const [menuOpen, setMenuOpen] = useState(false);
  const logo = "/logo-new.png";

  const projects = [
    {
      title: "Custom Residential Build",
      type: "Residential Construction",
      details:
        "New home builds, full-scale project management, premium finishes, and tailored design execution.",
      image: "/images/custom-residential.jpg",
    },
    {
      title: "Kitchen Renovation",
      type: "Residential Renovation",
      details:
        "Modern kitchen upgrades with premium finishes, custom details, and functional layouts.",
      image: "/images/kitchen-renovation.jpg",
    },
    {
      title: "Luxury Renovation Project",
      type: "Renovation & Remodeling",
      details:
        "Modern upgrades, structural improvements, and custom renovations for elevated living and lasting value.",
      image: "/images/luxury-renovation.jpg",
    },
    {
      title: "Bathroom Renovation",
      type: "Residential Renovation",
      details:
        "A complete bathroom renovation featuring a glass shower, freestanding tub, custom vanity, modern fixtures, and premium finishes.",
      image: "/images/bathroom-renovation-2.jpeg",
    },
    {
      title: "Basement Bar",
      type: "Basement Development",
      details:
        "A completed lower-level bar and entertainment space designed for comfort and function.",
      image: "/images/basement-bar.jpeg",
    },
  ];

  const galleryImages = [
    { title: "Exterior Custom Home", image: "/images/hero-home.jpg" },
    { title: "Custom Residential Kitchen", image: "/images/custom-residential.jpg" },
    { title: "Kitchen Renovation", image: "/images/kitchen-renovation.jpg" },
    { title: "Luxury Living Renovation", image: "/images/luxury-renovation.jpg" },
    { title: "Bathroom Renovation", image: "/images/bathroom-renovation-2.jpeg" },
    { title: "Basement Bar", image: "/images/basement-bar.jpeg" },
  ];

  const processSteps = [
    { title: "Consultation", text: "We start with a conversation to understand your vision, goals, budget, and timeline." },
    { title: "Planning & Design", text: "We create a detailed plan so your project is organized before construction begins." },
    { title: "Construction", text: "Our team brings the project to life with skilled trades, quality materials, and clear communication." },
    { title: "Final Walkthrough", text: "We review the completed work with you and make sure every detail meets expectations." },
    { title: "Ongoing Support", text: "We remain available after completion for questions, support, and future projects." },
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
    "End-to-End Project Management",
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
            <a href="#projects" className="hover:text-black">Projects</a>
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
              We create refined homes, commercial spaces, and high-end renovations with a focus on quality craftsmanship, reliable delivery, and elevated design.
            </p>

            <div className="mt-10 flex flex-wrap gap-4 items-center">
              <a href="mailto:admin@96homes.ca" className="rounded-full border border-black px-6 py-3 text-sm font-medium hover:bg-black hover:text-white transition">Email Us</a>
              <a href="tel:+14039169696" className="rounded-full border border-black px-6 py-3 text-sm font-medium hover:bg-black hover:text-white transition">Call Us</a>
              <a href="#projects" className="rounded-full bg-black px-6 py-3 text-sm font-medium text-white hover:opacity-90">View Projects</a>
              <a href="#services" className="rounded-full border border-stone-300 px-6 py-3 text-sm font-medium hover:bg-black hover:text-white transition">Our Services</a>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2">
              {highlights.map((item) => (
                <div key={item} className="rounded-2xl border border-stone-200 bg-white/80 px-4 py-3 text-sm font-medium text-slate-700 shadow-sm">
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
            At 96 Homes, no project is too big or too small for us. We are committed to taking on any job and delivering it with the highest level of care and craftsmanship. With our team of skilled tradespeople, we work closely with you to bring your vision to life and turn it into a reality. With over 5 years of experience in the industry, we have built a strong foundation of knowledge and hands-on expertise, allowing us to confidently handle a wide range of residential and commercial projects.
          </p>
        </div>
      </section>

      <section id="projects" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-sm font-medium uppercase tracking-[0.24em] text-stone-500">Selected Projects</p>
          <h2 className="mt-3 text-4xl font-semibold text-center">Our Work</h2>

          <div className="grid gap-8 mt-12 md:grid-cols-3">
            {projects.map((p) => (
              <div key={p.title} className="overflow-hidden rounded-[1.75rem] bg-white shadow-sm ring-1 ring-stone-200 transition hover:shadow-xl">
                <img src={p.image} alt={p.title} className="h-64 w-full object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm text-slate-500">{p.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-24 bg-slate-900 text-white">
        <div className="mb-12 flex justify-center">
          <img src={logo} alt="96 Homes" className="h-16 opacity-90 brightness-0 invert" />
        </div>
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

      <section id="gallery" className="bg-stone-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-center text-sm font-medium uppercase tracking-[0.24em] text-stone-500">Gallery</p>
          <h2 className="mt-3 text-center text-4xl font-semibold">Completed Work Gallery</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-slate-600">
            A collection of completed residential, renovation, and construction projects by 96 Homes.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {galleryImages.map((item) => (
              <div key={item.title} className="overflow-hidden rounded-[1.5rem] bg-white shadow-sm ring-1 ring-stone-200">
                <img src={item.image} alt={item.title} className="h-64 w-full object-cover transition duration-300 hover:scale-105" />
                <div className="p-4 text-sm font-medium text-slate-700">{item.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-center text-sm font-medium uppercase tracking-[0.24em] text-stone-500">Our Process</p>
          <h2 className="mt-3 text-center text-4xl font-semibold">A Simple, Transparent Process</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-5">
            {processSteps.map((step, index) => (
              <div key={step.title} className="rounded-[1.5rem] border border-stone-200 bg-stone-50 p-6 text-center shadow-sm">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-black text-lg font-semibold text-white">
                  {index + 1}
                </div>
                <h3 className="mt-5 text-base font-semibold">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="bg-stone-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-center text-sm font-medium uppercase tracking-[0.24em] text-stone-500">Testimonials</p>
          <h2 className="mt-3 text-center text-4xl font-semibold">What Our Clients Say</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <div key={item} className="rounded-[1.5rem] bg-white p-8 shadow-sm ring-1 ring-stone-200">
                <div className="text-lg text-yellow-600">★★★★★</div>
                <p className="mt-4 text-slate-600">
                  Add client testimonial here. Replace this placeholder with a real review from a homeowner or commercial client.
                </p>
                <p className="mt-6 font-semibold">Client Name</p>
                <p className="text-sm text-slate-500">Project details / Location</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-stone-100 py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-stone-500">Contact</p>
          <h2 className="mt-3 text-4xl font-semibold">Start Your Project</h2>
          <p className="mt-4 text-slate-600">Tell us what you want to build</p>
          <p className="mt-4 text-sm leading-7 text-slate-700">
            📧 Email: <a href="mailto:admin@96homes.ca" className="underline">admin@96homes.ca</a>
            <br />
            📞 Phone: <a href="tel:+14039169696" className="underline">(403) 916-9696</a>
          </p>

          <form
            action="https://formsubmit.co/admin@96homes.ca"
            method="POST"
            className="mt-10 grid gap-4 rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-stone-200"
          >
            <input type="hidden" name="_subject" value="New 96 Homes website inquiry" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <input
              name="name"
              type="text"
              placeholder="Name"
              required
              className="rounded-xl border border-stone-300 bg-white p-3"
            />
            <input
              name="email"
              type="email"
              placeholder="Email"
              required
              className="rounded-xl border border-stone-300 bg-white p-3"
            />
            <input
              name="phone"
              type="tel"
              placeholder="Phone Number"
              className="rounded-xl border border-stone-300 bg-white p-3"
            />
            <textarea
              name="message"
              placeholder="Project details"
              required
              className="min-h-[140px] rounded-xl border border-stone-300 bg-white p-3"
            />
            <button type="submit" className="rounded-full bg-black py-3 text-white hover:opacity-90">
              Send
            </button>
          </form>
        </div>
      </section>

      <footer className="border-t border-stone-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-slate-600 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <img src={logo} alt="96 Homes" className="h-14 w-auto object-contain opacity-90" />
            <span className="tracking-wide">96 Homes</span>
          </div>
          <div className="flex flex-col gap-1 md:flex-row md:items-center md:gap-6">
            <a href="mailto:admin@96homes.ca" className="hover:text-black">admin@96homes.ca</a>
            <a href="tel:+14039169696" className="hover:text-black">(403) 916-9696</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
