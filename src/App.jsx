import UserProfile from "./components/UserProfile";
import user from "./components/UserProfile/user.json";

export default function App() {
  return (
    <div key={user.name}>
      <UserProfile
        name={user.name}
        tag={user.tag}
        location={user.location}
        // avatar={user.avatar}
        statsFollowers={user.stats.followers}
        statsViews={user.stats.views}
        statsLikes={user.stats.likes}
      />
    </div>
  );
}
