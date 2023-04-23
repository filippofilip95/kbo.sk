import React, { FC } from "react";
import CommandMenu from "@/components/layout/Navigation/CommandMenu";

type Props = {};

const Navigation: FC<Props> = (props) => {
  return (
    <nav className="mx-auto max-w-2xl py-8 flex">
      <CommandMenu  className='ml-auto'/>
    </nav>
  );
};

export default Navigation;
