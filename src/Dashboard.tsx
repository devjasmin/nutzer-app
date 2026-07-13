import { Outlet } from "react-router-dom";
import "./Dashbord.css";
import Navigation from "./pages/Navigation";
import "./pages/Navigation.css";
import "./pages/CreateUser.css";
import "./pages/UserOverview.css";

function Dashboard() {
  return (
    <>
      <section className="header">
        <div className="app-title">Nutzer App</div>
        <div className="welcome-message">
          Willkommen in unserer Calisthenics Gruppe{" "}
        </div>
      </section>

      <section className="content-navi">
        <Navigation />

        <main className="content-area">
          <Outlet />
        </main>
      </section>

      <section className="footer">
        <p>© 2026 Nutzer App. Alle Rechte vorbehalten</p>
      </section>
    </>
  );
}

export default Dashboard;
