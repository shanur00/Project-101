export default function Card({cardName, cardDescription, src, alt}){
  return (
    <div className="class-card">
      <div className="class-cardName">{cardName}</div>
      <div className="class-cardDes">{cardDescription}</div>
      <img src={src} alt={alt} className="class-img"/>
    </div>
  );
}