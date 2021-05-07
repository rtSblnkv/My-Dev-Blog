import {getPostLikes} from "../functions/GetLikes"

export const createPostsResponse = (posts) =>{
    return posts.map((post)=>{
        return{
            title:post.title,
            description:post.description,
            date:post.date,
            author:post.author.nickname,
            like_count:getPostLikes(post._id)
        }
    });

};

export const createPostResponse = (post) =>{
    return{
        title:post.title,
        text:post.text,
        date:post.date,
        author:post.author.nickname,
        like_count:getPostLikes(post._id)       
    };
};