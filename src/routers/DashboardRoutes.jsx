
import { Route, Switch } from "react-router-dom";

import { Navbar } from "../components/ui/Navbar"
import { OrdersDeliveryScreen } from '../components/orders/OrdersDeliveryScreen';
import { OrdersStationsScreen } from '../components/orders/OrdersStationsScreen';
import { DashBoardScreen } from "../components/ui/DashBoardScreen";



export const DashboardRoutes = () => {
    return (
        <>
            <Navbar />

            <div className="container">

                <Switch>

                    <Route exact path="/" component={ DashBoardScreen } />
                    <Route exact path="/delivery" component={ OrdersDeliveryScreen } />
                    <Route exact  path="/stations" component={ OrdersStationsScreen } />

                    <Route path="/" />

                </Switch>

            </div>

        </>
    )
}
