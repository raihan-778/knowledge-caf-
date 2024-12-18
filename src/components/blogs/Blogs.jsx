import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Blog from "../blog/Blog";




const Blogs = ({handleAddBookmarks,handleMarkAsRead}) => {
    const [blogs,setBlogs]=useState([])
    console.log(blogs.length)

  useEffect(()=>{
    fetch('blog.json')
    .then(res=>res.json())
    .then(data=>setBlogs(data))
  },[])
    return (
        <div className="w-2/3">
     
         
           <h1 className="text-4xl">Blogs:{blogs.length}</h1>
           {blogs.map(blog=><Blog 
           key={blog.id}
            blog={blog}
            handleAddBookmarks={handleAddBookmarks}
            handleMarkAsRead={handleMarkAsRead}
            ></Blog>)}
            
           
        </div>
    );
};

Blogs.propTypes={
  handleAddBookmarks: PropTypes.func.isRequired,
  handleMarkAsRead:PropTypes.func
}

export default Blogs;