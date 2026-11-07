export default function Home() {
  return (
    <main style={{ maxWidth: 480, margin: "0 auto", padding: "48px 20px" }}>
      <h1 style={{ fontSize: 32, lineHeight: 1.15, margin: 0 }}>
        Récupère les paniers que tes clients abandonnent.
      </h1>
      <p style={{ fontSize: 18, lineHeight: 1.5, marginTop: 16 }}>
        Deux relances écrites, envoyées toutes seules. 39 € par mois, sans
        engagement.
      </p>
      <a
        href="https://buy.stripe.com/test_3cIeV67Gud7Pby15Eo2oE00"
        style={{
          display: "block",
          marginTop: 24,
          padding: "16px 20px",
          background: "#111",
          color: "#fff",
          textAlign: "center",
          fontSize: 18,
          textDecoration: "none",
          borderRadius: 8,
        }}
      >
        Je commence : 39 €/mois, sans engagement
      </a>
    </main>
  );
}
