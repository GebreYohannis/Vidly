import React from "react";

const ListGroup = (props) => {
  const { items, textProperty, valueProperty, selectedItem, onItemSelect } =
    props;
  return (
    <nav className="list-group">
      <ul className="list">
        {items.map((item) => (
          <li
            key={item[valueProperty]}
            className={
              item === selectedItem
                ? "list-group__item active"
                : "list-group__item"
            }
            onClick={() => onItemSelect(item)}
          >
            {item[textProperty]}
          </li>
        ))}
      </ul>
    </nav>
  );
};

ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "id",
};

export default ListGroup;
