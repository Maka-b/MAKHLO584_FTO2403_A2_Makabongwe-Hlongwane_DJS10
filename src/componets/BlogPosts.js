import React from "react";
import useFetch from "./customHooks/useFetch";

export default function BlogPost() {
    const {data, error} = useFetch("https://jsonplaceholder.typicode.com/posts")
    const Posts = () =>{
     const posts = data.map(post=>{ return <div className="post" id={post.id}>
                                               <h2> {post.title} </h2>
                                               <p> {post.body} </p> 
                                            </div>})
     return (<ul> {posts} </ul>)
    
    }
    if (error){
        return (<div className="error"><h1> Error: </h1>{error}</div>)
    }
    return(
        <div className="blog-posts">
            <h1> Blog Posts </h1>
            <Posts />

        </div>
    )
}