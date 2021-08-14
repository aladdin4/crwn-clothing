import { createSelector } from "reselect";

export const addedItemsSelector = (state) => state.cart.addedItems;

export const quantitySelector = createSelector(
  [addedItemsSelector],
  (itemsList) => {
    // console.log(itemsList);
    return itemsList.reduce((quantity, item) => quantity + item.quantity, 0);
  }
);

export const totalSelector = createSelector(
  [addedItemsSelector],
  (itemsList) => {
    // console.log(itemsList);
    return itemsList.reduce(
      (totalPrice, item) => totalPrice + (item.quantity * item.price),
      0
    );
  }
);
