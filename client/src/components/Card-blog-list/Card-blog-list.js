import React from "react";
import { Cardblog } from "../Card-Blog/Card_blog";
export const CardBlogList = ({blogList})=> {
    const posts = blogList.map((item)=>{
        const {id, ...itemProps} = item;
        return(
            <div key = {id}>
                <Cardblog {...itemProps}/>
            </div>
        )
    })
    return (
        <div>
            {posts}
        </div>
    )
}