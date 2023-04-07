import { useContext } from "react";
import UserContext from "../context/UserContext";
import "./Header.scss";

const Header = () => {
  const { user } = useContext(UserContext);

  return (
    <header>
      <div className="personal_user_container">
        <span>{user.username}</span>
      </div>
    </header>
  );
};

export default Header;
