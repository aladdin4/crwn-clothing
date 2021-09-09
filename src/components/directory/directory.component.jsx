import React from "react";

import { connect } from "react-redux";

import { selectDirectorySections } from "../../redux/directory/directory.selctors";

import MenuItem from "../menu-item/menu-item.component";

import "./directory.styles.scss";

// this component has the data of all our homepage components

// through mapping through it's state and creating a series of component for the homepage
const Directory = (props) => {
  return (
    <div className="directory-menu">
      {props.sections.map((section) => {
        return (
          <MenuItem
            title={section.title}
            key={section.id}
            url={section.imageUrl}
            size={section.size}
            linkUrl={section.linkUrl}
          />
        );
      })}
    </div>
  );
};

const mapstate = (state) => {
  return {
    sections: selectDirectorySections(state),
  };
};

export default connect(mapstate)(Directory);
