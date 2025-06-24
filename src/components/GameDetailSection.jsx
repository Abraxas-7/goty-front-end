export default function GameDetailSection({ section, reverse }) {
  return (
    <div
      className={`row align-items-stretch mb-5 border border-dark border-2 rounded-4 shadow p-4 g-0 ${
        reverse ? "flex-md-row-reverse" : ""
      }`}
      style={{ backgroundColor: "#283044" }}
    >
      <div className="col-12 col-lg-6 mb-3 mb-md-0">
        <img
          src={`${import.meta.env.VITE_STORAGE_URL}/${
            section.section_image_path
          }`}
          alt={section.title}
          className="img-fluid rounded shadow w-100 h-100"
          style={{ aspectRatio: "16 / 9", objectFit: "cover" }}
        />
      </div>

      <div
        className="col-12 col-lg-6 text-white px-4 py-3"
        style={{
          display: "flex",
          flexDirection: "column",
          maxHeight: "100%",
        }}
      >
        <h3 className="fw-bold">{section.title}</h3>
        <div
          className="overflow-auto mt-2 d-none d-md-block"
          style={{
            color: "#ccc",
            textAlign: "justify",
            maxHeight: "250px",
            paddingRight: "0.5rem",
          }}
        >
          <p>{section.description}</p>
        </div>

        <div
          className="d-block d-md-none"
          style={{ color: "#ccc", textAlign: "justify" }}
        >
          <p>{section.description}</p>
        </div>
      </div>
    </div>
  );
}
