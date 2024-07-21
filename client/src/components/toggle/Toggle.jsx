import './toggle.css'
import { useRef } from 'react';

const Toggle =  (props) => {
    

    const toggleRef = useRef(null)
    function toggleNav() {
        toggleRef.current.toggleAttribute('toggled')
        
        const allNavSubMenus = Array.from(
            document.querySelectorAll('[menu-toggled]')
        )
        allNavSubMenus.forEach(item => {
            item.removeAttribute('menu-toggled')
        })
    }

    return (
        <>
            <div className="toggle" ref={toggleRef} onClick={toggleNav}>
                <i className={`bx bx-${props.firstIcon}`}></i>
                <i className={`bx bx-${props.secondIcon}`}></i>
            </div>
        </>
    )
}

export default Toggle;