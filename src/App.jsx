import './App.css';

import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { Logout } from "./components/Logout";
import { NewOrder } from "./components/NewOrder";
import { Orders } from "./components/Orders";
import { ProtectedRoute } from "./components/ProtextedRoute";
import {Routes,Route,Link}from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <div style={{
        display:"flex",
        justifyContent:"space-between",
        border:"1px solid red",
        padding:"10px",
        fontSize:"25px",
        margin:"10px"

    }}>
        <Link className="nav-home" to="/">
          Home
        </Link>
        {/* Show either login or logout below */}
        <Link className="nav-logout" to="/logout">
          Logout
        </Link>
        <Link className="nav-login" to="/login">
          Login
        </Link>
      </div>

      <Routes>


<Route path='/' element={<Home />} />
				<Route path='/login' element={<Login />} />
				<Route path='/logout' element={<Logout />} />
				<Route
					path='/orders'
					element={
						<ProtectedRoute>
							<Orders />
						</ProtectedRoute>
					}
				/>
				<Route
					path='/neworder'
					element={
						<ProtectedRoute>
							<NewOrder />
						</ProtectedRoute>
					}
				/>




        {/* Routes are as follows:
        Route      Component
        /           Home
        /login      Login
        /logout     Logout
        /orders     Orders    Protected
        /neworder   NewOrder  Protected
        */}
      </Routes>
    </div>
  );
}

export default App;
