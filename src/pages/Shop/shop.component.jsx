import React from "react";
import { CollectionPreview } from "../../components/collection-preview/collection-preview.component";
import SHOP_DATA from "./shop.data";

class ShopPage extends React.Component {
  state = { collections: SHOP_DATA };

  render() {
    return (
      <div className="shop-page">
        {this.state.collections.map((collection) => {
          return (
            <CollectionPreview
              key={collection.id}
              title={collection.title}
              items={collection.items}
            />
          );
        })}
      </div>
    );
  }
}

export default ShopPage;
