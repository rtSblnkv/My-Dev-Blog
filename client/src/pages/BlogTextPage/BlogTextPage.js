import React, {Component} from "react";
import "./BlogTextPage.css";
import { BlogTextBody } from "../../components/BlogTextBody/BlogTextBody";
import { BlogTextHeader } from "../../components/BlogTextHeader/BlogTextHeader";
import { BlogAuthor } from "../../components/BlogAuthor/BlogAuthor";
import { BlogTextLikeButton } from "../../components/BlotTextLikeButton/BlogTextLikeButton";
const server = "https://my-dev-blog.herokuapp.com";

export default class BlogTextPage extends Component{
    constructor(props){
        super(props)
        this.id = this.props.Id
        this.state = {
            posts:{}
        }
        console.log(this.section)
        console.log(this.id)
        console.log(`${server}/:section/${this.id}`)
    }

    componentDidMount(){
        fetch(`${server}/:section/${this.id}`, {method: 'get'}).then(res => res.json()).then(backendPosts => {
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
                <BlogAuthor author={post.author} date="26 мая 2021" />
                <BlogTextLikeButton liked = {true} />
                <BlogTextHeader text={post.title} />
                <BlogTextBody text={post.text} />
            </div>
       )
   }
}
