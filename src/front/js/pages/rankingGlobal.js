import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import podio from "../../img/podium-7920733_960_720.webp"

import { Context } from "../store/appContext";

export const RankingGlobal = () => {
    const { store, actions } = useContext(Context);

    let arrayTopTen= store.topTen[0]

    useEffect(()=>{
        actions.topTenRanking()
    },[])

    console.log(arrayTopTen);

    return (
        <div className="back-texto2 p-5 h-auto ">
            <div className="container">
                <div className="text-center podio">
                    <img src={podio} className="text-center" />
                    {/* <h4 className="primeros3 segundo">{arrayTopTen[1]?.user_name}</h4> */}
                    <h4 className="primeros3 primero">Connor(490)</h4>
                    <h4 className="primeros3 tercero">Ramiro(430)</h4>
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
                                <td>Mark</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">5</th>
                                <td>Jacob</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <th scope="row">6</th>
                                {/* <td colspan="2">Larry the Bird</td> */}
                                <td>Larry the Bird</td>
                                <td>@twitter</td>
                            </tr>
                            <tr>
                                <th scope="row">7</th>
                                {/* <td colspan="2">Larry the Bird</td> */}
                                <td>Larry the Bird</td>
                                <td>@twitter</td>
                            </tr>
                            <tr>
                                <th scope="row">8</th>
                                {/* <td colspan="2">Larry the Bird</td> */}
                                <td>Larry the Bird</td>
                                <td>@twitter</td>
                            </tr>
                            <tr>
                                <th scope="row">9</th>
                                {/* <td colspan="2">Larry the Bird</td> */}
                                <td>Larry the Bird</td>
                                <td>@twitter</td>
                            </tr>
                            <tr>
                                <th scope="row">10</th>
                                {/* <td colspan="2">Larry the Bird</td> */}
                                <td>Larry the Bird</td>
                                <td>@twitter</td>
                            </tr>
                            <tr className="su-posicion text-white">
                                <th scope="row">su posicion</th>
                                {/* <td colspan="2">Larry the Bird</td> */}
                                <td>su nombre</td>
                                <td>su puntuacion</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};
