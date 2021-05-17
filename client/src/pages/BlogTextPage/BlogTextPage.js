import React from "react";
import "./BlogTextPage.css";
import { BlogTextBody } from "../../components/BlogTextBody/BlogTextBody";
import { BlogTextHeader } from "../../components/BlogTextHeader/BlogTextHeader";
import { BlogAuthor } from "../../components/BlogAuthor/BlogAuthor";
import { BlogTextLikeButton } from "../../components/BlotTextLikeButton/BlogTextLikeButton"

/**
 * Компонент страницы блога
 */
 export const BlogTextPage = ({id}) => {
    return(
        <div className="blogTextPage">
            <BlogAuthor author={id} date="5 мая 2021" />
            <BlogTextLikeButton liked = {true} />
            <BlogTextHeader text={fishTextHeader} />
            <BlogTextBody text={fishText} />
        </div>
    );
}

/* TO DELETE */
var fishTextHeader = "Ваш шедевр готов!";

var fishText =
  "Повседневная практика показывает, что новая модель организационной деятельности позволяет " +
  "выполнять важные задания по разработке направлений прогрессивного развития. Идейные соображения высшего " +
  "порядка, а также дальнейшее развитие различных форм деятельности играет важную роль в формировании " +
  "направлений прогрессивного развития. Повседневная практика показывает, что сложившаяся структура " +
  "организации требуют от нас анализа системы обучения кадров, соответствует насущным потребностям. " +
  "Равным образом сложившаяся структура организации обеспечивает широкому кругу (специалистов) участие " +
  "в формировании модели развития. Равным образом реализация намеченных плановых заданий обеспечивает " +
  "широкому кругу (специалистов) участие в формировании новых предложений. С другой стороны постоянное " +
  "информационно-пропагандистское обеспечение нашей деятельности влечет за собой процесс внедрения и " +
  "модернизации новых предложений.";
/* TO DELETE */