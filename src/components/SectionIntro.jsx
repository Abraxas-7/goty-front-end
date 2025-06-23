export default function SectionIntroArticle({
  title,
  content,
  background,
  textColor = "#1b1f2b",
}) {
  return (
    <section
      className="py-5 shadow"
      style={{
        backgroundColor: background,
        color: textColor,
      }}
    >
      <div className="container">
        <div className="">
          <h2 className="fw-bold mb-4 ">{title}</h2>
          <p className="fs-5" style={{ lineHeight: "1.7" }}>
            {content}
          </p>
        </div>
      </div>
    </section>
  );
}
