import { createFileRoute, Link } from "@tanstack/react-router";
import { KnowledgeGraph } from "@/components/chanah/KnowledgeGraph";
import { OrbitDiagram } from "@/components/chanah/OrbitDiagram";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CHANAH — Engineering Intelligence" },
      {
        name: "description",
        content:
          "CHANAH is an AI research and engineering company designing intelligent software, knowledge systems, and scientific technologies. Home of KANE, the AI-powered market intelligence platform.",
      },
    ],
  }),
  component: HomePage,
});

const principles = [
  {
    label: "Engineering",
    body: "Rigorous systems design with a focus on performance, correctness, and long-horizon reliability.",
  },
  {
    label: "Research",
    body: "First-principles investigation into the mathematics and mechanics of machine intelligence.",
  },
  {
    label: "Intelligence",
    body: "Software that learns, adapts, and produces clarity in genuinely complex environments.",
  },
  {
    label: "Long-term",
    body: "Building infrastructure meant to scale across decades of technological transformation.",
  },
];

const technologies = [
  "Artificial Intelligence",
  "Knowledge Graphs",
  "Distributed Systems",
  "Cloud Computing",
  "Data Engineering",
  "Scientific Computing",
  "Large Language Models",
  "Bayesian Modeling",
  "Automation",
];

const research = [
  {
    id: "CHANAH-RES-001",
    title: "Probabilistic Programming in Large-Scale Systems",
    date: "MAR 2026",
  },
  {
    id: "CHANAH-RES-002",
    title: "Autonomous Software Evolution via Knowledge Graphs",
    date: "FEB 2026",
  },
  {
    id: "CHANAH-RES-003",
    title: "Contextual Retrieval for Structured Market Intelligence",
    date: "NOV 2025",
  },
];

function HomePage() {
  return (
    <div className="min-h-dvh bg-background text-foreground selection:bg-accent/30 selection:text-foreground">
      <Nav />
      <Hero />
      <About />
      <Principles />
      <Projects />
      <Technology />
      <Research />
      <Contact />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-border/80 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <div className="flex items-center gap-10">
          <a href="#top" className="flex items-center gap-2" aria-label="CHANAH — home">
            <Logo />
            <span className="text-lg font-semibold tracking-tight">CHANAH</span>
          </a>
          <div className="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
            <a href="#about" className="transition-colors hover:text-foreground">About</a>
            <a href="#projects" className="transition-colors hover:text-foreground">Projects</a>
            <a href="#technology" className="transition-colors hover:text-foreground">Technology</a>
            <a href="#research" className="transition-colors hover:text-foreground">Research</a>
          </div>
        </div>
        <a
          href="mailto:contact@chanah.dev"
          className="inline-flex items-center gap-2 rounded-full bg-foreground px-4 py-2 font-mono text-[11px] uppercase tracking-widest text-background transition-colors hover:bg-accent hover:text-accent-foreground"
        >
          Contact
        </a>
      </div>
    </nav>
  );
}

function Logo() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="1.25" />
      <circle cx="12" cy="12" r="3" fill="currentColor" />
      <line x1="12" y1="2" x2="12" y2="22" stroke="currentColor" strokeOpacity="0.35" strokeWidth="0.75" />
      <line x1="2" y1="12" x2="22" y2="12" stroke="currentColor" strokeOpacity="0.35" strokeWidth="0.75" />
    </svg>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-6 pt-40 pb-32 md:pt-48 md:pb-40">
      {/* Ambient background: hairline rules + faint dot field */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 right-0 top-1/3 h-px bg-gradient-to-r from-transparent via-border to-transparent animate-line" />
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.06) 1px, transparent 0)",
            backgroundSize: "44px 44px",
            maskImage:
              "radial-gradient(ellipse at center, black 40%, transparent 75%)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-border bg-white/[0.03] px-3 py-1">
          <span className="size-1.5 rounded-full bg-accent animate-pulse-soft" />
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
            Intelligence Lab · Est. 2024
          </span>
        </div>

        <h1 className="animate-fade-up mt-8 max-w-5xl text-balance text-5xl font-semibold leading-[0.95] tracking-tight md:text-7xl lg:text-[7.5rem] [animation-delay:100ms]">
          Engineering{" "}
          <span className="font-light italic text-muted-foreground">Intelligence.</span>
        </h1>

        <div className="animate-fade-up mt-10 grid gap-10 md:grid-cols-12 [animation-delay:200ms]">
          <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground md:col-span-7 md:text-xl">
            CHANAH designs the fundamental structures of tomorrow's cognition —
            AI-native software, knowledge systems, and autonomous research
            frameworks built to amplify human intelligence.
          </p>
          <div className="flex flex-col items-start gap-3 md:col-span-5 md:items-end md:text-right">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              Primary directive
            </span>
            <p className="max-w-xs text-sm italic text-foreground/80">
              Transforming public knowledge into structured intelligence for
              decisions of consequence.
            </p>
          </div>
        </div>

        <div className="animate-fade-up mt-14 flex flex-wrap items-center gap-4 [animation-delay:300ms]">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-transform hover:scale-[1.02] hover:bg-accent hover:text-accent-foreground"
          >
            Explore projects
            <span aria-hidden>→</span>
          </a>
          <a
            href="#about"
            className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-white/5"
          >
            About CHANAH
          </a>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="border-t border-border px-6 py-32">
      <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
            01 / Foundation
          </span>
          <h2 className="mt-6 text-balance text-4xl font-semibold tracking-tight md:text-5xl">
            AI-native, by design.
          </h2>
        </div>
        <div className="space-y-6 text-lg leading-relaxed text-muted-foreground md:col-span-7">
          <p>
            CHANAH is an engineering-first research company working at the
            intersection of scientific computing and artificial intelligence.
            We believe the next era of software will not be assisted by AI —
            it will be evolved from it.
          </p>
          <p>
            Our work spans low-level distributed systems, probabilistic
            modeling, knowledge graphs, and large language models — unified
            by a single mission: to amplify human intelligence through
            elegant, autonomous technology.
          </p>
          <p>
            CHANAH is the parent company. It develops independent products
            and long-horizon research initiatives — the first of which is{" "}
            <span className="text-foreground">KANE</span>, an AI-powered
            market intelligence platform.
          </p>
        </div>
      </div>
    </section>
  );
}

