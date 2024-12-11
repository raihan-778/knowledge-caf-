import PropTypes from "prop-types";

const Blog = ({blog}) => {

    const {title, author}=blog

    
    console.log( "Property form single blog",blog)
    return (
        <div>
            <h1>{title}</h1>
            <p>`Author Name: {author}`</p>
        </div>
    );
};

Blog.propTypes={
    blog:PropTypes.object.isRequired
}

export default Blog;