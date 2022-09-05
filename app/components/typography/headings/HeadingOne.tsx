interface HeadingTwoProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export default function HeadingOne({ children, style }: HeadingTwoProps) {
  return (
    <h2
      className={`font-titles text-3xl text-black-400 tracking-tight relative ${style}`}
    >
      {children}
    </h2>
  );
}
