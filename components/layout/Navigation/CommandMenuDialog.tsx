import React, { FC, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Inter } from "@next/font/google";

type Props = {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const CommandMenuDialog: FC<Props> = (props) => {
  return (
    <Transition show={props.open} as={Fragment}>
      <Dialog onClose={props.onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-150"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div
            className="fixed inset-0 bg-[rgba(0,0,0,0.3)] dark:bg-[rgba(0,0,0,0.6)]"
            aria-hidden="true"
          />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-150"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-100"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <div className="fixed left-1/2 top-1/4 flex -translate-x-1/2 items-center justify-center p-4">
            <Dialog.Panel className="w-[100vw] sm:w-[640px]">
              {props.children}
            </Dialog.Panel>
          </div>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
};

export default CommandMenuDialog;
