import * as RemixIcons from "react-icons/ri";
import { MY_LINKS } from "./linksData";

const DynamicRemixIcon = ({
  name,
  classes,
}: {
  name?: string;
  classes: string;
}) => {
  if (!name) {
    return null;
  }

  const IconComponent = RemixIcons[name as keyof typeof RemixIcons];

  return <IconComponent className={classes} />;
};

export const MyLinks = () => (
  <div className="flex flex-row">
    {MY_LINKS.map(({ name, href, iconName, lastIcon }) => (
      <a
        key={name}
        className="hover:text-gray-500 duration-200"
        href={href}
        target="_blank"
        rel="norefferer noreferrer"
      >
        <DynamicRemixIcon
          name={iconName}
          classes={`social-icon ${!lastIcon ? "mr-3" : ""}`}
        />
      </a>
    ))}
  </div>
);
