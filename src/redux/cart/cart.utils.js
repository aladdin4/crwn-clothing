import React from "react";

export const addItemToCart = (items, newItem) => {
  const isExist = items.find((item) => {
    return item.id === newItem.id;
  });

  //   if the element exists we increase it's quantity
  if (isExist) {
    return items.map((item) => {
      return item.id === newItem.id
        ? { ...item, quantity: item.quantity + 1 }
        : item;
    });
  }

  //   if the element is new we add it to the items list and add the quantity property to it
  return [...items, { ...newItem, quantity: 1 }];
};
