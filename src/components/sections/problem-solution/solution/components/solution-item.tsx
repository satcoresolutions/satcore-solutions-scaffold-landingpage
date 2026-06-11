interface SolutionItemProps {
  title: string;

  description: string;
}

export default function SolutionItem({
  title,
  description,
}: SolutionItemProps) {
  return (
    <div
      className="
        flex
        gap-5
      "
    >
      <div
        className="
          mt-2
          h-2
          w-2
          rounded-full
          shrink-0
        "
        style={{
          background:
            "var(--color-primary)",
        }}
      />

      <div>
        <h3>
          {title}
        </h3>

        <p
          className="
            mt-2
          "
        >
          {description}
        </p>
      </div>
    </div>
  );
}