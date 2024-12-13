
import PropTypes from 'prop-types'

const Bookmark = ({bookmark}) => {
  const {title}=bookmark
  return (
    <div className='text-center text-2xl bg-gray-200 rounded-md m-3'>{title}</div>
  )
}

Bookmark.propTypes = {
  bookmark:PropTypes.object
}

export default Bookmark
// import PropTypes from 'prop-types'

// const Bookmark = ({bookmark}) => {
//   const {title}=bookmark
//   console.log("Bookmark Title:",title)
//   return (
//     <div>Bookmark Title:{title}</div>
//   )
// }

// Bookmark.propTypes = {
//   bookmark:PropTypes.object
// }

// export default Bookmark
