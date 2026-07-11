import { Link } from "react-router-dom";
import "./Dashbord.css";

function Dashboard() {
  return (
    <>
      <section className="header">
        <div className="app-title">Nutzer App</div>
        <div className="welcome-message">
          Willkommen in unserer Calisthenics Gruppe{" "}
        </div>
      </section>

      <section className="content">
        <nav className="navigation">
          <Link className="create-btn" to="/nutzer-app/create">
            Nutzer erstellen
          </Link>
          <Link className="edit-btn" to="/nutzer-app/edit">
            Nutzer bearbeiten
          </Link>
        </nav>

        <div className="content-cards">
          <div className="card">
            <div className="user-name">Max Mustermann</div>
            <p className="user-description">
              Neuer Nutzer bei unserer Calisthenics Gruppe.
            </p>
          </div>
          <div className="card">
            <div className="user-name">Mirco Baumann</div>
            <p className="user-description">
              Neuer Nutzer bei unserer Calisthenics Gruppe.
            </p>
          </div>
        </div>
      </section>

      <section className="footer">
        <p>© 2026 Nutzer App. Alle Rechte vorbehalten.</p>
      </section>
    </>
  );
}

export default Dashboard;
