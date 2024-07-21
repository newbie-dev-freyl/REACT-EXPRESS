import '../navbar/navbar.css'
import { useState, useRef } from 'react'

const NavItem = (props) => {
    return (
        <li>
            <a href={props.href}>{props.label}</a>
        </li>
    )
}

const NavItemWithMenu = (props) => {
    const [backLinkLabel, setBackLinkLabel] = useState('')
    const toggleLinkRef = useRef([])
    const toggleBackRef = useRef([])
    const navMenuRef = useRef([])
    
    
    function navLinkClick(link, index) {
        if(link.hasAttribute('toggle-menu')) {
            toggleLinkRef.current[index].nextElementSibling.toggleAttribute('menu-toggled')
            setBackLinkLabel(toggleLinkRef.current[index].innerText)
        }

        if(link.hasAttribute('toggle-back')) {
            toggleBackRef.current[index].parentElement.parentElement.toggleAttribute('menu-toggled')
        }
    }

    return (
        <li>
            <a 
                href={props.hrefToggleMenu}
                index={props.index}
                ref={(el) => (toggleLinkRef.current[props.index] = el)}
                onClick={(e) => navLinkClick(e.target, props.index)}
                toggle-menu='true'
            >
                {props.label}
                <i class="bx bx-chevron-right"></i>
            </a>
            <ul role='list' ref={(el) => (navMenuRef.current[props.index] = el)}>
                <li>
                    <a 
                        href={props.hrefToggleBack}
                        ref={(el) => (toggleBackRef.current[props.index] = el)}
                        onClick={(e) => navLinkClick(e.target, props.index)}
                        toggle-back='true'
                    >
                        <i class="bx bx-chevron-left"></i>
                        {backLinkLabel}
                    </a>
                </li>
                {props.children}
            </ul>
        </li>
    )
}// NavItemWithMenu


const Navbar = (props) => {
    return (
        <>
            <nav className="navbar">
                <ul className="navbar-menu" role='list'>
                            <NavItem href='#' label='home'/>
                            <NavItemWithMenu    
                                hrefToggleMenu='#' 
                                label='about us'
                                index='0'
                                hrefToggleBack='#'
                            > 
                                <NavItem href='#' label='programs'/>
                                <NavItem href='#' label='resources'/>
                                <NavItemWithMenu 
                                    hrefToggleMenu='#' 
                                    label='next'
                                    index='11'
                                    hrefToggleBack='#'
                                >
                                    <NavItem href='#' label='next js'/>
                                    <NavItem href='#' label='typescript'/>
                                </NavItemWithMenu>

                            </NavItemWithMenu>    
                            <NavItem href='#' label='programs'/>
                            <NavItem href='#' label='resources'/>
                            <NavItem href='#' label='opportunities'/>
                </ul>
            </nav>
        </>
    )
}

export default Navbar;