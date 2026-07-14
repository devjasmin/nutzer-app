import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav className="navigation">
      <Link className="overview-btn" to="overview">
        Übersicht
      </Link>
      <Link className="create-btn" to="create">
        Erstellen
      </Link>
    </nav>
  );
}

export default Navigation;
