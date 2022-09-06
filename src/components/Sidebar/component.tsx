import { NavLink } from "react-router-dom";
import style from "./component.module.scss";
import { FaBeer } from "react-icons/fa";

interface SidebarType {
  label: string;
  path: string;
  icon?: React.ReactElement;
  exact?: boolean;
}

const sidebar: SidebarType[] = [
  {
    label: "Dashboard",
    path: "/",
    icon: <FaBeer />,
    exact: true,
  },
  {
    label: "Movies",
    path: "/movies",
    icon: <FaBeer />,
  },
  {
    label: "Client",
    path: "/movie",
    icon: <FaBeer />,
  },
];

export const Sidebar = () => {
  return (
    <div className={` bg-slate-900 w-60 ${style.sidebar}  `}>
      {sidebar.map((s: SidebarType) => (
        <NavLink key={s.path} className={(isActive) => (isActive ? style.navLink : style.navLink.active)} to={s.path}>
          {s.icon} {s.label}
        </NavLink>
      ))}
    </div>
  );
};
