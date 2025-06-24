export default function GameInfo({ game }) {
  if (!game) return null;

  return (
    <>
      <div
        className="border border-dark border-2 rounded-4 p-5 shadow"
        style={{ backgroundColor: "#283044", color: "white" }}
      >
        <div className="row">
          <div className="col-12 col-sm-6 col-md-4 col-xl-3 order-0 order-sm-1">
            <div
              className="border border-2 border-dark rounded rounded-3 overflow-hidden shadow"
              style={{ aspectRatio: "2 / 3" }}
            >
              <img
                src={`${import.meta.env.VITE_STORAGE_URL}/${game.cover_image}`}
                className="img-fluid w-100 h-100 object-fit-cover"
                alt={game.title}
              />
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-8 col-xl-9 d-flex flex-column justify-content-center align-content-center order-1 order-sm-0 mt-2">
            <h2 className="fw-bold">{game.title}</h2>

            <p className="mb-2">
              <strong>Sviluppatore:</strong> {game.developer?.name}
            </p>

            <p className="mb-2">
              <strong>Data di uscita:</strong>{" "}
              {new Date(game.release_date).toLocaleDateString("it-IT")}
            </p>

            <p className="mb-2">
              <strong>Generi:</strong>{" "}
              {game.genres.map((genre) => genre.name).join(", ")}
            </p>

            <p className="mb-2">
              <strong>Console:</strong>{" "}
              {game.consoles.map((console) => console.name).join(", ")}
            </p>

            <p className="mb-2">
              <strong>Valutazione:</strong> {game.rating}/100
            </p>

            <hr className="border-light d-none d-xxl-block" />

            <div
              className="p-3 rounded d-none d-xxl-block"
              style={{
                backgroundColor: "#202634",
                overflowY: "auto",
                maxHeight: "100%",
              }}
            >
              <h5 className="text-white">Descrizione</h5>
              <p
                className="mb-0"
                style={{ color: "#ccc", textAlign: "justify" }}
              >
                {game.short_description}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        className="p-3 rounded d-block d-xxl-none mt-4 border border-dark border-2 rounded-4 shadow"
        style={{
          backgroundColor: "#283044",
        }}
      >
        <h5 className="text-white">Descrizione</h5>
        <p className="mb-0" style={{ color: "#ccc", textAlign: "justify" }}>
          {game.short_description}
        </p>
      </div>
    </>
  );
}
