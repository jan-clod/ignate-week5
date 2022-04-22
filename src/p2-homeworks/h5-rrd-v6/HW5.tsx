import React from 'react'
import Header from './Header'
import Pages from './Pages'
import {HashRouter} from "react-router-dom";
import s from './HW5.module.css'

function HW5() {
    return (
        <div>

            {/*в gh-pages лучше работает HashRouter*/}
            <HashRouter>
                <div className={s.activ}>
                    <Header/>
                </div>
                <Pages/>

            </HashRouter>
        </div>
    )
}

export default HW5
