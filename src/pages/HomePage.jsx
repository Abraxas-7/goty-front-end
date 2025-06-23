import GameRowSection from "../components/GameRowSection";
import HeroBanner from "../components/HeroBanner";
import SectionIntro from "../components/SectionIntro";

export default function HomePage() {
  return (
    <>
      {/* Hero banner */}
      <HeroBanner />

      {/* Generic section */}
      <GameRowSection
        title="Ultimi aggiunti"
        endpoint={`${import.meta.env.VITE_API_URL}/games?sort=created_at`}
        searchLink={`/search?sort=created_at`}
      />

      <GameRowSection
        title="Più votati"
        endpoint={`${import.meta.env.VITE_API_URL}/games?sort=rating_desc`}
        searchLink={`/search?sort=-created_at`}
      />

      {/* Console section */}

      <SectionIntro
        title="Gaming su Console: tra Prestazioni e Esperienza"
        content="Le console hanno ridefinito il modo in cui giochiamo. PlayStation 5, Xbox Series X e Nintendo Switch
        offrono esperienze uniche, ognuna con i suoi punti di forza. In questa sezione esploreremo i migliori giochi
        ottimizzati per console, offrendo uno sguardo su come l'hardware influenza il gameplay."
        background="#04060E"
      />

      <GameRowSection
        title="Migliori su PS5"
        endpoint={`${
          import.meta.env.VITE_API_URL
        }/games?console=10&sort=rating_desc`}
        searchLink={`/search?console=10&sort=rating_desc`}
      />

      <GameRowSection
        title="Migliori su Nintendo Switch"
        endpoint={`${
          import.meta.env.VITE_API_URL
        }/games?console=1&sort=rating_desc`}
        searchLink={`/search?console=1&sort=rating_desc`}
      />

      <GameRowSection
        title="Migliori disponibili anche su PC"
        endpoint={`${
          import.meta.env.VITE_API_URL
        }/games?console=10&sort=rating_desc`}
        searchLink={`/search?console=30&sort=rating_desc`}
      />

      {/* Genre section */}

      <SectionIntro
        title="Un Viaggio tra i Generi Videoludici"
        content="Dal brivido dell'azione alla profondità dei giochi di ruolo, i generi videoludici raccontano esperienze
        uniche e diversificate. In questa sezione esploriamo i generi più popolari e le loro caratteristiche distintive,
        per aiutarti a trovare il tuo prossimo gioco preferito in base al tuo stile di gioco."
        background="#0A0D18"
      />

      <GameRowSection
        title="Migliori giochi di azione"
        endpoint={`${
          import.meta.env.VITE_API_URL
        }/games?genre=1&sort=rating_desc`}
        searchLink={`/search?genre=1&sort=rating_desc`}
      />

      <GameRowSection
        title="Migliori giochi adventure"
        endpoint={`${
          import.meta.env.VITE_API_URL
        }/games?genre=2&sort=rating_desc`}
        searchLink={`/search?genre=2&sort=rating_desc`}
      />

      <GameRowSection
        title="Migliori giochi RPG"
        endpoint={`${
          import.meta.env.VITE_API_URL
        }/games?genre=3&sort=rating_desc`}
        searchLink={`/search?genre=3&sort=rating_desc`}
      />
    </>
  );
}
