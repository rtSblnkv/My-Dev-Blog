import React, {Component} from "react";
import dotenv from 'dotenv';
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
        dotenv.config();
        console.log(this.section)
        console.log(this.id)
        console.log(`${process.env.SERVER}/:section/${this.id}`)
    }

    componentDidMount(){
        const server = "https://my-dev-blog.herokuapp.com";
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
