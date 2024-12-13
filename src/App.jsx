
import { useState } from 'react'
import './App.css'
import Blogs from './components/blogs/Blogs'


import BookMarks from './components/bookmarks/BookMarks'
import Header from './components/header/Header'

function App() {

  const [bookmarks,setBookmarks]=useState([])
  const handleAddBookmarks=blog=>{
 
    const newBookmarks=[...bookmarks,blog]
    setBookmarks(newBookmarks) 
  }

  return (
    <> 
     
  <Header></Header>
  <div className="md:flex m-auto max-w-7xl">
 <Blogs handleAddBookmarks={handleAddBookmarks}></Blogs>

  <BookMarks bookmarks={bookmarks}></BookMarks>
  

  </div>
   
      
    </>
  )
}

export default App
