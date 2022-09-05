import Logo from "~/components/logo/logo";

export default function MediumHeader({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <header className="flex flex-col justify-center items-center gap-4 pb-16 bg-green-400 px-4 pt-8 w-full">
      <div className="bg-avatar-round bg-no-repeat bg-center h-40 w-40"></div>
      <Logo />
      {children}
    </header>
  );
}
