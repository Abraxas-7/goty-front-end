import { Link } from "react-router-dom";

export default function GameCard({ game }) {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <Link
      to={`/game/${game.slug}`}
      onClick={handleClick}
      className="text-decoration-none"
    >
      <div
        className="position-relative w-100"
        style={{
          aspectRatio: "3 / 4",
          cursor: "pointer",
        }}
      >
        <img
          src={`${import.meta.env.VITE_STORAGE_URL}/${game.cover_image}`}
          alt={game.title}
          className="w-100 h-100 object-fit-fill rounded shadow"
        />
        <div
          className="position-absolute bottom-0 start-0 text-white bg-dark bg-opacity-50 px-2 py-1 w-100"
          style={{
            fontSize: "0.9rem",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {game.title}
        </div>
      </div>
    </Link>
  );
}
