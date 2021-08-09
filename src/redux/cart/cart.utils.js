import React from "react";

export const addItemToCart = (itemsList, newItem) => {
  const isExist = itemsList.find((item) => {
    return item.id === newItem.id;
  });

  //   if the element exists we increase it's quantity
  if (isExist) {
    return itemsList.map((item) => {
      return item.id === newItem.id
        ? { ...item, quantity: item.quantity + 1 }
        : item;
    });
  }

  //   if the element is new we add it to the itemsList  and add the quantity property to it
  return [...itemsList, { ...newItem, quantity: 1 }];
};

// helper method to remove item from itemsList
export const removeItemFromCart = (itemsList, newItem) => {
  return itemsList.filter((item) => {
    return item.id !== newItem.id;
  });
};

// helper method to decrease item from itemsList; remove it if it was the last one
export const decreaseItem = (itemsList, newItem) => {
  if (newItem.quantity > 1) {
    return itemsList.map((item) => {
      return item.id === newItem.id
        ? { ...item, quantity: item.quantity - 1 }
        : item;
    });
  } else if (newItem.quantity == 1) {
    return itemsList.filter((item) => {
      return item.id !== newItem.id;
    });
  }
};
