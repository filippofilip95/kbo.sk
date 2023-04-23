import React, { FC } from "react";
import { Dialog } from "@headlessui/react";

type Props = {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const CommandMenuDialog: FC<Props> = (props) => {
  return (
    <Dialog open={props.open} onClose={props.onClose} className="relative z-50">
      <div className="fixed inset-0 bg-stone-900/30" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="w-[640px]">{props.children}</Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default CommandMenuDialog;
