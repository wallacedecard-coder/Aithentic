import React from "react";
import {
  Phone,
  CalendarCheck,
  MessageCircle,
  Users,
  Clock3,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Building2,
  Mail,
} from "lucide-react";

const TALLY_URL = "https://tally.so/r/oblMgX?alignLeft=1&hideTitle=1&transparentBackground=1";

const benefits = [
  {
    icon: Phone,
    title: "Answer Calls 24/7",
    body: "Your AI receptionist can answer when you are working, driving, closed, or already helping another customer.",
  },
  {
    icon: MessageCircle,
    title: "Capture Lead Details",
    body: "Collect names, phone numbers, service needs, location, preferred times, and other key customer information.",
  },
  {
    icon: CalendarCheck,
    title: "Support Booking Requests",
    body: "Help customers take the next step by collecting appointment details and routing qualified leads back to you.",
  },
  {
    icon: Clock3,
    title: "Reduce Admin Work",
    body: "Let AI handle repeated questions about services, hours, pricing, availability, and next steps.",
  },
];

const problems = [
  "Customers call while you are busy on a job.",
  "After-hours calls go unanswered.",
  "Leads wait too long and call another business.",
  "You answer the same questions over and over.",
  "Potential customers leave voicemail but never hear back fast enough.",
  "You need better systems, but you do not want another payroll expense yet.",
];

const industries = [
  "Cleaning Companies",
  "Barbershops",
  "Hair Salons",
  "Mobile Detailers",
  "Lawn Care",
  "Pressure Washing",
  "Catering",
  "Event Services",
  "Wellness Providers",
  "Home Services",
];

const steps = [
  {
    number: "01",
    title: "Apply for a Free Demo",
    body: "Fill out the short form so I can understand your business, call flow, and the biggest customer communication problem you want solved.",
  },
  {
    number: "02",
    title: "I Review Your Business",
    body: "I personally look over your answers and identify where an AI phone receptionist could help you capture more opportunities.",
  },
  {
    number: "03",
    title: "We Map the Call Flow",
    body: "We outline how your receptionist should greet callers, answer questions, qualify leads, and collect the right information.",
  },
  {
    number: "04",
    title: "Build, Launch, Improve",
    body: "Once approved, we build your AI receptionist and help you start using it as part of your front office system.",
  },
];

const features = [
  "Custom call greeting",
  "Lead qualification questions",
  "Customer information capture",
  "Service FAQ handling",
  "Appointment request support",
  "After-hours call coverage",
  "Call summary for the owner",
  "Simple setup process",
];

function scrollToDemo() {
  const element = document.getElementById("demo");
  if (element) element.scrollIntoView({ behavior: "smooth" });
}

function LogoMark() {
  return (
    <div className="logo-mark" aria-label="Aithentic Growth Systems logo mark">
      <span>AGS</span>
      <i />
    </div>
  );
}

