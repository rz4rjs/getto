"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { Icon, type IconName } from "./Icon";
import { Logo } from "./Logo";

const NAV: { href: string; icon: IconName; label: string }[] = [
  { href: "/panel", icon: "gauge", label: "Panel" },
  { href: "/laboratuvarlar", icon: "flask", label: "Laboratuvarlar" },
  { href: "/siralama", icon: "trophy", label: "Sıralama" },
];

export function AppShell({
  children,
  userLabel,
}: {
  children: React.ReactNode;
  userLabel?: string;
}) {
  const pathname = usePathname();

  return (
    <div className="flex min-h-screen flex-col bg-paper text-ink">
      <header className="sticky top-0 z-20 border-b border-line bg-surface">
        <div className="mx-auto flex h-14 max-w-6xl items-center gap-4 px-4 sm:gap-8 sm:px-6">
          <Logo href="/panel" />

          <nav className="flex items-center gap-1" aria-label="Ana menü">
            {NAV.map((item) => {
              const active = pathname?.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-label={item.label}
                  aria-current={active ? "page" : undefined}
                  className={clsx(
                    "flex items-center gap-2 rounded-md px-2.5 py-1.5 text-sm font-medium transition-colors",
                    active
                      ? "bg-accent-soft text-accent-strong"
                      : "text-ink-dim hover:bg-paper hover:text-ink"
                  )}
                >
                  <Icon name={item.icon} />
                  <span className="hidden sm:inline">{item.label}</span>
                </Link>
              );
            })}
          </nav>

          <div className="ml-auto flex items-center gap-2">
            {userLabel && (
              <span className="flex items-center gap-2 text-sm text-ink-dim">
                <span className="grid h-7 w-7 place-items-center rounded-full bg-accent-soft text-xs font-semibold text-accent-strong">
                  {userLabel.charAt(0).toUpperCase()}
                </span>
                <span className="hidden max-w-32 truncate md:inline">
                  {userLabel}
                </span>
              </span>
            )}
            <Link
              href="/api/auth/signout"
              title="Oturumu kapat"
              aria-label="Oturumu kapat"
              className="flex items-center gap-2 rounded-md px-2.5 py-1.5 text-sm text-ink-dim transition-colors hover:bg-paper hover:text-danger"
            >
              <Icon name="logout" />
              <span className="hidden lg:inline">Çıkış</span>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t border-line px-4 py-4 text-center text-xs text-ink-faint sm:px-6">
        Getto yalnızca eğitim amaçlıdır. Laboratuvarlar izole ağda çalışır;
        ilerlemen yalnızca puan takibi için kaydedilir.
      </footer>
    </div>
  );
}
