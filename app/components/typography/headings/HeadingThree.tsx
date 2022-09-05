interface HeadingTwoProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export default function HeadingThree({ children, style }: HeadingTwoProps) {
  return (
    <h3
      className={`font-titles text-xl text-black-400 tracking-tight relative ${style}`}
    >
      {children}
    </h3>
  );
}
