import '../brand/brand.css'
import Logo from '../../assets/images/logo-1.png'

export default function Brand(props) {
    return (
        <>
            <div className={`brand-container ${props.class}`}>
                <img src={props.logo} alt="Brand Logo" />
                <div>{props.title}</div>
            </div>
        </>
    )
}