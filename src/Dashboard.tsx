import { Outlet } from "react-router-dom";
import "./Dashbord.scss";
import Navigation from "./components/Navigation";
import "./components/Navigation.scss";
import "./pages/CreateUser.scss";
import "./pages/UserOverview.scss";
import { useEffect, useState } from "react";
import type { User } from "./components/User";

function Dashboard() {
  const STORAGE_KEY = "members";
  const [users, setUsers] = useState<User[]>(() => {
    const savedMembers = localStorage.getItem(STORAGE_KEY);

    return savedMembers ? JSON.parse(savedMembers) : [];
  });

  function addUser(user: User) {
    setUsers((previousUsers) => [...previousUsers, user]);
  }

  function deleteUser(id: string) {
    setUsers((previousUsers) => previousUsers.filter((user) => user.id !== id));
  }

  function updateUser(id: string, updateUser: User) {
    setUsers((previousUsers) =>
      previousUsers.map((user) => (user.id === id ? updateUser : user)),
    );
  }

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
  }, [users]);

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
          <Outlet context={{ users, addUser, deleteUser, updateUser }} />
        </main>
      </section>

      <section className="footer">
        <p>© 2026 Nutzer App. Alle Rechte vorbehalten</p>
      </section>
    </>
  );
}

export default Dashboard;
