import {
  Link,
  useNavigate,
  useOutletContext,
  useParams,
} from "react-router-dom";
import type { User } from "../components/User";
import { useEffect, useReducer, useState } from "react";
import { getImagesByGender, type Gender } from "../API/randomUser";
import { infoReducer, initialState } from "../components/Hook/infoReducer";

type DashboardContext = {
  users: User[];
  addUser: (user: User) => void;
  updateUser: (id: string, updateUser: User) => void;
};

function CreateUser() {
  const { users, addUser, updateUser } = useOutletContext<DashboardContext>();

  const navigate = useNavigate();
  const { id } = useParams();

  const [state, dispatch] = useReducer(infoReducer, initialState);

  const userToEdit = users.find((user) => user.id === id);

  useEffect(() => {
    if (!userToEdit) {
      return;
    }

    dispatch({
      type: "load",
      userData: {
        username: userToEdit.username,
        dateOfBirth: userToEdit.dateOfBirth,
        gender: userToEdit.gender,
        email: userToEdit.email,
        post: userToEdit.post,
        phone: userToEdit.phone,
        fitness: userToEdit.fitness,
      },
    });
  }, [userToEdit]);

  const [errors, setErrors] = useState({
    username: "",
    dateOfBirth: "",
    gender: "",
    email: "",
    post: "",
    phone: "",
    fitness: "",
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newErrors = {
      username: state.username.trim()
        ? ""
        : "Bitte geben Sie einen Benutzernamen ein.",

      dateOfBirth: state.dateOfBirth
        ? ""
        : "Bitte wählen Sie ein Geburtsdatum aus.",

      gender: state.gender ? "" : "Bitte wählen Sie ein Geschlecht aus.",

      email: state.email.trim()
        ? ""
        : "Bitte geben Sie eine E-Mail-Adresse ein.",

      post: state.post.trim() ? "" : "Bitte geben Sie eine Postadresse ein.",

      phone: state.phone.trim()
        ? ""
        : "Bitte geben Sie eine Telefonnummer ein.",

      fitness: state.fitness.trim()
        ? ""
        : "Bitte geben Sie ein Fitnesslevel ein.",
    };

    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some((error) => error != "");

    if (hasErrors) {
      return;
    }

    try {
      const image = userToEdit
        ? userToEdit.image
        : await getImagesByGender(state.gender as Gender);

      const userData: User = {
        id: id ?? crypto.randomUUID(),
        username: state.username,
        dateOfBirth: state.dateOfBirth,
        gender: state.gender,
        image,
        email: state.email,
        post: state.post,
        phone: state.phone,
        fitness: state.fitness,
      };

      if (id) {
        updateUser(id, userData);
      } else {
        addUser(userData);
      }

      navigate("/overview");
    } catch (error) {
      console.error("Bild konnte nicht geladen werden:", error);
    }
  };

  return (
    <div className="content-cards">
      <div className="card">
        <h2>Formular</h2>
        <form onSubmit={handleSubmit} noValidate>
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
              });
            }}
          />
          {errors.username && (
            <p className="error-message">{errors.username}</p>
          )}

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
              });
              setErrors((previousErrors) => ({
                ...previousErrors,
                dateOfBirth: "",
              }));
            }}
          />
          {errors.dateOfBirth && (
            <p className="error-message">{errors.dateOfBirth}</p>
          )}

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
              });
            }}
          />
          {errors.email && <p className="error-message">{errors.email}</p>}

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
              });
            }}
          />
          {errors.post && <p className="error-message">{errors.post}</p>}

          <label htmlFor="phone">
            Telefonnummer <br />
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
              });
            }}
          />
          {errors.phone && <p className="error-message">{errors.phone}</p>}

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
              });
            }}
          />
          {errors.fitness && <p className="error-message">{errors.fitness}</p>}

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
