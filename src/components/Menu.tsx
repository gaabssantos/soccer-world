/* CSS */
import "./Menu.css";

// Others
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="menu">
      <Link to={"/new-game"}>
        <button id="new-game">Novo jogo</button>
      </Link>
      <button id="continue">Continuar</button>
    </div>
  );
};

export default Menu;
