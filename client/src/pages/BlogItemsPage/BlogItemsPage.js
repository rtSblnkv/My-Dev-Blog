import React from "react";
import JS from '../../images/JS.png'
import { Cardblog } from "../../components/Card-Blog/Card_blog";
import { CardBlogTitle } from "../../components/Card-Blog-Title/Card-Blog-Title";
import { CardBlogList } from "../../components/Card-blog-list/Card-blog-list";
import { Link, Router  } from "react-router-dom";

let posts = [
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
})