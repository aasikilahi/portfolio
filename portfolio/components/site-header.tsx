"use client";

import { Download, Menu, X } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";
import { nav, profile } from "@/content/site";
import { sitePath } from "@/lib/site-path";

type SiteHeaderProps = {
  pdfHref: string | null;
};

export function SiteHeader({ pdfHref }: SiteHeaderProps) {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const panelId = useId();

  useEffect(() => {
    if (!open) {
      return;
    }

    const panel = panelRef.current;
    const focusable = () =>
      panel
        ? Array.from(panel.querySelectorAll<HTMLElement>("a[href], button:not([disabled])"))
        : [];

    focusable()[0]?.focus();

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
        return;
      }
      if (event.key !== "Tab" || !panel) {
        return;
      }
      const items = focusable();
      if (items.length === 0) {
        return;
      }
      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
    <header className="sticky top-0 z-40 border-b border-line/80 bg-bg/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-4 px-4 sm:px-6">
        <a href={sitePath("/#top")} className="flex min-w-0 items-center gap-2 text-ink">
          <span className="grid size-8 shrink-0 place-items-center border border-line font-mono text-[11px] text-accent">
            MA
          </span>
          <span className="truncate font-serif text-lg leading-none">
            <span className="xl:hidden">Aasikilahi</span>
            <span className="hidden xl:inline">{profile.name}</span>
          </span>
        </a>

        <nav className="ml-auto hidden items-center gap-1 lg:flex" aria-label="Primary">
          {nav.map((item) => (
            <a
              key={item.href}
              href={sitePath(item.href)}
              className="px-2 py-2 text-sm text-muted hover:text-ink"
            >
              {item.label}
            </a>
          ))}
          <a
            className="btn btn-primary ml-2 px-3 text-sm"
            href={sitePath(profile.resumeDocx)}
            download={profile.resumeDocxFilename}
          >
            <Download className="size-4" aria-hidden="true" />
            Download Resume
          </a>
          {pdfHref ? (
            <a className="btn btn-line px-3 text-sm" href={pdfHref} download={profile.resumePdfFilename}>
              PDF
            </a>
          ) : null}
        </nav>

        <button
          ref={buttonRef}
          type="button"
          className="ml-auto inline-flex size-11 items-center justify-center border border-line text-ink lg:hidden"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
        </button>
      </div>
    </header>

      {open ? (
        <div
          ref={panelRef}
          id={panelId}
          role="dialog"
          aria-modal="true"
          aria-label="Navigation"
          className="fixed inset-x-0 bottom-0 top-16 z-50 overflow-y-auto border-t border-line bg-[#0c1016] px-4 py-6 lg:hidden"
        >
          <nav className="mx-auto flex max-w-6xl flex-col" aria-label="Mobile">
            {nav.map((item) => (
              <a
                key={item.href}
                href={sitePath(item.href)}
                onClick={close}
                className="border-b border-line py-4 text-lg text-ink"
              >
                {item.label}
              </a>
            ))}
            <a
              className="btn btn-primary mt-6"
              href={sitePath(profile.resumeDocx)}
              download={profile.resumeDocxFilename}
              onClick={close}
            >
              <Download className="size-4" aria-hidden="true" />
              Download Resume
            </a>
            {pdfHref ? (
              <a className="btn btn-line mt-3" href={pdfHref} download={profile.resumePdfFilename} onClick={close}>
                Download PDF
              </a>
            ) : null}
          </nav>
        </div>
      ) : null}
    </>
  );
}
