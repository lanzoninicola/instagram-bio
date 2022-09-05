import HeadingTwo from "~/components/typography/headings/HeadingTwo";

interface CardContentProps {
  title: string;
  content: string | null;
}

export default function ServiceContent({ title, content }: CardContentProps) {
  return (
    <div className="flex flex-col gap-2 px-8">
      <HeadingTwo>{title}</HeadingTwo>
      <p className="font-body text-xl text-black-400">{content}</p>
    </div>
  );
}
