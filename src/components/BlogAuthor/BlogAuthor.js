import React, { Component } from "react";
import userIcon from "./userIcon.png";

/**
 * Компонент основного текста блога
 *
 * @param {String} author - автор блога
 * @param {String} date - дата выхода блога
 */
export const BlogAuthor = ({ author }, { date }) => {
  return (
    <div>
      <div classname="icon">
        <img src={userIcon} alt="UserIcon" />
      </div>
      <div className="author">{author}</div>
      <div className="date">{date}</div>
    </div>
  );
};
