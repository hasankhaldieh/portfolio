import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import {
  ArrowIcon,
  ArrowUpRightIcon,
  CodeIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  PhoneIcon,
} from "@/components/icons";
import { SectionHeading } from "@/components/section-heading";
import {
  education,
  experiences,
  skillGroups,
  socialLinks,
} from "@/data/portfolio";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section
          id="home"
          className="relative flex min-h-screen items-center overflow-hidden pt-20"
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.14]"
            aria-hidden="true"
            style={{
              backgroundImage:
                "linear-gradient(rgba(148,163,184,.13) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,.13) 1px, transparent 1px)",
              backgroundSize: "64px 64px",
              maskImage:
                "linear-gradient(to bottom, black 10%, transparent 85%)",
            }}
          />
          <div
            className="pointer-events-none absolute right-[8%] top-[24%] h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl"
            aria-hidden="true"
          />

          <div className="page-shell relative py-24 sm:py-32">
            <div className="max-w-4xl">
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.06] px-4 py-2 text-xs font-medium text-cyan-300">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_12px_#22d3ee]" />
                Available for software development opportunities
              </div>
              <p className="mb-4 font-display text-base font-medium tracking-wide text-slate-400 sm:text-lg">
                Hello, I&apos;m
              </p>
              <h1 className="font-display text-5xl font-bold leading-[0.98] tracking-[-0.045em] text-white sm:text-7xl lg:text-[5.5rem]">
                Hasan Khaldieh
              </h1>
              <p className="mt-5 font-display text-2xl font-medium tracking-tight text-cyan-400 sm:text-3xl">
                Full-Stack Developer
              </p>
              <p className="mt-7 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
                Computer Science graduate and Master&apos;s student with hands-on
                experience in React, TypeScript, Node.js, REST APIs, SQL/NoSQL
                databases, and responsive web development.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#projects"
                  className="focus-ring inline-flex items-center justify-center gap-2 rounded-lg bg-cyan-400 px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
                >
                  View Projects
                  <ArrowIcon className="h-4 w-4" />
                </a>
                <a
                  href="#contact"
                  className="focus-ring inline-flex items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/[0.03] px-6 py-3.5 text-sm font-semibold text-white transition hover:border-cyan-400/50 hover:bg-cyan-400/[0.05]"
                >
                  Contact Me
                </a>
              </div>

              <div className="mt-10 flex items-center gap-5">
                <span className="h-px w-10 bg-slate-700" aria-hidden="true" />
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Hasan Khaldieh on GitHub"
                  className="focus-ring rounded-md text-slate-500 transition-colors hover:text-cyan-300"
                >
                  <GithubIcon className="h-5 w-5" />
                </a>
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Hasan Khaldieh on LinkedIn"
                  className="focus-ring rounded-md text-slate-500 transition-colors hover:text-cyan-300"
                >
                  <LinkedinIcon className="h-5 w-5" />
                </a>
                <a
                  href={socialLinks.email}
                  aria-label="Email Hasan Khaldieh"
                  className="focus-ring rounded-md text-slate-500 transition-colors hover:text-cyan-300"
                >
                  <MailIcon className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="border-y border-white/[0.06] bg-white/[0.015]">
          <div className="section-shell grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
            <SectionHeading eyebrow="01 / About" title="A little about me" />
            <div>
              <p className="text-lg leading-8 text-slate-300 sm:text-xl sm:leading-9">
                I&apos;m a full-stack developer focused on building thoughtful,
                reliable web applications with{" "}
                <span className="text-white">React, TypeScript, and Node.js</span>.
                I enjoy turning requirements into responsive interfaces, clean
                APIs, and practical database solutions.
              </p>
              <p className="mt-6 text-base leading-8 text-slate-400">
                My work spans API integration, SQL and NoSQL databases, debugging,
                and collaborative Agile workflows. I&apos;m currently sharpening
                those skills through software development training at OnRamp
                Academy &amp; Forward Mena, where I&apos;m building production-minded
                projects and growing as an engineer.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
                {[
                  ["3+", "Years learning & building"],
                  ["5", "Development roles"],
                  ["MSc", "Computer Science"],
                ].map(([value, label]) => (
                  <div key={label} className="border-l border-cyan-400/40 pl-4">
                    <p className="font-display text-2xl font-semibold text-white">
                      {value}
                    </p>
                    <p className="mt-1 text-xs leading-5 text-slate-500">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="section-shell">
          <SectionHeading
            eyebrow="02 / Skills"
            title="Technologies I work with"
            description="A growing toolkit for building complete web products, from responsive interfaces to APIs and data layers."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
            {skillGroups.map((group, index) => (
              <article
                key={group.title}
                className={`glass-card group rounded-xl p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 ${
                  index < 2 ? "lg:col-span-3" : "lg:col-span-2"
                }`}
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-lg font-semibold text-white">
                    {group.title}
                  </h3>
                  <span className="font-mono text-xs text-slate-600">
                    {group.number}
                  </span>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md border border-white/[0.08] bg-white/[0.035] px-3 py-1.5 text-xs font-medium text-slate-400 transition-colors group-hover:border-white/[0.12] group-hover:text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="border-y border-white/[0.06] bg-white/[0.015]">
          <div className="section-shell">
            <SectionHeading
              eyebrow="03 / Experience"
              title="Where I've contributed"
              description="Professional experience across frontend, backend, and full-stack development, supported by strong operational discipline."
            />
            <div className="relative mt-14">
              <div
                className="absolute bottom-0 left-[7px] top-2 w-px bg-gradient-to-b from-cyan-400/70 via-slate-700 to-transparent sm:left-[9px]"
                aria-hidden="true"
              />
              <div className="space-y-6">
                {experiences.map((experience) => (
                  <article
                    key={`${experience.company}-${experience.role}`}
                    className="relative pl-9 sm:pl-12"
                  >
                    <span
                      className={`absolute left-0 top-7 h-[15px] w-[15px] rounded-full border-[3px] border-ink-950 sm:h-[19px] sm:w-[19px] ${
                        experience.current
                          ? "bg-cyan-400 shadow-[0_0_16px_rgba(34,211,238,.65)]"
                          : "bg-slate-600"
                      }`}
                      aria-hidden="true"
                    />
                    <div className="glass-card rounded-xl p-6 sm:p-7">
                      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                        <div>
                          <h3 className="font-display text-xl font-semibold text-white">
                            {experience.role}
                          </h3>
                          <p className="mt-1 text-sm font-medium text-cyan-400">
                            {experience.company}
                          </p>
                        </div>
                        <span className="shrink-0 font-mono text-xs text-slate-500 sm:pt-1">
                          {experience.date}
                        </span>
                      </div>
                      <p className="mt-5 max-w-3xl text-sm leading-7 text-slate-400">
                        {experience.description}
                      </p>
                      {experience.highlights.length > 0 ? (
                        <ul className="mt-4 grid gap-2 text-sm leading-6 text-slate-400 lg:grid-cols-3">
                          {experience.highlights.map((highlight) => (
                            <li key={highlight} className="flex gap-2.5">
                              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-cyan-400" />
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="section-shell">
          <SectionHeading
            eyebrow="04 / Projects"
            title="Selected work"
            description="A practical full-stack project designed around real application workflows and maintainable architecture."
          />
          <article className="glass-card group relative mt-12 overflow-hidden rounded-2xl p-7 sm:p-10">
            <div
              className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl transition group-hover:bg-cyan-500/15"
              aria-hidden="true"
            />
            <div className="relative grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-amber-400/20 bg-amber-400/[0.07] px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-amber-300">
                    In Progress
                  </span>
                  <span className="font-mono text-xs text-slate-500">
                    Private Repository
                  </span>
                </div>
                <h3 className="mt-5 font-display text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                  Loyalty Card Management System
                </h3>
                <p className="mt-2 font-mono text-sm text-cyan-400">MERN Stack</p>
                <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400">
                  Full-stack loyalty card system using MongoDB, Express.js, React,
                  and Node.js for managing customers, loyalty cards, purchases,
                  earned points, redeemed points, and complete transaction history.
                </p>
                <div className="mt-7 flex flex-wrap gap-2">
                  {[
                    "React",
                    "Node.js",
                    "Express.js",
                    "MongoDB",
                    "REST APIs",
                    "MERN",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-cyan-400/[0.07] px-3 py-1.5 text-xs font-medium text-cyan-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="relative mx-auto flex aspect-square w-full max-w-[290px] items-center justify-center">
                <div className="absolute inset-0 rounded-full border border-cyan-400/10" />
                <div className="absolute inset-8 rounded-full border border-cyan-400/15" />
                <div className="absolute inset-16 rounded-full border border-cyan-400/20 bg-cyan-400/[0.035]" />
                <CodeIcon className="relative h-16 w-16 text-cyan-400" />
              </div>
            </div>
          </article>
        </section>

        <section id="education" className="border-y border-white/[0.06] bg-white/[0.015]">
          <div className="section-shell">
            <SectionHeading
              eyebrow="05 / Education"
              title="Academic foundation"
            />
            <div className="mt-12 grid gap-5 md:grid-cols-2">
              {education.map((item) => (
                <article
                  key={item.degree}
                  className="glass-card rounded-xl p-7 transition hover:border-cyan-400/25"
                >
                  <p className="font-mono text-xs text-cyan-400">{item.date}</p>
                  <h3 className="mt-4 font-display text-xl font-semibold leading-7 text-white">
                    {item.degree}
                  </h3>
                  <p className="mt-3 text-sm text-slate-400">{item.school}</p>
                  <div className="mt-7 h-px bg-white/[0.07]" />
                  <p className="mt-5 text-xs uppercase tracking-[0.16em] text-slate-600">
                    {item.status}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section-shell">
          <div className="relative overflow-hidden rounded-2xl border border-cyan-400/20 bg-gradient-to-br from-cyan-400/[0.08] to-slate-900/60 px-6 py-14 sm:px-12 sm:py-16">
            <div
              className="absolute -right-20 -top-32 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl"
              aria-hidden="true"
            />
            <div className="relative grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
              <div>
                <p className="eyebrow">06 / Contact</p>
                <h2 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                  Let&apos;s build something useful.
                </h2>
                <p className="mt-5 max-w-xl text-base leading-8 text-slate-400">
                  I&apos;m open to software development opportunities and conversations
                  about full-stack projects. Send me a message and I&apos;ll get back
                  to you.
                </p>
                <a
                  href={socialLinks.email}
                  className="focus-ring mt-8 inline-flex items-center gap-2 rounded-lg bg-cyan-400 px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
                >
                  <MailIcon className="h-4 w-4" />
                  Send an Email
                </a>
              </div>
              <address className="not-italic">
                <div className="space-y-4">
                  <a
                    href={socialLinks.email}
                    className="focus-ring flex items-center gap-4 rounded-lg p-2 text-sm text-slate-300 transition hover:text-cyan-300"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-cyan-400">
                      <MailIcon className="h-5 w-5" />
                    </span>
                    hasankhaldieh4@gmail.com
                  </a>
                  <a
                    href="tel:+96181488010"
                    className="focus-ring flex items-center gap-4 rounded-lg p-2 text-sm text-slate-300 transition hover:text-cyan-300"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-cyan-400">
                      <PhoneIcon className="h-5 w-5" />
                    </span>
                    +961 81 488 010
                  </a>
                  <a
                    href={socialLinks.github}
                    target="_blank"
                    rel="noreferrer"
                    className="focus-ring flex items-center gap-4 rounded-lg p-2 text-sm text-slate-300 transition hover:text-cyan-300"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-cyan-400">
                      <GithubIcon className="h-5 w-5" />
                    </span>
                    GitHub
                    <ArrowUpRightIcon className="ml-auto h-4 w-4 text-slate-600" />
                  </a>
                  <a
                    href={socialLinks.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="focus-ring flex items-center gap-4 rounded-lg p-2 text-sm text-slate-300 transition hover:text-cyan-300"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-cyan-400">
                      <LinkedinIcon className="h-5 w-5" />
                    </span>
                    LinkedIn
                    <ArrowUpRightIcon className="ml-auto h-4 w-4 text-slate-600" />
                  </a>
                </div>
              </address>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
