import { Link } from "react-router-dom";
import { useNavigate, useOutletContext } from "react-router-dom";
import type { User } from "../components/User";
import { useState } from "react";
import { getImagesByGender, type Gender } from "../API/randomUser";

type DashboardContext = {
  users: User[];
  addUser: (user: User) => void;
};

function CreateUser() {
  const { addUser } = useOutletContext<DashboardContext>();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [gender, setGender] = useState<Gender | "">("");
  const [email, setEmail] = useState("");
  const [post, setPost] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!gender) {
      return;
    }

    try {
      const image = await getImagesByGender(gender);

      console.log("Geladene Bild-URL", image);

      const newUser: User = {
        id: crypto.randomUUID(),
        username,
        dateOfBirth,
        gender,
        image,
        email,
        post,
        phone,
        website,
      };

      addUser(newUser);
      navigate("/overview");
    } catch (error) {
      console.error("Bild konnte nicht geladen werden, error");
    }
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

          <label htmlFor="gender-select">Geschlecht</label>
          <select
            name="gender"
            id="gender-select"
            value={gender}
            onChange={(event) => setGender(event.target.value as Gender | "")}
          >
            <option value=""> -- Geschlecht auswählen --</option>
            <option value="female">weiblich</option>
            <option value="male">männlich</option>
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
