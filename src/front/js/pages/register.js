import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import google from "../../img/googlelogin.png";
import { gapi } from "gapi-script"
import GoogleLogin from "react-google-login";
import { useTranslation, Trans } from 'react-i18next';
import { Context } from "../store/appContext";

export const Register = () => {
    const { store, actions } = useContext(Context);
    const [email, setEmail] = useState("")
    const [contraseña, setContraseña] = useState("")
    const [nombreDeUsuario, setNombreDeUsuario] = useState("")
    const navigate = useNavigate();
    const { t, i18n } = useTranslation();

    // Google 
    const clientID = "907740724351-apgngd00u4vmjma9nrvlohln4n2t5600.apps.googleusercontent.com"

    useEffect(()=>{
        const start = ()=>{
            gapi.auth2.init({
                client_id: clientID,
            });
        }
        gapi.load("client:auth2",start)
    },[])

    async function onSuccess (response) {
        console.log(response);
        await actions.registrarUsuario(response.profileObj.email, response.profileObj.googleId)
        if (store.navigate==true) {
            navigate('/')
        }
        store.navigate = false
    }
    function onFailure () {
        console.log("Hubo un error");
    }
    // fin de Google

    async function registrarUsuario(e){
        e.preventDefault()
        console.log(email,contraseña);
        await actions.registrarUsuario(email, contraseña, nombreDeUsuario)
        console.log(store.navigate);
        if (store.navigate==true) {
            navigate('/')
        }
        store.navigate = false
        // console.log(store.navigate);
        // setEmail("")
        // setContraseña("")
    }

    return (
        <div className="back-texto2 p-5 h-auto ">
            <div className="cambria m-auto p-5 back-texto3" style={{width:"500px", height: "670px"}}>
                <h1 className="text-center mb-3">{t('register.part1')}</h1>
                <form className="mb-2" onSubmit={registrarUsuario}>
                    <p className="mb-0 login">Email:</p>
                    <input type="text" placeholder={t('register.part2')} className="w-100 mb-4 login" onChange={event => setEmail(event.target.value)}></input>
                    <p className="mb-0 login">{t('register.part3')}:</p>
                    <input type="text" className="w-100 mb-4 login" onChange={event => setNombreDeUsuario(event.target.value)}></input>
                    <p className="mb-0 login">{t('register.part4')}:</p>
                    <input type="password" className="mb-4 w-100 login" onChange={event => setContraseña(event.target.value)}></input><br/>
                    <div className="text-center">
                    <button type="submit" className="login mb-3">{t('register.part5')}</button>
                    </div>
                </form>
                <p className="mb-0">{t('register.part6')} <Link to="/login">{t('register.part7')}</Link></p>
                <p className="text-center mb-2">{t('register.part8')}</p>
                <div className="text-center">
                    {/* <img src={google} style={{width : "300px", height : "70px" }}/> */}
                    <GoogleLogin
                        clientID={clientID}
                        onSuccess={onSuccess}
                        onFailure={onFailure}
                        cookiePolicy={"single_host_policy"}
                    
                    />
                </div>


            </div>
        </div>
    );
};