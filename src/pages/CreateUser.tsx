import { Link } from "react-router-dom";

function CreateUser() {
  return (
    <div className="content-cards">
      <div className="card">
        <h2>Nutzer erstellen</h2>
        <form>
          <label>Firstname</label>
          <input type="text" />

          <label>Lastname</label>
          <input type="text" />

          <label>E-Mail</label>
          <input type="email" />
          <br />

          <button className="save-btn" type="submit">
            Speichern
          </button>
        </form>{" "}
        <br />
        <Link className="back-btn" to="/">
          Zurück
        </Link>
      </div>
    </div>
  );
}

export default CreateUser;
