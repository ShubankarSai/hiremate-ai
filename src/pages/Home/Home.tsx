import Hero from "../../components/home/Hero";
import FeaturedJobs from "../../components/jobs/FeaturedJobs";
import FeaturedCompanies from "../../components/home/FeaturedCompanies";
import WhyHireMate from "../../components/home/WhyHireMate";
import Footer from "../../components/layout/Footer";

const Home = () => {
  return (
    <>
      <Hero />
      <FeaturedJobs />
      <FeaturedCompanies />
      <WhyHireMate />
      <Footer />
    </>
  );
};

export default Home;
