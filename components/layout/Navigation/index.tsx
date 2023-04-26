import React, { FC } from "react";
import CommandMenu from "@/components/layout/Navigation/CommandMenu";

type Props = {};

const Navigation: FC<Props> = (props) => {
  return (
    <nav className="mx-auto flex max-w-[640px] px-4 py-10">
      <CommandMenu className="ml-auto" />
    </nav>
  );
};

export default Navigation;
