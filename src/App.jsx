
import './App.css'
import Blog from './components/blogs/Blogs'
import BookMarks from './components/bookmarks/BookMarks'
import Header from './components/header/Header'

function App() {





  return (
    <> 
     
  <Header></Header>
  <div className="md:flex">
  <Blog></Blog>
  <BookMarks></BookMarks>
  </div>
   
      
    </>
  )
}

export default App
