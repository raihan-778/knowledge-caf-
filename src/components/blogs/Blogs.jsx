import { useEffect, useState } from "react";
import Blog from "../blog/Blog";



const Blogs = () => {
    const [blogs,setBlogs]=useState([])
    console.log(blogs.length)

    useEffect( ()=>{
        
            fetch("/blog.json")
        .then(response=>response.json())
        .then(data=>setBlogs(data)) 
        .catch(err=>console.err(err))
    },[])

   

    return (
        <div className="w-2/3">
            {blogs.map(blog=>{<Blog kye={blog.id} blog={blog}></Blog>})}
            
           <h1>Blogs</h1>
        </div>
    );
};

export default Blogs;