export default function GridContent({classname, header, text, gridImgClass, imgClass, src, alt}){
  return (
    <div className={classname}>
      <div className="gridText">
        <h3 className="gridTextHeader">
          {header}
        </h3>
        <p className="gridTextDescription">
          {text}
        </p>
      </div>
      <div className={gridImgClass}>
        <img src={src} className={imgClass} alt={alt}/>
      </div>
    </div>
  );
}