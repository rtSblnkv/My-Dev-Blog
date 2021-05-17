import React from "react";
import { Cardblog } from "../Card-Blog/Card_blog";
export const CardBlogList = ({blogList})=> {
    const posts = blogList.map((item)=>{
        const {id} = item;
        return(
            <div key = {id}>
                <Cardblog {...item}/>
            </div>
        )
    })
    return (
        <div>
            {posts}
        </div>
    )
}