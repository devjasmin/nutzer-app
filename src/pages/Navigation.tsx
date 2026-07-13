import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav className="navigation">
      <Link className="overview-btn" to="overview">
        Nutzerübersicht
      </Link>
      <Link className="create-btn" to="create">
        Nutzer erstellen
      </Link>
    </nav>
  );
}

export default Navigation;
