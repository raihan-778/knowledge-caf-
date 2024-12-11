import { useEffect } from "react";
import { useState } from "react";



const Blog = () => {
    const [blogs,setBlogs]=useState([])
    console.log(blogs.length)

    useEffect( ()=>{
        
            fetch("/blog.json")
        .then(response=>response.json())
        .then(data=>setBlogs(data)) 
        .catch(err=>console.err(err))
    },[])

   

    return (
        <div>
            <h1>This is Blog Component</h1>
        </div>
    );
};

export default Blog;