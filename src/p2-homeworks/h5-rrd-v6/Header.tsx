import React from 'react'
import {NavLink} from "react-router-dom";
import s from './Header.module.css'

function Header() {
    return (
        <div className={s.header}>
            <NavLink to={'/'} className={s.block}> pusto </NavLink>
            <NavLink to={'/eror'} className={s.block}> Error </NavLink>
            <NavLink to={'/Junior'} className={s.block}> Junior </NavLink>
            <NavLink to={'/PreJunior'} className={s.block}> PreJunior </NavLink>
            <div className={s.hovers}></div>
        </div>
    )
}

export default Header
