import { Link } from "react-router-dom";
import type { User } from "../components/User";
import { useOutletContext } from "react-router-dom";

type DashboardContext = {
  users: User[];
  addUser: (user: User) => void;
};

function UserOverview() {
  const { users } = useOutletContext<DashboardContext>();

  return (
    <>
      <h2 className="overview-title">Mitglieder</h2>
      <div className="content-cards">
        {users.length === 0 && <p>Noch keine Mitglieder vorhanden...</p>}
        {users.map((mitglied) => (
          <div key={mitglied.id} className="card">
            <img
              className="image"
              src={mitglied.image}
              alt={"Profilbild von ${mitglied.username"}
            />
            <div className="Benutzername">{mitglied.username}</div>
            <div className="Geburtsdatum">{mitglied.dateOfBirth}</div>
            <div className="Geschlecht">{mitglied.gender}</div>
            <div className="E-Mailadresse">{mitglied.email}</div>
            <div className="Postadresse">{mitglied.post}</div>
            <div className="Telefonnummer">{mitglied.phone}</div>
            <div className="Webseite">{mitglied.website}</div>
          </div>
        ))}
      </div>
      <Link className="back-btn" to="/">
        Zurück
      </Link>
    </>
  );
}

export default UserOverview;
