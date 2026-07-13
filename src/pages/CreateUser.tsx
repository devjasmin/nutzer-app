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
        </form>
        <button className="back-btn">Zurück</button>
      </div>
    </div>
  );
}

export default CreateUser;
