import { useEffect, useLayoutEffect, useState } from "react";
import WhatsappButtonLink from "../whatsapp-button-link/whatsapp-button-link";

import MediumHeader from "./medium-header/medium-header";
import SmallHeader from "./small-header/small-header";

export default function Header() {
  const [currentMaxWidth, setCurrentMaxWidth] = useState<number>(640);
  const [buttonLabel, setButtonLabel] = useState<string>("Agende horário");

  useLayoutEffect(() => {
    function updateSize() {
      if (window) {
        setCurrentMaxWidth(window.innerWidth);
      }
    }
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  // change button label based every 7 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setButtonLabel((prev) => {
        if (prev === "Agende horário") {
          return "Peça informações";
        }
        return "Agende horário";
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const whatsappButtonLink = (
    <WhatsappButtonLink
      label={buttonLabel}
      clazzName="bg-yellow-700"
      iconColor="black"
    />
  );

  if (currentMaxWidth <= 640) {
    return <SmallHeader>{whatsappButtonLink}</SmallHeader>;
  }

  return <MediumHeader>{whatsappButtonLink}</MediumHeader>;
}
