
import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import portada from "../../img/pngwing.com.png"
import imgMundi from "../../img/cropped-footer-foto1.png"
import imgLugares2 from "../../img/pngwing.com (2).png"
import imgRanking from "../../img/klipartz.com (2).png"
import { Link } from "react-router-dom";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center ">
			<div className="back-texto2">
				<h1 className="titulo pt-1 ">GuessNation</h1>
				<div className="imagen-boton ">
					<img src={portada} className="w-100" />
					<div>
						<Link to="/demo">
							<button class="boton">JUGAR</button>
						</Link>
					</div>
				</div>
			</div>
			<section id="queEsGuessNation">
				<div className=" back-texto3">
					<div className="row align-items-center pading-texto">
						<div className="pading-texto col-lg-6 col-md-12 col-sm-12">
							<h1 className="cambria negrita">¿Que es GuessNation?</h1>
							<p className="cambria negrita texto">"GuessNation" es un juego de trivia geográfica en el que los jugadores deben adivinar la ubicación de lugares icónicos del mundo. El juego presenta a los jugadores una serie de imágenes de lugares famosos, como monumentos, edificios históricos, paisajes naturales y sitios turísticos de renombre mundial.</p>
						</div>
						<div className="col-lg-6 col-md-12 col-sm-12">
							<img src={imgMundi} className="w-100" />
						</div>
					</div>
				</div>
			</section>
			<section id="comoJugar">
			<div className=" back-texto1">
				<div className="row pading-texto align-items-center">
					<div className="pading-texto col-lg-6 col-md-12 col-sm-12">
						<img src={imgLugares2} className="w-100" />
					</div>
					<div className="col-lg-6 col-md-12 col-sm-12">
						<h1 className="cambria negrita">¿Como Jugar?</h1>
						<p className="cambria negrita texto">
							En "GuessNation" verás fotos de lugares interesantes de todo el mundo, como la Torre Eiffel o el Monumento a la Libertad. Tu trabajo es seleccionar en qué país esta ubicada la imagen. Si adivinas correctamente, ¡ganarás puntos y te convertirás en un experto en geografía!
						</p>
					</div>
				</div>
			</div>
			</section>
			<section id="ranking">
			<div className=" back-texto3">
				<div className="row pading-texto align-items-center">
					<div className="pading-texto col-lg-6 col-md-12 col-sm-12">
						<h1 className="cambria negrita">Ranking</h1>
						<p className="cambria negrita texto">
							En "GuessNations", cada vez que adivinas correctamente la ubicación de un lugar famoso, ganas un punto. ¡Podrás mantener una racha de victorias para mostrar tu habilidad y conocimiento geográfico! Compite contra jugadores de todo el mundo y sube en el ranking global. ¿Estás listo para aceptar el desafío? ¡Únete a GuessNations y comienza tu viaje por el mundo hoy mismo!
						</p>
					</div>
					<div className="col-lg-6 col-md-12 col-sm-12">
						<img src={imgRanking} className="w-100" />
					</div>
				</div>
			</div>
			</section>
		</div>
	);
};
