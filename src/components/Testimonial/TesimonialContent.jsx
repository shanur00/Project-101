export default function TestimonialContent({about, name, post}){
  return (
    <div className="class-tetimonialContent">
      <div className="class-about">
        {about}
      </div>
      <div className="class-person">
        <div className="class-aboutPerson">{name}</div>
        <div className="class-aboutPerson">{post}</div>
      </div>
    </div>
  );
}