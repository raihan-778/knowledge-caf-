import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";



const BookMarks = ({bookmarks}) => {
    console.log("This is bookmarks",bookmarks)
    return (
        <div className="w-1/3 ml-4 bg-gray-300">
            <h1 className="text-3xl m-2 text-center">Bookmarked Blogs:{bookmarks.length}</h1>  
           {
       bookmarks.map(bookmark=><Bookmark 
        key={bookmark.id}
        bookmark={bookmark}
       
       ></Bookmark>)
           }
        </div>
    )
}

BookMarks.propTypes={
    bookmarks: PropTypes.array.isRequired
}

export default BookMarks;