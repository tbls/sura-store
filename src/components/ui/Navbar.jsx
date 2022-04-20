
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom'
import { startLogout } from '../../actions/auth';

export const Navbar = () => {

    const dispatch = useDispatch()

    const { name } = useSelector(state => state.auth)

    const handleLogout = () => {
        console.log('Logout');
        dispatch( startLogout() )

    }

    return (

        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="container-fluid d-flex">

                <Link
                    className="navbar-brand"
                    to="/"
                >
                    Sura Orders
                </Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <div className="navbar-nav me-auto mb-2 mb-lg-0">

                            <NavLink
                                className={({isActive}) => 'nav-item nav-link' + (isActive ? ' active' : '')}
                                to="/delivery"
                            >
                                Delivery
                            </NavLink>

                            <NavLink
                                className={({isActive}) => 'nav-item nav-link' + (isActive ? ' active' : '')}
                                to="/stations"
                            >
                                Estaciones
                            </NavLink>

                    </div>



                <div className="d-flex justify-content-end">
                    <span
                        className='nav-item nav-link text-info'
                    >
                        { name }
                    </span>

                    <button
                        className="btn btn-outline-primary"
                        onClick={ handleLogout }
                    >
                        Salir
                    </button>
                </div>

                </div>
            </div>
        </nav>

    )
}