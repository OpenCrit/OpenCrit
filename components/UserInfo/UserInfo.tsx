import styles from "./UserInfo.module.css";

interface UserInfoProps {
    name: string;
    profileImage: string;
    bio: string;
    date: string;
    points: number;
  }

const UserInfo: React.FC<UserInfoProps> = ({ name, profileImage, bio, date, points}) => {
    return (
      <div className={styles.UserInfo}>
        <div className={styles.profilepicAndName}>
            <img src={profileImage} alt={name} className={styles.profilePic}/>
            <p className={styles.name}>@{name}</p>
        </div>
        <hr></hr>
        <div style={{ backgroundColor: "white" }}>
            Bio: {bio}
        </div>
        <hr></hr>
        <div style={{ backgroundColor: "white" }}>
            Member since:{date}
        </div>
        <div style={{ backgroundColor: "white" }}>
            Points:{points}
        </div>
      </div>
    );
  };
  
  export default UserInfo;
