import {
	BrowserRouter
	as Router,
	Route,
	Routes
} from 'react-router-dom';
import Home from '../../pages/Home'
import Contact from '../../pages/Contact'

const AppRoutes = () => {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/https://caioaugusto-github-io-caioaugusto.vercel.app' element={<Contact />} />
				
				
			</Routes>
		</Router>
	);
};
export default AppRoutes;