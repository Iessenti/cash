import { Link } from 'react-router-dom'
import { routes } from '../../routes'
import './styles.sass'

export const Navbar = () => {

    return (
        <div
            className="navbar-wrapper"
        >
            <div
                className='navbar-wrapper__logo'
            >
                CA$H
            </div>

            <div
                className='navbar-wrapper__button'
            >
                <Link to={routes.auth}>
                    Вход
                </Link>
            </div>
        </div>
    )
}