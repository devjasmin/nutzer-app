import { Link } from "react-router-dom";
import type { User } from "../components/User";
import { useOutletContext } from "react-router-dom";
import UserCard from "../components/UserCard";

type DashboardContext = {
  users: User[];
  addUser: (user: User) => void;
  deleteUser: (id: string) => void;
};

function UserOverview() {
  const { users, deleteUser } = useOutletContext<DashboardContext>();

  return (
    <>
      <h2 className="overview-title">Mitglieder</h2>
      <div className="content-cards">
        {users.length === 0 && <p>Noch keine Mitglieder vorhanden...</p>}

        {users.map((mitglied) => (
          <UserCard key={mitglied.id} user={mitglied} deleteUser={deleteUser} />
        ))}
      </div>
      <Link className="back-btn" to="/">
        Zurück
      </Link>
    </>
  );
}

export default UserOverview;
