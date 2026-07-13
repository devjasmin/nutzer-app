function UserOverview() {
  return (
    <>
      <h2 className="overview-title">Übersicht</h2>
      <div className="content-cards">
        <div className="card">
          <div className="firstName">Max</div>
          <div className="lastName">Mustermann</div>
        </div>
        <div className="card">
          <div className="firstName">Mirco</div>
          <div className="lastName">Baumann</div>
        </div>
      </div>
      <button className="back-btn">Zurück</button>
    </>
  );
}

export default UserOverview;
