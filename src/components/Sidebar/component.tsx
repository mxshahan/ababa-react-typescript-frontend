import { NavLink } from "react-router-dom";
import style from "./component.module.scss";
import { FaBeer } from "react-icons/fa";

interface SidebarType {
  label: string;
  path: string;
  icon?: React.ReactElement;
  exact?: boolean
}

const sidebar: SidebarType[] = [
  {
    label: "Dashboard",
    path: "/",
    icon: <FaBeer />,
    exact: true
  },
  {
    label: "Movie",
    path: "/movie",
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
    <div className="h-screen bg-slate-900 w-60">
      {sidebar.map((s: SidebarType) => (
        <NavLink className={(isActive) => (isActive ? style.navLink : style.navLink.active)} to={s.path}>
          {s.icon} {s.label}
        </NavLink>
      ))}
    </div>
  );
};
