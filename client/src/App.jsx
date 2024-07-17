import './app.css'


const itemList = [
    {
        label: "Menu1"
    },

    {
        label: "Menu2",
        submenu: [
            {
                label: "Menu2",
            },
            {
                label: "Submenu1",
            },
            {
                label: "Submenu2"
            }
        ]
    },

    {
        label: "Menu3",
        submenu: [
            {
                label: "Menu3"
            }, 
            {
                label: "Submenu31",
                submenu: [
                    {
                        label: "Submenu31"
                    },
                    {
                        label: "Sub Sub menu1"
                    },
                    {
                        label: "Sub Sub menu2"
                    },
                    {
                        label: "Sub Sub menu3"
                    }

                ]
            },

            {
                label: "Submenu32"
            }
        ]
    },
]

export default function App(){

    function removeActive() {
        const links = document.querySelectorAll('.nav__link')
        links.forEach(el => {
            el.classList.remove('active')
        })
    }
    
    function toggle(e) {
        console.log('clicked!')
        let submenu = e.target.nextElementSibling
        if (!submenu) return
        e.target.classList.add('active')
    }

    function renderSubmenu(subMenu) {
        return (
            <ul className='nav__submenu' role='list'>
                {subMenu.map((item, index) => (
                    <li className='nav__subitem' key={index}>
                            <a href="#"  className={`nav__sublink`} onClick={toggle}>{item.label}</a>
                            {item.submenu && renderSubmenu(item.submenu)}
                    </li>
                ))}
            </ul>
        )
    }
    return (
        <>
            <nav>
                <ul className='nav__menu' role='list'>
                {itemList.map((item, index) => (
                    <li className="nav__item" key={index}>
                            <a href="#" className={`nav__link`} onClick={toggle}>{item.label}</a>
                            {item.submenu && renderSubmenu(item.submenu)}
                    </li>

                ))}
                </ul>
            </nav>
        </>
    )
}