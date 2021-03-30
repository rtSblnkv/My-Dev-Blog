import React, { Component } from "react";
import userIcon from './userIcon.png'

export const BlogAutor = ({ autor }, { date }) => {
  <div>
      <div classname="icon">
          <img src={userIcon} alt="UserIcon"/>
      </div>
    <div className="autor">{autor}</div>
    <div className="date">{date}</div>
  </div>;
};
