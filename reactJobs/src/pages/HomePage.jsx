import Hero from "../components/Hero";
import HomeCards from "../components/HomeCards";
import Jobs from "../components/Jobs";
import Navbar from "../components/Navbar";

const HomePage = ({ homeActive }) => {
  homeActive = true;
  return (
    <div>
      <Navbar />
      <Hero />
      <HomeCards />
      <Jobs homeActive={homeActive} />
    </div>
  );
};

export default HomePage;
