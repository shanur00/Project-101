export default function Item({classname, label}){
  return (
    <div className={classname}>{label}</div>
  );
}