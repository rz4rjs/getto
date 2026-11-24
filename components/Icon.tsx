import type { ReactNode } from "react";

/*
  Satır içi SVG ikon seti. Boyut her zaman `className` ile kontrol edilir;
  varsayılan 16px (h-4 w-4). Böylece ikonlar asla kapsayıcıyı doldurmaz.
*/

const paths: Record<string, ReactNode> = {
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3c2.5 2.7 3.8 5.7 3.8 9s-1.3 6.3-3.8 9c-2.5-2.7-3.8-5.7-3.8-9S9.5 5.7 12 3z" />
    </>
  ),
  "network-wired": (
    <>
      <rect x="9" y="3" width="6" height="5" rx="1" />
      <rect x="3" y="16" width="6" height="5" rx="1" />
      <rect x="15" y="16" width="6" height="5" rx="1" />
      <path d="M12 8v4M6 16v-4h12v4" />
    </>
  ),
  key: (
    <>
      <circle cx="8" cy="15" r="4" />
      <path d="M11 12l9-9M16 7l3 3M14 9l2 2" />
    </>
  ),
  "shield-halved": (
    <>
      <path d="M12 3l8 3v6c0 4.5-3.2 8-8 9-4.8-1-8-4.5-8-9V6l8-3z" />
      <path d="M12 3v18" />
    </>
  ),
  terminal: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M7 9l3 3-3 3M13 15h4" />
    </>
  ),
  user: (
    <>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21c0-4 3.6-7 8-7s8 3 8 7" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3.5" />
      <path d="M2.5 20c0-3.5 3-6 6.5-6s6.5 2.5 6.5 6" />
      <path d="M16 4.5a3.5 3.5 0 010 7M18 14.5c2 .8 3.5 2.7 3.5 5.5" />
    </>
  ),
  chart: <path d="M4 20v-8M10 20V5M16 20v-11M21 20H3" />,
  flask: (
    <>
      <path d="M9 3h6M10 3v6L4.5 19a1.5 1.5 0 001.3 2.2h12.4a1.5 1.5 0 001.3-2.2L14 9V3" />
      <path d="M7.5 15h9" />
    </>
  ),
  check: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M8 12.5l3 3 5-6" />
    </>
  ),
  xmark: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M9 9l6 6M15 9l-6 6" />
    </>
  ),
  play: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M10 8.5l5.5 3.5-5.5 3.5z" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  trophy: (
    <>
      <path d="M8 4h8v5a4 4 0 01-8 0V4z" />
      <path d="M8 6H4v1.5A3.5 3.5 0 007.5 11M16 6h4v1.5a3.5 3.5 0 01-3.5 3.5M12 13v4M8.5 20h7M10 17h4" />
    </>
  ),
  gear: (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1" />
    </>
  ),
  logout: (
    <>
      <path d="M10 4H5a1 1 0 00-1 1v14a1 1 0 001 1h5" />
      <path d="M15 8l4 4-4 4M19 12H9" />
    </>
  ),
  arrowRight: <path d="M5 12h14M13 6l6 6-6 6" />,
  plus: <path d="M12 5v14M5 12h14" />,
  search: (
    <>
      <circle cx="11" cy="11" r="6.5" />
      <path d="M16 16l4.5 4.5" />
    </>
  ),
  info: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 11v5M12 8v.01" />
    </>
  ),
  warning: (
    <>
      <path d="M12 4l9.5 16h-19L12 4z" />
      <path d="M12 10v4.5M12 17v.01" />
    </>
  ),
  server: (
    <>
      <rect x="3" y="4" width="18" height="6" rx="1.5" />
      <rect x="3" y="14" width="18" height="6" rx="1.5" />
      <path d="M7 7v.01M7 17v.01" />
    </>
  ),
  lock: (
    <>
      <rect x="5" y="11" width="14" height="9" rx="1.5" />
      <path d="M8 11V8a4 4 0 018 0v3" />
    </>
  ),
  unlock: (
    <>
      <rect x="5" y="11" width="14" height="9" rx="1.5" />
      <path d="M8 11V8a4 4 0 017.5-2" />
    </>
  ),
  bug: (
    <>
      <rect x="8" y="8" width="8" height="11" rx="4" />
      <path d="M9 8a3 3 0 016 0M4 13h4M16 13h4M5 7l3 2M19 7l-3 2M5 19l3-2M19 19l-3-2" />
    </>
  ),
  branch: (
    <>
      <circle cx="6" cy="5" r="2" />
      <circle cx="6" cy="19" r="2" />
      <circle cx="18" cy="9" r="2" />
      <path d="M6 7v10M18 11a6 6 0 01-6 6H8" />
    </>
  ),
  chevronRight: <path d="M9 6l6 6-6 6" />,
  bolt: <path d="M13 3L5 13.5h6L10 21l8-10.5h-6L13 3z" />,
  checklist: <path d="M4 7l2 2 3-3.5M4 17l2 2 3-3.5M12 7.5h8M12 17.5h8" />,
  gauge: (
    <>
      <path d="M4.5 18a8.5 8.5 0 1115 0" />
      <path d="M12 14l4-5" />
    </>
  ),
};

export type IconName =
  | "globe"
  | "network-wired"
  | "key"
  | "shield-halved"
  | "terminal"
  | "user"
  | "users"
  | "chart"
  | "flask"
  | "check"
  | "xmark"
  | "play"
  | "clock"
  | "trophy"
  | "gear"
  | "logout"
  | "arrowRight"
  | "plus"
  | "search"
  | "info"
  | "warning"
  | "server"
  | "lock"
  | "unlock"
  | "bug"
  | "branch"
  | "chevronRight"
  | "bolt"
  | "checklist"
  | "gauge";

export function Icon({
  name,
  className = "h-4 w-4",
}: {
  name: IconName | (string & {});
  className?: string;
}) {
  // Veritabanından gelen bilinmeyen bir ikon adı arayüzü bozmasın.
  const shape = paths[name] ?? paths.flask;
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={`shrink-0 ${className}`}
    >
      {shape}
    </svg>
  );
}
