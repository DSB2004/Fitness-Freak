import Store from "../hook/store"
import { getBlogs } from "../hook/redux-slice/blog-data"
export const sendBlogs = async () => {
    let res = Store.getState().Blog.blogArray
    if (res.length === 0) {
        await Store.dispatch(getBlogs())
    }
    res = Store.getState().Blog.blogArray
}