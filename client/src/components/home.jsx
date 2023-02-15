import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import './home.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Blogs = () => {
    const [content, setContent] = useState([])

    const blogData = async () => {
        try {
            const result = await axios.get('http://localhost:5000/api/blogs')
            if (result.data.length > 0) {
                setContent(result.data);
            }

        } catch (error) {
            console.log('something went wrong while getting blog data');
        }
    }

    useEffect(() => {
        blogData()
    }, [])

    return (
        <>
            <div className="main">
            <h2 className="mainheading">Eqaim Blog</h2>
            <ToastContainer/>
            </div>
            <div className="grid-container">
            {content ? content.map(data => (
                    <Link to={`/blog/${data._id}`} key={data._id} style={{textDecoration:"none"}}>
                        <div className="grid-item">
                            <span dangerouslySetInnerHTML={{__html:data.blog}}></span>
                        </div>
                    </Link>
            )) : <center><h1>No Blogs Available</h1></center>}
            </div>
            <div className="icon">
            <Link to={'/addblog'} className='add_blog'><i className="fa fa-plus-square fa-3x"></i></Link>
            </div>
        </>
    );
}


export default Blogs;