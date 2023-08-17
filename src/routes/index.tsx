import {
	BrowserRouter
	as Router,
	Route,
	Routes
} from 'react-router-dom';
import Home from '../pages/Home'
import Contact from '../pages/Contact'
import Resume from '../pages/Resume';

const AppRoutes = () => {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/contact' element={<Contact />} />
				<Route path='/resume' element={<Resume />} />

				
			</Routes>
		</Router>
	);
};
export default AppRoutes;