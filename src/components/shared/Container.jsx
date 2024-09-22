import clsx from "clsx";
import React, { forwardRef } from "react";

const Container = forwardRef(function ({ className, children, ...props }, ref) {
  return (
    <div
      ref={ref}
      className={clsx(
        "w-[90%] mx-auto lg:w-[800px] xl:w-[1000px] 2xl:w-[1200px]",
        className
      )}
    >
      {children}
    </div>
  );
});

export default Container;
