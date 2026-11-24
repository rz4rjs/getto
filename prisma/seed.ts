/**
 * Getto icin baslangic verisi.
 *
 * Buradaki her "Lab", lab-runner servisinde kendi izole Docker agina sahip,
 * internete cikisi olmayan, kurgusal bir hedef sistemi temsil eder.
 * toolTags alani, o lab icin konteyner imajina onceden kurulmus gercek ve
 * yasal guvenlik araclarini listeler (ornegin nmap, sqlmap) — bu araclar
 * sadece lab agindaki kurgusal hedeflere karsi calisir, disariya cikamaz.
 */
import { PrismaClient, Difficulty } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const categories = [
    {
      slug: "web-uygulama",
      name: "Web Uygulama Guvenligi",
      description:
        "SQL injection, XSS, kimlik dogrulama zafiyetleri ve kurgusal savunmasiz web uygulamalari.",
      icon: "globe",
    },
    {
      slug: "ag-guvenligi",
      name: "Ag Guvenligi",
      description:
        "Port tarama, servis parmak izi cikarma ve izole ag topolojilerinde kesif teknikleri.",
      icon: "network-wired",
    },
    {
      slug: "kimlik-dogrulama",
      name: "Kimlik Dogrulama Zafiyetleri",
      description:
        "Zayif parola politikalari ve oturum yonetimi hatalarini kontrollu ortamda incelemek.",
      icon: "key",
    },
  ];

  for (const c of categories) {
    await prisma.labCategory.upsert({
      where: { slug: c.slug },
      update: {},
      create: c,
    });
  }

  const webCat = await prisma.labCategory.findUniqueOrThrow({ where: { slug: "web-uygulama" } });
  const agCat = await prisma.labCategory.findUniqueOrThrow({ where: { slug: "ag-guvenligi" } });
  const kimlikCat = await prisma.labCategory.findUniqueOrThrow({ where: { slug: "kimlik-dogrulama" } });

  const labs = [
    {
      slug: "kirik-giris-formu",
      title: "Kirik Giris Formu",
      summary: "Kurgusal bir sirket intranetinin giris formunda SQL injection acigi bulunuyor.",
      briefing:
        "Hedef, lab agina izole edilmis kurgusal bir sirket intraneti. Giris formunun " +
        "sorgu olusturma mantigini inceleyerek kimlik dogrulamayi atlatmaniz bekleniyor.",
      difficulty: Difficulty.TEMEL,
      points: 100,
      categoryId: webCat.id,
      toolTags: "burp-suite,sqlmap,curl",
      flag: "GETTO{sql_injection_101}",
      isolationNote: "lab-runner: image getto/lab-broken-login:1 — sadece lab-net0 ile iletisimde",
    },
    {
      slug: "gizli-API-anahtari",
      title: "Gizli API Anahtari",
      summary: "Bir frontend paketinin icine gomulmus API anahtarini bulup yetkisiz erisim saglayin.",
      briefing:
        "Kurgusal bir SPA'nin derlenmis JS dosyalarinda sizdirilmis bir anahtar bulunuyor. " +
        "Anahtari bulup korunan bir uc noktaya erisim saglamaniz bekleniyor.",
      difficulty: Difficulty.TEMEL,
      points: 75,
      categoryId: webCat.id,
      toolTags: "burp-suite,grep,curl",
      flag: "GETTO{never_hardcode_secrets}",
      isolationNote: "lab-runner: image getto/lab-leaked-key:1",
    },
    {
      slug: "sessiz-port-taramasi",
      title: "Sessiz Port Taramasi",
      summary: "Izole bir ag segmentinde acik servisleri tespit edip parmak izi cikarin.",
      briefing:
        "lab-net1 agindaki kurgusal sunucuda hangi servislerin calistigini belirleyin ve " +
        "surum bilgilerinden bilinen bir zafiyeti iliskilendirin.",
      difficulty: Difficulty.ORTA,
      points: 150,
      categoryId: agCat.id,
      toolTags: "nmap,netcat",
      flag: "GETTO{recon_before_exploit}",
      isolationNote: "lab-runner: image getto/lab-portscan:1 — izole /24 ag segmenti",
    },
    {
      slug: "zayif-parola-politikasi",
      title: "Zayif Parola Politikasi",
      summary: "Kurgusal bir yonetim panelinin zayif parola politikasini kontrollu sekilde test edin.",
      briefing:
        "Yalnizca saglanan kucuk sozluk dosyasiyla, lab agindaki kurgusal panele karsi " +
        "kontrollu bir deneme calismasi yapin. Hiz siniri ve kilitlenme davranisini gozlemleyin.",
      difficulty: Difficulty.ORTA,
      points: 150,
      categoryId: kimlikCat.id,
      toolTags: "hydra,custom-wordlist",
      flag: "GETTO{rate_limit_matters}",
      isolationNote: "lab-runner: image getto/lab-weak-auth:1 — deneme sayisi loglanir",
    },
  ];

  for (const l of labs) {
    await prisma.lab.upsert({
      where: { slug: l.slug },
      update: {},
      create: l,
    });
  }

  const demoPasswordHash = await bcrypt.hash("getto-demo-2026", 12);
  await prisma.user.upsert({
    where: { email: "demo@getto.local" },
    update: {},
    create: {
      email: "demo@getto.local",
      username: "demo",
      displayName: "Demo Kullanici",
      passwordHash: demoPasswordHash,
      role: "STUDENT",
    },
  });

  console.log("Seed tamamlandi.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
