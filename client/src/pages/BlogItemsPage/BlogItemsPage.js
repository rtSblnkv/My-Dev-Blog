import React, {Component} from "react";
import android from '../../images/Android.png'
import flutter from '../../images/Flutter.png'
import csharp from '../../images/Csharp.png'
import python from '../../images/Python.png'
import java from '../../images/Java.png'
import js from '../../images/JS.png'
import html from '../../images/Html.png'
import sql from '../../images/SQl.png'
import css from '../../images/Css.png'
import { CardBlogTitle } from "../../components/Card-Blog-Title/Card-Blog-Title";
import { CardBlogList } from "../../components/Card-blog-list/Card-blog-list";
const server = "https://my-dev-blog.herokuapp.com";

const imageMap = new Map([
    ["Android",android],
    ["Flutter",flutter],
    ["CSharp",csharp],
    ["Python",python],
    ["Java",java],
    ["JS",js],
    ["HTML",html],
    ["SQL",sql],
    ["CSS",css],
]);



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
         fetch(server+'/'+ this.section, {method: 'get'}).then(res => res.json()).then(backendPosts => {
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
                    text = {`Новости, интересные программные решения, обсуждения, связанные с ${this.section} и всем, что его касается`}
                    img = {imageMap.get(this.section)}
                />
                <div id="posts">
                    <CardBlogList blogList = {posts}/>
                </div>
            </div>
        )
    }

}
