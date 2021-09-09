import React from "react";

import { Route } from "react-router";

import CollectionOverview from "../collection-overview/collection-overview.component";
import CollectionPage from "../collection/collection.component";

const ShopPage = (props) => {
  // the shopPage match.path is the same as set in the app.js
  // so we implement path that way to be more flexible

  return (
    <div className="shop-page">
      <Route
        exact
        path={`${props.match.path}`}
        component={CollectionOverview}
      />

      {/* implementing url param to be used in the conditional rendering inside it */}
      <Route
        path={`${props.match.path}/:collectionId`}
        component={CollectionPage}
      />
    </div>
  );
};

export default ShopPage;
