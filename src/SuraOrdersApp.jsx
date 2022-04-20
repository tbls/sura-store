
import { Provider } from "react-redux";
import { AppRouter } from "./routers/AppRouter";
import { store } from "./store/store";

import '../src/styles/styles.css'

export const SuraOrdersApp = () => {


	return (
		<Provider store={ store }>

			<AppRouter />

		</Provider>

	)
}
