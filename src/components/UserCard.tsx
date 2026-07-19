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
      <img
        className="user-image"
        src={user.image}
        alt={`Profilbild von ${user.username}`}
      />
      <div className="benutzername">{user.username}</div>

      <div className="button-container">
        <div className="edit-btn">
          <FontAwesomeIcon icon={faPen} />
        </div>
        <div className="delete-btn">
          <FontAwesomeIcon icon={faX} />
        </div>
      </div>
      <div className="geburtsdatum">
        <FontAwesomeIcon icon={faCakeCandles} />
        {user.dateOfBirth}
      </div>
      <div className="geschlecht">
        <FontAwesomeIcon icon={faMarsAndVenus} />
        {user.gender}
      </div>

      <div className="e-Mailadresse">
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
  );
}

export default UserCard;
