const LEVELS: Record<string, { label: string; level: number; fill: string; text: string }> = {
  TEMEL: { label: "Temel", level: 1, fill: "bg-ok", text: "text-ok" },
  ORTA: { label: "Orta", level: 2, fill: "bg-warn", text: "text-warn" },
  ILERI: { label: "İleri", level: 3, fill: "bg-danger", text: "text-danger" },
  UZMAN: { label: "Uzman", level: 4, fill: "bg-expert", text: "text-expert" },
};

export function Difficulty({ difficulty }: { difficulty: string }) {
  const d = LEVELS[difficulty] ?? LEVELS.TEMEL;
  return (
    <span
      className={`inline-flex items-center gap-2 text-xs font-medium ${d.text}`}
      title={`Zorluk: ${d.label}`}
    >
      <span className="flex gap-0.5" aria-hidden="true">
        {[1, 2, 3, 4].map((i) => (
          <span
            key={i}
            className={`h-1.5 w-3 rounded-full ${i <= d.level ? d.fill : "bg-line"}`}
          />
        ))}
      </span>
      {d.label}
    </span>
  );
}
