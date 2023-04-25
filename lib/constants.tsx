import { Dribbble, FileText, GitHub, Mail, Twitter, } from "react-feather";
import React from "react";

export const domain = "https://kbo.sk";

const iconSize = 20;

type ListItem = {
  label: string;
  href: string;
  icon: React.ReactNode;
};

export const connections: ListItem[] = [
  {
    label: "Mail",
    href: "mailto:kubotcg@gmail.com",
    icon: <Mail size={iconSize} />,
  },
  {
    label: "Twitter",
    href: "https://twitter.com/jakubkrehel",
    icon: <Twitter size={iconSize} />,
  },
  {
    label: "Dribble",
    href: "https://dribbble.com/jakubkrehel",
    icon: <Dribbble size={iconSize} />,
  },
  {
    label: "Github",
    href: "https://github.com/jakubkrehel",
    icon: <GitHub size={iconSize} />,
  },
  {
    label: "Read.cv",
    href: "https://read.cv/jakubkrehel",
    icon: <FileText size={iconSize} />,
  },
];
