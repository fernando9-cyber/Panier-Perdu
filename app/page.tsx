const LIEN = "https://buy.stripe.com/test_3cIeV67Gud7Pby15Eo2oE00";
const EMAIL = "equipe.panierperdu@gmail.com";

const css = `
:root{--creme:#FAF6EE;--encre:#1B1B18;--terre:#C2410C;--sapin:#14532D;--gris:#6B665C;--filet:#E4DCCB}
*{box-sizing:border-box}
html{-webkit-text-size-adjust:100%}
body{background:var(--creme);color:var(--encre);font-family:var(--font-texte),system-ui,sans-serif;font-size:18px;line-height:1.55}
.w{max-width:560px;margin:0 auto;padding:0 20px}
h1,h2{font-family:var(--font-titre),Georgia,serif;font-weight:900;line-height:1.1;margin:0}
h1{font-size:38px;letter-spacing:-0.5px}
h2{font-size:28px;margin-bottom:16px}
p{margin:0 0 14px}
section{padding:40px 0;border-top:1px solid var(--filet)}
.hero{padding:36px 0 32px;border:0}
.marque{font-weight:700;font-size:15px;letter-spacing:.04em;text-transform:uppercase;color:var(--terre);margin-bottom:20px}
.btn{display:block;width:100%;min-height:56px;padding:16px 20px;background:var(--terre);color:#fff;text-align:center;font-weight:700;font-size:18px;text-decoration:none;border-radius:10px}
.note{font-size:15px;color:var(--gris);margin-top:10px;text-align:center}
.video{padding:0 0 40px}
.video video{display:block;width:100%;max-width:300px;aspect-ratio:9/16;margin:0 auto;border-radius:12px;background:#0b1a10}
.chiffre{background:#fff;border:1px solid var(--filet);border-radius:12px;padding:20px;margin:20px 0}
.ligne{display:flex;justify-content:space-between;gap:12px;padding:8px 0;border-bottom:1px solid var(--filet);font-size:17px}
.ligne:last-child{border:0}
.ligne span:last-child{font-weight:700;white-space:nowrap}
.vert{color:var(--sapin)}
ol,ul{padding-left:22px;margin:0 0 14px}
li{margin-bottom:10px}
.prix{font-family:var(--font-titre),Georgia,serif;font-size:56px;font-weight:900;line-height:1}
.garantie{background:var(--sapin);color:#fff;border-radius:12px;padding:20px;margin:20px 0}
.garantie h3{margin:0 0 8px;font-size:20px}
.garantie p{margin:0 0 8px}
details{border-bottom:1px solid var(--filet);padding:14px 0}
summary{font-weight:700;cursor:pointer;list-style:none;min-height:28px}
summary::-webkit-details-marker{display:none}
details p{margin:10px 0 0;color:#3b3a35}
footer{padding:32px 0 110px;font-size:15px;color:var(--gris)}
.barre{position:fixed;left:0;right:0;bottom:0;background:var(--creme);border-top:1px solid var(--filet);padding:10px 20px calc(10px + env(safe-area-inset-bottom,0px));z-index:5}
.barre .btn{max-width:520px;margin:0 auto}
`;

