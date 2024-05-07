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
        await actions.loginUsuario(response.profileObj.email, response.profileObj.googleId)
        if (store.navigate == true) {
            navigate('/')
        }
        store.navigate = false
    }
    function onFailure() {
        console.log("Hubo un error");
    }
    // fin de Google

    // Condicionales de Manejo de Error 

    function errorEmail() {
        // console.log(store.errorEmail);
        // console.log(store.errorContraseña);
        if (store.errorEmail == true) {
            store.errorEmail = false
            console.log("hola");
            return <div className="text-danger mb-2">{t('login.part7')} </div>
        } else if (store.errorContraseña == true) {
            store.errorContraseña = false
            console.log("hola");
            return <div className="text-danger mb-2">{t('login.part7')}</div>
        } else {
            return null
        }
    }

    async function userLogin(e) {
        e.preventDefault()
        await actions.loginUsuario(email, contraseña)
        if (store.navigate == true) {
            navigate('/')
        }
        store.navigate = false
        errorEmail()
        // console.log(localStorage.getItem("token"));
        console.log(store.tokenOK);
    }

    return (
        <div className="Loginwrapper back-texto2 d-flex justify-content-center  ">
            <div className="Cajaform cambria my-5   back-texto3 formularios" >
                <h1 className="FormHeader text-center mb-3">Login</h1>
                <form className="mb-4" onSubmit={userLogin}>
                    <p className="Formtext mb-0 login">Email:</p>
                    <input type=" text" placeholder={t('register.part2')} className=" Formfield w-100 mb-4 login" onChange={event => setEmail(event.target.value)}></input>
                    <p className="Formtext mb-0 login">{t('login.part1')}:</p>
                    <input type="password" className="Formfield mb-4 w-100 login" onChange={event => setContraseña(event.target.value)}></input><br />
                    {errorEmail()}
                    <div className="text-center">
                        <button type="submit" className="px-5 py-1 mt-2 login mb-3">{t('login.part2')}</button>
                    </div>
                </form>
                <div className="altlogin">
                    <p className="altloginText">{t('login.part3')} <Link to="/register">{t('login.part4')}</Link></p>
                    <p className="altloginText"><Link to='/forgot-password'>{t('login.part5')}</Link></p>
                    <p className="altloginText text-center ">{t('login.part6')}</p>
                    <div className="googleLogin text-center">
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
        </div>
    );
};


// import React from 'react';
// import { useFormik } from 'formik';
// import * as Yup from 'yup';

// const SignupForm = () => {
//   const formik = useFormik({
//     initialValues: {
//       firstName: '',
//       lastName: '',
//       email: '',
//     },
//     validationSchema: Yup.object({
//       firstName: Yup.string()
//         .max(15, 'Must be 15 characters or less')
//         .required('Required'),
//       lastName: Yup.string()
//         .max(20, 'Must be 20 characters or less')
//         .required('Required'),
//       email: Yup.string().email('Invalid email address').required('Required'),
//     }),
//     onSubmit: values => {
//       alert(JSON.stringify(values, null, 2));
//     },
//   });
//   return (
//     <form onSubmit={formik.handleSubmit}>
//       <label htmlFor="firstName">First Name</label>
//       <input
//         id="firstName"
//         name="firstName"
//         type="text"
//         onChange={formik.handleChange}
//         onBlur={formik.handleBlur}
//         value={formik.values.firstName}
//       />
//       {formik.touched.firstName && formik.errors.firstName ? (
//         <div>{formik.errors.firstName}</div>
//       ) : null}

//       <label htmlFor="lastName">Last Name</label>
//       <input
//         id="lastName"
//         name="lastName"
//         type="text"
//         onChange={formik.handleChange}
//         onBlur={formik.handleBlur}
//         value={formik.values.lastName}
//       />
//       {formik.touched.lastName && formik.errors.lastName ? (
//         <div>{formik.errors.lastName}</div>
//       ) : null}

//       <label htmlFor="email">Email Address</label>
//       <input
//         id="email"
//         name="email"
//         type="email"
//         onChange={formik.handleChange}
//         onBlur={formik.handleBlur}
//         value={formik.values.email}
//       />
//       {formik.touched.email && formik.errors.email ? (
//         <div>{formik.errors.email}</div>
//       ) : null}

//       <button type="submit">Submit</button>
//     </form>
//   );
// };