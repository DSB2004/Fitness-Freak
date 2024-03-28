import React from 'react'
import "../style/auth.css"
import Header from '../components/common/header'
import { useParams } from 'react-router-dom'
import { header } from '../assets/static/auth';
import SignIn from '../components/auth/signin';
import SignUp from '../components/auth/signup';
import { useSelector } from 'react-redux';
export default function Auth() {
  const darkTheme = useSelector(state => state.Theme)
  const { method } = useParams();
  return (
    <main className={`auth-section ${darkTheme ? "dark-bg" : "light-bg"} trans-500`}>
      <Header content={header} />
      {method === "signin" ?
        <>
          <SignIn />
        </> :
        <>
          <SignUp />
        </>

      }
    </main>
  )
}
