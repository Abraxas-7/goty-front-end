export default function GameCardSkeleton() {
  return (
    <div
      className="position-relative w-100 bg-secondary bg-opacity-25 rounded shadow"
      style={{
        aspectRatio: "3 / 4",
        animation: "pulse 1.5s infinite ease-in-out",
      }}
    />
  );
}
