import { Link, useNavigate, useOutletContext } from "react-router-dom";
import type { User } from "../components/User";
import UserCard from "../components/UserCard";

type DashboardContext = {
  users: User[];
  addUser: (user: User) => void;
  deleteUser: (id: string) => void;
};

function UserOverview() {
  const { users, deleteUser } = useOutletContext<DashboardContext>();

  const navigate = useNavigate();

  function handleEdit(id: string) {
    navigate(`/create/${id}`);
  }

  return (
    <>
      <h2 className="overview-title">Mitglieder</h2>
      <div className="content-cards">
        {users.length === 0 && <p>Noch keine Mitglieder vorhanden...</p>}

        {users.map((mitglied) => (
          <UserCard
            key={mitglied.id}
            user={mitglied}
            deleteUser={deleteUser}
            editUser={handleEdit}
          />
        ))}
      </div>
      <Link className="back-btn" to="/">
        Zurück
      </Link>
    </>
  );
}

export default UserOverview;
