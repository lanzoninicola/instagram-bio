import Button from "~/components/primitives/button";

export default function Index() {
  return (
    <>
      <h1 className="text-3xl font-bold underline text-black-400">
        Hello world!
      </h1>
      <div className="flex flex-col gap-1">
        <Button
          text="Click me"
          onClick={() => alert("clicked")}
          ariaLabel="button"
        />
      </div>
    </>
  );
}
