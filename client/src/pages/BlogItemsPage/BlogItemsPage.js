import React, {Component} from "react";
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
    }

    componentDidMount(){
         fetch("http://localhost:5000/" + this.section, {method: 'get'}).then(res => res.json()).then(backendPosts => {
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

/* let posts = [
    {
        title :"Java",
        content:"mvimrekvrmvlkemkvrev re vkqwrv wer v w rev",
        author: "user 122" ,
        likes :1 ,
        marks : 22,
        id:1
    },
    {
        title : "Python",
        content: "sdvsdxsa x sa x",
        author :"user 999" ,
        likes :1 ,
        marks : 22,
        id:2
    },
    {
        title : "C",
        content: "sascas sac c",
        author : "231" ,
        likes : 1 ,
        marks : 22,
        id:3
    }
]

export const BlogItemsPage = ({Section}) => {
    class PostApi{
        static fetch(){
            return fetch("/" + Section, {method: 'get'}).then(res => res.json())
        }
    }
    
    document.addEventListener('DOMContentLoaded', () =>{
        PostApi.fetch().then(backendPosts => {
            //posts = backendPosts.concat()
            console.log(backendPosts)
        })
    })

    return(
        <div>
            <CardBlogTitle 
            section = {Section}
            text = "Новости, интересные программные решения, обсуждения, связанные с JS и всем, что его касается"
            img = {JS}
            />
            <div id="posts">
                <CardBlogList blogList = {posts}/>
            </div>
        </div>
    );
}

const sectionName = "JS"
class PostApi{
    static fetch(){
        return fetch("/" + sectionName, {method: 'get'}).then(res => res.json())
    }
}

document.addEventListener('DOMContentLoaded', () =>{
    PostApi.fetch().then(backendPosts => {
        posts = backendPosts.concat()
        console.log(posts)
    })
}) */