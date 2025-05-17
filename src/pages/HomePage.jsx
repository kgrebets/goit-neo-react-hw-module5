
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="container mx-auto my-10">
      <h1 className="text-3xl font-bold text-blue-600">Popular Movies</h1>
      <ul>
        <li><Link to="/movies/1">Movie 1</Link></li>
        <li><Link to="/movies/2">Movie 2</Link></li>
        <li><Link to="/movies/3">Movie 3</Link></li>
      </ul>
    </div>
  );
};

export default HomePage;
