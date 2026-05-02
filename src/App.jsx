import React from "react";

export default function App() 

  const services = [
    {
      title: "Product Page Optimization",
      body: "Sharper headlines, benefit-driven descriptions, FAQ blocks, and objection handling so shoppers understand why your product is worth buying."
    },
    {
      title: "AI Chatbot Setup",
      body: "A guided assistant that answers common questions, supports shoppers, and reduces repetitive customer service work."
    },
    {
      title: "FAQ & Support Flow",
      body: "Clear answers around shipping, returns, sizing, product use, ingredients, and other pre-purchase hesitation points."
    },
    {
      title: "Follow-Up Recommendations",
      body: "Welcome, abandoned cart, post-purchase, review request, and winback flow recommendations built around your customer journey."
    },
    {
      title: "Store Experience Audit",
      body: "A customer-perspective review that identifies where your store may be leaking clarity, trust, and conversions."
    },
    {
      title: "Monthly Optimization",
      body: "Ongoing improvements to your chatbot, product pages, FAQs, and store experience as your brand grows."
    }
  ];

  const problems = [
    ["Weak product pages", "Shoppers do not clearly understand the product, benefits, or reason to buy now."],
    ["Unanswered questions", "Questions about shipping, sizing, returns, ingredients, or product use can stop buyers before checkout."],
    ["No AI support system", "Visitors leave when they cannot get quick answers during the buying process."],
    ["Poor follow-up", "Abandoned carts, past visitors, and warm buyers disappear without a stronger follow-up flow."]
  ];

  const steps = [
    ["01", "Free Store Audit", "We review your store and identify product page, support, chatbot, and follow-up opportunities."],
    ["02", "Growth System Plan", "We map the improvements that would make the buying experience clearer, faster, and more trustworthy."],
    ["03", "Done-For-You Buildout", "We build the selected pieces of your system, including product copy, AI chatbot setup, and FAQ structure."],
    ["04", "Optimize & Improve", "We help update the system over time so your store keeps sharpening instead of sitting still."]
  ];

  const niches = ["Shopify Brands", "Streetwear & Apparel", "Beauty & Skincare", "Fitness & Wellness", "Pet & Lifestyle", "Jewelry & Accessories", "Digital Product Sellers"];

  const scrollToAudit = () => {
    const el = document.getElementById("audit");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#080D12] text-white antialiased">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#080D12]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#top" className="flex items-center gap-3">
            <div className="grid h-9 w-9 place-items-center rounded-xl bg-emerald-400 text-sm font-black text-[#071014] shadow-[0_0_28px_rgba(52,211,153,0.35)]">AG</div>
            <div>
              <p className="text-sm font-semibold tracking-wide">Aithentic Growth Systems</p>
              <p className="hidden text-xs text-white/50 sm:block">AI systems for e-commerce growth</p>
            </div>
          </a>
          <nav className="hidden items-center gap-8 text-sm text-white/70 md:flex">
            <a href="#services" className="transition hover:text-white">Services</a>
            <a href="#system" className="transition hover:text-white">System</a>
            <a href="#process" className="transition hover:text-white">Process</a>
            <a href="#audit" className="transition hover:text-white">Audit</a>
          </nav>
          <button onClick={scrollToAudit} className="rounded-full bg-emerald-400 px-5 py-2.5 text-sm font-bold text-[#071014] transition hover:-translate-y-0.5 hover:bg-emerald-300">
            Get Free Store Audit
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
                AI-powered growth systems for Shopify & e-commerce brands
              </div>
              <h1 className="max-w-4xl text-5xl font-black leading-[0.98] tracking-tight text-white sm:text-6xl lg:text-7xl">
                AI Growth Systems for Shopify Brands
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/68">
                We help e-commerce brands improve product pages, customer support, and follow-up systems using AI-powered tools built to turn more visitors into buyers.
              </p>
              <div className="mt-8 grid max-w-2xl gap-3 sm:grid-cols-2">
                {["Product page optimization", "AI chatbot setup", "FAQ and support flow", "Email follow-up recommendations"].map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white/80">
                    <span className="h-2 w-2 rounded-full bg-emerald-400" />
                    {item}
                  </div>
                ))}
              </div>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <button onClick={scrollToAudit} className="rounded-full bg-emerald-400 px-7 py-4 text-base font-black text-[#071014] transition hover:-translate-y-1 hover:bg-emerald-300">
                  Get a Free Store Audit
                </button>
                <a href="#system" className="rounded-full border border-white/15 bg-white/[0.04] px-7 py-4 text-center text-base font-bold text-white transition hover:-translate-y-1 hover:bg-white/[0.08]">
                  See What We Build
                </a>
              </div>
            </div>

            <div className="relative z-10">
              <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-4 shadow-2xl backdrop-blur-xl">
                <div className="rounded-[1.5rem] border border-white/10 bg-[#0D141B] p-5">
                  <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
                    <div>
                      <p className="text-sm text-white/50">Store Growth Console</p>
                      <p className="font-bold">Live Experience Map</p>
                    </div>
                    <div className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-bold text-emerald-300">AI Active</div>
                  </div>

                  <div className="grid gap-4">
                    <div className="rounded-2xl bg-white/[0.04] p-4">
                      <div className="mb-3 flex items-center justify-between">
                        <p className="text-sm font-bold">Product Page</p>
                        <span className="text-xs text-emerald-300">Optimized</span>
                      </div>
                      <div className="space-y-2">
                        <div className="h-3 w-4/5 rounded-full bg-white/15" />
                        <div className="h-3 w-3/5 rounded-full bg-white/10" />
                        <div className="h-3 w-2/3 rounded-full bg-emerald-300/40" />
                      </div>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="rounded-2xl bg-white/[0.04] p-4">
                        <p className="text-sm font-bold">AI Chatbot</p>
                        <div className="mt-4 space-y-2">
                          <div className="ml-auto w-4/5 rounded-2xl bg-white/10 p-3 text-xs text-white/60">How long is shipping?</div>
                          <div className="w-5/6 rounded-2xl bg-emerald-400/20 p-3 text-xs text-emerald-100">Most orders ship in 2–4 business days.</div>
                        </div>
                      </div>
                      <div className="rounded-2xl bg-white/[0.04] p-4">
                        <p className="text-sm font-bold">Follow-Up Flow</p>
                        <div className="mt-5 space-y-3">
                          {["Welcome", "Cart Recovery", "Post-Purchase"].map((x) => (
                            <div key={x} className="flex items-center gap-2 text-xs text-white/65"><span className="h-2 w-2 rounded-full bg-cyan-300" />{x}</div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="rounded-2xl border border-emerald-300/20 bg-emerald-300/10 p-4">
                      <p className="text-sm font-bold text-emerald-100">Detected Opportunity</p>
                      <p className="mt-2 text-sm leading-6 text-white/70">Add a stronger FAQ block above checkout to handle common hesitation points before shoppers leave.</p>
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
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-300">The hidden leak</p>
              <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">Your Store Might Not Need More Traffic Yet.</h2>
              <p className="mt-5 text-lg leading-8 text-white/65">
                Many e-commerce brands spend money driving visitors to a store that is not ready to convert. Weak product pages, missing FAQs, slow customer support, unclear offers, and poor follow-up can quietly leak sales every day.
              </p>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {problems.map(([title, body]) => (
                <div key={title} className="rounded-3xl border border-white/10 bg-[#0D141B] p-6 transition hover:-translate-y-1 hover:border-emerald-300/30">
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
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-300">The system</p>
              <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">The AI Store Growth System</h2>
              <p className="mt-5 text-lg leading-8 text-white/65">A done-for-you system designed to strengthen the buying experience across your store, support flow, and customer follow-up.</p>
            </div>
            <div id="services" className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <div key={service.title} className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 transition hover:-translate-y-1 hover:bg-white/[0.06]">
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
                <p className="text-sm font-black uppercase tracking-[0.2em] text-emerald-700">Best fit</p>
                <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">Built for E-Commerce Brands Ready to Grow Smarter</h2>
                <p className="mt-5 text-lg leading-8 text-slate-600">This is for brands that already have products, a live store, and the desire to create a smoother buying experience.</p>
                <p className="mt-5 rounded-2xl border border-slate-200 bg-white p-5 text-sm font-semibold text-slate-600 shadow-sm">Best fit for brands that are active, already selling, or preparing to drive traffic through ads, email, or social content.</p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {niches.map((niche) => (
                  <div key={niche} className="rounded-2xl border border-slate-200 bg-white p-5 font-bold shadow-sm">{niche}</div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="process" className="px-6 py-24 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-300">How it works</p>
              <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">Simple Process. Clear Buildout. No Tech Fog.</h2>
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
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-300">What we build</p>
                <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">AI Store Growth System</h2>
                <p className="mt-5 text-lg leading-8 text-white/68">A premium done-for-you buildout for stores that want better product clarity, faster customer answers, and a cleaner path from visitor to buyer.</p>
                <button onClick={scrollToAudit} className="mt-8 rounded-full bg-emerald-400 px-7 py-4 font-black text-[#071014] transition hover:-translate-y-1 hover:bg-emerald-300">Request Your Free Audit</button>
              </div>
              <div className="rounded-3xl border border-white/10 bg-[#0D141B]/80 p-6">
                <div className="grid gap-3 sm:grid-cols-2">
                  {["Store experience audit", "Product page copy improvements", "FAQ and support structure", "AI chatbot setup", "Customer question flow", "Follow-up flow recommendations", "30-day support window", "Custom package options"].map((x) => (
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
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-300">Sample growth assets</p>
              <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">Proof-of-Work Preview</h2>
              <p className="mt-5 text-lg leading-8 text-white/65">Examples of the systems and improvements we create for e-commerce brands.</p>
            </div>
            <div className="mt-14 grid gap-5 lg:grid-cols-3">
              {["Product Page Before & After", "AI Chatbot Conversation Flow", "Store Growth Audit Preview"].map((title) => (
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
                    <p className="mt-3 text-sm leading-6 text-white/60">A clean sample asset designed to show how the buying experience can be improved.</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-24 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-4xl font-black tracking-tight sm:text-6xl">Want to See Where Your Store Is Leaking Sales?</h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/68">Request a free store audit and we’ll send a short breakdown of 3 opportunities to improve your product pages, customer support, or AI-powered buying experience.</p>
            <button onClick={scrollToAudit} className="mt-9 rounded-full bg-emerald-400 px-8 py-4 text-base font-black text-[#071014] transition hover:-translate-y-1 hover:bg-emerald-300">Get Free Store Audit</button>
          </div>
        </section>

        <section id="audit" className="bg-[#F5F8F6] px-6 py-24 text-[#071014] lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-emerald-700">Free audit</p>
              <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">Request Your Free Store Audit</h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">Send your store details and we’ll review the customer journey, product page clarity, support flow, and AI growth opportunities.</p>
              <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-xl font-black">What you’ll get</h3>
                <ul className="mt-5 space-y-3 text-slate-600">
                  <li>• 3 store growth opportunities</li>
                  <li>• Product page and support-flow notes</li>
                  <li>• AI chatbot or follow-up recommendations</li>
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
    title="Request Your Free Store Audit"
    className="rounded-3xl"
  />
</div>
              ) : (
                <form
                  className="grid gap-4"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                >
                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="grid gap-2 text-sm font-bold">Name<input required className="rounded-2xl border border-slate-200 px-4 py-3 font-normal outline-none transition focus:border-emerald-500" /></label>
                    <label className="grid gap-2 text-sm font-bold">Email<input required type="email" className="rounded-2xl border border-slate-200 px-4 py-3 font-normal outline-none transition focus:border-emerald-500" /></label>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="grid gap-2 text-sm font-bold">Brand name<input required className="rounded-2xl border border-slate-200 px-4 py-3 font-normal outline-none transition focus:border-emerald-500" /></label>
                    <label className="grid gap-2 text-sm font-bold">Website URL<input required type="url" placeholder="https://" className="rounded-2xl border border-slate-200 px-4 py-3 font-normal outline-none transition focus:border-emerald-500" /></label>
                  </div>
                  <label className="grid gap-2 text-sm font-bold">What platform do you use?
                    <select className="rounded-2xl border border-slate-200 px-4 py-3 font-normal outline-none transition focus:border-emerald-500">
                      <option>Shopify</option>
                      <option>WooCommerce</option>
                      <option>Wix</option>
                      <option>Squarespace</option>
                      <option>Other</option>
                    </select>
                  </label>
                  <label className="grid gap-2 text-sm font-bold">What do you want help with most?
                    <select className="rounded-2xl border border-slate-200 px-4 py-3 font-normal outline-none transition focus:border-emerald-500">
                      <option>Product pages</option>
                      <option>AI chatbot</option>
                      <option>Customer support</option>
                      <option>Email follow-up</option>
                      <option>Full store growth system</option>
                    </select>
                  </label>
                  <label className="grid gap-2 text-sm font-bold">Message / Notes<textarea rows={5} className="rounded-2xl border border-slate-200 px-4 py-3 font-normal outline-none transition focus:border-emerald-500" /></label>
                  <button className="rounded-full bg-[#071014] px-6 py-4 font-black text-white transition hover:-translate-y-1 hover:bg-emerald-700">Submit Audit Request</button>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 px-6 py-10 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-black">Aithentic Growth Systems</p>
            <p className="mt-2 text-sm text-white/50">AI-powered growth systems for Shopify and e-commerce brands.</p>
          </div>
          <div className="flex gap-5 text-sm text-white/55">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#process" className="hover:text-white">Process</a>
            <a href="#audit" className="hover:text-white">Contact</a>
            <a href="#" className="hover:text-white">Privacy Policy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
