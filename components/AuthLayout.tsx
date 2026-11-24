import { Logo } from "./Logo";

export function AuthLayout({
  title,
  description,
  children,
  footer,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
  footer: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-paper px-4 py-10">
      <Logo />
      <div className="mt-8 w-full max-w-sm rounded-lg border border-line bg-surface p-6 sm:p-8">
        <h1 className="text-2xl font-semibold text-ink">{title}</h1>
        <p className="mt-1.5 text-sm text-ink-dim">{description}</p>
        {children}
      </div>
      <p className="mt-6 text-sm text-ink-dim">{footer}</p>
    </div>
  );
}
