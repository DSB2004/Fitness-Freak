import { Database } from "../app";
import { collection, getDocs } from "firebase/firestore";


export const BlogCollection = collection(Database, "blogs")


export const returnBlog = async () => {
    try {
        const res = []
        const blogs = await getDocs(BlogCollection)
        blogs.forEach((blog) => { res.push({ id: blog.id, ...blog.data() }) })
        return res;
    }
    catch (err) {
        console.log(err)
    }
};

