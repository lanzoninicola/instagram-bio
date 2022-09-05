import Avatar from "~/components/avatar/avatar";
import Logo from "~/components/logo/logo";

export default function SmallHeader({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <header className="flex flex-col justify-center items-center gap-4 pb-8 bg-green-400">
      <Avatar />
      <div
        className="absolute flex flex-col gap-4 items-center w-absolute-m-2 mx-8"
        style={{ top: "270px" }}
      >
        <Logo />
        {children}
      </div>
    </header>
  );
}
