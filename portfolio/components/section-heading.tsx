type SectionHeadingProps = {
  index: string;
  title: string;
  lede?: string;
};

export function SectionHeading({ index, title, lede }: SectionHeadingProps) {
  return (
    <div className="mb-10 max-w-3xl md:mb-14">
      <p className="font-mono text-xs tracking-[0.18em] text-accent uppercase">{index}</p>
      <h2 className="mt-3 font-serif text-3xl text-ink sm:text-4xl">{title}</h2>
      {lede ? <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">{lede}</p> : null}
    </div>
  );
}
