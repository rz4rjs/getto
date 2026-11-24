import Link from "next/link";
import type { ReactNode } from "react";
import { Icon } from "@/components/Icon";
import { Logo } from "@/components/Logo";
import { btnPrimary, btnSecondary } from "@/components/ui";

function Line({ delay, children }: { delay: number; children: ReactNode }) {
  return (
    <div
      className="reveal-line whitespace-pre"
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

const prompt = (
  <>
    <span className="text-term-prompt">getto@lab-net</span>
    <span className="text-term-dim">:~$ </span>
  </>
);

const STEPS = [
  {
    title: "Oturumu başlat",
    body: "Bir laboratuvar seç ve tek tıkla kendi izole ağını aç. Hedef sistem yalnızca sana ayrılır.",
  },
  {
    title: "Hedefi keşfet",
    body: "Senaryoyu oku, araçlarını kullan ve zafiyeti kendin bul. İpuçları senaryonun içinde.",
  },
  {
    title: "Bayrağı gönder",
    body: "Doğru bayrak puanını hesabına ekler ve seni sıralamada yukarı taşır.",
  },
];

const FACTS = [
  {
    icon: "flask" as const,
    title: "Kurgusal hedef",
    body: "Her senaryo, platformun önceden hazırladığı savunmasız bir sisteme karşı kurulur.",
  },
  {
    icon: "network-wired" as const,
    title: "İzole ağ",
    body: "Laboratuvar yalnızca kendi ağındaki hedefle konuşur, dışarı çıkış yoktur.",
  },
  {
    icon: "checklist" as const,
    title: "Kayıtlı ilerleme",
    body: "Oturumların ve gönderimlerin eğitim ilerlemeni ölçmek için tutulur.",
  },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <header className="border-b border-line bg-surface">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
          <Logo />
          <nav className="flex items-center gap-2 text-sm font-medium">
            <Link
              href="/giris"
              className="rounded-md px-3 py-1.5 text-ink-dim transition-colors hover:text-ink"
            >
              Giriş yap
            </Link>
            <Link
              href="/kayit"
              className="rounded-md bg-accent px-3.5 py-1.5 text-white transition-colors hover:bg-accent-strong"
            >
              Hesap oluştur
            </Link>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:gap-14 lg:py-24">
          <div>
            <h1 className="max-w-xl text-4xl font-bold leading-[1.08] sm:text-5xl">
              Web güvenliğini, gerçek bir hedefe dokunmadan öğren.
            </h1>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-ink-dim">
              Getto, her laboratuvarı kendi izole ağında çalıştıran bir eğitim
              platformu. Keşif, sızma testi ve savunma tekniklerini gerçek
              araçlarla ama yalnızca kurgusal hedeflere karşı çalışırsın.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/kayit" className={btnPrimary}>
                Eğitime başla
                <Icon name="arrowRight" />
              </Link>
              <Link href="/laboratuvarlar" className={btnSecondary}>
                Laboratuvarlara göz at
              </Link>
            </div>
          </div>

          {/* Örnek bir lab oturumu */}
          <div
            className="overflow-hidden rounded-lg border border-term-line bg-term shadow-sm"
            role="img"
            aria-label="Örnek bir laboratuvar oturumu: hedef üzerinde port taraması"
          >
            <div className="flex items-center justify-between border-b border-term-line px-4 py-2.5 text-xs text-term-dim">
              <span>lab-konsol</span>
              <span className="flex items-center gap-1.5 text-term-ok">
                <span className="h-1.5 w-1.5 rounded-full bg-term-ok" />
                izole ağ aktif
              </span>
            </div>
            <div className="overflow-x-auto px-4 py-5 font-mono text-[12.5px] leading-6 text-term-text sm:text-[13px]">
              <Line delay={200}>
                {prompt}nmap -sV hedef.lab
              </Line>
              <Line delay={900}>{""}</Line>
              <Line delay={1000}>
                <span className="text-term-dim">PORT      DURUM  SERVİS  SÜRÜM</span>
              </Line>
              <Line delay={1250}>22/tcp    açık   ssh     OpenSSH 8.9</Line>
              <Line delay={1450}>80/tcp    açık   http    nginx 1.22</Line>
              <Line delay={1650}>8080/tcp  açık   http    yönetim paneli</Line>
              <Line delay={2000}>{""}</Line>
              <Line delay={2100}>
                <span className="text-term-warn">
                  # ipucu: yönetim paneli varsayılan parolayla açık kalmış
                </span>
              </Line>
              <Line delay={2500}>
                {prompt}
                <span className="caret" />
              </Line>
            </div>
          </div>
        </section>

        {/* Akış */}
        <section className="border-y border-line bg-surface">
          <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
            <h2 className="text-2xl font-semibold sm:text-3xl">
              Bir laboratuvar böyle ilerler
            </h2>
            <ol className="mt-8 grid gap-8 md:grid-cols-3 md:gap-6">
              {STEPS.map((s, i) => (
                <li key={s.title} className="border-t-2 border-ink pt-4">
                  <span className="font-display text-sm font-semibold text-accent">
                    Adım {i + 1}
                  </span>
                  <h3 className="mt-1 text-lg font-semibold">{s.title}</h3>
                  <p className="mt-2 max-w-sm text-sm leading-relaxed text-ink-dim">
                    {s.body}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* İzolasyon */}
        <section className="mx-auto grid max-w-6xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[1fr_1.6fr] lg:gap-14">
          <div>
            <h2 className="text-2xl font-semibold sm:text-3xl">
              Gerçek dünyaya hiç dokunmaz
            </h2>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-ink-dim">
              Deneme yanılma serbest. Yanlış bir komut hiçbir gerçek sisteme
              zarar veremez.
            </p>
          </div>
          <dl className="grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-3">
            {FACTS.map((f) => (
              <div key={f.title} className="bg-surface p-5">
                <dt className="flex items-center gap-2 text-sm font-semibold">
                  <span className="grid h-7 w-7 place-items-center rounded-md bg-accent-soft text-accent">
                    <Icon name={f.icon} />
                  </span>
                  {f.title}
                </dt>
                <dd className="mt-3 text-sm leading-relaxed text-ink-dim">
                  {f.body}
                </dd>
              </div>
            ))}
          </dl>
        </section>
      </main>

      <footer className="border-t border-line px-4 py-6 text-center text-xs text-ink-faint sm:px-6">
        Getto yalnızca eğitim amaçlıdır. İzinsiz hiçbir sisteme saldırılmaz.
      </footer>
    </div>
  );
}
