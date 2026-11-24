import Link from "next/link";

export function Logo({ href = "/" }: { href?: string }) {
  return (
    <Link href={href} className="flex items-center gap-2">
      <span className="grid h-7 w-7 place-items-center rounded-md bg-accent font-display text-[15px] font-bold text-white">
        G
      </span>
      <span className="font-display text-lg font-semibold tracking-tight text-ink">
        getto
      </span>
    </Link>
  );
}
