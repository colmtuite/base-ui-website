import * as React from "react";

export const Box = React.forwardRef<HTMLDivElement>(
  ({ ...props }, forwardedRef) => (
    <div ref={forwardedRef} className="Box" {...props} />
  )
);

Box.displayName = "Box";
