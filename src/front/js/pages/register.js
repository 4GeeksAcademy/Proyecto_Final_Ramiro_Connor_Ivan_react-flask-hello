import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import google from "../../img/googlelogin.png";
import { gapi } from "gapi-script"
import GoogleLogin from "react-google-login";
import { useFormik } from 'formik';
import * as Yup from 'yup';
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

    useEffect(() => {
        const start = () => {
            gapi.auth2.init({
                client_id: clientID,
            });
        }
        gapi.load("client:auth2", start)
    }, [])

    async function onSuccess(response) {
        console.log(response);
        await actions.registrarUsuario(response.profileObj.email, response.profileObj.googleId, response.profileObj.name)
        if (store.navigate == true) {
            navigate('/')
        }
        store.navigate = false
    }
    function onFailure() {
        console.log("Hubo un error");
    }
    // fin de Google

    // Formik y yup
    const formik = useFormik({
        initialValues: {
            email: '',
            contraseña: '',
            userName: '',
        },
        validationSchema: Yup.object({
            email: Yup.string().email(`${t('register.part9')}`).required(`${t('register.part10')}`),
            userName: Yup.string()
                .max(20, `${t('register.part13')}`)
                .min(5, `${t('register.part14')}`)
                .required(`${t('register.part10')}`),
            contraseña: Yup.string()
                .max(20, `${t('register.part13')}`)
                .min(5, `${t('register.part14')}`)
                .matches(/[A-Z]/, `${t('register.part15')}`)
                .required(`${t('register.part10')}`),
        }),
        onSubmit: values => {
            // alert(JSON.stringify(values, null, 2));
            const registrar = async function () {
                await actions.registrarUsuario(values.email, values.contraseña, values.userName)
                console.log(store.navigate);
                if (store.navigate == true) {
                    navigate('/')
                }
                store.navigate = false
            }
            registrar()
        },
    });

    // Manejo de Errores 
    //418 email en uso 
    //420 nombre de usuario en uso
    function enUso () {
        // console.log(store.errorEmailUso);
        // console.log(store.errorUsuarioUso);
        if (store.errorEmailUso == true ){
            store.errorEmailUso = false
            return <div className="text-danger mb-2">{t('register.part11')}</div>
        } else if (store.errorUsuarioUso == true) {
            store.errorUsuarioUso = false
            return <div className="text-danger mb-2">{t('register.part12')}</div>
        } else {
            return null
        }
    }


    async function registrarUsuario(e) {
        e.preventDefault()
        console.log(email, contraseña);
        await actions.registrarUsuario(email, contraseña, nombreDeUsuario)
        console.log(store.navigate);
        if (store.navigate == true) {
            navigate('/')
        }
        store.navigate = false
        // console.log(store.navigate);
        // setEmail("")
        // setContraseña("")
    }

    return (
        <div className="Loginwrapper back-texto2 d-flex justify-content-center ">
            <div className="Cajaform cambria my-5  back-texto3 formularios" >
                <h1 className="Formheader text-center mb-3">{t('register.part1')}</h1>
                <form className="mb-2" onSubmit={formik.handleSubmit}>
                    <p className="Formtext mb-0 login">Email:</p>
                    {/* <input type="text" placeholder="ejemplo@gmail.com" className="w-100 mb-4 login" onChange={event => setEmail(event.target.value)}></input> */}
                    <input
                        id="email"
                        name="email"
                        type="email"
                        className="Formfield mb-2 w-100 login"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                    />
                    {formik.touched.email && formik.errors.email ? (
                        <div className="errorText text-danger">{formik.errors.email}</div>
                    ) : null}
                    <p className="Formtext mb-0 login">{t('register.part3')}:</p>
                    {/* <input type="text" className="w-100 mb-4 login" onChange={event => setNombreDeUsuario(event.target.value)}></input> */}
                    <input
                        id="userName"
                        name="userName"
                        type="text"
                        className="Formfield mb-2 w-100 login"
                        onChange={formik.handleChange}
                        value={formik.values.userName}
                    />
                    {formik.touched.userName && formik.errors.userName ? (
                        <div className="errorText  text-danger">{formik.errors.userName}</div>
                    ) : null}
                    <p className="Formtext mb-0 login">{t('register.part4')}:</p>
                    {/* <input type="password" className="mb-4 w-100 login" onChange={event => setContraseña(event.target.value)}></input><br/> */}
                    <input
                        id="contraseña"
                        name="contraseña"
                        label="Password"
                        type="password"
                        className="Formfield mb-3 w-100 login"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.contraseña}
                    />
                    {formik.touched.contraseña && formik.errors.contraseña ? (
                        <div className="errorText text-danger">{formik.errors.contraseña}</div>
                    ) : null}
                    {enUso()}
                    <div className="text-center">
                    <button type="submit" className="login mb-3 px-5 py-1">{t('register.part5')}</button>
                    </div>
                </form>
                <p className="altloginText mb-0">{t('register.part6')} <Link to="/login">{t('register.part7')}</Link></p>
                <p className="altloginText text-center mb-2">{t('register.part8')}</p>
                <div className="googleButton text-center mx-2 ">
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