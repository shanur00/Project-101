import FeatureGridContent from "./FeatureGridContent";
import Pattern from "../Shared/Pattern";

export default function FeatureContent(){
  return (
    <div className="self-stretch flex justify-center items-start">
      <Pattern
      patternWrapper={"featurePatternWrapper"}
      pattern={"featurePattern"}
      />

      <FeatureGridContent/>

      <Pattern
      patternWrapper={"featurePatternWrapper"}
      pattern={"featurePattern"}
      />
    </div>
  );
}