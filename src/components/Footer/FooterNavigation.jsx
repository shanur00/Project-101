import { footerNavigations } from "../../Data/sharedData";
import NavColumn from "./NavColumn";

export default function FooterNavigation(){
  return (
    <div className="class-navigation">
      {footerNavigations.map((footerNavigation)=>(
        <NavColumn
        key={footerNavigation.id}
        columnClass={"column"}
        headerColumn={"headerColumn"}
        innerColumn={"innerColumn"}
        name={footerNavigation.category}
        footerNavigation={footerNavigation}
        />
      ))}
    </div>
  );
}