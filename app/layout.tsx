import type { Metadata, Viewport } from "next";
import { Fraunces, Public_Sans } from "next/font/google";

const titre = Fraunces({
  subsets: ["latin"],
  weight: ["700", "900"],
  variable: "--font-titre",
});
const texte = Public_Sans({
  subsets: ["latin"],
  variable: "--font-texte",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FAF6EE",
};

const description =
  "Deux relances écrites, envoyées toutes seules, pour récupérer les paniers que tes clients abandonnent. À partir de 29 € par mois, sans engagement.";

export const metadata: Metadata = {
  metadataBase: new URL("https://panier-perdu-fr.vercel.app"),
  title: "Panier Perdu — Récupère les paniers que tes clients abandonnent",
  description,
  openGraph: {
    title: "62 paniers abandonnés le mois dernier. Tu en as relancé combien ?",
    description,
    siteName: "Panier Perdu",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${titre.variable} ${texte.variable}`}>
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
