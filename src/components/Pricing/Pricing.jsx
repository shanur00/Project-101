import PricingSvg from "./PricingSvg";
import SectionHeader from "../Shared/SectionHeader";

export default function Pricing() {
  return (

    <div className="class-pricing">
      <SectionHeader
      headerClassName={"priceHeader"}
      headerWrapper={"pricingHeaderWrapper"}
      svg={<PricingSvg/>}
      title={"Plans & Pricing"}
      headerClassOf={"pricingClassOfHeader"}
      header={"Choose the perfect plan for your business"}
      desClassOf={"pricingDesc"}
      desLine1={"Scale your operations with flexible pricing that grows with your team."}
      desLine2={"Start free, upgrade when you're ready."}
      breakOnSmall={false}
      />
    </div>
  );
}