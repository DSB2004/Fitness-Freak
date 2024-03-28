import { useEffect, useState } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Home from './home';
import Auth from './auth';
import Dashboard from './dashboard';
import Loading from './loading';

//dashboard component
import Index from "../components/dashboard/index"
import Features from "../components/dashboard/features"
import FeaturePage from '../components/dashboard/feature-page';
import Blogs from "../components/dashboard/blogs"

//chat componenet
import ChatPage from "../chat/chat-page"

// import Auth from './auth';
import { Auth as AuthObj } from '../firebase/app';
import { updateUser } from '../hook/redux-slice/user';

const App = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const dispatch = useDispatch()
    const [isLoading, toggleLoading] = useState(true)
    const User = useSelector(state => state.User)

    const handleUserRender = () => {
        AuthObj.onAuthStateChanged(user => {
            if (user) {

                dispatch(updateUser({ email: user.email, name: user.displayName, uid: user.uid }))
            }
            else {
                dispatch(updateUser({ email: null, name: null, uid: null }))
            }
        })
    }

    useEffect(() => handleUserRender(), [])

    useEffect(() => {
        toggleLoading(true)
        if (User !== null) {
            if (User.uid !== null) {
                if (location.pathname === "/" || location.pathname === "/auth/signup" || location.pathname === "/auth/signin") {
                    navigate(`${User.uid}/dashboard`)
                }
            }
            else {
                navigate("/")
            }
        }
        toggleLoading(false)
    }, [User])
    return (
        <>
            {isLoading ?
                <>
                    <Loading />
                </> : (
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/auth/:method" element={<Auth />} />
                        <Route path="/:token/dashboard" element={<Dashboard />} >
                            <Route index element={<Index />} />
                            <Route path="blogs" element={<Blogs />} />
                            <Route path="features/:type" element={<Features />} />
                            <Route path="features/:type/:id" element={<FeaturePage />} />
                        </Route>
                        <Route path="/chat" element={<ChatPage />} />
                    </Routes>
                )}
        </>
    )

}


export default App;