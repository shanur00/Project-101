import { headerLinks } from "../Data/sharedData";
import Background from "./Hero/Background";
import CtaButton from "./Hero/CtaButton";
import FeatureCards from "./Shared/FeatureCards";
import Features from "./Features/Features";
import Footer from "./Footer/Footer";
import Heading from "./Hero/Heading";
import Pricing from "./Pricing/Pricing";
import Testimonial from "./Testimonial/Testimonial";

export default function Hero() {
  return (
    <div className="class-heroSec">

      {/* Header Section */}
      <div className="class-heading class-commonFlex">
        <div className="class-headingWrap class-commonFlex">
          {headerLinks.map((headerLink) => (
            <Heading
              key={headerLink.id}
              className={headerLink.className}
              line1={headerLink.line1}
              line2={headerLink.line2}
              breakOnSmall={headerLink.breakOnSmall}
            />
          ))}
        </div>
      </div>

      {/* CTA Button */}
      <CtaButton/>

      {/* Background Pattern */}
      <Background/>

      {/* Feature Cards */}
      <FeatureCards/>

      {/* Testimonials */ }
      <Testimonial/>

      {/* Features Section */}
      <Features/>

      {/* Pricing Section */}
      <Pricing/>

      {/* Footer Section */}
      <Footer/>

    </div>
  );
}