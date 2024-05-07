import React from "react";
import { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import logo from "../../img/klipartz.com.png";
import { useLocation } from 'react-router-dom';
import { useTranslation, Trans } from 'react-i18next';

const lngs = {
	en: { nativeName: 'English' },
	es: { nativeName: 'Español' }
};

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	const location = useLocation();
	const { t, i18n } = useTranslation();

	function cerrarSesion() {
		localStorage.removeItem("token");
		window.location.reload()
	}


	let parteEspecifica = null;
	let parteEspecifica2 = null;
	let parteEspecifica3 = null;
	let ranking_global = <Link to="/ranking-global"><a className="text-black text-decoration-none schoolbell-regular navbar-text p-2">Ranking Global</a></Link>

	let libritoBoton = <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>;

	if (location.pathname === '/') {
		libritoBoton = <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
		parteEspecifica = <a href="#queEsGuessNation" className="text-black text-decoration-none schoolbell-regular navbar-text p-2">{t('navbar.part1')}</a>;
		parteEspecifica2 = <a href="#comoJugar" className="text-black text-decoration-none schoolbell-regular navbar-text p-2">{t('navbar.part2')}</a>;
		parteEspecifica3 = <a href="#ranking" className="text-black text-decoration-none schoolbell-regular navbar-text p-2">Ranking</a>;
	}

	return (
		<nav className="navbar navbar-light bg-light  p-0 navbar-expand-lg ">
			<div className="d-flex flex-row justify-content-between w-100 back-navbar ">
				<div className="d-flex">
					<Link to="/">
						<img className="logo m-3" src={logo} />
					</Link>
					{libritoBoton}
					<div className="collapse navbar-collapse " id="navbarNavDropdown">
						<ul className="navbar-nav">
							<li className="nav-item">
								{parteEspecifica}
							</li>
							<li className="nav-item">
								{parteEspecifica2}
							</li>
							<li className="nav-item">
								{parteEspecifica3}
							</li>
							<li className="nav-item ">
								{ranking_global}
							</li>
						</ul>
					</div>
				</div>
				<div className="d-flex">
					<div className="align-self-center">
						{Object.keys(lngs).map((lng) => (
							<button key={lng} style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal' }} className="languageButton mr-auto bg-transparent border-0" type="submit" onClick={() => i18n.changeLanguage(lng)}>
								{lng === 'es' && <img className="flag" src="https://flagsapi.com/ES/shiny/64.png" alt="Spain Flag" />}
								{lng === 'en' && <img className="flag" src="https://flagsapi.com/GB/shiny/64.png" alt="UK Flag" />}
							</button>
						))}
					</div>
					<div className="align-self-center">
						{store.tokenOK ? <div className="btn-group dropstart">
							<button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
								<i className="fa-solid fa-circle-user fa-2x m-3 text-black "></i>
							</button>
							<ul className="dropdown-menu bg-dark p-3">
								<li><h5 className="text-white">{store.nombreDeUsuario}</h5></li>
								<li><button className="btn btn-danger" onClick={cerrarSesion}>Cerrar sesión</button></li>
							</ul>
						</div> : <Link to="/login">
							<button className="btn back-texto3 m-2 cambria iniciar-sesion">{t('navbar.part3')}</button>
						</Link>}
					</div>
				</div>
			</div>
		</nav>
	);
};


{/* <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container">
    <a class="navbar-brand" href="#">Logo</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item active">
          <a class="nav-link" href="#">Inicio <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Acerca</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contacto</a>
        </li>
      </ul>
    </div>
  </div>
</nav> */}