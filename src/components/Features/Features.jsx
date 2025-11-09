import FeatureContent from "./FeatureContent";
import FeatureSvg from "./FeatureSvg";
import SectionHeader from "../Shared/SectionHeader";

export default function Features(){
  return (
    <div className="feature">
      <SectionHeader 
      headerClassName={"featureHeader"}
      headerWrapper={"featureHeaderWrapper"}
      svg={<FeatureSvg/>}
      title={"Services"}
      headerClassOf={"headerOfFeature"}
      header={"Built for absolute clarity and focused work"}
      desClassOf={"desCommonClass"}
      desLine1={"Stay focused with tools that organize, connect"}
      desLine2={"and turn information into confident decisions."}
      breakOnSmall={false}
      />

      <FeatureContent/>
    </div>
  );
}