
import { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { firebaseApp } from '../firebase/firebaseConfig'
import { getAuth, onAuthStateChanged } from "firebase/auth"

import { AuthRouter } from './AuthRouter'
import { useDispatch } from "react-redux";
import { login } from "../actions/auth";
import { DashBoardScreen } from "../components/ui/DashBoardScreen";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
import { DashboardRoutes } from "./DashboardRoutes";

const auth = getAuth( firebaseApp );

export const AppRouter = () => {

    const dispatch =useDispatch();

    const [cheking, setCheking] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {

        onAuthStateChanged(auth, (user) => {
            if ( user?.uid ) { // user?uid   si el objeto uster existe entonces pregunra si existe el uid si no , se sale y hace lo otro
                dispatch( login ( user.uid, user.displayName));
                setIsLoggedIn(true);
            } else {
                setIsLoggedIn(false);
            }
            setCheking(false);
        })
    }, [ dispatch, setCheking ])


    if( cheking ){
        return (
            <h1>Wait please ...</h1> //TODO cambiar por un componente
        )
    }


    return (

        <BrowserRouter>

            <div>

                <Switch>

                    <PublicRoute

                        path="/auth"
                        component={ AuthRouter }
                        isAuthenticated= { isLoggedIn }
                    />

                    <PrivateRoute

                        path="/"
                        component={ DashboardRoutes }
                        isAuthenticated= { isLoggedIn }
                    />

                    <Redirect to="/auth/login" />

                </Switch>

            </div>

        </BrowserRouter>
    )
}
