import '../header/header.css'
import Logo from '../../assets/images/logo-1.png'
import Brand from '../brand/Brand'
import Toggle from '../toggle/Toggle'
import Navbar from '../navbar/Navbar'


const Header = (props) => {
    return (
        <>
            <header>
                <div className='shadow-bottom flex align-center'>
                    <div className='header-inner wrapper flex align-center justify-sb'>
                        <Brand logo={Logo} title='KissMyAxe' class='hide-title'/>
                        <Toggle firstIcon='menu' secondIcon='x'/>
                        <Navbar />
                    </div>
                </div>
            </header> 
        </>
    )
}

export default Header;