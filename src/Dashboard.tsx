import { Link } from "react-router";

function Dashboard() {
  return (
    <section className="header">
      <h1>Nutzer App</h1>
      <h3>Willkommen zur Nutzer App für Calisthenics</h3>

      <nav>
        <Link to="/nutzer-app/create">Nutzer erstellen</Link>
        <Link to="/nutzer-app/edit">Nutzer bearbeiten</Link>
      </nav>
    </section>
  );
}

export default Dashboard;
