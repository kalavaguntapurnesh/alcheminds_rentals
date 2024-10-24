import NavBar from "./../components/Navbar";
import Hero from "../components/Hero";
import HeroRentalListing from "../components/HeroRentalListing";
import HeroRentalApplications from "../components/HeroRentalApplications";
import HeroReportsRecords from "../components/HeroReportsRecords";
import HeroLeaseReview from "../components/HeroLeaseReview";
import HeroRentOnline from "../components/HeroRentOnline";
import HeroTracking from "../components/HeroTracking";
import HeroPropertyAccounting from "../components/HeroPropertyAccounting";
const Home = () => {
  return (
    <div>
      <NavBar />
      <Hero/>
      <HeroRentalListing/>
      <HeroRentalApplications/>
      <HeroReportsRecords/>
      <HeroLeaseReview/>
      <HeroRentOnline/>
      <HeroTracking/>
      <HeroPropertyAccounting/>
    </div>
  );
};

export default Home;
