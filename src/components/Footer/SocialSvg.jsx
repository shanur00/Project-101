export default function SocialSvg({classname, width, height, viewBox, fill, xmnls, d, pathFill}){
  return (
    <div className={classname}>
      <svg width={width} height={height} viewBox={viewBox} fill={fill} xmlns={xmnls}>
      <path d={d} fill={pathFill}/>
    </svg>
    </div>
  );
}