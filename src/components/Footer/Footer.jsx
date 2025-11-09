import MainFooterContent from "./MainFooterContent";
import Pattern from "../Shared/Pattern";

export default function Footer() {
  return (
    <div className="class-footer">
      <MainFooterContent />

      <Pattern patternWrapper={"bottomPatternWrapper"} pattern={"bottomPattern"}>
        <div className="w-full h-full relative">
          {/* Decorative pattern lines */}
        </div>
      </Pattern>

    </div>
    // mainfootercontent
  );
}