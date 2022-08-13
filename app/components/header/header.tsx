import { useEffect, useLayoutEffect, useState } from "react";

import MediumHeader from "./medium-header/medium-header";
import SmallHeader from "./small-header/small-header";

export default function Header() {
  const [currentMaxWidth, setCurrentMaxWidth] = useState<number>(640);

  useEffect(() => {
    if (window) {
      setCurrentMaxWidth(window.innerWidth);
    }
  }, []);

  if (currentMaxWidth <= 640) {
    return <SmallHeader />;
  }

  return <MediumHeader />;
}
