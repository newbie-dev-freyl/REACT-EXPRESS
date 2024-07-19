import React, { useEffect, useRef } from 'react';

const HeaderNavigation = () => {
  const navMenuRefs = useRef([]);
  const navToggleLinkRefs = useRef([]);
  const navBackLinkRefs = useRef([]);
  const toggleRef = useRef(null);

  const handleAnimationDisable = () => {
    document.documentElement.setAttribute('disabled-animation', '');
    setTimeout(() => {
      document.documentElement.removeAttribute('disabled-animation');
    }, 100);
  };

  const handleResize = () => {
    toggleRef.current.removeAttribute('toggle');
    navMenuRefs.current.forEach((menu) => {
      menu.removeAttribute('toggled');
    });
  };

  const toggleMenu = () => {
    toggleRef.current.toggleAttribute('toggle');
    navMenuRefs.current.forEach((menu) => {
      menu.removeAttribute('toggled');
    });
  };

  const handleLinkClick = (link, idx) => {
    if (link.hasAttribute('toggle-menu')) {
      navToggleLinkRefs.current[idx].nextElementSibling.toggleAttribute(
        'toggled'
      );
    }
    if (link.hasAttribute('toggle-back')) {
      navBackLinkRefs.current[idx].parentElement.parentElement.toggleAttribute(
        'toggled'
      );
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleAnimationDisable);
    window.addEventListener('resize', handleResize);
  }, []);

  return (
    <header className="header">
      <div className="shadow-bottom-sm">
        <div className="wrapper flex align-center space-between">
          <div className="header-inner | flex align-center space-between width-100">
            <div className="header-brand">
              {/* <img src="/assets/images/logo-1.png" alt="" className="logo" /> */}
            </div>
            <div className="header-toggle" ref={toggleRef} onClick={toggleMenu}>
              <i className="bx bx-x"></i>
              <i className="bx bx-menu"></i>
            </div>
            <nav className="header-nav | ff-nav text-capitalize text-nowrap">
              <ul className="header-navmenu" role="list">
                <li>
                  <a href="#">home</a>
                </li>

                <li>
                  <a
                    href="#"
                    ref={(el) => (navToggleLinkRefs.current[0] = el)}
                    onClick={(e) => handleLinkClick(e.target, 0)}
                    toggle-menu="true"
                  >
                    about us <i className="bx bx-chevron-down"></i>
                  </a>
                  <ul ref={(el) => (navMenuRefs.current[0] = el)} role="list">
                    <li>
                      <a
                        href="#"
                        ref={(el) => (navBackLinkRefs.current[0] = el)}
                        onClick={(e) => handleLinkClick(e.target, 0)}
                        toggle-back="true"
                      >
                        <i className="bx bx-chevron-left"></i>about us
                      </a>
                    </li>

                    <li>
                      <a href="#">key officials</a>
                    </li>
                    <li>
                      <a href="#">who we are</a>
                    </li>
                    <li>
                      <a href="#">mission & vision</a>
                    </li>
                    <li>
                      <a href="#">organizational chart</a>
                    </li>
                    <li>
                      <a href="#">quality policy</a>
                    </li>
                    <li>
                      <a href="#">mandate</a>
                    </li>
                  </ul>
                </li>

                <li>
                  <a href="#">programs</a>
                </li>

                <li>
                  <a href="#" toggle-menu="true">
                    resources <i className="bx bx-chevron-down"></i>
                  </a>
                  <ul role="list">
                    <li>
                      <a href="#" toggle-back="true">
                        <i className="bx bx-chevron-left"></i>resources
                      </a>
                    </li>

                    <li>
                      <a href="#">citizen's charter</a>
                    </li>
                    <li>
                      <a href="#">downloadables</a>
                    </li>

                    <li>
                      <a href="#" toggle-menu="true">
                        issuances <i className="bx bx-chevron-down"></i>
                      </a>
                      <ul role="list">
                        <li>
                          <a href="#" toggle-back="true">
                            <i className="bx bx-chevron-left"></i>issuances
                          </a>
                        </li>

                        <li>
                          <a href="#">draft issuances</a>
                        </li>
                        <li>
                          <a href="#">joint circulars</a>
                        </li>
                        <li>
                          <a href="#">memo circulars</a>
                        </li>
                        <li>
                          <a href="#">presidential directives</a>
                        </li>

                        <li>
                          <a href="#" toggle-menu="true">
                            republic acts <i className="bx bx-chevron-down"></i>
                          </a>
                          <ul role="list">
                            <li>
                              <a href="#" toggle-back="true">
                                <i className="bx bx-chevron-left"></i>republic
                                acts
                              </a>
                            </li>

                            <li>
                              <a href="#">item 1</a>
                            </li>
                            <li>
                              <a href="#">item 2</a>
                            </li>
                            <li>
                              <a href="#">item 3 </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <a href="#">dilg portals</a>
                    </li>

                    <li>
                      <a href="#" toggle-menu="true">
                        library <i className="bx bx-chevron-down"></i>
                      </a>
                      <ul role="list">
                        <li>
                          <a href="#" toggle-back="true">
                            <i className="bx bx-chevron-left"></i>library
                          </a>
                        </li>

                        <li>
                          <a href="#">central office</a>
                        </li>
                        <li>
                          <a href="#">regional office</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>

                <li>
                  <a href="#" toggle-menu="true">
                    opportunities <i className="bx bx-chevron-down"></i>
                  </a>
                  <ul role="list">
                    <li>
                      <a href="#" toggle-back="true">
                        <i className="bx bx-chevron-left"></i>opportunities
                      </a>
                    </li>

                    <li>
                      <a href="#">vacancies</a>
                    </li>
                  </ul>
                </li>

                <li>
                  <a href="#">contact us</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default function App() {
  return (
    <>
      <HeaderNavigation />
    </>
  );
}
