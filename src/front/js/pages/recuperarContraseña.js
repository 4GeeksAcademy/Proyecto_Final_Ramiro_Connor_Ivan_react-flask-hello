import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import google from "../../img/googlelogin.png";
import { gapi } from "gapi-script"
import GoogleLogin from "react-google-login";
import { useTranslation, Trans } from 'react-i18next';
import { Context } from "../store/appContext";import { faTruckMedical } from "@fortawesome/free-solid-svg-icons";
;

export const RecuperarContraseña = () => {
    const { store, actions } = useContext(Context);
    const [email, setEmail] = useState("");
    const [mensaje, setMensaje] = useState(""); // Estado para almacenar el mensaje
    const [desactivado, setDesactivado] = useState(""); // Estado para desactivar boton
    const { t, i18n } = useTranslation();
    const navigate = useNavigate();


    async function recuperando(e) {
        e.preventDefault()
        await actions.recuperarContraseña(email)
        console.log(store.recuperando);
    }

    function volver() {
        window.location.reload()
    }
    
    useEffect(() => {
        // Escucha los cambios en store.recuperando y actualiza el mensaje
        if (store.recuperando !== null) {
            setMensaje(store.recuperando);
        } else if (store.recuperando == null){
            setMensaje("")
        }
    }, [store.recuperando]);



    useEffect(() => {
        // Escucha los cambios en store.recuperando y actualiza el mensaje
        if (store.recuperado == true ){
            setDesactivado('diasabled')
            console.log(store.recuperado);
        }
    }, [store.recuperado]);

    return (
        <div className="Loginwrapper back-texto2 d-flex justify-content-center  ">
            <div className="Cajaform cambria   back-texto3" >
                <div className="margen">
                <h1 className="FormHeader text-center mb-3 recupera">Recuperar Contraseña</h1>
                <form className="mb-4" onSubmit={recuperando}>
                    <p className="mb-0 login">Email:</p>
                    <input type="text" placeholder={t('register.part2')} className="Formfield w-100 mb-4 login" onChange={event => setEmail(event.target.value)}></input>
                    {mensaje && <p className="text-center text-danger">{mensaje}</p>} {/* Mostrar el mensaje si existe */}
                    <div className="text-center">
                    <button type="submit" className="login mb-5" disabled={desactivado}>Recuperar</button>
                    </div>
                </form>
                <h5 className="btn btn-success mt-5 text-center w-100" onClick={volver}><Link to='/' className="text-black ">Volver al inicio</Link></h5>
                </div>


            </div>
        </div>
    );
};