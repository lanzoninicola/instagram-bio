interface CardHeaderProps {
  children: React.ReactNode;
  style?: string;
}

export default function CardHeader({ children, style }: CardHeaderProps) {
  return (
    <h1
      className={`font-titles text-4xl text-black-400 uppercase tracking-tighter relative  ${style}`}
    >
      {children}
    </h1>
  );
}
