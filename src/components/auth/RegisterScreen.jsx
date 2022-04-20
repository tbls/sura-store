import validator from "validator";
import { useDispatch, useSelector } from "react-redux";

import { useForm } from "../../hooks/useForm";
import { setError, removeError } from "../../actions/ui";
import { startRegisterWithEmailPasswordName } from "../../actions/auth";

import { LoginScreen } from "./LoginScreen";
import { Link } from "react-router-dom";

export const RegisterScreen = () => {

    const dispatch = useDispatch();

    const { msgError } = useSelector( state => state.ui)

    const [ formValues, handleInputChange ] = useForm({
        name: "Tomas",
        email: "tomas@gmail.com",
        password: "123456",
        password2: "123456",
    });

    const  isFormValid = () => {
        if (name.trim().length === 0) {
            dispatch(setError('El nombre es requerido'));
            return false;
        } else if (!validator.isEmail(email)) {
            dispatch(setError('El email no es válido'));
            return false;
        } else if (password !== password2 || password.length < 5) {
            dispatch(setError('Las contraseñas deben ser iguales y de al menos 6 caracteres'));
            return false;
        }
        dispatch(removeError());
        return true;

    };

    const { name, email, password, password2 } = formValues;

    const handleRegister = (e) => {
        e.preventDefault();
        if (isFormValid()) {
            dispatch(startRegisterWithEmailPasswordName( email, password, name ))
        }

    };

    return (

        <div className="wrapper">
            <div className="logo"> <img src="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-bird-symbols-png-logo-0.png" alt="logo"/> </div>
            <div className="text-center mt-4 name"> Sura Orders App </div>
            <form className="p-3 mt-3" onSubmit={ handleRegister }>

                {
                    msgError &&
                    <div className="alert alert-danger text-center" >{msgError}</div>
                }

                <div className="form-field d-flex align-items-center">
                    <span className="far fa-user"></span>
                    <input
                        type="text"
                        id="userName"
                        placeholder="Usuario"
                        name="name"
                        value={name}
                        onChange={handleInputChange}
                        autoComplete="off"
                    />
                </div>

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

                <div className="form-field d-flex align-items-center">
                    <span className="far fa-user"></span>
                    <input
                        type="password"
                        id="password2"
                        placeholder="Confirmar contraseña"
                        name="password2"
                        value={password2}
                        onChange={handleInputChange}
                    />
                </div>


                <button  type="submit" className="btn mt-3">Registrar</button>
            </form>
            <div className="text-center fs-6"><p>¿ Ya tienes cuenta ?</p><Link to="/auth/login" >Ingresa aqui</Link> </div>
        </div>



    );
};
