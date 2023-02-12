import styles from './UserInfo.module.css';

export default function UserInfo({
	name,
	profileImage,
	bio,
	date,
	points,
}: {
	name: String;
	profileImage: String;
	bio: String;
	date: String;
	points: Number;
}) {
	return (
		<div className={styles.UserInfo}>
			<div className={styles.profilePicAndName}>
				<img
					src={profileImage as string}
					className={styles.profilePic}
				/>
				<p className={styles.name}>{`@${name}`}</p>
			</div>
			<hr></hr>
			<div className={styles.whiteBackground}>{`Bio: ${bio}`}</div>
			<hr></hr>
			<div className={styles.whiteBackground}>{`Date: ${date}`}</div>
			<div className={styles.whiteBackground}>{`Points ${points}`}</div>
		</div>
	);
}
