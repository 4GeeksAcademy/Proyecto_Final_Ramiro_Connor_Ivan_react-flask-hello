import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";

import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Login } from "./pages/login"; 
import { Register } from "./pages/register";
import { Session } from "./pages/session";
import { RankingGlobal } from "./pages/rankingGlobal";
import { RecuperarContraseña } from "./pages/recuperarContraseña";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import App from "./app";
import Moon404 from "./pages/404";

//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    if(!process.env.BACKEND_URL || process.env.BACKEND_URL == "") return <BackendURL/ >;

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar />
                    <Routes>
                        <Route element={<Home />} path="/" />
                        <Route element={<Session />} path="/demo" />
                        <Route element={<Login />} path="/login" />
                        <Route element={<App />} path="/app" />
                        <Route element={<Register />} path="/register" />
                        <Route element={<Moon404 />} path="*" />
                        <Route element={<Session />} path="/session" />
                        <Route element={<RankingGlobal />} path="/ranking-global" />
                        <Route element={<RecuperarContraseña />} path="/forgot-password" />
                        
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
