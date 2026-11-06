export function SectionHeading({
  eyebrow,
  title,
  body,
  invert = false,
}: {
  eyebrow?: string;
  title: string;
  body?: string;
  invert?: boolean;
}) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? (
        <p
          className={`text-xs font-semibold uppercase tracking-[0.22em] ${invert ? "text-teal" : "text-teal-dark"}`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`mt-3 font-display text-3xl leading-tight sm:text-4xl ${invert ? "text-white" : "text-deep"}`}
      >
        {title}
      </h2>
      {body ? (
        <p className={`mt-4 text-base leading-7 sm:text-lg ${invert ? "text-white/75" : "text-muted"}`}>
          {body}
        </p>
      ) : null}
    </div>
  );
}
