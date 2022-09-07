import React from "react";
import BannerText from "./components/BannerText";
import CommunityAbout from "./components/CommunityAbout";
import CommunityBlogs from "./components/CommunityBlogs";
import CommunityEvents from "./components/CommunityEvents";
import CommunityFeed from "./components/CommunityFeed";
import CommunityGroups from "./components/CommunityGroups";
import CTA from "./components/CTA";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MobileAppBanner from "./components/MobileBanner/MobileAppBanner";
import MockUp from "./components/MockUp";
import Owner from "./components/Owner";
import Testimonials from "./components/Testimonials";
import WindowPeak from "./components/WindowPeak/WindowPeak";

function App() {
  return (
    <div className="App">
      <Header />
      <BannerText />
      <MockUp />
      <CommunityAbout />
      <MobileAppBanner />
      <CommunityEvents />
      <Owner/>
      <CommunityGroups />
      <WindowPeak />
      <CommunityBlogs />
      <CommunityFeed/>
      <FAQSection/>
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
};

export default App;
