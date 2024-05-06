import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import google from "../../img/googlelogin.png";
import { gapi } from "gapi-script"
import GoogleLogin from "react-google-login";
import { useTranslation, Trans } from 'react-i18next';
import { Context } from "../store/appContext";;

export const RecuperarContraseña = () => {
    const { store, actions } = useContext(Context);
    const [email, setEmail] = useState("")
    const { t, i18n } = useTranslation();

    async function recuperando(e) {
        e.preventDefault()
        await actions.recuperarContraseña(email)
    }

    return (
        <div className="back-texto2 p-5 h-auto ">
            <div className="cambria m-auto p-5 back-texto3" style={{ width: "500px", height: "670px" }}>
                <div className="margen">
                <h1 className="text-center mb-3 recupera">Recuperar Contraseña</h1>
                <form className="mb-4" onSubmit={recuperando}>
                    <p className="mb-0 login">Email:</p>
                    <input type="text" placeholder={t('register.part2')} className="w-100 mb-4 login" onChange={event => setEmail(event.target.value)}></input>
                    <div className="text-center">
                    <button type="submit" className="login mb-5">Recuperar</button>
                    </div>
                </form>
                <h5 className="btn btn-success mt-5 text-center w-100"><Link to='/' className="text-black ">Volver al inicio</Link></h5>
                </div>


            </div>
        </div>
    );
};