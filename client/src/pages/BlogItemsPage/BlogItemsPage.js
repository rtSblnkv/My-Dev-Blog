import React from "react";
import JS from '../../images/JS.png'
import { Cardblog } from "../../components/Card-Blog/Card_blog";
import { CardBlogTitle } from "../../components/Card-Blog-Title/Card-Blog-Title";
import { CardBlogList } from "../../components/Card-blog-list/Card-blog-list";
import { Link } from "react-router-dom";

const posts = [
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

export const BlogItemsPage = () => {
    return(
        <div>
            <CardBlogTitle 
            section = "JavaScript"
            text = "Новости, интересные программные решения, обсуждения, связанные с JS и всем, что его касается"
            img = {JS}
            />
            <CardBlogList blogList = {posts}/>
        </div>
    );
}