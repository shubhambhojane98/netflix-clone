import MovieVideo from "../components/MovieVideo";
import Navbar from "../components/Navbar";
import RecentlyAdded from "../components/RecentlyAdded";

export default function HomePage() {
  return (
    <div className="p-5 lg:p-0">
      <MovieVideo />
      <h1>Recently added</h1>
      <RecentlyAdded />
    </div>
  );
}
