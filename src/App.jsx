import React from "react";

export default function AithenticGrowthSystemsLanding() {
  const services = [
    {
      title: "AI Phone Receptionist",
      body: "A professional AI-powered receptionist that answers customer calls, captures lead details, answers common questions, and helps move callers toward booking."
    },
    {
      title: "Missed Call Capture",
      body: "A system designed to help local business owners stop losing opportunities when they are busy, closed, driving, or working with customers."
    },
    {
      title: "Lead Qualification",
      body: "Your AI receptionist can ask the right questions, collect key customer information, and help you understand which leads are worth following up with first."
    },
    {
      title: "Appointment Request Support",
      body: "Help customers take the next step by collecting booking details, preferred times, service needs, and contact information."
    },
    {
      title: "Customer Question Handling",
      body: "Answer common questions about services, pricing, hours, location, availability, and next steps without you having to personally answer every call."
    },
    {
      title: "AI Front Office System",
      body: "A simple front-office system built to help local businesses answer faster, look more professional, and reduce repetitive admin work."
    }
  ];

  const problems = [
    ["Missed calls", "Potential customers call while you are busy, working, driving, or closed for the day."],
    ["Slow follow-up", "Leads go cold when they wait too long for a response or have to call multiple times."],
    ["Too much admin work", "Business owners lose time answering the same questions instead of focusing on the work that grows the business."],
    ["Lost opportunities", "When a customer cannot get an answer quickly, they may move on to the next business."]
  ];

  const steps = [
    ["01", "Demo Request", "You fill out the short form so we can understand your business, call volume, and biggest customer communication problem."],
    ["02", "Business Review", "I personally review your answers and identify where an AI receptionist could help you capture more calls and book more customers."],
    ["03", "AI Receptionist Plan", "We map out how your AI receptionist would answer calls, collect lead information, respond to common questions, and support booking."],
    ["04", "Build & Launch", "Once approved, we build your AI-powered phone receptionist and help you start using it inside your business."]
  ];

  const niches = [
    "Cleaning Companies",
    "Barbershops",
    "Hair Salons",
    "Mobile Detailers",
    "Lawn Care & Landscaping",
    "Pressure Washing",
    "Catering & Food Services",
    "Event Service Businesses"
  ];

  const scrollToDemo = () => {
    const el = document.getElementById("demo");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#080D12] text-white antialiased">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#080D12]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#top" className="flex items-center gap-3">
            <div className="grid h-9 w-9 place-items-center rounded-xl bg-emerald-400 text-sm font-black text-[#071014] shadow-[0_0_28px_rgba(52,211,153,0.35)]">
              AGS
            </div>
            <div>
              <p className="text-sm font-semibold tracking-wide">Aithentic Growth Systems</p>
              <p className="hidden text-xs text-white/50 sm:block">AI phone receptionists for local businesses</p>
            </div>
          </a>

          <nav className="hidden items-center gap-8 text-sm text-white/70 md:flex">
            <a href="#services" className="transition hover:text-white">Services</a>
            <a href="#system" className="transition hover:text-white">System</a>
            <a href="#process" className="transition hover:text-white">Process</a>
            <a href="#demo" className="transition hover:text-white">Demo</a>
          </nav>

          <button
            onClick={scrollToDemo}
            className="rounded-full bg-emerald-400 px-5 py-2.5 text-sm font-bold text-[#071014] transition hover:-translate-y-0.5 hover:bg-emerald-300"
          >
            Apply for Free Demo
          </button>
        </div>
      </header>

      <main id="top">
        <section className="relative overflow-hidden">
          <div className="absolute left-1/2 top-0 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-emerald-400/15 blur-3xl" />
          <div className="absolute right-0 top-24 h-[420px] w-[420px] rounded-full bg-cyan-400/10 blur-3xl" />

          <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 lg:grid-cols-[1.04fr_0.96fr] lg:px-8 lg:py-32">
            <div className="relative z-10">
              <div className="mb-6 inline-flex rounded-full border border-emerald-300/30 bg-white/5 px-4 py-2 text-sm text-emerald-200">
                AI-powered phone receptionists for local businesses
              </div>

              <h1 className="max-w-4xl text-5xl font-black leading-[0.98] tracking-tight text-white sm:text-6xl lg:text-7xl">
                Stop Missing Calls. Start Booking More Customers.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/68">
                I help local business owners increase revenue with AI-powered phone receptionists that answer calls, capture leads, and help make sure no customer opportunity gets missed.
              </p>

              <div className="mt-8 grid max-w-2xl gap-3 sm:grid-cols-2">
                {[
                  "Answer calls 24/7",
                  "Capture customer information",
                  "Qualify new leads",
                  "Support appointment requests"
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white/80"
                  >
                    <span className="h-2 w-2 rounded-full bg-emerald-400" />
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <button
                  onClick={scrollToDemo}
                  className="rounded-full bg-emerald-400 px-7 py-4 text-base font-black text-[#071014] transition hover:-translate-y-1 hover:bg-emerald-300"
                >
                  Apply for Your Free AI Receptionist Demo
                </button>

                <a
                  href="#system"
                  className="rounded-full border border-white/15 bg-white/[0.04] px-7 py-4 text-center text-base font-bold text-white transition hover:-translate-y-1 hover:bg-white/[0.08]"
                >
                  See How It Works
                </a>
              </div>
            </div>

            <div className="relative z-10">
              <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-4 shadow-2xl backdrop-blur-xl">
                <div className="rounded-[1.5rem] border border-white/10 bg-[#0D141B] p-5">
                  <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
                    <div>
                      <p className="text-sm text-white/50">AI Receptionist Console</p>
                      <p className="font-bold">Live Call Flow</p>
                    </div>
                    <div className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-bold text-emerald-300">
                      AI Active
                    </div>
                  </div>

                  <div className="grid gap-4">
                    <div className="rounded-2xl bg-white/[0.04] p-4">
                      <div className="mb-3 flex items-center justify-between">
                        <p className="text-sm font-bold">Incoming Customer Call</p>
                        <span className="text-xs text-emerald-300">Answered</span>
                      </div>
                      <div className="space-y-2">
                        <div className="h-3 w-4/5 rounded-full bg-white/15" />
                        <div className="h-3 w-3/5 rounded-full bg-white/10" />
                        <div className="h-3 w-2/3 rounded-full bg-emerald-300/40" />
                      </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="rounded-2xl bg-white/[0.04] p-4">
                        <p className="text-sm font-bold">Customer Question</p>
                        <div className="mt-4 space-y-2">
                          <div className="ml-auto w-4/5 rounded-2xl bg-white/10 p-3 text-xs text-white/60">
                            Are you available this week?
                          </div>
                          <div className="w-5/6 rounded-2xl bg-emerald-400/20 p-3 text-xs text-emerald-100">
                            I can collect your details and help request an appointment.
                          </div>
                        </div>
                      </div>

                      <div className="rounded-2xl bg-white/[0.04] p-4">
                        <p className="text-sm font-bold">Lead Captured</p>
                        <div className="mt-5 space-y-3">
                          {["Name", "Phone Number", "Service Needed"].map((x) => (
                            <div key={x} className="flex items-center gap-2 text-xs text-white/65">
                              <span className="h-2 w-2 rounded-full bg-cyan-300" />
                              {x}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="rounded-2xl border border-emerald-300/20 bg-emerald-300/10 p-4">
                      <p className="text-sm font-bold text-emerald-100">Detected Opportunity</p>
                      <p className="mt-2 text-sm leading-6 text-white/70">
                        A missed call could become a booked customer when your AI receptionist answers, collects details, and helps move the lead to the next step.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-white/[0.03] px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-300">
                The hidden leak
              </p>
              <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
                Your Business Might Not Need More Leads Yet.
              </h2>
              <p className="mt-5 text-lg leading-8 text-white/65">
                Many local businesses lose money because customers call when the owner is busy, working, driving, closed, or already helping someone else. When nobody answers, that customer may call the next business.
              </p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {problems.map(([title, body]) => (
                <div
                  key={title}
                  className="rounded-3xl border border-white/10 bg-[#0D141B] p-6 transition hover:-translate-y-1 hover:border-emerald-300/30"
                >
                  <div className="mb-5 h-10 w-10 rounded-2xl bg-emerald-400/15" />
                  <h3 className="text-xl font-black">{title}</h3>
                  <p className="mt-4 text-sm leading-6 text-white/60">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="system" className="px-6 py-24 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-300">
                The system
              </p>
              <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
                The AI Receptionist System
              </h2>
              <p className="mt-5 text-lg leading-8 text-white/65">
                A practical phone system designed to help local businesses answer calls, capture leads, qualify customers, and reduce repetitive admin work.
              </p>
            </div>

            <div id="services" className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 transition hover:-translate-y-1 hover:bg-white/[0.06]"
                >
                  <h3 className="text-xl font-black">{service.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-white/62">{service.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#F5F8F6] px-6 py-24 text-[#071014] lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.2em] text-emerald-700">
                  Best fit
                </p>
                <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
                  Built for Local Business Owners Who Cannot Answer Every Call
                </h2>
                <p className="mt-5 text-lg leading-8 text-slate-600">
                  This is for service-based businesses that get customer calls, quote requests, appointment questions, or repeat questions throughout the day.
                </p>
                <p className="mt-5 rounded-2xl border border-slate-200 bg-white p-5 text-sm font-semibold text-slate-600 shadow-sm">
                  Best fit for businesses that are already getting calls or inquiries and want a better system for capturing and following up with those opportunities.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {niches.map((niche) => (
                  <div key={niche} className="rounded-2xl border border-slate-200 bg-white p-5 font-bold shadow-sm">
                    {niche}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="process" className="px-6 py-24 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-300">
                How it works
              </p>
              <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
                Simple Process. Clear Setup. No Tech Fog.
              </h2>
            </div>

            <div className="mt-14 grid gap-5 lg:grid-cols-4">
              {steps.map(([num, title, body]) => (
                <div key={num} className="rounded-3xl border border-white/10 bg-white/[0.04] p-7">
                  <p className="text-5xl font-black text-emerald-300/70">{num}</p>
                  <h3 className="mt-6 text-xl font-black">{title}</h3>
                  <p className="mt-4 text-sm leading-7 text-white/62">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 pb-24 lg:px-8">
          <div className="mx-auto max-w-7xl rounded-[2rem] border border-emerald-300/20 bg-gradient-to-br from-emerald-400/15 via-white/[0.04] to-cyan-400/10 p-8 lg:p-12">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-300">
                  What we build
                </p>
                <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
                  AI Phone Receptionist System
                </h2>
                <p className="mt-5 text-lg leading-8 text-white/68">
                  A practical AI-powered phone receptionist built to answer calls, capture customer information, reduce missed opportunities, and help your business look more professional.
                </p>
                <button
                  onClick={scrollToDemo}
                  className="mt-8 rounded-full bg-emerald-400 px-7 py-4 font-black text-[#071014] transition hover:-translate-y-1 hover:bg-emerald-300"
                >
                  Apply for Your Free AI Receptionist Demo
                </button>
              </div>

              <div className="rounded-3xl border border-white/10 bg-[#0D141B]/80 p-6">
                <div className="grid gap-3 sm:grid-cols-2">
                  {[
                    "AI call answering",
                    "Lead information capture",
                    "Common question handling",
                    "Appointment request support",
                    "Lead qualification questions",
                    "Call summary for owner",
                    "After-hours support",
                    "Custom business script"
                  ].map((x) => (
                    <div key={x} className="flex gap-3 rounded-2xl bg-white/[0.04] p-4 text-sm text-white/75">
                      <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-emerald-400" />
                      {x}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-white/[0.03] px-6 py-24 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-300">
                Proof-of-work preview
              </p>
              <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
                See What the System Can Help With
              </h2>
              <p className="mt-5 text-lg leading-8 text-white/65">
                Your AI receptionist can be built around your business, your services, your customers, and the questions people already ask.
              </p>
            </div>

            <div className="mt-14 grid gap-5 lg:grid-cols-3">
              {[
                "New Customer Call Flow",
                "Lead Qualification Script",
                "Appointment Request Process"
              ].map((title) => (
                <div key={title} className="overflow-hidden rounded-3xl border border-white/10 bg-[#0D141B]">
                  <div className="h-52 bg-gradient-to-br from-white/10 to-emerald-400/10 p-5">
                    <div className="h-full rounded-2xl border border-white/10 bg-[#080D12]/70 p-4">
                      <div className="mb-4 h-3 w-1/3 rounded-full bg-emerald-300/50" />
                      <div className="space-y-3">
                        <div className="h-3 rounded-full bg-white/15" />
                        <div className="h-3 w-4/5 rounded-full bg-white/10" />
                        <div className="h-3 w-2/3 rounded-full bg-white/10" />
                      </div>
                      <div className="mt-6 grid grid-cols-2 gap-3">
                        <div className="h-16 rounded-xl bg-white/10" />
                        <div className="h-16 rounded-xl bg-emerald-300/20" />
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-black">{title}</h3>
                    <p className="mt-3 text-sm leading-6 text-white/60">
                      A simple system asset designed to help your business answer faster and capture better customer information.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-24 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-4xl font-black tracking-tight sm:text-6xl">
              Want to Stop Missing Customer Calls?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/68">
              Apply for a free AI receptionist demo and I’ll personally review your business to see how this system could help you answer more calls, capture more leads, and book more customers.
            </p>
            <button
              onClick={scrollToDemo}
              className="mt-9 rounded-full bg-emerald-400 px-8 py-4 text-base font-black text-[#071014] transition hover:-translate-y-1 hover:bg-emerald-300"
            >
              Apply for Your Free AI Receptionist Demo
            </button>
          </div>
        </section>

        <section id="demo" className="bg-[#F5F8F6] px-6 py-24 text-[#071014] lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-emerald-700">
                Free demo request
              </p>
              <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
                Apply for Your Free AI Receptionist Demo
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                Send your business details and I’ll personally review your answers to see how an AI-powered phone receptionist could help you stop missing calls, capture more leads, and book more customers.
              </p>

              <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-xl font-black">What happens next</h3>
                <ul className="mt-5 space-y-3 text-slate-600">
                  <li>• I review your business and current call-handling situation</li>
                  <li>• I look for missed-call, lead-capture, and booking opportunities</li>
                  <li>• I follow up by email with the next step if it looks like a good fit</li>
                </ul>
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-3 shadow-xl sm:p-6">
              <iframe
                src="https://tally.so/r/oblMgX?alignLeft=1&hideTitle=1&transparentBackground=1"
                width="100%"
                height="820"
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
                title="Apply for Your Free AI Receptionist Demo"
                className="rounded-3xl"
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 px-6 py-10 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-black">Aithentic Growth Systems</p>
            <p className="mt-2 text-sm text-white/50">
              AI-powered phone receptionists for local businesses.
            </p>
          </div>

          <div className="flex gap-5 text-sm text-white/55">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#process" className="hover:text-white">Process</a>
            <a href="#demo" className="hover:text-white">Contact</a>
            <a href="#" className="hover:text-white">Privacy Policy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
