interface CardContentProps {
  title: string;
  content: string | null;
}

export default function CardContent({ title, content }: CardContentProps) {
  return (
    <div className="flex flex-col gap-4 p-8">
      <h2 className="font-titles text-2xl text-black-400 tracking-tight relative">
        {title}
      </h2>
      <p className="font-body text-xl text-black-400">{content}</p>
    </div>
  );
}
