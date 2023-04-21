import React, { FC, useEffect } from "react";
import { Command as CommandIcon } from "react-feather";
import { Command } from "cmdk";
import { connections, skills } from "@/lib/constants";
import CommandMenuDialog from "@/components/layout/Navigation/CommandMenuDialog";
import CommandMenuThemeSwitcher from "components/layout/Navigation/CommandMenuThemeSwitcher";
import Button from "@/components/shared/Button";

type Props = {
  className?: string;
};

const CommandMenu: FC<Props> = (props) => {
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    // Toggle the menu when ⌘K is pressed
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "k" && e.metaKey) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", onKeyDown);

    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <>
      <Button onClick={() => setOpen((open) => !open)} className="ml-auto">
        <CommandIcon size={30} />
      </Button>
      <CommandMenuDialog open={open} onClose={() => setOpen(false)}>
        <Command label="Command Menu">
          <div className="mb-2 flex items-center gap-2">
            <Command.Input
              placeholder="Search"
              className="border-0 focus:outline-none focus:border-0 focus:ring-0"
            />
            <div>
              <Button
                onClick={() => setOpen((open) => !open)}
                className="px-2 py-1"
              >
                <span className="text-sm text-neutral-400">ESC</span>
              </Button>
            </div>
          </div>
          <Command.List>
            <Command.Empty>No results found.</Command.Empty>

            {skills.map((connection) => (
              <Command.Item
                key={connection.label}
                onSelect={() => window.open(connection.href, "_blank")}
              >
                <div className="flex items-center gap-2">
                  <div>{connection.icon}</div>
                  <div>{connection.label}</div>
                </div>
              </Command.Item>
            ))}

            <Command.Group heading="Stay in touch">
              {connections.map((connection) => (
                <Command.Item
                  key={connection.label}
                  onSelect={() => window.open(connection.href, "_blank")}
                >
                  <div className="flex items-center gap-2">
                    <div>{connection.icon}</div>
                    <div>{connection.label}</div>
                  </div>
                </Command.Item>
              ))}
            </Command.Group>
            <CommandMenuThemeSwitcher />
          </Command.List>
        </Command>
      </CommandMenuDialog>
    </>
  );
};

export default CommandMenu;