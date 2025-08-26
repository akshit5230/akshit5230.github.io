type WaveDividerProps = {
  from?: string; // accepts hex, tailwind value, or CSS variable
  to?: string;
  flip?: boolean;
};

export default function WaveDivider({
  from = "red",
  to = "green",
  flip = false,
}: WaveDividerProps) {
  return (
    <svg
      className={`w-full h-16 ${
        flip ? "rotate-180" : ""
      }`}
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      viewBox="0 0 1440 320"
    >
      {/* Wave shape filled with "from" color */}
      <path
        fill={from}
        d="M0,192L48,186.7C96,181,192,171,288,165.3C384,160,480,160,576,181.3C672,203,768,245,864,245.3C960,245,1056,203,1152,176C1248,149,1344,139,1392,133.3L1440,128V0H0Z"
      />
      {/* Rectangle filled with "to" color */}
      <rect y="128" width="1440" height="192" fill={to} />
    </svg>
  );
}
