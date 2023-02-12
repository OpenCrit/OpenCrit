import style from "./UserInfo.module.css";

interface UserInfoProps {
    name: string;
    email: string;
    profileImage: string;
    bio: string;
  }

const UserInfo: React.FC<UserInfoProps> = ({ name, profileImage, bio }) => {
    return (
      <div style={{ float: "right" }}>
        <div>
            <img src={profileImage} alt={name} style={{ width: "100px", height: "100px", borderRadius: "50%" }} />
        </div>
        <div>
            <p>Username: {name}</p>
        </div>
        <div>
            <p>Bio: {bio}</p>
        </div>
      </div>
    );
  };
  
  export default UserInfo;
