import Hero from "../components/Hero";
import HomeCards from "../components/HomeCards";
import Jobs from "../components/Jobs";

const HomePage = ({ homeActive }) => {
  homeActive = true;
  return (
    <div>
      <Hero />
      <HomeCards />
      <Jobs homeActive={homeActive} />
    </div>
  );
};

export default HomePage;
