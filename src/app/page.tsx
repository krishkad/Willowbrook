import Blog from "@/components/sections/Blog";
import Booking from "@/components/sections/Booking";
import Camps from "@/components/sections/Camps";
import ContactFAQ from "@/components/sections/ContactFAQ";
import ExperienceTimeline from "@/components/sections/ExperienceTimeline";
import Hero from "@/components/sections/Hero";
import PhotoGallery from "@/components/sections/PhotoGallery";
import Testimonials from "@/components/sections/Testimonials";

const Home = () => {
  return (
    <div className="min-h-screen bg-stone-50">
      {/* <Navbar /> */}
      <Hero />
      <Camps />
      <ExperienceTimeline />
      <PhotoGallery />

      <Testimonials />
      <Booking />
      <Blog />
      <ContactFAQ />
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
