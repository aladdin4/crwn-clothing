import { createSelector } from "reselect";

export const itemsListSelector = (state) => state.cart.addedItems;

export const quantitySelector = createSelector(
  [itemsListSelector],
  (itemsList) => {
    // console.log(itemsList);
    return itemsList.reduce((quantity, item) => quantity + item.quantity, 0);
  }
);

export const totalSelector = createSelector(
  [itemsListSelector],
  (itemsList) => {
    // console.log(itemsList);
    return itemsList.reduce(
      (totalPrice, item) => totalPrice + item.quantity * item.price,
      0
    );
  }
);
