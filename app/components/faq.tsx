'use client'
import React, { useEffect, useMemo, useState } from "react";

const INTRO_STYLE_ID = "faq1-animations";

const faqs = [
  {
    question: "How do you decide which problems to solve first?",
    answer:
      "We analyze project requirements, safety factors, and site conditions to prioritize critical structural challenges before execution.",
    meta: "Planning",
  },
  {
    question: "How do you coordinate engineering and site execution?",
    answer:
      "Our engineers and site supervisors work in sync with daily progress checks, drawings validation, and on-site inspections.",
    meta: "Execution",
  },
  {
    question: "Do you customize steel structures per project?",
    answer:
      "Yes. Every steel structure is custom-designed based on load calculations, usage, and environmental factors.",
    meta: "Design",
  },
  {
    question: "How do you ensure quality and safety?",
    answer:
      "We follow strict QA/QC procedures, material testing, welding inspections, and safety compliance at every stage.",
    meta: "Quality",
  },
];

const palette = {
  surface: "bg-slate-100 text-neutral-900",
  panel: "bg-white/80",
  border: "border-neutral-200",
  heading: "text-neutral-900",
  muted: "text-neutral-600",
  iconRing: "border-neutral-300",
  iconSurface: "bg-neutral-900/5",
  icon: "text-neutral-900",
  glow: "rgba(15,15,15,0.08)",
  aurora:
    "radial-gradient(ellipse 50% 100% at 10% 0%, rgba(15,23,42,0.08), rgba(255,255,255,0.95) 70%)",
  shadow: "shadow-[0_36px_120px_-70px_rgba(15,15,15,0.18)]",
};

function FAQ1() {
  const [introReady, setIntroReady] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [hasEntered, setHasEntered] = useState(false);

  useEffect(() => {
    if (document.getElementById(INTRO_STYLE_ID)) return;

    const style = document.createElement("style");
    style.id = INTRO_STYLE_ID;
    style.innerHTML = `
      @keyframes faq-fade-up {
        from { opacity: 0; transform: translateY(20px); filter: blur(6px); }
        to { opacity: 1; transform: translateY(0); filter: blur(0); }
      }
      .faq-intro {
        opacity: 0;
        transition: all 700ms ease;
      }
      .faq-intro.active {
        opacity: 1;
      }
    `;
    document.head.appendChild(style);
  }, []);

  useEffect(() => {
    requestAnimationFrame(() => setIntroReady(true));
    setTimeout(() => setHasEntered(true), 120);
  }, []);

  const toggleQuestion = (index: number) => {
    setActiveIndex(prev => (prev === index ? null : index));
  };

  const setCardGlow = (e: React.MouseEvent<HTMLLIElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--faq-x", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--faq-y", `${e.clientY - rect.top}px`);
  };

  const clearCardGlow = (e: React.MouseEvent<HTMLLIElement>) => {
    e.currentTarget.style.removeProperty("--faq-x");
    e.currentTarget.style.removeProperty("--faq-y");
  };

  return (
    <div className={`relative min-h-screen w-full overflow-hidden mt-10 ${palette.surface}`}>
      <div className="absolute inset-0" style={{ background: palette.aurora }} />

      <section
        className={`relative z-10 mx-auto max-w-5xl px-6 py-24 transition-all ${
          hasEntered ? "animate-[faq-fade-up_0.8s_ease_forwards]" : "opacity-0"
        }`}
      >
        <div className={`faq-intro text-center mb-12 ${introReady ? "active" : ""}`}>
          <p className="text-xs uppercase tracking-[0.35em] text-gray-700 bg-gray-300 inline-block p-2 rounded-2xl">
            FAQs
          </p>
        
          <p className={`mt-4 max-w-xl mx-auto ${palette.muted}`}>
            Clear answers about our steel structure engineering, fabrication, and site execution process.
          </p>
        </div>

        <ul className="space-y-4">
          {faqs.map((item, index) => {
            const open = activeIndex === index;

            return (
              <li
                key={index}
                onMouseMove={setCardGlow}
                onMouseLeave={clearCardGlow}
                className={`relative overflow-hidden rounded-3xl border transition-all ${palette.border} ${palette.panel} ${palette.shadow}`}
              >
                <div
                  className={`absolute inset-0 pointer-events-none ${
                    open ? "opacity-100" : "opacity-0"
                  }`}
                  style={{
                    background: `radial-gradient(240px circle at var(--faq-x,50%) var(--faq-y,50%), ${palette.glow}, transparent 70%)`,
                  }}
                />

                <button
                  onClick={() => toggleQuestion(index)}
                  className="relative flex w-full items-start gap-6 px-8 py-7 text-left"
                >
                  <span
                    className={`flex h-12 w-12 text-gray-600 items-center justify-center rounded-full border ${palette.iconRing} ${palette.iconSurface}`}
                  >
                   <svg
  className={`h-5 w-5 transition-transform duration-300 ${
    open ? "rotate-180" : ""
  } ${palette.icon}`}
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M5 12h14"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
  />
  {!open && (
    <path
      d="M12 5v14"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  )}
</svg>

                  </span>

                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3">
                      <h2 className={`text-lg sm:text-xl font-medium ${palette.heading}`}>
                        {item.question}
                      </h2>
                      <span className="text-[10px] uppercase tracking-widest text-neutral-500 border px-3 py-1 rounded-full">
                        {item.meta}
                      </span>
                    </div>

                    {open && (
                      <p className={`mt-4 text-sm leading-relaxed ${palette.muted}`}>
                        {item.answer}
                      </p>
                    )}
                  </div>
                </button>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}

export default FAQ1;
