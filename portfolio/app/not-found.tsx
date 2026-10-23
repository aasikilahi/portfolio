import { sitePath } from "@/lib/site-path";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">404</p>
      <h1 className="mt-3 font-serif text-4xl">That page is not on this site.</h1>
      <a className="btn btn-line mt-8" href={sitePath("/#projects")}>
        Back to projects
      </a>
    </div>
  );
}
