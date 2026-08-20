type SectionHeadingProps = {
  id: string;
  index: string;
  title: string;
  subtitle?: string;
};

/**
 * Reusable section heading with a small index label, used to give each
 * section a consistent visual rhythm without large empty placeholders.
 */
export function SectionHeading({
  id,
  index,
  title,
  subtitle,
}: SectionHeadingProps) {
  return (
    <div className="section__head">
      <p className="section__index" id={`${id}-title`}>
        {index} — {title}
      </p>
      {subtitle ? <p className="section__subtitle">{subtitle}</p> : null}
    </div>
  );
}
