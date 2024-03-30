import { Link } from "react-router-dom";
import { useContextGlobal } from "../Components/utils/Global.context";

const Navbar = () => {
  const { state, dispatch, toggleTheme } = useContextGlobal();

  const themeChange = () => {
    dispatch({ type: "CHANGE_THEME" });
  };

  return (
    <nav>
      <h1>DH Odonto</h1>

      <div className="navTitle">
        <Link to="/">
          <h3>Home</h3>
        </Link>
        <Link to="/contact">
          <h3>Contact</h3>
        </Link>
        <Link to="/favs">
          <h3>Favs</h3>
        </Link>

        <button onClick={themeChange}>
          {state.theme == "light" ? "🌙" : "☀️"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
