import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";

export const Session = () => {
    const { store, actions } = useContext(Context);
    const [points, setPoints] = useState(100);

    const handlePoints = ()=> {
        setPoints(points + 100);
        console.log(points);
    };

    async function inicio() {
        let num1 = Math.floor(Math.random() * 20) + 1;
        let num2;
        do {
            num2 = Math.floor(Math.random() * 30) + 1;
        } while (num2 === store.question?.country_info.id );
        let num3;
        do {
            num3 = Math.floor(Math.random() * 30) + 1;
        } while (num3 === store.question?.country_info.id || num3 === num2);
        await actions.questionRandom(num1);
        actions.wrongChoice(num2);
        actions.wrongChoice1(num3);
        console.log("Números generados:", num1, num2, num3);

        //     const previousIds = [];

        //     let randNum1 = Math.floor(Math.random() * 20) + 1;
        //      while (previousIds.includes(randNum1)) {
        //         randNum1 = Math.floor(Math.random() * 20) + 1;
        //     }
        //     previousIds.push(randNum1);
            // actions.questionRandom(randNum1);

        //     let randNum2 = Math.floor(Math.random() * 30) + 1;
        //     while (previousIds.includes(randNum2) || randNum2 === randNum1) {
        //         randNum2 = Math.floor(Math.random() * 30) + 1;
        //     }
        //     previousIds.push(randNum2);
        //     actions.wrongChoice(randNum2);

        //     let randNum3 = Math.floor(Math.random() * 30) + 1;
        //     while (previousIds.includes(randNum3) || randNum3 === randNum1 || randNum3 === randNum2) {
        //         randNum3 = Math.floor(Math.random() * 30) + 1;
        //     }
        //     previousIds.push(randNum3);
        //     actions.wrongChoice1(randNum3);

        // console.log(previousIds[0])
        // console.log(previousIds[1])
        // console.log(previousIds[2])

    }

    const respuestas = [
        { nombre: "correcta", imagen: store.question?.country_info.image, id: store.question?.country_info.id },
        { nombre: "erronea1", imagen: store.option1?.image, id: store.option1?.id },
        { nombre: "erronea2", imagen: store.option2?.image, id: store.option2?.id }
    ];

    const shuffledRespuestas = shuffleArray([...respuestas]);

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
    function questionCheker(id) {
        let informacion = store.question?.information;
        if (id == store.question?.country_info.id) {
            document.getElementById("modal-header").className = "bg-success"
            document.getElementById("titulomodal").textContent = "Nice one!"
            handlePoints();
        }
        else {
            document.getElementById("modal-header").className = "bg-danger"
            document.getElementById("titulomodal").textContent = "Wrong!"
        }
        document.getElementById("modal-texto").textContent = informacion
    }

    useEffect(() => {
        inicio();
        

    }, []);


    return (
        <div className="SessionContainer cambria">
            <div className="container text-center">
                <img className="border border-dark rounded my-2" src={store.question?.image} style={{ width: 450, height: 600 }} alt="Country Scene" />
            </div>
            <div className="QuestionHolder text-center">
                <h1 id="anunciante">¿A qué país pertenece esta imagen?</h1>
            </div>
            <div className="FlagWrapper d-flex flex-row justify-content-center ">
                {shuffledRespuestas.map((respuesta, index) => (
                    <button key={index} className={`buttonStyle mx-3 border border-dark rounded my-2`} data-bs-toggle="modal" data-bs-target="#infoModal" style={{ width: 80, height: 64 }} onClick={() => questionCheker(respuesta.id)}>
                        <img src={respuesta.imagen} alt={respuesta.nombre} />
                    </button>

                ))}
            </div>
            {/* ---------modal */}
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
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={inicio}>Understood!</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};