import SectionHeader from "../Shared/SectionHeader";
import TestimonialContentBox from "./TestimonialContentBox";
import TestimonialSvg from "./TestimonialSvg";

export default function Testimonial(){
  return (
    <div className="class-section">
      <SectionHeader 
      headerClassName={"testimonialHeader"}
      headerWrapper={"headerWrapperTestimonial"}
      headerClassOf={"headerClassTestomonial"}
      svg={<TestimonialSvg/>}
      title={"Testimonials"}
      header={"Confidence backed by results"}
      desClassOf={"desCommonClass"}
      desLine1={"Our customers achieve more each day"}
      desLine2={"because their tools are simple, powerful, and clear."}
      breakOnSmall={true}
      />

      <TestimonialContentBox/>
    </div>
  );
}