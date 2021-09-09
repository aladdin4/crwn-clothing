import React from "react";
import { createSelector } from "reselect";

export const selectDirectorySections = createSelector(
  (state) => state.directory,
  (directory) => directory.sections
);
