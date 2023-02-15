import React,{useRef,useState} from 'react';
import './addblog.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Richtexteditor from 'jodit-react'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Addblog() {
  const navigate =  useNavigate()
  const editor = useRef(null);
  const [blog,setBlog] = useState('')

  const Handlesubmit= async ()=>{
    try {
      const result = await axios.post('http://localhost:5000/api/add_blog',{blog})
        toast.success('Blog Added Successfully', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
        console.log(result.data)
        navigate('/')
    } catch (error) {
       console.log(error)
    }
    
  }

  const config =
    {
      buttons :['bold','italic','underline','strikethrough','ul', 'align', 'font','link', 'image', 'line height','fontsize'],
      height :'500px',width:'75%'
    }
  

  return (
    <>
      <div className="main">
        <h2 className="mainheading">Eqaim Blog</h2>
      </div>
      <div className="icons">
      <Link to={'/'} className='icons2'><i className="fa fa-home fa-3x" aria-hidden="true"></i></Link>
      <Link onClick={()=>Handlesubmit()}><i className="fa fa-check-square fa-3x" aria-hidden="true"></i></Link>
      </div>
      <div className="richtext">
        <Richtexteditor className='editor' ref={editor} value={blog} onBlur={(e)=>setBlog(e)} config={config}/>
      </div>

    </>
  )
}

export default Addblog