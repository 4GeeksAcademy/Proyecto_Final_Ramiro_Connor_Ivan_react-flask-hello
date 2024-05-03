import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { useTranslation, Trans } from 'react-i18next';
export const Session = () => {
    const { store, actions } = useContext(Context);
    const { t, i18n } = useTranslation();
    function inicio(){
        let randNum1 = Math.floor(Math.random() * 10) + 1;
        let randNum2 = Math.floor(Math.random() * 15) + 1;
        let randNum3 = Math.floor(Math.random() * 15) + 1;
        actions.questionRandom(randNum1);
        actions.wrongChoice(randNum2);
        actions.wrongChoice1(randNum3);
    }
    useEffect(() => {
        inicio()
    }, []);
    const respuestas = [
        { nombre: "correcta", imagen: store.question?.country_info.image, id:store.question?.country_info.id },
        { nombre: "erronea1", imagen: store.option1?.image, id:store.option1?.id },
        { nombre: "erronea2", imagen: store.option2?.image, id:store.option2?.id }
    ];
    const shuffledRespuestas = shuffleArray([...respuestas]);
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
    function questionCheker(id){
        let informacion = store.question?.information;

        if(id== store.question?.country_info.id){
            document.getElementById("modal-header").className="bg-success"
            document.getElementById("titulomodal").textContent=`${t('session.part2')}`
        }
        else{
            document.getElementById("modal-header").className="bg-danger"
            document.getElementById("titulomodal").textContent=`${t('session.part3')}`
        }
        console.log(id)

        document.getElementById("modal-texto").textContent=informacion
    }
    
    return (
        <div className="SessionContainer cambria">
            <div className="container text-center">
                <img className="border border-dark rounded my-2" src={store.question?.image} style={{width:450, height:600}} alt="Country Scene"/>
            </div>
            <div className="QuestionHolder text-center">
                <h1 id="anunciante">{t('session.part1')}</h1>
            </div>
            <div className="FlagWrapper d-flex flex-row justify-content-center ">
                {shuffledRespuestas.map((respuesta, index) => (
                    <button key={index} className={`buttonStyle mx-3 border border-dark rounded my-2`} data-bs-toggle="modal" data-bs-target="#infoModal" style={{width:80, height:64}} onClick={()=> questionCheker(respuesta.id)}>
                        <img src={respuesta.imagen} alt={respuesta.nombre} />
                    </button>
                ))}
            </div>
    
            {/* ---Modal------ */}
            <div className="modal fade" id="infoModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="titulomodal" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header" id="modal-header">
                    <h1 className="modal-title fs-5" id="titulomodal"></h1>
                </div>
                <div className="modal-body" >
                    <p id="modal-texto">
                        ""
                    </p>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={inicio}>{t('session.part4')}</button>
                </div>
                </div>
            </div>
            </div>
                    </div>
    );
};