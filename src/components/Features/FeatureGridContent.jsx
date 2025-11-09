import { grids } from "../../Data/sharedData";
import GridContent from "./GridContent";

export default function FeatureGridContent(){
  return (
    <div className="class-grid">
      {grids.map((grid)=>(
        <GridContent
        key={grid.id}
        classname={grid.classname}
        header={grid.header}
        text={grid.text}
        gridImgClass={grid.id === 1 ? "gridImgChild" : "gridImg"}
        imgClass={grid.id === 1 ? "imgClass" : "imgCommonClass"}
        src={grid.src}
        alt={grid.alt}
        />
      ))}
    </div>
  );
}