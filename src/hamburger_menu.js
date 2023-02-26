import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function HamburgerMenu()
{
    const [visible, setVisible]=useState(false)
    function toggle(e)
    {
        e.preventDefault();
        setVisible(()=>!visible)
    }

    return(
        <>
        <button onClick={toggle} className='menuButton'><img src='/images/icons/hamburger.png' alt='otwórz menu'/></button>
        <nav style={visible ? {visibility: visible} : {visibility: 'hidden'}}>
            <NavLink to='/'>LivePole</NavLink>
            <NavLink to='/products'>Produkty</NavLink>
            <NavLink to='/contact'>Kontakt</NavLink>
        </nav>
        </>
    )

}