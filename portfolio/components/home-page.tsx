import { ArrowUpRight, Download, Mail, MapPin, Phone } from "lucide-react";
import {
  about,
  contactCopy,
  education,
  getRole,
  hero,
  highlights,
  leadership,
  profile,
  projects,
  projectsInBand,
  roles,
  skillGroups,
  type Project,
} from "@/content/site";
import { Illustrative } from "@/components/illustrative";
import { SectionHeading } from "@/components/section-heading";
import { sitePath } from "@/lib/site-path";

type HomePageProps = {
  pdfHref: string | null;
};

function ResumeButtons({ pdfHref }: { pdfHref: string | null }) {
  return (
    <>
      <a className="btn btn-line" href={sitePath(profile.resumeDocx)} download={profile.resumeDocxFilename}>
        <Download className="size-4" aria-hidden="true" />
        Download Resume
      </a>
      {pdfHref ? (
        <a className="btn btn-line" href={pdfHref} download={profile.resumePdfFilename}>
          Download PDF
        </a>
      ) : null}
    </>
  );
}

function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  const employer = getRole(project.employerId);
  return (
    <a
      href={sitePath(`/projects/${project.slug}`)}
      className={`rule-card group flex h-full flex-col p-5 sm:p-6 ${featured ? "md:min-h-64" : ""}`}
    >
      <div className="flex items-start justify-between gap-3">
        <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent">{project.label}</p>
        <ArrowUpRight className="size-4 shrink-0 text-dim group-hover:text-accent" aria-hidden="true" />
      </div>
      <h3 className="mt-4 font-serif text-2xl leading-tight text-ink">{project.name}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{project.summary}</p>
      <p className="mt-4 font-mono text-xs text-dim">
        {employer.company}
        {employer.location ? ` · ${employer.location}` : ""} · {employer.dates}
      </p>
      {project.stack.length > 0 ? (
        <ul className="mt-4 flex flex-wrap gap-2">
          {project.stack.slice(0, 4).map((item) => (
            <li key={item} className="chip">
              {item}
            </li>
          ))}
        </ul>
      ) : null}
      <p className="mt-5 text-sm text-accent">Case study</p>
    </a>
  );
}

