import React, { FC } from "react";
import cx from "classnames";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<Props> = ({ className, ...props }) => {
  return (
    <button
      {...props}
      className={cx(
        "rounded-md p-2 text-text-light outline-none transition-all hover:bg-neutral-200 focus:bg-neutral-300 focus:ring focus:ring-neutral-400 dark:text-text-dark dark:hover:bg-neutral-800 dark:focus:bg-neutral-800 dark:focus:ring-neutral-700",
        className,
      )}
    />
  );
};

export default Button;
