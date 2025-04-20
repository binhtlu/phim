import Navbar from "./navbar";
import FeatureMovies from "./featurMovie";
import Trending from "./trending";

const Container = () => {
  return (
    <div>
      <Navbar />
      <FeatureMovies />
      <Trending />
    </div>
  );
};

export default Container;