function Principles() {
  return (
    <section className="border-y border-border bg-white/[0.015] px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 flex items-end justify-between">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
              02 / Principles
            </span>
            <h2 className="mt-6 text-4xl font-semibold tracking-tight md:text-5xl">
              How we work.
            </h2>
          </div>
          <span className="hidden font-mono text-xs uppercase tracking-widest text-muted-foreground md:inline">
            Four axes
          </span>
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl bg-border md:grid-cols-4">
          {principles.map((p, i) => (
            <div
              key={p.label}
              className="group bg-background p-8 transition-colors hover:bg-white/[0.03] md:p-10"
            >
              <span className="font-mono text-[10px] text-muted-foreground">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-6 text-xl font-semibold tracking-tight">
                {p.label}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {p.body}
              </p>
              <div className="mt-10 h-px w-8 bg-border transition-all group-hover:w-full group-hover:bg-accent/60" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 flex items-end justify-between">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
              03 / Projects
            </span>
            <h2 className="mt-6 text-4xl font-semibold tracking-tight md:text-5xl">
              Featured initiatives.
            </h2>
          </div>
          <span className="hidden font-mono text-xs uppercase tracking-widest text-muted-foreground md:inline">
            Selected — 02
          </span>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* KANE — flagship card */}
          <article className="group relative overflow-hidden rounded-3xl border border-border bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-8 transition-colors hover:border-white/20">
            <div className="mb-6 flex items-start justify-between">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent">
                  Flagship · Active
                </span>
                <h3 className="mt-3 text-4xl font-semibold tracking-tight">KANE</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  AI-Powered Market Intelligence
                </p>
              </div>
              <div className="grid size-11 place-items-center rounded-full border border-border text-foreground transition-colors group-hover:bg-foreground group-hover:text-background">
                <span aria-hidden className="text-lg">↗</span>
              </div>
            </div>

            <div className="relative mb-8 aspect-[16/9] overflow-hidden rounded-2xl border border-white/5 bg-black/40">
              <KnowledgeGraph className="absolute inset-0 h-full w-full text-foreground" />
              <div className="absolute inset-x-0 bottom-0 flex items-center justify-between border-t border-white/5 bg-black/40 px-4 py-2 backdrop-blur-md">
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  kane.system / knowledge-graph
                </span>
                <span className="font-mono text-[10px] text-accent">● live</span>
              </div>
            </div>

            <p className="max-w-lg text-muted-foreground">
              An AI-powered market intelligence platform that transforms
              public knowledge into structured business intelligence.
            </p>
          </article>

          {/* Future slot */}
          <article className="relative flex flex-col justify-between overflow-hidden rounded-3xl border border-dashed border-border p-8 transition-colors hover:border-white/20">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                Forthcoming
              </span>
              <h3 className="mt-3 text-3xl font-semibold tracking-tight text-muted-foreground">
                Project 002
              </h3>
              <p className="mt-2 max-w-xs text-sm text-muted-foreground/80">
                A confidential research initiative in autonomous scientific
                computing. Details forthcoming.
              </p>
            </div>

            <div className="mt-10 flex items-center justify-between">
              <div className="grid size-14 place-items-center rounded-full border border-border">
                <span className="text-2xl text-muted-foreground">+</span>
              </div>
              <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                Research phase
              </span>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

function Technology() {
  return (
    <section
      id="technology"
      className="border-t border-border bg-white/[0.01] px-6 py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-14 md:grid-cols-12">
          <div className="md:col-span-4">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
              04 / Technology
            </span>
            <h2 className="mt-6 text-4xl font-semibold tracking-tight md:text-5xl">
              The stack.
            </h2>
            <p className="mt-6 max-w-sm text-muted-foreground">
              A toolkit defined by precision, performance, and mathematical
              rigor. Every layer chosen for the long term.
            </p>
          </div>

          <ul className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl bg-border sm:grid-cols-2 md:col-span-8 md:grid-cols-3">
            {technologies.map((t, i) => (
              <li
                key={t}
                className="group bg-background p-6 transition-colors hover:bg-white/[0.03]"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    aria-hidden
                    className="size-1.5 rounded-full bg-muted-foreground/30 transition-colors group-hover:bg-accent"
                  />
                </div>
                <p className="mt-6 text-sm font-medium text-foreground">{t}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Research() {
  return (
    <section id="research" className="px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-6">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
              05 / Research
            </span>
            <h2 className="mt-6 text-balance text-4xl font-semibold tracking-tight md:text-5xl">
              A frontier laboratory for autonomous engineering.
            </h2>
            <p className="mt-6 max-w-lg text-muted-foreground">
              CHANAH operates across software engineering, artificial
              intelligence, and scientific research — from probabilistic
              modeling to distributed cognition. We publish, prototype, and
              productize.
            </p>

            <ul className="mt-14 space-y-6">
              {research.map((r) => (
                <li
                  key={r.id}
                  className="group flex flex-col justify-between gap-2 border-b border-border pb-6 transition-colors hover:border-accent/50 md:flex-row md:items-baseline"
                >
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-accent">
                      {r.id}
                    </span>
                    <h3 className="mt-2 text-lg font-medium tracking-tight md:text-xl">
                      {r.title}
                    </h3>
                  </div>
                  <span className="font-mono text-xs text-muted-foreground">
                    {r.date}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative flex items-center justify-center md:col-span-6">
            <div
              aria-hidden
              className="absolute inset-10 rounded-full bg-accent/[0.04] blur-3xl"
            />
            <div className="relative aspect-square w-full max-w-md text-foreground">
              <OrbitDiagram className="animate-slow-spin h-full w-full" />
              <div className="pointer-events-none absolute inset-0 grid place-items-center">
                <div className="text-center">
                  <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                    Ongoing
                  </span>
                  <p className="mt-2 text-sm text-foreground/80">
                    12 active studies
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-border px-6 py-32 md:py-40"
    >
      <div className="mx-auto max-w-4xl text-center">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
          06 / Contact
        </span>
        <h2 className="mt-8 text-balance text-5xl font-semibold tracking-tight md:text-7xl">
          Let's build what comes next.
        </h2>
        <p className="mx-auto mt-8 max-w-xl text-lg text-muted-foreground">
          For research partnerships, engineering collaborations, and product
          inquiries — we read every message.
        </p>
        <a
          href="mailto:contact@chanah.dev"
          className="mt-14 inline-flex items-center gap-3 border-b border-border pb-2 font-mono text-2xl tracking-tight text-foreground transition-colors hover:border-accent hover:text-accent md:text-3xl"
        >
          contact@chanah.dev
          <span aria-hidden>→</span>
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border px-6 py-14">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div>
            <div className="flex items-center gap-2">
              <Logo />
              <span className="text-lg font-semibold tracking-tight">CHANAH</span>
            </div>
            <p className="mt-3 max-w-sm text-sm text-muted-foreground">
              Engineering intelligence for the long term.
            </p>
          </div>

          <nav
            aria-label="Footer"
            className="flex flex-wrap gap-x-8 gap-y-3 font-mono text-[11px] uppercase tracking-widest text-muted-foreground"
          >
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-foreground"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-foreground"
            >
              LinkedIn
            </a>
            <a
              href="mailto:contact@chanah.dev"
              className="transition-colors hover:text-foreground"
            >
              Email
            </a>
            <Link to="/privacy" className="transition-colors hover:text-foreground">
              Privacy
            </Link>
            <Link to="/terms" className="transition-colors hover:text-foreground">
              Terms
            </Link>
          </nav>
        </div>

        <div className="mt-12 flex flex-col-reverse items-start justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row md:items-center">
          <span>© {new Date().getFullYear()} CHANAH Research. All rights reserved.</span>
          <span className="font-mono uppercase tracking-widest">
            Engineering Intelligence · v.04
          </span>
        </div>
      </div>
    </footer>
  );
}
