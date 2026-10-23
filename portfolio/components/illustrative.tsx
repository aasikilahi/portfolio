type IllustrativeProps = {
  layers: string[];
  caption?: string;
};

export function Illustrative({ layers, caption }: IllustrativeProps) {
  const rows = (layers.length > 0 ? layers : ["Interface", "Local data", "API"]).slice(0, 4);

  return (
    <figure className="rule-card overflow-hidden">
      <figcaption className="flex items-center justify-between gap-3 border-b border-line px-3 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-dim">
        <span>Illustrative</span>
        <span className="text-right">Not a product screenshot</span>
      </figcaption>
      <div className="relative px-5 py-6 sm:px-7" aria-hidden="true">
        <div className="mx-auto w-full max-w-[16rem] border border-line-strong bg-sunken px-3 py-4">
          <div className="mb-3 flex items-center justify-between font-mono text-[10px] text-dim">
            <span>01</span>
            <span className="h-px flex-1 mx-2 bg-line" />
            <span>STACK</span>
          </div>
          <div className="space-y-2">
            {rows.map((layer, index) => (
              <div key={layer} className="border border-line bg-raised px-3 py-2">
                <div className="flex items-baseline justify-between gap-3">
                  <span className="font-mono text-[10px] text-accent">0{index + 1}</span>
                  <span className="min-w-0 flex-1 truncate text-sm text-ink">{layer}</span>
                </div>
                <div className="mt-2 h-1.5 bg-bg">
                  <div
                    className="h-full bg-accent/70"
                    style={{ width: `${72 - index * 12}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {caption ? <p className="sr-only">{caption}</p> : null}
    </figure>
  );
}
