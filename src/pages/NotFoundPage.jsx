import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center text-white text-center"
      style={{ minHeight: "80vh", backgroundColor: "#202634" }}
    >
      <h1 className="display-1 fw-bold">404</h1>
      <p className="fs-4">Oops! La pagina che cerchi non esiste.</p>
      <p className="text-muted mb-4">
        Forse l'URL è sbagliato oppure il contenuto è stato rimosso.
      </p>
      <Link to="/" className="btn btn-danger">
        Torna alla Home
      </Link>
    </div>
  );
}
