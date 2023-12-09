import React from "react";
import Header from "../features/home/components/Header";
import HeaderTopSection from "../features/home/components/HeaderTopSection";
import OurProcessSection from "../features/home/components/OurProcessSection";
import Service from "../features/home/components/Service";
import Solution from "../features/home/components/Solution";
import Delivered from "../features/home/components/Delivered";
import Testimonials from "../features/home/components/Testimonials";
import ContactUsSection from "../features/home/components/ContactUsSection";
import Footer from "../features/footer/Footer";

function HomePage() {
  return (
    <div>
      <Header />
      <HeaderTopSection />
      <OurProcessSection />
      <Service />
      <Solution />
      <Delivered />
      <Testimonials />
      <ContactUsSection />
      <Footer />
    </div>
  );
}

export default HomePage;
