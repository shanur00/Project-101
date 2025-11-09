import Item from "./Item";

export default function NavColumn({ columnClass, headerColumn, name, innerColumn, footerNavigation }) {
  return (
    <div className={columnClass}>
      <div className={headerColumn}>
        {name}
      </div>
      <div className={innerColumn}>
        {
          footerNavigation.items.map((item) => (
            <Item
              key={item.id}
              classname={"columnName"}
              label={item.label}
            />
          ))
        }
      </div>
    </div>
  );
}