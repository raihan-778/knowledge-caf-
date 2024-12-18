import PropTypes from "prop-types";
import { BsBookmarks } from "react-icons/bs";

const Blog = ({blog,handleAddBookmarks,handleMarkAsRead}) => {

    const {id,title,cover,author_img,reading_time,author,posted_date,hashtags}=blog

    
    console.log( "Property form single blog",blog)
    return (
    <div className="mb-8 space-y-4">
            <img className="w-full" src={cover} alt={`Cover picture of the title ${title}`} />
        
        <div className="flex justify-between mb-6">
        <div className="flex">
            <img className="w-14" src={author_img} alt="" />
            <div className="ml-6">
                <h2 className="text-2xl mb-2">{author}</h2>
                <p>{posted_date}</p>
            </div>
        </div>
         <div className="mb-4">
            <span>
                {reading_time} min read
            </span>
            <button onClick={()=>handleAddBookmarks(blog)} className="ml-2 text-2xl text-orange-950"><  BsBookmarks /></button>
         </div>
        </div>
        

        <h2 className="text-4xl">{title}</h2>
        <p>
            {hashtags.map((hash,idx)=><span key ={idx}><a href="">#{hash}</a></span>)}
        </p>
        <button onClick={()=>handleMarkAsRead(id,reading_time)} className="text-purple-800 font-bold underline">Mark As Read</button>
        </div>
        
    );
};

Blog.propTypes={
    blog:PropTypes.object.isRequired,
    handleAddBookmarks:PropTypes.func.isRequired,
    handleMarkAsRead:PropTypes.func.isRequired
}

export default Blog;