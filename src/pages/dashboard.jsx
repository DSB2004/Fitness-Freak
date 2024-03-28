import React, { useEffect } from 'react'
import '../style/dashboard.css'
import Header from '../components/common/header'
import { header } from "../assets/static/dashboard"
import { Outlet } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getFeatures } from '../hook/redux-slice/feature-data'
import Chat from "../chat/chat-box"

export default function Dashboard() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getFeatures())
    }, [])

    return (
        <>
            <Header content={header} user={true}></Header>
            <Outlet />
            <Chat />
        </>
    )
}
