/* CSS */
import "./App.css";

/* Components */
import Menu from "./components/Menu";

/* Assets */
import Icon from "./assets/icon-soccer-world.png";

/* Others */
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default App;
