import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import google from "../../img/googlelogin.png";
import { gapi } from "gapi-script"
import GoogleLogin from "react-google-login";
import { useTranslation, Trans } from 'react-i18next';
import { Context } from "../store/appContext";

export const Login = () => {
    const { store, actions } = useContext(Context);
    const [email, setEmail] = useState("")
    const [contraseña, setContraseña] = useState("")
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
        await actions.loginUsuario(response.profileObj.email, response.profileObj.googleId)
        if (store.navigate==true) {
            navigate('/')
        }
        store.navigate = false
    }
    function onFailure () {
        console.log("Hubo un error");
    }
    // fin de Google

    async function userLogin (e) {
        e.preventDefault()
        await actions.loginUsuario(email, contraseña)
        if (store.navigate==true) {
            navigate('/')
        }
        store.navigate = false
        // console.log(localStorage.getItem("token"));
        console.log(store.tokenOK);
    }

    return (
        <div className="back-texto2 p-5 h-auto ">
            <div className="cambria m-auto p-5 back-texto3" style={{width:"500px", height: "670px"}}>
                <h1 className="text-center mb-3">Login</h1>
                <form className="mb-4" onSubmit={userLogin}>
                    <p className="mb-0 login">Email:</p>
                    <input type="text" placeholder="ejemplo@gmail.com" className="w-100 mb-4 login" onChange={event => setEmail(event.target.value)}></input>
                    <p className="mb-0 login">{t('login.part1')}:</p>
                    <input type="password" className="mb-4 w-100 login" onChange={event => setContraseña(event.target.value)}></input><br/>
                    <div className="text-center">
                    <button type="submit" className="login mb-3">{t('login.part2')}</button>
                    </div>
                </form>
                <p className="mb-0">{t('login.part3')} <Link to="/register">{t('login.part4')}</Link></p>
                <p className="mb-4">{t('login.part5')}</p>
                <p className="text-center mb-4">{t('login.part6')}</p>
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
