import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { startLoginEmailPassword } from "../../actions/auth";

import { useForm } from "../../hooks/useForm";

export const LoginScreen = () => {

	const dispatch = useDispatch();

    const { msgError, loading } = useSelector( state => state.ui)

    const [ formValues, handleInputChange ] = useForm({
		email: 'tomas@gmail.com',
		password: '123456'
	});

    const { email, password } = formValues;

	const handleLogin = (e) => {
		e.preventDefault();
        dispatch( startLoginEmailPassword( email, password ));
	}

    return (

        <div className="wrapper">
            <div className="logo"> <img src="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-bird-symbols-png-logo-0.png" alt="logo"/> </div>
            <div className="text-center mt-4 name"> Sura Orders App </div>
            <form className="p-3 mt-3" onSubmit={ handleLogin }>

                {
                    msgError &&
                    <div className="alert alert-danger text-center" >{msgError}</div>
                }

                <div className="form-field d-flex align-items-center">
                    <span className="far fa-user"></span>
                    <input
                        type="text"
                        id="email"
                        placeholder="Correo"
                        name="email"
                        value={email}
                        onChange={handleInputChange}
                        autoComplete="off"
                    />
                </div>

                <div className="form-field d-flex align-items-center">
                    <span className="far fa-user"></span>
                    <input
                        type="password"
                        id="password1"
                        placeholder="Contraseña"
                        name="password"
                        value={password}
                        onChange={handleInputChange}
                    />
                </div>

                <button
                    type="submit"
                    className="btn mt-3"
                    disabled = { loading }
                >
                    Ingresar
                </button>

            </form>
            <div className="text-center fs-6"><p>¿ No tienes cuenta ?</p><Link to="/auth/register">Registrate aqui</Link></div>
        </div>



    );
}
