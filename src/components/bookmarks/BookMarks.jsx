import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";



const BookMarks = ({bookmarks,readingTime}) => {
    console.log("This is bookmarks",bookmarks)
    return (
        <div className="w-1/3 ml-4 bg-gray-300">
    
            <div> <h3 className="text-4xl">Reading Time:{readingTime}</h3></div>
            <h1 className="text-3xl m-2 text-center">Bookmarked Blogs:{bookmarks.length}</h1>  
           {
       bookmarks.map((bookmark,idx)=><Bookmark  //here "idx " is a built in parameter of map which gives a unique number.
        key={idx}
        bookmark={bookmark}
        readingTime={readingTime}
       
       ></Bookmark>)
           }
        </div>
    )
}

BookMarks.propTypes={
    bookmarks: PropTypes.array.isRequired,
    readingTime: PropTypes.number
}

export default BookMarks;