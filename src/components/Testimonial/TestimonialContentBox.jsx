import TestimonialContent from "./TesimonialContent";
import TestimonialImg from "./TestimonialImg";

export default function TestimonialContentBox() {
  return (
    <div className="class-tesimonialContentBox bg-background border border-b border-l-0 border-r-0 border-t-0">
      <div className="flex-1 py-12 md:py-16 flex flex-col md:flex-row justify-center items-end gap-6">
        <div className="class-tetimonialContentBoxWrapper">
          <TestimonialImg/>
          <TestimonialContent 
          about={"In just a few minutes, we transformed our data into actionable insights. The process was seamless and incredibly efficient!"}
          name={"Jamie Marshall"}
          post={"Co-founder, Exponent"}
          />
        </div>
      </div>
    </div>
  );
}