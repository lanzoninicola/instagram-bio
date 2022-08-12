import { Outlet } from "@remix-run/react";

export default function OtherTherapiesIndex() {
  return (
    <div className="relative min-h-screen mx-8 ">
      <div className="absolute mx-auto my-auto rounded bg-yellow-400 w-full h-80">
        <Outlet />
      </div>
    </div>
  );
}
