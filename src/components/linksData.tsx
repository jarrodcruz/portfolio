interface LinksDataProps {
  name: string;
  href: string;
  iconName?: string;
  lastIcon?: boolean;
}


export const myLinks: LinksDataProps[] = [
  {
    name: "Github",
    href: "https://github.com/jarrodcruz",
    iconName: "RiGithubFill",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/jarrod-cruz",
    iconName: "RiLinkedinBoxLine",
  },
];
