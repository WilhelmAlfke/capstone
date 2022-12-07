const svgObject = {
  home: "M11 39h7.5V26.5h11V39H37V19.5L24 9.75 11 19.5Zm-3 3V18L24 6l16 12v24H26.5V29.5h-5V42Zm16-17.65Z",
  faves:
    "M7.5 34q-.65 0-1.075-.425Q6 33.15 6 32.5q0-.65.425-1.075Q6.85 31 7.5 31q.65 0 1.075.425Q9 31.85 9 32.5q0 .65-.425 1.075Q8.15 34 7.5 34Zm0-8.5q-.65 0-1.075-.425Q6 24.65 6 24q0-.65.425-1.075Q6.85 22.5 7.5 22.5q.65 0 1.075.425Q9 23.35 9 24q0 .65-.425 1.075-.425.425-1.075.425Zm0-8.5q-.65 0-1.075-.425Q6 16.15 6 15.5q0-.65.425-1.075Q6.85 14 7.5 14q.65 0 1.075.425Q9 14.85 9 15.5q0 .65-.425 1.075Q8.15 17 7.5 17Zm7 17v-3H42v3Zm0-8.5v-3H42v3Zm0-8.5v-3H42v3Z",
};

export default function Svg({
  variant,
  size = "30px",
  color = "currentColor",
}) {
  return (
    <svg style={{ width: size, height: size }} viewBox="0 0 48 48" z-index="10">
      <path fill={color} d={svgObject[variant]} />
    </svg>
  );
}
