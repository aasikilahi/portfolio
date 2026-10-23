import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { getRole, type Project } from "@/content/site";
import { sitePath } from "@/lib/site-path";
import { Illustrative } from "@/components/illustrative";

function ExternalOrEmpty({
  href,
  label,
  empty,
}: {
  href: string;
  label: string;
  empty: string;
}) {
  if (!href) {
    return <p className="border border-dashed border-line px-3 py-3 text-sm text-muted">{empty}</p>;
  }
  return (
    <a
      className="inline-flex items-center gap-2 text-accent hover:text-ink"
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      {label}
      <ArrowUpRight className="size-4" aria-hidden="true" />
    </a>
  );
}

export function ProjectView({ project }: { project: Project }) {
  const employer = getRole(project.employerId);
  const layers = project.stack.length > 0 ? project.stack : ["Scope", "Integration", "Data"];

  return (
    <article className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <a href={sitePath("/#projects")} className="inline-flex items-center gap-2 text-sm text-muted hover:text-ink">
        <ArrowLeft className="size-4" aria-hidden="true" />
        All projects
      </a>

      <header className="mt-8 max-w-3xl">
        <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">{project.label}</p>
        <h1 className="mt-3 font-serif text-4xl leading-tight sm:text-5xl">{project.name}</h1>
        <p className="mt-4 text-lg leading-relaxed text-muted">{project.summary}</p>
        <p className="mt-4 font-mono text-sm text-dim">
          {employer.company}
          {employer.location ? ` · ${employer.location}` : ""} · {employer.dates}
        </p>
        {employer.engagement ? <p className="mt-2 text-sm text-muted">{employer.engagement}</p> : null}
      </header>

      <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-start">
        <div className="space-y-10">
          {project.screenshot ? (
            <figure className="rule-card overflow-hidden">
              <img src={project.screenshot} alt={project.screenshotAlt || project.name} className="w-full" />
              <figcaption className="border-t border-line px-3 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-dim">
                Screenshot
              </figcaption>
            </figure>
          ) : (
            <Illustrative
              layers={layers}
              caption={`Illustrative composition for ${project.name}. Not a screenshot of the product.`}
            />
          )}

          <section>
            <h2 className="font-mono text-xs uppercase tracking-[0.16em] text-accent">Overview</h2>
            <p className="mt-3 leading-relaxed text-muted">{project.overview}</p>
          </section>
          <section>
            <h2 className="font-mono text-xs uppercase tracking-[0.16em] text-accent">Problem / need</h2>
            <p className="mt-3 leading-relaxed text-muted">{project.problem}</p>
          </section>
          <section>
            <h2 className="font-mono text-xs uppercase tracking-[0.16em] text-accent">Role</h2>
            <p className="mt-3 leading-relaxed text-muted">{project.role}</p>
          </section>
          <section>
            <h2 className="font-mono text-xs uppercase tracking-[0.16em] text-accent">Engineering challenges</h2>
            <ul className="mt-3 space-y-2">
              {project.challenges.map((item) => (
                <li key={item} className="flex gap-3 leading-relaxed text-muted">
                  <span className="mt-2 size-1 shrink-0 bg-accent" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
          <section>
            <h2 className="font-mono text-xs uppercase tracking-[0.16em] text-accent">Implementation</h2>
            <ul className="mt-3 space-y-2">
              {project.implementation.map((item) => (
                <li key={item} className="flex gap-3 leading-relaxed text-muted">
                  <span className="mt-2 size-1 shrink-0 bg-accent" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
          <section>
            <h2 className="font-mono text-xs uppercase tracking-[0.16em] text-accent">Outcome</h2>
            <p className="mt-3 leading-relaxed text-muted">{project.outcome}</p>
          </section>
        </div>

        <aside className="space-y-6 lg:sticky lg:top-24">
          <div className="rule-card p-5">
            <h2 className="font-mono text-xs uppercase tracking-[0.16em] text-accent">Stack</h2>
            {project.stack.length > 0 ? (
              <ul className="mt-3 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <li key={item} className="chip">
                    {item}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-3 text-sm text-muted">No language is named for this project.</p>
            )}
            {project.stackNote ? <p className="mt-3 text-sm leading-relaxed text-dim">{project.stackNote}</p> : null}
          </div>
          <div className="rule-card space-y-4 p-5">
            <h2 className="font-mono text-xs uppercase tracking-[0.16em] text-accent">Links</h2>
            {project.productUrl ? (
              <>
                <ExternalOrEmpty
                  href={project.productUrl}
                  label={project.productUrlLabel || "Product"}
                  empty=""
                />
                <p className="break-all font-mono text-[11px] leading-relaxed text-dim">{project.productUrl}</p>
              </>
            ) : null}
            {project.playStoreUrl || !project.productUrl ? (
              <ExternalOrEmpty href={project.playStoreUrl} label="Play Store" empty="App Store link — add your URL" />
            ) : null}
            {project.playStoreUrl ? (
              <p className="break-all font-mono text-[11px] leading-relaxed text-dim">{project.playStoreUrl}</p>
            ) : null}
            <ExternalOrEmpty href={project.githubUrl} label="GitHub" empty="GitHub — add your URL" />
            {project.screenshot ? null : (
              <p className="border border-dashed border-line px-3 py-3 text-sm text-muted">
                Screenshot — add an image. The panel on this page is illustrative.
              </p>
            )}
          </div>
        </aside>
      </div>
    </article>
  );
}
