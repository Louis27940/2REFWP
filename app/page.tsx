import Image from "next/image";
import type { Metadata } from "next";
import { ArrowRight, Code2, Mail, MonitorSmartphone, Search, Send } from "lucide-react";

export async function generateMetadata(): Promise<Metadata> {
  const title = "Développeur Web Freelance à Caen | Louis Simon";
  const description =
    "Louis Simon, développeur web freelance à Caen, conçoit des sites Next.js rapides, optimisés SEO et orientés conversion pour les entreprises locales.";

  return {
    title,
    description,
    alternates: { canonical: "https://www.louis-simon.dev" },
    openGraph: {
      title,
      description,
      url: "https://www.louis-simon.dev",
      type: "website",
      locale: "fr_FR",
      siteName: "Louis Simon | Freelance Next.js",
    },
  };
}

const services = [
  {
    icon: Code2,
    title: "Sites sur-mesure en Next.js",
    description:
      "Architecture performante, composants réutilisables et design minimaliste pour un site rapide et durable.",
  },
  {
    icon: Search,
    title: "SEO technique & contenu",
    description:
      "Structuration sémantique, Core Web Vitals et rédaction optimisée pour attirer des leads qualifiés à Caen et au-delà.",
  },
  {
    icon: MonitorSmartphone,
    title: "Expérience mobile-first",
    description:
      "Interfaces accessibles, animations légères et parcours clair pour convertir vos visiteurs en clients.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Louis Simon",
  jobTitle: "Développeur Web Freelance",
  url: "https://www.louissimon.dev",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Caen",
    addressCountry: "FR",
  },
  areaServed: "Caen",
  description:
    "Développeur web freelance basé à Caen, spécialisé en Next.js, SEO et création de sites performants.",
  knowsAbout: ["Next.js", "SEO", "Développement web", "React"],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header className="layout-container py-10 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image
            src="/portrait-louis.jpg"
            alt="Portrait de Louis Simon, développeur web freelance à Caen"
            width={48}
            height={48}
            className="rounded-full border border-accent/40 object-cover"
            priority
          />
          <div>
            <p className="text-sm text-white/60">Louis Simon</p>
            <p className="text-xs text-white/40">Développeur web freelance · Caen</p>
          </div>
        </div>
        <a
          className="inline-flex items-center gap-2 rounded-full bg-white text-black px-4 py-2 text-sm font-semibold shadow-lg shadow-accent/30 transition hover:-translate-y-0.5"
          href="mailto:contact@louissimon.dev"
        >
          Me contacter
          <ArrowRight className="h-4 w-4" />
        </a>
      </header>

      <main className="layout-container space-y-16 pb-20">
        <section className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-center">
          <div className="space-y-6">
            <p className="section-label">Développeur web · Freelance · Caen</p>
            <h1 className="text-4xl sm:text-5xl font-semibold leading-tight">
              Développeur Web Freelance à Caen, orienté résultats et performance
            </h1>
            <p className="text-lg text-white/70 leading-relaxed">
              Je suis Louis Simon, développeur web freelance basé à Caen. J'aide les entreprises locales à lancer des sites Next.js rapides, optimisés SEO et pensés pour convertir chaque visiteur en client.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                className="inline-flex items-center gap-2 rounded-full bg-accent/90 text-black px-5 py-3 font-semibold shadow-glow transition hover:-translate-y-1"
                href="mailto:contact@louissimon.dev?subject=Projet%20web%20-%20Caen"
              >
                Discuter de votre projet
                <Send className="h-4 w-4" />
              </a>
              <a
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-white/80 transition hover:-translate-y-1 hover:border-white/40"
                href="#contact"
              >
                Voir mes disponibilités
              </a>
            </div>
            <div className="flex flex-wrap gap-4 text-sm text-white/60">
              <span className="inline-flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-green-400" /> Délai moyen : 2-3 semaines
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-green-400" /> Basé à Caen · remote friendly
              </span>
            </div>
          </div>

          <div className="content-card p-6 space-y-5">
            <div className="flex items-center justify-between">
              <p className="text-sm text-white/60">Stack orientée performance</p>
              <span className="rounded-full bg-accent/10 px-3 py-1 text-xs text-accent">Next.js · SEO · UX</span>
            </div>
            <div className="space-y-4 text-sm text-white/70">
              <div className="flex justify-between border-b border-white/5 pb-3">
                <span>Core Web Vitals</span>
                <span className="text-white">90+ score</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-3">
                <span>Optimisation SEO locale</span>
                <span className="text-white">Caen & Normandie</span>
              </div>
              <div className="flex justify-between">
                <span>Maintenance & évolutivité</span>
                <span className="text-white">Incluse</span>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-white/5 px-4 py-3">
              <Mail className="h-5 w-5 text-accent" />
              <div>
                <p className="text-sm text-white">contact@louissimon.dev</p>
                <p className="text-xs text-white/60">Réponse en moins de 24h</p>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-10 lg:grid-cols-2">
          <div className="content-card p-8 space-y-4">
            <p className="section-label">À propos</p>
            <h2 className="text-3xl font-semibold">
              Développeur web freelance à Caen, étudiant et passionné de produits numériques
            </h2>
            <p className="text-white/70 leading-relaxed">
              Étudiant en informatique et freelance, j'accompagne les entreprises de Caen dans la création de sites qui chargent vite, sont bien référencés et convertissent. Mon approche est pragmatique : comprendre vos objectifs business, prioriser les fonctionnalités et livrer un produit clair, maintenable et mesurable.
            </p>
          </div>

          <div className="content-card p-8 space-y-6">
            <p className="section-label">Méthode</p>
            <ol className="space-y-4 text-white/80">
              <li>
                <p className="font-semibold text-white">1. Audit express</p>
                <p className="text-sm text-white/60">Analyse de votre besoin, SEO rapide et priorisation.</p>
              </li>
              <li>
                <p className="font-semibold text-white">2. Prototype & contenu</p>
                <p className="text-sm text-white/60">Maquette fonctionnelle et messages orientés conversion.</p>
              </li>
              <li>
                <p className="font-semibold text-white">3. Mise en ligne mesurable</p>
                <p className="text-sm text-white/60">Déploiement, suivi des métriques et itérations.</p>
              </li>
            </ol>
          </div>
        </section>

        <section className="space-y-6" aria-labelledby="services">
          <div className="flex items-end justify-between">
            <div>
              <p className="section-label">Services</p>
              <h2 id="services" className="text-3xl font-semibold">
                Services de développeur web freelance à Caen
              </h2>
              <p className="text-white/70 mt-2">
                Des prestations pensées pour gagner en visibilité et en conversions, avec une base technique solide.
              </p>
            </div>
            <a
              className="hidden md:inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm text-white/70 transition hover:-translate-y-1 hover:border-white/40"
              href="mailto:contact@louissimon.dev?subject=Devis%20développeur%20web%20Caen"
            >
              Demander un devis <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <article key={service.title} className="content-card p-6 space-y-4">
                <service.icon className="h-6 w-6 text-accent" />
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="text-sm text-white/70 leading-relaxed">{service.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="content-card p-8 space-y-6" aria-labelledby="contact-title">
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-3">
              <p className="section-label">Contact</p>
              <h2 id="contact-title" className="text-3xl font-semibold">
                Parlons de votre projet web à Caen
              </h2>
              <p className="text-white/70">
                Décrivez votre besoin (site vitrine, refonte, SEO) et je reviens vers vous sous 24h avec une proposition claire.
              </p>
            </div>
            <span className="hidden sm:inline rounded-full bg-accent/10 px-3 py-1 text-xs text-accent">Places limitées ce mois-ci</span>
          </div>
          <form
            className="grid gap-4 md:grid-cols-2"
            action="https://formsubmit.co/contact@louissimon.dev"
            method="POST"
            encType="application/x-www-form-urlencoded"
          >
            <input type="hidden" name="_subject" value="Demande devis site web - Caen" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="https://www.louis-simon.dev/?sent=1" />
            <label className="md:col-span-1 space-y-2 text-sm text-white/80">
              Nom
              <input
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 focus:border-accent focus:outline-none"
                name="Nom"
                required
                placeholder="Votre nom"
              />
            </label>
            <label className="md:col-span-1 space-y-2 text-sm text-white/80">
              Email
              <input
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 focus:border-accent focus:outline-none"
                type="email"
                name="Email"
                required
                placeholder="vous@entreprise.fr"
              />
            </label>
            <label className="md:col-span-2 space-y-2 text-sm text-white/80">
              Projet
              <textarea
                className="min-h-[140px] w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 focus:border-accent focus:outline-none"
                name="Projet"
                required
                placeholder="Présentez votre objectif, budget estimé et délai souhaité."
              />
            </label>
            <button
              type="submit"
              className="md:col-span-2 inline-flex items-center justify-center gap-2 rounded-full bg-white text-black px-6 py-3 font-semibold shadow-lg shadow-accent/30 transition hover:-translate-y-1"
            >
              Envoyer ma demande
              <Send className="h-4 w-4" />
            </button>
          </form>
        </section>
      </main>

      <footer className="layout-container py-10 flex flex-col gap-3 border-t border-white/5 text-sm text-white/60">
        <p>Louis Simon · Développeur web freelance à Caen</p>
        <p>Sites Next.js performants, SEO local et accompagnement de bout en bout.</p>
        <div className="flex gap-4">
          <a className="hover:text-white" href="mailto:contact@louissimon.dev">contact@louissimon.dev</a>
          <span className="text-white/30">·</span>
          <a className="hover:text-white" href="#services">Services</a>
          <a className="hover:text-white" href="#contact">Contact</a>
        </div>
      </footer>
    </>
  );
}