export function HomePage({ pdfHref }: HomePageProps) {
  const current = projectsInBand("current");
  const featured = projectsInBand("featured");
  const earlier = projectsInBand("earlier");

  return (
    <>
      <section id="top" className="section-anchor">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[minmax(0,1.15fr)_minmax(18rem,0.85fr)] lg:items-end lg:py-28">
          <div className="rise">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-dim">
              {profile.currentLocation} · Native: {profile.nativeLocation} · 7+ years IT · 4+ years Android and Flutter
            </p>
            <h1 className="mt-5 max-w-4xl font-serif text-5xl leading-[1.02] text-ink sm:text-6xl lg:text-7xl">
              {profile.name}
            </h1>
            <p className="mt-5 text-2xl text-ink sm:text-3xl">{profile.title}</p>
            <p className="mt-2 font-mono text-sm text-accent sm:text-base">{profile.subtitle}</p>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">{hero.intro}</p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a className="btn btn-primary" href="#projects">
                Explore My Projects
              </a>
              <ResumeButtons pdfHref={pdfHref} />
              <a className="btn btn-quiet" href="#contact">
                Let’s Connect
              </a>
            </div>
          </div>
          <Illustrative
            layers={["Interface", "Offline store", "REST API"]}
            caption="Abstract mobile architecture diagram. Illustrative only. Not a screenshot of any app."
          />
        </div>
      </section>

      <section aria-label="Highlights" className="border-y border-line">
        <ul className="mx-auto grid max-w-6xl gap-px bg-line sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item) => (
            <li key={item} className="bg-bg px-4 py-4 text-sm leading-snug text-muted sm:px-6">
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section id="about" className="section-anchor mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <SectionHeading
          index="01 — About"
          title="From junior Android and system administration to automotive and enterprise products."
        />
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(16rem,0.8fr)]">
          <div className="space-y-5 text-base leading-relaxed text-muted sm:text-lg">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <aside className="rule-card h-fit p-5 sm:p-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent">Education</p>
            <p className="mt-3 font-serif text-2xl leading-tight">{education.degree}</p>
            <p className="mt-3 text-muted">{education.school}</p>
            <p className="mt-1 font-mono text-sm text-dim">{education.dates}</p>
          </aside>
        </div>
      </section>

      <section id="skills" className="section-anchor border-t border-line">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
          <SectionHeading
            index="02 — Skills"
            title="What the resume and the current role actually name."
            lede="No scores and no bars. A skill is listed only when the resume or the confirmed Refex notes name it."
          />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {skillGroups.map((group) => (
              <article key={group.title} className="rule-card p-5">
                <h3 className="font-serif text-xl">{group.title}</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li key={item} className="chip">
                      {item}
                    </li>
                  ))}
                </ul>
                {group.note ? <p className="mt-4 text-sm leading-relaxed text-dim">{group.note}</p> : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="section-anchor border-t border-line">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
          <SectionHeading
            index="03 — Experience"
            title="Where the work happened."
            lede="Newest first. Refex Group is the current role, engaged via OmegaHires. TVS Mobility Solution ran through May 2026."
          />
          <ol className="space-y-6">
            {roles.map((role) => (
              <li key={role.id} className="rule-card p-5 sm:p-7">
                <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
                  <h3 className="font-serif text-2xl sm:text-3xl">{role.company}</h3>
                  <p className="font-mono text-sm text-accent">{role.dates}</p>
                </div>
                <p className="mt-2 text-base text-ink">{role.title}</p>
                <p className="mt-1 text-sm text-dim">
                  {[role.location, role.current ? "Current" : ""].filter(Boolean).join(" · ")}
                </p>
                {role.engagement ? <p className="mt-4 text-muted">{role.engagement}</p> : null}
                <p className="mt-3 leading-relaxed text-muted">{role.context}</p>
                <ul className="mt-5 space-y-2">
                  {role.responsibilities.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted sm:text-base">
                      <span className="mt-2 size-1 shrink-0 bg-accent" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {role.technologies.map((item) => (
                    <li key={item} className="chip">
                      {item}
                    </li>
                  ))}
                </ul>
                {role.technologyNote ? (
                  <p className="mt-3 text-sm leading-relaxed text-dim">{role.technologyNote}</p>
                ) : null}
                <div className="mt-5 flex flex-wrap gap-2">
                  {role.projectSlugs.map((slug) => {
                    const project = projects.find((item) => item.slug === slug);
                    if (!project) {
                      return null;
                    }
                    return (
                      <a key={slug} href={sitePath(`/projects/${slug}`)} className="chip text-ink hover:border-accent">
                        {project.name}
                      </a>
                    );
                  })}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="projects" className="section-anchor border-t border-line">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
          <SectionHeading
            index="04 — Projects"
            title="Case studies, limited to what is written down."
            lede="Current Refex work is enterprise and integration work, with mobile support only where the notes say so. Percentages on older apps are the resume’s own approximate figures."
          />

          <h3 className="font-mono text-xs uppercase tracking-[0.16em] text-accent">Current work · Refex Group</h3>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {current.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>

          <h3 className="mt-14 font-mono text-xs uppercase tracking-[0.16em] text-accent">
            Selected mobile work
          </h3>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {featured.map((project) => (
              <ProjectCard key={project.slug} project={project} featured />
            ))}
          </div>

          <h3 className="mt-14 font-mono text-xs uppercase tracking-[0.16em] text-accent">Earlier projects</h3>
          <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {earlier.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section id="leadership" className="section-anchor border-t border-line">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
          <SectionHeading index="05 — Leadership" title="Mentor and team leader." lede={leadership.intro} />
          <p className="mb-8 max-w-3xl leading-relaxed text-muted">{leadership.boundary}</p>
          <div className="grid gap-4 md:grid-cols-2">
            {leadership.points.map((point) => (
              <article key={point.title} className="rule-card p-5 sm:p-6">
                <h3 className="font-serif text-2xl">{point.title}</h3>
                <p className="mt-3 leading-relaxed text-muted">{point.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section-anchor border-t border-line">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
          <SectionHeading index="06 — Contact" title="Let’s connect." lede={contactCopy.lede} />
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(16rem,0.8fr)]">
            <div className="space-y-3">
              <a className="rule-card flex items-center gap-3 p-4 text-ink hover:border-accent" href={`mailto:${profile.email}`}>
                <Mail className="size-5 text-accent" aria-hidden="true" />
                <span>
                  <span className="block font-mono text-[11px] uppercase tracking-[0.14em] text-dim">Email</span>
                  {profile.email}
                </span>
              </a>
              <a className="rule-card flex items-center gap-3 p-4 text-ink hover:border-accent" href={`tel:${profile.phoneTel}`}>
                <Phone className="size-5 text-accent" aria-hidden="true" />
                <span>
                  <span className="block font-mono text-[11px] uppercase tracking-[0.14em] text-dim">Phone</span>
                  {profile.phone}
                </span>
              </a>
              <p className="rule-card flex items-start gap-3 p-4">
                <MapPin className="mt-0.5 size-5 text-accent" aria-hidden="true" />
                <span>
                  <span className="block font-mono text-[11px] uppercase tracking-[0.14em] text-dim">Current location</span>
                  {profile.currentLocation}
                  <span className="mt-3 block font-mono text-[11px] uppercase tracking-[0.14em] text-dim">Native</span>
                  <span className="block">{profile.nativeLocation}</span>
                </span>
              </p>
              <a
                className="rule-card flex items-center gap-3 p-4 text-ink hover:border-accent"
                href={profile.linkedinUrl}
                target="_blank"
                rel="noreferrer"
              >
                <span className="font-mono text-xs text-accent">in</span>
                <span>
                  <span className="block font-mono text-[11px] uppercase tracking-[0.14em] text-dim">LinkedIn</span>
                  Profile from the resume
                </span>
              </a>
              {profile.githubUrl ? (
                <a
                  className="rule-card flex items-center gap-3 p-4 text-ink hover:border-accent"
                  href={profile.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              ) : (
                <p className="border border-dashed border-line px-4 py-4 text-sm text-muted">
                  GitHub — add your URL
                </p>
              )}
            </div>
            <div className="rule-card p-5 sm:p-6">
              <p className="leading-relaxed text-muted">{contactCopy.note}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <ResumeButtons pdfHref={pdfHref} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
