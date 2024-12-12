import PropTypes from "prop-types";

const Blog = ({blog}) => {
    console.log("data from blog component",blog);

    const {title,cover,author_img,reading_time,author,posted_date}=blog

    
    console.log( "Property form single blog",blog)
    return (
    <div>
            <img src={cover} alt={`Cover picture of the title ${title}`} />
        
        <div className="flex justify-between">
        <div className="flex">
            <img className="w-14" src={author_img} alt="" />
            <div className="ml-6">
                <h2 className="text-2xl">{author}</h2>
                <p>{posted_date}</p>
            </div>
        </div>
        <div>
            <span>
                {reading_time} min read
            </span>
        </div>
        </div>
        

        <h2 className="text-4xl">{title}</h2>
        </div>
        
    );
};

Blog.propTypes={
    blog:PropTypes.object.isRequired
}

export default Blog;