import React from "react";
import { connect } from "react-redux";
import { CollectionPreview } from "../../components/collection-preview/collection-preview.component";

const CollectionOverView = (props) => {
  // extract an array from the data keys
  const shopDataKeys = Object.keys(props.shopData);

  return (
    <div className="collections-overview">
      {shopDataKeys.map((key) => {
        // get the current collection
        const collection = props.shopData[key];

        return (
          // render the current collection
          <CollectionPreview
            key={collection.id}
            title={collection.title}
            items={collection.items}
          />
        );
      })}
    </div>
  );
};

const mapState = (state) => {
  return {
    shopData: state.shop,
  };
};

export default connect(mapState)(CollectionOverView);
