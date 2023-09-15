import classes from './NavBar.css'
import CartWidget from "../CartWidget/CartWidget"
import "./NavBar.css";
import logo from '../../assets/fiorosea.png'
import { NavLink, useNavigate } from 'react-router-dom'


const NavBar = () => {
    const navigate = useNavigate()
    return (
        <nav>
            <img src={logo} alt="Ecommerce" className='LogoImg' onClick={() => navigate('/Entrega1-React-Fiorotto')} />
            <div className='container-nav'>
                <NavLink to='/Entrega1-React-Fiorotto/category/DeGod' className={({ isActive }) => isActive ? classes.active : classes.inactive }>DeGod</NavLink>
                <NavLink to='/Entrega1-React-Fiorotto/category/Mirascape' className={({ isActive }) => isActive ? classes.active : classes.inactive }>Mirascape</NavLink>
                <NavLink to='/Entrega1-React-Fiorotto/category/Tower' className={({ isActive }) => isActive ? classes.active : classes.inactive }>Tower</NavLink>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar 