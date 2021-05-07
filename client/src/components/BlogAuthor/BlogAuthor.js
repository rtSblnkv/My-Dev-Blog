import React, { Component } from "react";
import userIcon from "./userIcon.png";
import "./BlogAuthor.css"

/**
 * Компонент основного текста блога
 *
 * @param {String} author - автор блога
 * @param {String} date - дата выхода блога
 */
export const BlogAuthor = ({ author }, { date }) => {
  return (
    <div>
      <div className="authorIcon">
        <img src={userIcon} alt="UserIcon" />
      </div>
      <div className="author">{author}</div>
      <div className="date">{date}</div>
    </div>
  );
};
