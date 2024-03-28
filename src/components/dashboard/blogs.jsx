import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import BlogCard from "../../layouts/blog-card/blog-card"
import { sendBlogs } from '../../util/blog-data'
export default function Blogs() {
    const blogs = useSelector(state => state.Blog.blogArray)
    useEffect(() => { sendBlogs() }, [])
    return (
        <section className='dashboard-blog'>
            <h1 className='dashboard-heading uppercase'>Empowering Perspectives: Fitness Community Blogs</h1>
            <article className='flex-left flex-wrap dashboard-article'>
                {blogs.length !== 0 ?
                    <>
                        {blogs.map(element => <BlogCard content={element} key={element.id} />)}
                    </> :
                    <>
                        <BlogCard key={1} />
                        <BlogCard key={2} />
                        <BlogCard key={3} />
                    </>}
            </article>
        </section >
    )
}
