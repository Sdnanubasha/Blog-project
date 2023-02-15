import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
import './viewblog.css'

function Viewblog() {
  const [content, setContent] = useState('')
  const {id} = useParams()

  const getContent = async () => {
    try {
      const result = await axios.get(`http://localhost:5000/api/blogs/${id}`)
      setContent(result.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getContent()
  }, [])

  return (
    <>
      <div className="main">
        <h2 className="mainheading">Eqaim Blog</h2>
      </div>
      <div className="icons">
      <Link to={'/'}><i className="fa fa-home fa-3x" aria-hidden="true"></i></Link>
      </div>
      <div className="container">
        <div className="item">
          <span dangerouslySetInnerHTML={{ __html: content.blog }}></span>
        </div>
      </div>
    </>
  )
}

export default Viewblog