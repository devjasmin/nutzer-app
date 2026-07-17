import { Link } from "react-router-dom";
import { useNavigate, useOutletContext } from "react-router-dom";
import type { User } from "../components/User";
import { useReducer } from "react";
import { getImagesByGender, type Gender } from "../API/randomUser";
import { infoReducer, initialState } from "../components/Hook/infoReducer";

type DashboardContext = {
  users: User[];
  addUser: (user: User) => void;
};

function CreateUser() {
  const { addUser } = useOutletContext<DashboardContext>();
  const navigate = useNavigate();

  const [state, dispatch] = useReducer(infoReducer, initialState);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!state.gender) {
      return;
    }

    try {
      const image = await getImagesByGender(state.gender);

      const newUser: User = {
        id: crypto.randomUUID(),
        username: state.username,
        dateOfBirth: state.dateOfBirth,
        gender: state.gender,
        image,
        email: state.email,
        post: state.post,
        phone: state.phone,
        fitness: state.fitness,
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
            placeholder="Benutzername"
            value={state.username}
            onChange={(event) => {
              dispatch({
                type: "change",
                field: "username",
                value: event.target.value,
                //required
              });
            }}
          />

          <label htmlFor="dateOfBirth">Geburtsdatum</label>
          <input
            id="dateOfBirth"
            type="date"
            value={state.dateOfBirth}
            onChange={(event) => {
              dispatch({
                type: "change",
                field: "dateOfBirth",
                value: event.target.value,
                //required
              });
            }}
          />

          <label htmlFor="gender-select">Geschlecht</label>
          <select
            name="gender"
            id="gender-select"
            value={state.gender}
            onChange={(event) => {
              dispatch({
                type: "change",
                field: "gender",
                value: event.target.value as Gender | "",
              });
            }}
          >
            <option value=""> -- Geschlecht auswählen --</option>
            <option value="female">weiblich</option>
            <option value="male">männlich</option>
          </select>

          <label htmlFor="email">E-Mail</label>
          <input
            id="email"
            type="email"
            placeholder="Emailadresse"
            value={state.email}
            onChange={(event) => {
              dispatch({
                type: "change",
                field: "email",
                value: event.target.value,
                //required
              });
            }}
          />

          <label htmlFor="postadresse">Postadresse</label>
          <input
            id="postadresse"
            type="text"
            placeholder="Adresse"
            value={state.post}
            onChange={(event) => {
              dispatch({
                type: "change",
                field: "post",
                value: event.target.value,
                //required
              });
            }}
          />

          <label htmlFor="phone">
            Telefonnummer <br />
            <small>Format:</small>
          </label>
          <input
            id="phone"
            type="tel"
            name="phone"
            placeholder="Format: 123-456-78-90"
            value={state.phone}
            onChange={(event) => {
              dispatch({
                type: "change",
                field: "phone",
                value: event.target.value,
                //required
              });
            }}
          />

          <label htmlFor="fitness">Fitnesslevel</label>
          <input
            id="fitness"
            type="string"
            placeholder="Zahl zwischen 1 und 10"
            name="fitness"
            value={state.fitness}
            onChange={(event) => {
              dispatch({
                type: "change",
                field: "fitness",
                value: event.target.value,
                //required
              });
            }}
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
