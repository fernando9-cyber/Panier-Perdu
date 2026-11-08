const LIEN_DECOUVERTE = "https://buy.stripe.com/test_7sYeV63qe5Fn8lP9UE2oE01";
const LIEN_ESSENTIEL = "https://buy.stripe.com/test_5kQ00ce4SffX45zgj22oE02";
const LIEN_CROISSANCE = "https://buy.stripe.com/test_aFaaEQbWKffXcC5d6Q2oE03";
const EMAIL = "equipe.panierperdu@gmail.com";

const css = `
:root{--creme:#FAF6EE;--encre:#1B1B18;--terre:#C2410C;--sapin:#14532D;--gris:#6B665C;--filet:#E4DCCB}
*{box-sizing:border-box}
html{-webkit-text-size-adjust:100%;scroll-behavior:smooth}
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
.btn.clair{background:transparent;color:var(--encre);border:2px solid var(--encre)}
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
#formules{scroll-margin-top:12px}
.plan{position:relative;background:#fff;border:1px solid var(--filet);border-radius:14px;padding:22px 20px;margin-bottom:18px}
.plan.top{border:2px solid var(--terre);padding-top:30px}
.badge{position:absolute;top:-13px;left:20px;background:var(--terre);color:#fff;font-size:14px;font-weight:700;padding:4px 12px;border-radius:20px}
.plan h3{font-family:var(--font-titre),Georgia,serif;font-size:24px;margin:0 0 4px}
.plan .pour{font-size:16px;color:var(--gris);margin-bottom:12px}
.prix{font-family:var(--font-titre),Georgia,serif;font-size:48px;font-weight:900;line-height:1}
.prix small{font-family:var(--font-texte),system-ui,sans-serif;font-size:17px;font-weight:400;color:var(--gris)}
.jour{font-size:15px;color:var(--gris);margin:4px 0 14px}
.plan ul{margin:0 0 18px;font-size:17px}
.garantie{background:var(--sapin);color:#fff;border-radius:12px;padding:20px;margin:24px 0 8px}
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
            envoyés tout seuls. À partir de 29 € par mois, sans engagement.
          </p>
          <a className="btn" href="#formules">
            Voir les formules (dès 29 €/mois)
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
              <span>Pack Essentiel</span>
              <span>49 €</span>
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
          <p>Pour Shopify et WooCommerce.</p>
        </section>

        <section>
          <h2>Comment ça se passe</h2>
          <ol>
            <li>Tu choisis ta formule et tu t’abonnes.</li>
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

        <section id="formules">
          <h2>Choisis ta formule</h2>
          <p style={{ color: "#6B665C" }}>
            Même service dans chaque formule : seul le nombre de paniers relancés
            change.
          </p>

          <div className="plan">
            <h3>Pack Découverte</h3>
            <p className="pour">Pour démarrer, moins de 25 commandes par mois.</p>
            <div className="prix">
              29 € <small>/ mois</small>
            </div>
            <p className="jour">soit environ 0,95 € par jour</p>
            <ul>
              <li>Jusqu’à 30 paniers relancés par mois</li>
              <li>2 relances écrites</li>
              <li>Compteur en euros</li>
            </ul>
            <a className="btn clair" href={LIEN_DECOUVERTE}>
              Choisir Découverte
            </a>
          </div>

          <div className="plan top">
            <span className="badge">Le plus choisi</span>
            <h3>Pack Essentiel</h3>
            <p className="pour">Pour quelques dizaines de commandes par mois.</p>
            <div className="prix">
              49 € <small>/ mois</small>
            </div>
            <p className="jour">soit environ 1,60 € par jour</p>
            <ul>
              <li>Jusqu’à 100 paniers relancés par mois</li>
              <li>2 relances écrites</li>
              <li>Code de réduction sur la seconde relance</li>
              <li>Compteur en euros</li>
            </ul>
            <a className="btn" href={LIEN_ESSENTIEL}>
              Choisir Essentiel
            </a>
          </div>

          <div className="plan">
            <h3>Pack Croissance</h3>
            <p className="pour">Pour les boutiques qui vendent davantage.</p>
            <div className="prix">
              79 € <small>/ mois</small>
            </div>
            <p className="jour">soit environ 2,60 € par jour</p>
            <ul>
              <li>Jusqu’à 300 paniers relancés par mois</li>
              <li>Tout le Pack Essentiel</li>
              <li>Réponse à tes questions sous 24 h</li>
            </ul>
            <a className="btn clair" href={LIEN_CROISSANCE}>
              Choisir Croissance
            </a>
          </div>

          <p className="note">
            Sans engagement, résiliable à tout moment. Si tu dépasses ta limite,
            je te propose la formule du dessus : aucun frais caché.
          </p>

          <div className="garantie">
            <h3>Satisfait ou remboursé, 14 jours</h3>
            <p>
              Si ça ne te convient pas, écris-moi à {EMAIL} dans les 14 jours
              suivant ton paiement.
            </p>
            <p>Je te rembourse l’intégralité sous 5 jours ouvrés. Sans question.</p>
          </div>
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
              À l’envoi de deux relances personnalisées pour tes paniers
              abandonnés, dans la limite de ta formule, et au suivi en euros de
              ce qu’elles te font récupérer.
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
        <a className="btn" href="#formules">
          Choisir ma formule (dès 29 €/mois)
        </a>
      </div>
    </>
  );
}
