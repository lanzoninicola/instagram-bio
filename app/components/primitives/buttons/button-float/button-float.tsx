import { forwardRef } from "react";
import { ButtonFloatProps } from "~/components/primitives/buttons/types";
import Button from "../button/button";

const ButtonFloat = forwardRef(
  ({ floatX = "right", ...props }: ButtonFloatProps, ref: any) => {
    let floatVariant = "btn-float-right";

    if (floatX === "left") {
      floatVariant = "btn-float-left";
    }

    return (
      <div ref={ref} className={`${floatVariant}`}>
        <Button clazzName="py-4 px-4 text-sm" {...props} />
      </div>
    );
  }
);

export default ButtonFloat;
