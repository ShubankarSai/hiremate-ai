import Hero from "../../components/home/Hero";
import FeaturedJobs from "../../components/jobs/FeaturedJobs";
import FeaturedCompanies from "../../components/home/FeaturedCompanies";
import WhyHireMate from "../../components/home/WhyHireMate";

const Home = () => {
  return (
    <>
      <Hero />
      <FeaturedJobs />
      <FeaturedCompanies />
      <WhyHireMate />
    </>
  );
};

export default Home;
