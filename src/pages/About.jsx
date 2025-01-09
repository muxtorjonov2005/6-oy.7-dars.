import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { useLocation, useNavigate} from 'react-router-dom'
import '../assets/styles/About.css'
function About() {
  const location = useLocation()
  console.log(location.state);

  const navigate = useNavigate()
  const [blogs, setBlogs] = useState([])
  
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
     .then(response => {
        console.log(response);
        if(response.status === 200) {
          setBlogs(response.data)
        }
      })
      .catch((error) => {
        console.log(error);
      })
  }, [])

  function handleClick(id) {
    navigate(`/about/${id}`)
    
  }
  return (
    <div className='about_container'>
      {
        blogs.length > 0 && blogs.map((blog, index) => {
          return (
            <div className='blog_item' key={index}>
              <h3>{blog.title}</h3>
              <p>{blog.body}</p>
              <p>Author: {blog.id}</p>
              <button onClick={() => handleClick(blog.id)} className='blogButton'>Tafsilotlar</button>
            </div>
          )
        })
      }
    </div>
  )
}

export default About