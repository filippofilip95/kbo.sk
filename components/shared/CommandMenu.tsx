import React, { FC, useEffect } from "react";
import { Command } from "cmdk";
import classNames from "classnames";

type Props = {};

const CommandMenu: FC<Props> = (props) => {
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    // Toggle the menu when ⌘K is pressed
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && e.metaKey) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <div
      className={classNames(
        "fixed top-0 left-0",
        open && " fixed top-0 left-0 h-full w-full bg-stone-900 opacity-70 ",
      )}
    >
      <Command.Dialog
        open={open}
        onOpenChange={setOpen}
        label="Command Menu"
        className="fixed left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2"
      >
        <Command.Input />
        <Command.List>
          <Command.Empty>No results found.</Command.Empty>

          <Command.Group heading="Letters">
            <Command.Item>a</Command.Item>
            <Command.Item>b</Command.Item>
            <Command.Separator />
            <Command.Item>c</Command.Item>
          </Command.Group>

          <Command.Item>Apple</Command.Item>
        </Command.List>
      </Command.Dialog>
    </div>
  );
};

export default CommandMenu;