export default function Home() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <main className="w">
        <div className="hero">
          <div className="marque">Panier Perdu</div>
          <h1>62 paniers abandonnés le mois dernier. Tu en as relancé combien ?</h1>
          <p style={{ marginTop: 16 }}>
            Panier Perdu relance tes paniers à ta place : deux e-mails écrits,
            envoyés tout seuls. 39 € par mois, sans engagement.
          </p>
          <a className="btn" href={LIEN}>
            Je commence : 39 €/mois
          </a>
          <p className="note">Remboursé sous 14 jours si ça ne te convient pas.</p>
        </div>

        <div className="video">
          <video
            src="/trendsaas-panier.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-label="62 paniers abandonnés le mois dernier. Tu en as relancé combien ?"
          />
        </div>

        <section>
          <h2>Environ 7 paniers sur 10 ne finissent jamais en commande.</h2>
          <p>
            Tes clients ajoutent des produits, puis partent. Les gros outils de
            relance sont faits pour les grosses boutiques et coûtent trop cher
            pour quelques dizaines de commandes par mois. Alors tu ne relances
            rien.
          </p>
          <div className="chiffre">
            <p style={{ margin: "0 0 8px", fontSize: 15, color: "#6B665C" }}>
              Exemple pour une petite boutique
            </p>
            <div className="ligne">
              <span>40 paniers abandonnés par mois</span>
              <span>× 55 €</span>
            </div>
            <div className="ligne">
              <span>Chiffre d’affaires qui dort</span>
              <span>2 200 €</span>
            </div>
            <div className="ligne">
              <span>Si 1 panier sur 10 revient</span>
              <span className="vert">+ 220 €</span>
            </div>
            <div className="ligne">
              <span>Ton abonnement</span>
              <span>39 €</span>
            </div>
          </div>
          <p className="note" style={{ textAlign: "left" }}>
            Exemple chiffré, pas une promesse. Tes résultats dépendent de ta
            boutique.
          </p>
        </section>

        <section>
          <h2>Ce que tu obtiens</h2>
          <ul>
            <li>
              <b>Deux relances écrites pour toi.</b> La première rappelle le
              panier, la seconde relance quelques jours plus tard.
            </li>
            <li>
              <b>Un code de réduction, si tu veux.</b> Tu peux l’ajouter à la
              seconde relance, ou t’en passer.
            </li>
            <li>
              <b>Un compteur en euros.</b> Tu vois ce que les relances t’ont
              fait récupérer, sans tableau compliqué.
            </li>
          </ul>
          <p>Pour Shopify et WooCommerce. Relances illimitées.</p>
        </section>

        <section>
          <h2>Comment ça se passe</h2>
          <ol>
            <li>Tu t’abonnes (39 € par mois).</li>
            <li>Tu m’envoies l’accès à ta boutique par e-mail.</li>
            <li>
              Je configure tes deux relances à ton image, sous 48 h. Tu valides
              les textes.
            </li>
          </ol>
          <p>
            Tu fais partie des premiers clients : je m’occupe moi-même de la
            mise en place.
          </p>
        </section>

        <section>
          <h2>Un prix simple</h2>
          <div className="prix">39 €</div>
          <p style={{ marginTop: 8 }}>
            par mois, soit environ 1,30 € par jour. Sans engagement, résiliable
            à tout moment.
          </p>
          <div className="garantie">
            <h3>Satisfait ou remboursé, 14 jours</h3>
            <p>
              Si ça ne te convient pas, écris-moi à {EMAIL} dans les 14 jours
              suivant ton paiement.
            </p>
            <p>Je te rembourse l’intégralité sous 5 jours ouvrés. Sans question.</p>
          </div>
          <a className="btn" href={LIEN}>
            Je commence : 39 €/mois
          </a>
          <p className="note">Sans engagement, résiliable à tout moment.</p>
        </section>

        <section>
          <h2>Questions fréquentes</h2>
          <details>
            <summary>Est-ce que ça marche pour ma boutique ?</summary>
            <p>
              Si tu vends avec Shopify ou WooCommerce et que tu reçois quelques
              dizaines de commandes par mois, oui. Si ta boutique est
              différente, écris-moi avant de t’abonner.
            </p>
          </details>
          <details>
            <summary>Combien de temps ça me prend ?</summary>
            <p>
              Environ 5 minutes : tu m’envoies l’accès à ta boutique et tu
              valides les textes. Le reste est fait pour toi sous 48 h.
            </p>
          </details>
          <details>
            <summary>Et si je veux arrêter ?</summary>
            <p>
              Tu résilies quand tu veux, sans justification. Dans les 14
              premiers jours, tu es en plus remboursé.
            </p>
          </details>
          <details>
            <summary>À quoi sert exactement ce que je paie ?</summary>
            <p>
              À l’envoi illimité de deux relances personnalisées pour tes
              paniers abandonnés, et au suivi en euros de ce qu’elles te font
              récupérer.
            </p>
          </details>
        </section>

        <footer>
          Une question ? {EMAIL}
          <br />
          Mentions légales, CGV et confidentialité : à venir.
        </footer>
      </main>

      <div className="barre">
        <a className="btn" href={LIEN}>
          Je commence : 39 €/mois
        </a>
      </div>
    </>
  );
}
