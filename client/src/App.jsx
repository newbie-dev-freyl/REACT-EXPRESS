import React, { useEffect, useRef, useState } from 'react';

const HeaderNavigation = () => {
  const [isToggled, setIsToggled] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 843.20);
  const navMenuRefs = useRef([]);
  const navBackLinkRefs = useRef([]);
  const toggleRef = useRef(null);

  const handleResize = () => {
    setIsDesktop(window.innerWidth > 843.20);
    setIsToggled(false);
  };

  const toggleMenu = () => {
    setIsToggled(!isToggled);
    navMenuRefs.current.forEach(menu => {
      menu.removeAttribute('toggled');
    });
  };

  const handleLinkClick = (link, idx) => {
    if (link.hasAttribute('toggle-menu')) {
      navMenuRefs.current[idx].toggleAttribute('toggled');
    }
    if (link.hasAttribute('toggle-back')) {
      navBackLinkRefs.current[idx].parentElement.parentElement.toggleAttribute('toggled');
    }
    
  };

  useEffect(() => {
    const handleAnimationDisable = () => {
      document.documentElement.setAttribute('disabled-animation', '');
      setTimeout(() => {
        document.documentElement.removeAttribute('disabled-animation');
      }, 100);
    };

    window.addEventListener('resize', handleAnimationDisable);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleAnimationDisable);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    handleResize();
  }, []);

  return (
    <div>
      <button 
        className="header-toggle" 
        onClick={toggleMenu} 
        ref={toggleRef} 
        toggled={isToggled ? 'true' : undefined}
      >
        Toggle Menu
      </button>
      <nav className="header-navmenu">
        <li>
            <a href={`javascript:void(0)`} onClick={(e) => handleLinkClick(e.target, 0)} toggle-menu="true">
            Menu 1
            </a>
            <ul role="list" ref={(el) => (navMenuRefs.current[0] = el)}>
                <li><a href={`javascript:void(0)`} ref={(el) => (navBackLinkRefs.current[0] = el)} onClick={(e) => handleLinkClick(e.target, 0)} toggle-back="true">Submenu 1</a></li>
                <li><a href={`javascript:void(0)`}>Submenu 2</a></li>
            </ul>
        </li>
        <li>
            <a href={`javascript:void(0)`} onClick={(e) => handleLinkClick(e.target, 1)} toggle-menu="true">
            Menu 2
            </a>
            <ul role="list" ref={(el) => (navMenuRefs.current[1] = el)}>
                <li><a href={`javascript:void(0)`} ref={(el) => (navBackLinkRefs.current[1] = el)} onClick={(e) => handleLinkClick(e.target, 1)} toggle-back="true">Submenu 3</a></li>
                <li><a href={`javascript:void(0)`}>Submenu 4</a></li>
                <li>
                    <a href={`javascript:void(0)`} onClick={(e) => handleLinkClick(e.target, 3)} toggle-menu="true">Submenu 5</a>
                    <ul role="list" ref={(el) => (navMenuRefs.current[3] = el)}>
                        <li><a href={`javascript:void(0)`} ref={(el) => (navBackLinkRefs.current[3] = el)} onClick={(e) => handleLinkClick(e.target, 3)} toggle-back="true">Submenu 1</a></li>
                        <li><a href={`javascript:void(0)`}>Submenu 2</a></li>
                    </ul>
                </li>
            </ul>
        </li>
      </nav>
    </div>
  );
};


export default function App() {
    return (<><HeaderNavigation/></>)
}