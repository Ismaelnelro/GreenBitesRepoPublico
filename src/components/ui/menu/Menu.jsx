import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import useHeroLocation from '../../../Hooks/useHeroLocation';
import useCheckAdmin from '../../../Hooks/useCheckAdmin';
import './menu.css'

/*NOTA:
    1.el menu se debe cerrar solo al hacer scroll hacia abajo 
*/

const Menu = ({ isActive }) => {

    const { isHomePage } = useHeroLocation()
    const { admin, logOut } = useCheckAdmin();

    return (
        <div className={` ${isActive ? 'menu__container-active' : ''} menu__container`}>
            <ul className="menu__list">

                <li className="menu__item">
                    <Link to="/shop" className="menu__link">Our Products</Link>
                </li>
                <li className="menu__item">
                    <Link to="/aboutus" className="menu__link">About Us</Link>
                </li>
                {isHomePage && <li className="menu__item">
                    <a href="#Resell" className="menu__link">Resell with Us</a>
                </li>}
                <li className="menu__item">
                    <a href="#Contact" className="menu__link">Contact</a>
                </li>


                {admin && admin?.isConnected ?
                    <>
                        <li className="menu__item">
                            <Link to="/admin/dashboard" className="menu__link">Dashboard</Link>
                        </li>
                        <li className="menu__item">
                            <button className="menu__link-logout menu__link" onClick={logOut}>Logout</button>
                        </li>

                    </>
                    :
                    <li className="menu__item">
                        <Link to="/auth/login" className="menu__link">Admin Login</Link>
                    </li>
                }
            </ul>
        </div>
    )
}

Menu.propTypes = {
    isActive: PropTypes.bool.isRequired // Especifica que isActive debe ser un booleano y es requerido
};

export default Menu
