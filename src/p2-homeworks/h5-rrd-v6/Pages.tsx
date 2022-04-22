import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Error404 from './pages/Error404'
import Junior from './pages/Junior'
import PreJunior from './pages/PreJunior'



export const PATH = {
    PRE_JUNIOR: '/PreJunior',
    // add paths
}

function Pages() {
    return (
        <div>

            {/*Routes выбирает первый подходящий роут*/}
            <Routes>

                {/*    /!*в начале мы попадаем на страницу '/' и переходим сразу на страницу PRE_JUNIOR*!/*/}
                <Route path={'/'} element={<Navigate to={PATH.PRE_JUNIOR}/>}></Route>
                <Route path={'/PreJunior/*'} element={<PreJunior />}></Route>
                <Route path={'/Junior/*'} element={<Junior />}></Route>
                <Route path={'/eror/*'} element={<Error404 />}></Route>

            </Routes>

        </div>
    )
}

export default Pages