export default function App() {
  return (
    <div className="site-shell">
      <header className="header">
        <a href="#top" className="brand" aria-label="Aithentic Growth Systems home">
          <LogoMark />
          <div>
            <p className="brand-name">Aithentic Growth Systems</p>
            <p className="brand-subtitle">AI phone receptionists for local businesses</p>
          </div>
        </a>

        <nav className="nav" aria-label="Primary navigation">
          <a href="#problem">Problem</a>
          <a href="#system">System</a>
          <a href="#process">Process</a>
          <a href="#demo">Demo</a>
        </nav>

        <button className="nav-cta" onClick={scrollToDemo}>
          Apply for Demo
        </button>
      </header>

      <main id="top">
        <section className="hero section-pad">
          <div className="orb orb-one" />
          <div className="orb orb-two" />

          <div className="hero-grid container">
            <div className="hero-copy">
              <div className="eyebrow">
                <Sparkles size={16} />
                Built by Jayden Bethea, founder of Aithentic Growth Systems
              </div>

              <h1>Stop Missing Calls. Start Booking More Customers.</h1>

              <p className="hero-text">
                I help local business owners increase revenue with AI-powered phone receptionists that answer calls, capture leads, and help make sure no customer opportunity gets missed.
              </p>

              <div className="hero-actions">
                <button className="primary-button" onClick={scrollToDemo}>
                  Apply for Your Free AI Receptionist Demo
                  <ArrowRight size={18} />
                </button>
                <a href="#system" className="secondary-button">
                  See How It Works
                </a>
              </div>

              <div className="quick-points">
                <span><CheckCircle2 size={18} /> Answer calls 24/7</span>
                <span><CheckCircle2 size={18} /> Capture leads automatically</span>
                <span><CheckCircle2 size={18} /> Reduce admin work</span>
              </div>
            </div>

            <div className="hero-card" aria-label="AI receptionist preview card">
              <div className="phone-ui">
                <div className="phone-topline">
                  <div>
                    <p className="muted">AI Receptionist Console</p>
                    <h3>Incoming Customer Call</h3>
                  </div>
                  <span className="live-pill">AI Active</span>
                </div>

                <div className="call-bubble caller">
                  <span>Customer:</span>
                  “Hi, are you available this week?”
                </div>

                <div className="call-bubble ai">
                  <span>AI Receptionist:</span>
                  “I can help collect your details and request the best appointment time.”
                </div>

                <div className="lead-panel">
                  <p>Lead Captured</p>
                  <div className="lead-row"><span>Name</span><strong>Collected</strong></div>
                  <div className="lead-row"><span>Phone</span><strong>Collected</strong></div>
                  <div className="lead-row"><span>Service Needed</span><strong>Collected</strong></div>
                </div>

                <div className="signal-line" />
              </div>
            </div>
          </div>
        </section>

        <section id="problem" className="section-pad dark-strip">
          <div className="container">
            <div className="section-heading wide-heading">
              <p className="section-kicker">The hidden leak</p>
              <h2>A missed call is not just a missed call. It can be a missed customer.</h2>
              <p>
                Most local businesses do not only need more leads. They need a stronger system for handling the leads already reaching out.
              </p>
            </div>

            <div className="problem-grid">
              {problems.map((problem) => (
                <div className="problem-card" key={problem}>
                  <CheckCircle2 size={20} />
                  <p>{problem}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="system" className="section-pad">
          <div className="container">
            <div className="section-heading center">
              <p className="section-kicker">The system</p>
              <h2>AI Phone Receptionists Built for Real Local Businesses</h2>
              <p>
                A practical front-office system that helps answer calls, collect information, qualify leads, and support booking without overcomplicating your business.
              </p>
            </div>

            <div className="benefit-grid">
              {benefits.map(({ icon: Icon, title, body }) => (
                <article className="benefit-card" key={title}>
                  <div className="icon-wrap"><Icon size={24} /></div>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-pad light-section">
          <div className="container split-grid">
            <div>
              <p className="section-kicker dark-kicker">Community + technology</p>
              <h2>Built to help local businesses operate stronger.</h2>
              <p>
                Aithentic Growth Systems is built by a young Black business owner with a simple mission: help local business owners use practical AI systems to capture more opportunities, serve customers faster, and compete with bigger companies that already use technology to stay ahead.
              </p>
              <p className="highlight-box">
                This is not about replacing the human side of business. It is about protecting your opportunities when you are busy, understaffed, or trying to do everything yourself.
              </p>
            </div>

            <div className="industry-grid">
              {industries.map((industry) => (
                <div className="industry-card" key={industry}>
                  <Building2 size={18} />
                  {industry}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className="section-pad">
          <div className="container">
            <div className="section-heading wide-heading">
              <p className="section-kicker">How it works</p>
              <h2>Simple process. Clear setup. No tech fog.</h2>
            </div>

            <div className="steps-grid">
              {steps.map((step) => (
                <article className="step-card" key={step.number}>
                  <p className="step-number">{step.number}</p>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-pad feature-band-section">
          <div className="container feature-band">
            <div>
              <p className="section-kicker">What we build</p>
              <h2>One AI receptionist. Multiple ways to protect your revenue.</h2>
              <p>
                Your system is customized around your business, services, common customer questions, and the information you need before following up.
              </p>
              <button className="primary-button" onClick={scrollToDemo}>
                Apply for Your Free Demo
                <ArrowRight size={18} />
              </button>
            </div>

            <div className="feature-list">
              {features.map((feature) => (
                <div className="feature-item" key={feature}>
                  <ShieldCheck size={18} />
                  {feature}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-pad final-cta">
          <div className="container narrow center">
            <p className="section-kicker">Ready for the next step?</p>
            <h2>Want to see how this would work for your business?</h2>
            <p>
              Apply for a free AI receptionist demo and I’ll personally review your answers before following up by email with the next step.
            </p>
            <button className="primary-button" onClick={scrollToDemo}>
              Apply for Your Free AI Receptionist Demo
              <ArrowRight size={18} />
            </button>
          </div>
        </section>

        <section id="demo" className="section-pad form-section">
          <div className="container form-grid">
            <div className="form-copy">
              <p className="section-kicker dark-kicker">Free demo request</p>
              <h2>Apply for Your Free AI Receptionist Demo</h2>
              <p>
                Send your business details and I’ll personally review your answers to see how an AI-powered phone receptionist could help you stop missing calls, capture more leads, and book more customers.
              </p>

              <div className="next-box">
                <h3>What happens after you submit?</h3>
                <ul>
                  <li>I review your business and current call-handling situation.</li>
                  <li>I look for missed-call, lead-capture, and booking opportunities.</li>
                  <li>I follow up by email with the next step if it looks like a good fit.</li>
                </ul>
              </div>
            </div>

            <div className="form-card">
              <iframe
                src={TALLY_URL}
                width="100%"
                height="820"
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
                title="Apply for Your Free AI Receptionist Demo"
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <div className="footer-brand">
              <LogoMark />
              <div>
                <p>Aithentic Growth Systems</p>
                <span>AI phone receptionists for local businesses.</span>
              </div>
            </div>
          </div>

          <div className="footer-links">
            <a href="#problem">Problem</a>
            <a href="#system">System</a>
            <a href="#process">Process</a>
            <a href="#demo">Apply</a>
          </div>

          <div className="footer-contact">
            <Mail size={16} />
            <span>Built by Jayden Bethea</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
