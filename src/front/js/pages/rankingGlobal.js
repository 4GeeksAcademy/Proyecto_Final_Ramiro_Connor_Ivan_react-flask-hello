import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import podio from "../../img/podium-7920733_960_720.webp"

import { Context } from "../store/appContext";

export const RankingGlobal = () => {
    const { store, actions } = useContext(Context);


    useEffect(()=>{
        actions.topTenRanking()
        actions.miMejorPosicion()
    },[])

    return (
        <div className="back-texto2 p-5 h-auto ">
            <div className="container">
                <div className="text-center podio">
                    <img src={podio} className="text-center" />
                    <h4 className="primeros3 segundo">{store.posicion2?.user_name}({store.posicion2?.points})</h4>
                    <h4 className="primeros3 primero">{store.posicion1?.user_name}({store.posicion1?.points})</h4>
                    <h4 className="primeros3 tercero">{store.posicion3?.user_name}({store.posicion3?.points})</h4>
                </div>
                <div>
                    <table className="table back-texto3">
                        <thead>
                            <tr>
                                <th scope="col">Posicion</th>
                                <th scope="col">Nombre de usuario</th>
                                <th scope="col">Puntuacion</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">4</th>
                                <td>{store.posicion4?.user_name}</td>
                                <td>{store.posicion4?.points}</td>
                            </tr>
                            <tr>
                                <th scope="row">5</th>
                                <td>{store.posicion4?.user_name}</td>
                                <td>{store.posicion4?.points}</td>
                            </tr>
                            <tr>
                                <th scope="row">6</th>
                                <td>{store.posicion4?.user_name}</td>
                                <td>{store.posicion4?.points}</td>
                            </tr>
                            <tr>
                                <th scope="row">7</th>
                                <td>{store.posicion4?.user_name}</td>
                                <td>{store.posicion4?.points}</td>
                            </tr>
                            <tr>
                                <th scope="row">8</th>
                                <td>{store.posicion4?.user_name}</td>
                                <td>{store.posicion4?.points}</td>
                            </tr>
                            <tr>
                                <th scope="row">9</th>
                                <td>{store.posicion4?.user_name}</td>
                                <td>{store.posicion4?.points}</td>
                            </tr>
                            <tr>
                                <th scope="row">10</th>
                                <td>{store.posicion4?.user_name}</td>
                                <td>{store.posicion4?.points}</td>
                            </tr>
                            <tr className="su-posicion text-white">
                                <th scope="row">su posicion</th>
                                {/* <td colspan="2">Larry the Bird</td> */}
                                <td>{store.nombreDeUsuario}</td>
                                <td>{store.misPuntos}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};
