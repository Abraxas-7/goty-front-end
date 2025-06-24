import { useGlobalContext } from "../../context/GlobalContext";

export default function Loader() {
  const { loading } = useGlobalContext();

  if (!loading) return null;

  return (
    <div
      className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        zIndex: 9999,
      }}
    >
      <div className="spinner-border text-light" role="status">
        <span className="visually-hidden">Caricamento...</span>
      </div>
    </div>
  );
}
