import React from "react";
import CollectionItem from "../collection-item/collection-item.component";
import "./collection-preview.scss";

export const CollectionPreview = (props) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{props.title.toUpperCase()}</h1>
      <div className="preview">
        {props.items
          .filter((item, index) => {
            return index < 4;
          })
          .map((item) => {
            return (
              <CollectionItem
                key={item.id}
                imageUrl={item.imageUrl}
                name={item.name}
                price={item.price}
              />
            );
          })}
      </div>
    </div>
  );
};
