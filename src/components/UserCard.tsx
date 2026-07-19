import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCakeCandles,
  faMarsAndVenus,
  faEnvelope,
  faAt,
  faMobile,
  faDumbbell,
  faPen,
} from "@fortawesome/free-solid-svg-icons";
import type { User } from "../components/User";
import "./UserCard.css";
import { faX } from "@fortawesome/free-solid-svg-icons";

type UserCardProps = {
  user: User;
};

function UserCard({ user }: UserCardProps) {
  return (
    <div className="card-container">
      <div className="title-container">
        <img
          className="user-image"
          src={user.image}
          alt={`Profilbild von ${user.username}`}
        />
        <div className="benutzername">{user.username}</div>
      </div>
      <div className="button-container">
        <button className="edit-btn">
          <FontAwesomeIcon icon={faPen} />
        </button>
        <button className="delete-btn">
          <FontAwesomeIcon icon={faX} />
        </button>
      </div>
      <div className="info-container">
        <div className="geburtsdatum">
          <FontAwesomeIcon icon={faCakeCandles} />
          {user.dateOfBirth}
        </div>
        <div className="geschlecht">
          <FontAwesomeIcon icon={faMarsAndVenus} />
          {user.gender}
        </div>

        <div className="email">
          <FontAwesomeIcon icon={faAt} />
          {user.email}
        </div>
        <div className="postadresse">
          <FontAwesomeIcon icon={faEnvelope} />
          {user.post}
        </div>
        <div className="telefonnummer">
          <FontAwesomeIcon icon={faMobile} />
          {user.phone}
        </div>
        <div className="fitnesslevel">
          <FontAwesomeIcon icon={faDumbbell} />
          {user.fitness}
        </div>
      </div>
    </div>
  );
}

export default UserCard;
