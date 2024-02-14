import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import { useContext } from "react";
import AuthContext from "./context/userContext";

function App() {
	const {token} = useContext(AuthContext)

  const handleSignup = () => {
    console.log('User signed up successfully');
  };
	return (
		<Router>
		<Routes>
				{token ? (
						<>
								<Route path="/" element={<Layout />} />
								<Route path="/settings" element={<Home />} />
								<Route path="*" element={<Navigate to="/" replace />} />
						</>
				) : (
						<>
								<Route path="/signin" element={<SignIn />} />
								<Route path="/signup" element={<SignUp />} />
								<Route path="*" element={<Navigate to="/signin" replace />} />
						</>
				)}
		</Routes>
</Router>
	);
}

export default App;



// {/* <Route path="/" element={<Layout />}>
//   <Route path="/customers" element={<Customers />} />
//   <Route path="/customer/:id" element={<CustomerPage />} />
//   <Route path="/orders" element={<Orders />} />
//   <Route path="/order/:id" element={<OrderDetails />} />
// </Route> */}