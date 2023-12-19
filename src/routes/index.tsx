/* eslint-disable react/react-in-jsx-scope */
import {
	BrowserRouter
	as Router,
	Route,
	Routes
} from "react-router-dom";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Resume from "../pages/Resume";
import Publications from "../pages/Publications";
import Projects from "../pages/Projects";

const AppRoutes = () => {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/contact' element={<Contact />} />
				<Route path='/resume' element={<Resume />} />
				<Route path='/publications' element={<Publications /> }/>
				<Route path='/projects' element={<Projects /> }/>

				
			</Routes>
		</Router>
	);
};
export default AppRoutes;