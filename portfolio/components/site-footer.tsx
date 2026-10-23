import { Download } from "lucide-react";
import { profile } from "@/content/site";
import { sitePath } from "@/lib/site-path";

type SiteFooterProps = {
  pdfHref: string | null;
};

export function SiteFooter({ pdfHref }: SiteFooterProps) {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10 sm:flex-row sm:items-end sm:justify-between sm:px-6">
        <div>
          <p className="font-serif text-xl">{profile.name}</p>
          <p className="mt-1 text-sm text-muted">
            {profile.title} · {profile.focus}
          </p>
          <p className="mt-1 text-sm text-dim">
            {profile.currentLocation} · Native: {profile.nativeLocation}
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a className="btn btn-line" href={sitePath(profile.resumeDocx)} download={profile.resumeDocxFilename}>
            <Download className="size-4" aria-hidden="true" />
            Download Resume
          </a>
          {pdfHref ? (
            <a className="btn btn-line" href={pdfHref} download={profile.resumePdfFilename}>
              Download PDF
            </a>
          ) : null}
        </div>
      </div>
    </footer>
  );
}
