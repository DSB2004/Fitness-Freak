import { MdDashboard } from "react-icons/md";
import { RiArticleLine } from "react-icons/ri";
import { IoMdChatboxes } from "react-icons/io";

export const header = {
    user: true,
    dropmenuList: [{ icon: < MdDashboard />, id: "dashboard", link: "" }, { icon: <RiArticleLine />, id: "blog", link: "blogs" }, { link: "/chat", id: "chat", icon: <IoMdChatboxes /> }],
    headerList: [{ name: "Dasboard", id: "dashboard", link: "" }, { name: "Blogs", id: "blogs", link: "blogs" }]
}

