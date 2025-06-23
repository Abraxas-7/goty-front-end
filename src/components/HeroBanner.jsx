import { useNavigate } from "react-router-dom";

export default function HeroBanner() {
  const navigate = useNavigate();

  return (
    <div
      className="text-center text-white py-5 px-3 position-relative overflow-hidden shadow"
      style={{
        backgroundColor: "#1b1f2b",
        backgroundImage: 'url("/assets/bg.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          background: "rgba(0,0,0,0.6)",
          zIndex: 0,
        }}
      />

      <div className="container position-relative" style={{ zIndex: 1 }}>
        <h1 className="display-4 fw-bold">Esplora, Confronta, Scopri</h1>
        <p className="lead mt-3">
          Questo blog nasce per aiutarti a orientarti nel vasto mondo dei
          videogiochi. Qui ti offriamo ispirazione, dettagli, e confronti sui
          migliori titoli disponibili su ogni piattaforma.
        </p>

        <button
          className="btn btn-danger btn-lg mt-3 mb-1"
          onClick={() => navigate("/search")}
        >
          Vai alla Ricerca Avanzata
        </button>

        <p className="small mt-1">
          Filtra per genere, piattaforma, sviluppatore e ordina i risultati
          secondo le tue preferenze.
        </p>
      </div>
    </div>
  );
}
