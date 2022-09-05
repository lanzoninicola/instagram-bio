interface HeadingTwoProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export default function HeadingTwo({ children, style }: HeadingTwoProps) {
  return (
    <h2
      className={`font-titles text-2xl text-black-400 tracking-tight relative ${style}`}
    >
      {children}
    </h2>
  );
}
