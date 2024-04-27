import React, { Component } from "react";

export const Footer = () => (
	<footer className="footer mt-auto py-3 text-center back-navbar footer">
		<div className="p-0">
			<ul className="cambria list-unstyled creadores-posicion">
				<li className="fw-bold creadores-titulo ">Creado por:</li>
				<li className="creadores "><a href="https://www.linkedin.com/in/connor-clements-425124245/" className="text-black text-decoration-none">Connor Clements  <i className="fa-brands fa-linkedin"></i></a></li>
				<li className="creadores "><a href="https://www.linkedin.com/in/ramiro-sca-048182226/" className="text-black text-decoration-none">Ramiro Scarinci  <i className="fa-brands fa-linkedin"></i></a></li>
				<li className="creadores "><a href="https://github.com/Sai40k" className="text-black text-decoration-none pb-0 mb-0">Ivan Torres Álvarez  <i className="fa-brands fa-github"></i></a></li>
			</ul>
		</div>
		<div className="p-0 agradecimientos-posicion">
			<ul className="cambria list-unstyled">
				<li className="fw-bold agradecimientos-titulo">Agradecimientos:</li>
				<li className="agradecimientos">Rosinni Rodriguez</li>
				<li className="agradecimientos">Amira Mandi</li>
			</ul>
		</div>
		<div className="geeks">
			<p>© 2024 GuessNations.</p>
			<p>
				Made with <i className="fa fa-heart text-danger" /> by{" "}
				<a href="http://www.4geeksacademy.com" className="text-danger fw-bold">4Geeks Academy</a>
			</p>
		</div>
	</footer>
);
