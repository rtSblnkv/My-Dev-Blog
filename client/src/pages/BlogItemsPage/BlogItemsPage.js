import React, {Component} from "react";
import dotenv from 'dotenv';
import JS from '../../images/JS.png'
import { CardBlogTitle } from "../../components/Card-Blog-Title/Card-Blog-Title";
import { CardBlogList } from "../../components/Card-blog-list/Card-blog-list";
import { Link, Router  } from "react-router-dom";

export default class BlogItemsPage extends Component {
    constructor(props){
        super(props)
      
        this.state = {
            posts:[]
        }
        this.section = props.Section
        console.log(process.env.SERVER + this.section);
    }

    componentDidMount(){
         const server = "https://my-dev-blog.herokuapp.com";
         fetch(server + this.section, {method: 'get'}).then(res => res.json()).then(backendPosts => {
            this.setState({
                posts: backendPosts
            })
        })
    }

    render(){
        const posts = this.state.posts
        console.log(posts)
        return (
            <div>
                <CardBlogTitle 
                    section = {this.section}
                    text = "Новости, интересные программные решения, обсуждения, связанные с JS и всем, что его касается"
                    img = {JS}
                />
                <div id="posts">
                    <CardBlogList blogList = {posts}/>
                </div>
            </div>
        )
    }

}
