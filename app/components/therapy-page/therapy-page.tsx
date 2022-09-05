import { Outlet } from "@remix-run/react";
import { ServiceSingleWrapper } from "../service-single";
import ServiceSingleFooter from "../service-single/service-single-footer/service-single-footer";

export default function TherapyPage() {
  return (
    <ServiceSingleWrapper>
      <Outlet />
      <ServiceSingleFooter />
    </ServiceSingleWrapper>
  );
}
