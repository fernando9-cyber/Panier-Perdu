import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Panier Perdu — Récupère tes paniers abandonnés",
  description:
    "Deux relances écrites, envoyées automatiquement, pour récupérer les paniers que tes clients abandonnent.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body style={{ margin: 0, fontFamily: "system-ui, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
