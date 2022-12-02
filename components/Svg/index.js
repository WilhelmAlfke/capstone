const svgObject = {
  home: "M11 39h7.5V26.5h11V39H37V19.5L24 9.75 11 19.5Zm-3 3V18L24 6l16 12v24H26.5V29.5h-5V42Zm16-17.65Z",
};

export default function Svg({ variant }) {
  return (
    <svg style={{ width: sizeHeight, height: size }} viewBox="0 0 48 48">
      <path fill={color} d={svgObject[variant]} />
    </svg>
  );
}
