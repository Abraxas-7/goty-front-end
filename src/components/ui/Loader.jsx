import { useGlobalContext } from "../../context/GlobalContext";

export default function Loader() {
  const { loading } = useGlobalContext();

  if (!loading) return null;

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Caricamento...</span>
      </div>
    </div>
  );
}
