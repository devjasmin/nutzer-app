import { Link } from "react-router-dom";
import { useNavigate, useOutletContext } from "react-router-dom";
import type { User } from "../pages/User";
import { useState } from "react";

type DashboardContext = {
  users: User[];
  addUser: (user: User) => void;
};

function CreateUser() {
  const { addUser } = useOutletContext<DashboardContext>();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  // console.log("username state:", username);
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  // console.log("email state:", email);
  const [post, setPost] = useState("");
  // console.log("post state:", post);
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");
  // console.log("website state:", website);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newUser: User = {
      id: crypto.randomUUID(),
      username,
      dateOfBirth,
      gender,
      email,
      post,
      phone,
      website,
    };

    addUser(newUser);
    navigate("/overview");
  };

  return (
    <div className="content-cards">
      <div className="card">
        <h2>Formular</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Benutzername</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(event) => {
              console.log(event.target.value);
              setUsername(event.target.value);
            }}
          />

          <label htmlFor="dateOfBirth">Geburtsdatum</label>
          <input
            id="dateOfBirth"
            type="date"
            value={dateOfBirth}
            onChange={(event) => setDateOfBirth(event.target.value)}
          />

          <label htmlFor="gender">Geschlecht</label>
          <select name="gender" id="gender-select">
            <option value=""> -- Please choose an option--</option>
            <option value="female">weiblich</option>
            <option value="male">männlich</option>
            <option value="divers">anderes</option>
          </select>

          <label htmlFor="email">E-Mail</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            // required
          />

          <label htmlFor="postadresse">Postadresse</label>
          <input
            id="postadresse"
            type="text"
            value={post}
            onChange={(event) => setPost(event.target.value)}
          />

          <label htmlFor="phone">
            Telefonnummer <br />
            <small>Format: 123-456-78-90</small>
          </label>
          <input
            id="phone"
            type="tel"
            name="phone"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            // required
          />

          <label htmlFor="website">Webseite(https://)</label>
          <input
            id="website"
            type="url"
            name="url"
            value={website}
            onChange={(event) => setWebsite(event.target.value)}
            // required
          />
          <br />

          <button className="save-btn" type="submit">
            Speichern
          </button>
        </form>
        <br />
        <Link className="back-btn" to="/">
          Zurück
        </Link>
      </div>
    </div>
  );
}

export default CreateUser;
