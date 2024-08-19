import React from "react";
import useFetch from "./customHooks/useFetch";

export default function BlogPosts() {
    const {data, error} = useFetch("https://jsonplaceholder.typicode.com/posts")

    
    if (error){
        return (<div className="error"><h1> Error: </h1>{error}</div>)
    }
    

    const Posts = () =>{
        const listStyle = {
                listStyle : "none"
            }
        
        const posts = data.map(post=>{ return <li className="post" key={post.id}>
                                                  <h2> {post.title} </h2>
                                                  <p> {post.body} </p> 
                                               </li>})
        return (<ul style={listStyle}> {posts} </ul>)
       
       }
    return(
        <div className="blog-posts">
            <h1> Blog Posts </h1>
            <Posts />

        </div>
    )
}