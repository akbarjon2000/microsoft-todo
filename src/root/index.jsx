import React, { useState } from 'react'
import Navbar from '../components/navbar/Navbar'
import Sidebar from '../components/sidebar/Sidebar'
import { sidebarObj } from '../utils/sidebar'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { Wrapper } from './style'
import MenuHideContext from '../context/menubarContext'
import TaskContext from '../context/tasksContext'
import ReducerContextProvider from '../context/reducerContext'
import LandingPage from '../components/authentication/Main/LandingPage/LandingPage'
import SignIn from '../components/authentication/Main/SignIn/SignIn'
import SignUp from '../components/authentication/Main/SignUp/SignUp'
const Root = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState({
        id: null,
        username: "",
        email: ""
    })
    if (isLoggedIn) {
        return (
            <>

                <Navbar />
                <Wrapper>
                    <ReducerContextProvider>
                        <TaskContext>
                            <MenuHideContext>
                                <Sidebar />
                                <Routes>
                                    {sidebarObj.map(({ id, path: pathname, Component }) => (
                                        <Route key={id} path={pathname} element={<Component />} />
                                    ))}
                                    <Route path='*' element={<LandingPage />} />
                                </Routes>
                            </MenuHideContext>
                        </TaskContext>
                    </ReducerContextProvider>
                </Wrapper>
            </>
        )
    } else {
        return (
            <Routes>
                <Route path='/sign-in' element={<SignIn />} />
                <Route path='/sign-up' element={<SignUp />} />
                <Route path='*' element={<LandingPage />} />
            </Routes>
        )
    }


}


export default Root
