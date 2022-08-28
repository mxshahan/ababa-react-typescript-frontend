import { useAppDispatch } from "../../hooks";
import { logoutUser } from "../../store/slices/auth.slice";
import style from "./component.module.scss";

export const Header = () => {
  const dispatch = useAppDispatch();
  const onLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <header className={style.header}>
      <img className="w-10" src="/logo192.png" alt="Logo" />
      <button className={style.logout} onClick={onLogout}>
        Logout
      </button>
    </header>
  );
};
