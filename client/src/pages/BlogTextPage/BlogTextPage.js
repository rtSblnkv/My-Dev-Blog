import React, {Component} from "react";
import "./BlogTextPage.css";
import { BlogTextBody } from "../../components/BlogTextBody/BlogTextBody";
import { BlogTextHeader } from "../../components/BlogTextHeader/BlogTextHeader";
import { BlogAuthor } from "../../components/BlogAuthor/BlogAuthor";
import { BlogTextLikeButton } from "../../components/BlotTextLikeButton/BlogTextLikeButton"

export default class BlogTextPage extends Component{
    constructor(props){
        super(props)
        this.id = this.props.Id
        this.state = {
            posts:{}
        }
/*         fetch(`http://localhost:5000/${this.section}/${this.id}`, {method: 'get'}).then(res => res.json()).then(backendPosts => {
            this.post = backendPosts
        }) */
        console.log(this.section)
        console.log(this.id)
        console.log(`http://localhost:5000/:section/${this.id}`)
    }

    componentDidMount(){
        fetch(`http://localhost:5000/:section/${this.id}`, {method: 'get'}).then(res => res.json()).then(backendPosts => {
            this.setState({
                posts: backendPosts
            })
        })
   }

   render(){
        const post = this.state.posts
        console.log(post)
       return(
            <div className="blogTextPage">
                <BlogAuthor author={post.author} date="5 мая 2021" />
                <BlogTextLikeButton liked = {true} />
                <BlogTextHeader text={post.title} />
                <BlogTextBody text={post.text} />
            </div>
       )
   }
}
/**
 * Компонент страницы блога
 */

/*  export const BlogTextPage = ({id}) => {
    return(
        <div className="blogTextPage">
            <BlogAuthor author={id} date="5 мая 2021" />
            <BlogTextLikeButton liked = {true} />
            <BlogTextHeader text={fishTextHeader} />
            <BlogTextBody text={fishText} />
        </div>
    );
}

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
 */