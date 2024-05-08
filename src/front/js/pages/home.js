
import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import portada from "../../img/nobackgroundplaces.png"
import imgMundi from "../../img/cropped-footer-foto1.png"
import imgLugares2 from "../../img/pngwing.com (2).png"
import imgRanking from "../../img/klipartz.com (2).png"
import { Link } from "react-router-dom";
import { useTranslation, Trans } from 'react-i18next';

export const Home = () => {
	const { store, actions } = useContext(Context);
	const { t, i18n } = useTranslation();

	return (
		<div className="text-center ">
			<div className="back-texto2 h-100">
				<h1 className="titulo pt-1 ">GuessNation</h1>
				<div className="imagen-boton ">
					<img src={portada} className="w-100" />
					<div>
						<Link to="/game">
						<div className="homeButton">
                            <a href="#" className="btn btn--action position-absolute top-50 start-50 translate-middle"><span>{t('home.part1')}</span></a>
                        </div>
						</Link>
					</div>
				</div>
			</div>
			<section id="queEsGuessNation">
				<div className=" back-texto3">
					<div className="row align-items-center me-0 pading-texto">
						<div className="pading-texto col-lg-6 col-md-12 col-sm-12">
							<h1 className="cambria negrita">{t('home.part2')}</h1>
							<p className="schoolbell-regular negrita texto">{t('home.part3')}</p>
						</div>
						<div className="col-lg-6 col-md-12 col-sm-12">
							<img src={imgMundi} className="w-100" />
						</div>
					</div>
				</div>
			</section>
			<section id="comoJugar">
			<div className=" back-texto1">
				<div className="row pading-texto me-0 align-items-center">
					<div className="pading-texto col-lg-6 col-md-12 col-sm-12">
						<img src={imgLugares2} className="w-100" />
					</div>
					<div className="col-lg-6 col-md-12 col-sm-12">
						<h1 className="cambria negrita">{t('home.part4')}</h1>
						<p className="schoolbell-regular negrita texto">
						{t('home.part5')}
						</p>
					</div>
				</div>
			</div>
			</section>
			<section id="ranking">
			<div className=" back-texto3">
				<div className="row pading-texto me-0 align-items-center">
					<div className="pading-texto col-lg-6 col-md-12 col-sm-12">
						<h1 className="cambria negrita">Ranking</h1>
						<p className="schoolbell-regular negrita texto">
							{t('home.part6')}
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
