export default function SectionHeader({headerClassName, headerWrapper, headerClassOf, svg, title, header, desClassOf, desLine1, desLine2, breakOnSmall}){
  return (
    <div className={headerClassName}>
      <div className={headerWrapper}>
        <div className="bagde">
          {svg}
          <div className="badge-title">
            {title}
          </div>
        </div>
        <div className={headerClassOf}>{header}</div>
        <div className={desClassOf}>
          {desLine1}
          {breakOnSmall? <br className="hidden sm:block" /> : <br/>}
          {desLine2}
        </div>
      </div>
    </div>
  );
}