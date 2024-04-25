import React from "react";
import { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import logo from "../../img/klipartz.com.png";
import { useLocation } from 'react-router-dom';

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	const location = useLocation();

	function cerrarSesion() {
		localStorage.removeItem("token");
		window.location.reload()
	}

	
	let parteEspecifica = null;
	let parteEspecifica2 = null;
	let parteEspecifica3 = null;

	if (location.pathname === '/') {
		parteEspecifica = <a href="#queEsGuessNation" className="text-black text-decoration-none cambria fs-5 p-2">¿Que es GuessNation?</a>;
		parteEspecifica2 = <a href="#comoJugar" className="text-black text-decoration-none cambria fs-5 p-2">¿Como Jugar?</a>;
		parteEspecifica3 = <a href="#ranking" className="text-black text-decoration-none cambria fs-5 p-2">Ranking</a>;
	}

	return (
		<nav className="navbar navbar-light bg-light p-0">
			<div className="d-flex justify-content-between w-100 back-navbar align-items-center">
				<div>
					<Link to="/">
						<img className="logo m-3" src={logo} />
					</Link>
					{parteEspecifica}
					{parteEspecifica2}
					{parteEspecifica3}
				</div>
				<div className="ml-auto">
					{store.tokenOK ? <div class="btn-group dropstart">
						<button type="button" class="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
							<i class="fa-solid fa-circle-user fa-2x m-3 text-black "></i>
						</button>
						<ul class="dropdown-menu bg-dark p-3">
							<li><h5 className="text-white">UserName</h5></li>
							<li><button className="btn btn-danger" onClick={cerrarSesion}>Cerrar sesión</button></li>
						</ul>
					</div> : <Link to="/login">
						<button className="btn back-texto3 m-2 cambria">Iniciar Sesión / Registrarse</button>
					</Link>}
				</div>
			</div>
		</nav>
	);
};
