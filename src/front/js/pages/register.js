import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import google from "../../img/googlelogin.png";
import { gapi } from "gapi-script"
import GoogleLogin from "react-google-login";
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { Context } from "../store/appContext";

export const Register = () => {
    const { store, actions } = useContext(Context);
    const [email, setEmail] = useState("")
    const [contraseña, setContraseña] = useState("")
    const [nombreDeUsuario, setNombreDeUsuario] = useState("")
    const navigate = useNavigate();

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
        await actions.registrarUsuario(response.profileObj.email, response.profileObj.googleId)
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
            email: Yup.string().email('Invalid email address').required('Obligatorio'),
            userName: Yup.string()
                .max(20, 'No puede superar los 20 caracteres')
                .min(5, 'Minimo de 5 caracteres')
                .required('Obligatorio'),
            contraseña: Yup.string()
                .max(20, 'Must be 20 characters or less')
                .min(5, 'Minimo de 5 caracteres')
                .matches(/[A-Z]/, 'Debe contener al menos una letra mayúscula')
                .required('Obligatorio'),
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
            return <div className="text-danger mb-2">El Email ya tiene una cuenta asignada </div>
        } else if (store.errorUsuarioUso == true) {
            store.errorUsuarioUso = false
            return <div className="text-danger mb-2">El Nombre de usuario ya esta en uso </div>
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
        <div className="back-texto2 p-5 h-auto ">
            <div className="cambria m-auto p-5 back-texto3" style={{ width: "500px", height: "670px" }}>
                <h1 className="text-center mb-3">Registrarse</h1>
                <form className="mb-2" onSubmit={formik.handleSubmit}>
                    <p className="mb-0 login">Email:</p>
                    {/* <input type="text" placeholder="ejemplo@gmail.com" className="w-100 mb-4 login" onChange={event => setEmail(event.target.value)}></input> */}
                    <input
                        id="email"
                        name="email"
                        type="email"
                        className="mb-2 w-100 login"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                    />
                    {formik.touched.email && formik.errors.email ? (
                        <div className="text-danger">{formik.errors.email}</div>
                    ) : null}
                    <p className="mb-0 login">Nombre de Usuario:</p>
                    {/* <input type="text" className="w-100 mb-4 login" onChange={event => setNombreDeUsuario(event.target.value)}></input> */}
                    <input
                        id="userName"
                        name="userName"
                        type="text"
                        className="mb-2 w-100 login"
                        onChange={formik.handleChange}
                        value={formik.values.userName}
                    />
                    {formik.touched.userName && formik.errors.userName ? (
                        <div className="text-danger">{formik.errors.userName}</div>
                    ) : null}
                    <p className="mb-0 login">Contraseña:</p>
                    {/* <input type="password" className="mb-4 w-100 login" onChange={event => setContraseña(event.target.value)}></input><br/> */}
                    <input
                        id="contraseña"
                        name="contraseña"
                        label="Password"
                        type="password"
                        className="mb-3 w-100 login"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.contraseña}
                    />
                    {formik.touched.contraseña && formik.errors.contraseña ? (
                        <div className="text-danger">{formik.errors.contraseña}</div>
                    ) : null}
                    {enUso()}
                    <div className="text-center">
                        <button type="submit" className="login mb-3">Regístrate</button>
                    </div>
                </form>
                <p className="mb-0">¿Ya tienes una cuenta? <Link to="/login">Login</Link></p>
                <p className="text-center mb-2">OR</p>
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