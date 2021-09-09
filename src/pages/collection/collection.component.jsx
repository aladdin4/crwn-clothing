import React from "react";

import { connect } from "react-redux";
import CollectionItem from "../../components/collection-item/collection-item.component";

import "./collection.styles.scss";

const CollectionPage = (props) => {
  //we need to defend here against undef url matches
  // extracting the matched element data from props (which comes from state)
  const categoryData = props.shopData[props.match.params.collectionId];

  console.log(props);
  return (
    <div className="collection-page">
      <h2 className="title"></h2>
      <div className="items">
        {categoryData.items.map((item) => {
          return <CollectionItem item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

const mapState = (state) => {
  return {
    shopData: state.shop,
  };
};

export default connect(mapState)(CollectionPage);

// 1- get the collectionID
// 2- make an object that matches names with id
// 3- search with id
// or 2- search with name !
// grap the data of that matched itemList from state (which is currently props)
// log it's data
