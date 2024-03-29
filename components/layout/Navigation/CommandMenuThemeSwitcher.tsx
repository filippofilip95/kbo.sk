import React, { FC } from "react";
import { Command } from "cmdk";
import { useTheme } from "next-themes";
import { Moon, Settings, Sun } from "react-feather";

type Props = {
  onClose: () => void;
};

const CommandMenuThemeSwitcher: FC<Props> = (props) => {
  const { systemTheme, theme, setTheme } = useTheme();

  return (
    <Command.Group heading="Theme">
      {(theme === "dark" || (theme === "system" && systemTheme === "dark")) && (
        <Command.Item onSelect={() => setTheme("light")}>
          <div className="flex items-center gap-2">
            <div>
              <Sun />
            </div>
            <div>Switch to light mode</div>
          </div>
        </Command.Item>
      )}
      {(theme === "light" ||
        (theme === "system" && systemTheme === "light")) && (
        <Command.Item onSelect={() => setTheme("dark")}>
          <div className="flex items-center gap-2">
            <div>
              <Moon />
            </div>
            <div>Switch to dark mode</div>
          </div>
        </Command.Item>
      )}
      <Command.Item
        onSelect={() => {
          setTheme("system");
          props.onClose();
        }}
      >
        <div className="flex items-center gap-2">
          <div>
            <Settings />
          </div>
          <div>Set theme to system</div>
        </div>
      </Command.Item>
    </Command.Group>
  );
};

export default CommandMenuThemeSwitcher;
