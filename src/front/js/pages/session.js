import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from 'react-router-dom';
import Confetti from 'react-confetti';
import nube from "../../img/nubepngwing.com.png"
import { useTranslation, Trans } from 'react-i18next';
import Counter from "../component/counter";

export const Session = () => {
    const { store, actions } = useContext(Context);
    const [points, setPoints] = useState(0);
    const [resultado, setResultado] = useState("");
    const [boton, setBoton] = useState("");
    const [bg, setBg] = useState("");
    const [avanzar, setAvanzar] = useState(false);
    const [flipped, setFlipped] = useState(false);
    const [showBackText, setShowBackText] = useState(false);
    const navigate = useNavigate();
    const [botonClickeado, setBotonClickeado] = useState(false);
    const [flash, setFlash] = useState(false);
    const [showConfetti, setShowConfetti] = useState(false);
    const { t, i18n } = useTranslation();

    const handleClick = () => {
        // Realiza las acciones que necesites al hacer clic en el botón
        // Luego, establece el estado de botonClickeado en true para deshabilitar el botón
        botonClickeado ? setBotonClickeado(false) : setBotonClickeado(true)
    };

    const toggleFlip = () => {
        setFlipped(!flipped); // Invertir el valor de flipped
    };

    const toggleBackText = () => {
        setShowBackText(!showBackText); // Invertir el estado para mostrar u ocultar el texto en la parte trasera
    };



    // console.log(store.contadorTermine);
    // if (store.contadorTermine == true) {
    //     questionCheker(200);
    // }


    const handlePoints = () => {
        setPoints(points + 100);
        console.log(points);
        // Mostrar la animación de confeti
        setShowConfetti(true);
        // Ocultar la animación de confeti después de un tiempo
        setTimeout(() => {
            setShowConfetti(false);
        }, 3000); // Duración de la animación en milisegundos
    };




    async function inicio() {
        let num1 = Math.floor(Math.random() * 20) + 1;
        await actions.questionRandom(num1);
        console.log("Números generados:", num1, "id pais:", store.idPais);
        // opciones()
    }

    async function opciones() {

        let num2;
        do {
            num2 = Math.floor(Math.random() * 30) + 1;
        } while (num2 === store.idPais);
        let num3;
        do {
            num3 = Math.floor(Math.random() * 30) + 1;
        } while (num3 === store.idPais || num3 === num2);

        await actions.wrongChoice(num2);
        await actions.wrongChoice1(num3);
        console.log("Números generados:", num2, num3, "id pais:", store.idPais);
    }


    // async function inicio() {




    //     let num1 = Math.floor(Math.random() * 20) + 1;
    //     let num2;
    //     do {
    //         num2 = Math.floor(Math.random() * 30) + 1;
    //     } while (num2 === store.question?.country_info.id);
    //     let num3;
    //     do {
    //         num3 = Math.floor(Math.random() * 30) + 1;
    //     } while (num3 === store.question?.country_info.id || num3 === num2);
    //     await actions.questionRandom(num1);
    //     actions.wrongChoice(num2);
    //     actions.wrongChoice1(num3);
    //     console.log("Números generados:", num1, num2, num3, "id pais:" , store.idPais );

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

    // }
    // Mezclado de array y map 
    const [respuestasOrder, setRespuestasOrder] = useState([]);
    const [respuestas, setRespuestas] = useState([]);

    // Define la lógica para generar las respuestas y mezclarlas
    const generateShuffledRespuestas = () => {
        const respuestas = [
            { nombre: "correcta", imagen: store.question?.country_info.image, id: store.question?.country_info.id },
            { nombre: "erronea1", imagen: store.option1?.image, id: store.option1?.id },
            { nombre: "erronea2", imagen: store.option2?.image, id: store.option2?.id }
        ];

        // Mezcla las respuestas
        const shuffledRespuestas = shuffleArray([...respuestas]);

        // Actualiza el estado con el orden de las respuestas
        setRespuestasOrder(shuffledRespuestas.map(respuesta => respuesta.id));

        // Actualiza el estado con las respuestas
        setRespuestas(shuffledRespuestas);
    };

    // Función para mezclar un array
    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

    // Función para manejar el clic en un botón
    const handleClick1 = (id) => {
        // Ejecuta la función questionCheker con el id de la respuesta
        questionCheker(id);
    };

    // const [showRespuestas, setShowRespuestas] = useState(false);

    // // Define la lógica para generar las respuestas y mezclarlas
    // const generateShuffledRespuestas = () => {
    //     const respuestas = [
    //         { nombre: "correcta", imagen: store.question?.country_info.image, id: store.question?.country_info.id },
    //         { nombre: "erronea1", imagen: store.option1?.image, id: store.option1?.id },
    //         { nombre: "erronea2", imagen: store.option2?.image, id: store.option2?.id }
    //     ];

    //     // Mezcla las respuestas
    //     const shuffledRespuestas = shuffleArray([...respuestas]);

    //     return shuffledRespuestas;
    // };

    // // Función para mezclar un array
    // const shuffleArray = (array) => {
    //     for (let i = array.length - 1; i > 0; i--) {
    //         const j = Math.floor(Math.random() * (i + 1));
    //         [array[i], array[j]] = [array[j], array[i]];
    //     }
    //     return array;
    // };

    // // Función para manejar el clic en un botón que mostrará las respuestas
    // const handleClickMostrarRespuestas = () => {
    //     setShowRespuestas(true);
    // };
    // const respuestas = [
    //     { nombre: "correcta", imagen: store.question?.country_info.image, id: store.question?.country_info.id },
    //     { nombre: "erronea1", imagen: store.option1?.image, id: store.option1?.id },
    //     { nombre: "erronea2", imagen: store.option2?.image, id: store.option2?.id }
    // ];

    // const shuffledRespuestas = shuffleArray([...respuestas]);

    // function shuffleArray(array) {

    //     for (let i = array.length - 1; i > 0; i--) {
    //         const j = Math.floor(Math.random() * (i + 1));
    //         [array[i], array[j]] = [array[j], array[i]];
    //     }
    //     return array;
    // }
    function botonClick() {
        toggleFlip()
        toggleBackText()
    }
    function siguiente() {
        inicio()
        toggleFlip()
        toggleBackText()
        handleClick()
        store.contadorReinicio = true
        store.contadorPausa = false
    }
    function volverHome() {
        navigate('/ranking-global')
        window.location.reload()
    }



    function questionCheker(id) {
        if (id == store.idPais) {
            setResultado(`${t('session.part2')}`);
            setAvanzar(true);
            setBoton(`${t('session.part4')}`)
            setBg("bg-success")
            handlePoints();
            botonClick()
            handleClick()
            store.contadorPausa = true
            return true
        }
        else {
            setResultado(`${t('session.part3')}`);
            setAvanzar(false)
            setBoton(`${t('session.part5')}`)
            setBg("bg-danger")
            botonClick()
            handleClick()
            if (store.nombreDeUsuario !== null) {
                actions.postPuntos(store.nombreDeUsuario, points)
            }
            store.contadorPausa = true
            return false
        }
    }




    useEffect(() => {
        console.log("pais actualizado opciones:", store.option1, store.option1);

        generateShuffledRespuestas()

    }, [store.option1, store.option2]);
    useEffect(() => {
        console.log("id pais actualizado:", store.idPais);
        opciones()

    }, [store.idPais]);

    useEffect(() => {
        // Verificar si store.contadorTermine es true
        if (store.contadorTermine) {
            // Ejecutar el bloque de código
            questionCheker(200);
        }

    }, [store.contadorTermine])

    useEffect(() => {
        inicio();


    }, []);


    return (
        <div className="container-fluid">


            <div className="SessionContainer cambria row">
                <div className="simpleCounter  col-6 order-1 col-sm-6 order-sm-1 col-md-4 order-md-1 col-lg-4 order-lg-1 d-flex justify-content-end align-items-center">
                    <div style={{ marginRight: '20px' }}>
                        <Counter />
                    </div>
                </div>
                <div className="imgWrapper my-2 col-12 order-3 col-sm-12 order-sm-3  col-md-4 order-md-2 col-lg-4 order-lg-2   ">
                    <div className="d-flex justify-content-center">
                        <div className={`contenedor imagen flipper ${flipped ? "flipped" : ""}`}>
                            <img className="imgED border border-dark rounded mb-2 front" src={store.question?.image} alt="Country Scene" />
                            <div className={`texto-trasero back p-0 mb-2   d-flex flex-column ${showBackText ? "show" : ""}`} >
                                <div className={`w-100 p-2 mb-4 ${bg}`}>
                                    <h3 className="m-0">{resultado}</h3>
                                </div>
                                <div>
                                    <p className="m-3">{t(`information.part${store.question?.id}`)}</p>
                                </div>
                                <div className="footer mt-auto py-3">
                                    <button type="button" className="btn btn-primary" onClick={() => avanzar ? siguiente() : volverHome()}>{boton}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pointCounter col-6 order-2 col-sm-6 order-sm-2  col-md-4 order-md-3 col-lg-4 order-lg-3  ">
                    {/* Place the nube component on the right */}
                    <div className={`text-center nube ${flash ? 'confetti' : ''}`}>
                        <img src={nube} className="nube mt-3 mx-auto" />
                        {showConfetti && <Confetti />}
                        <div className="puntos">
                            <h3 className="nubetexto">{t('session.part6')}:</h3>
                            <p>{points}</p>
                        </div>
                    </div>
                </div>
                <div className="QuestionHolder text-center col-12 order-4 col-sm-12 order-sm-4 col-md-12 order-md-4 col-lg-12 order-lg-4">
                    <h1 id="anunciante">{t('session.part1')}</h1>
                </div>
                <div className="FlagWrapper d-flex flex-row col-12 order-5 col-sm-12 order-sm-5 col-md-12 order-md-5 col-lg-12 order-lg-5 justify-content-center ">
                    {/* {!showRespuestas && (
                    null
                )}
                {showRespuestas && (
                    <div>
                        {generateShuffledRespuestas().map((respuesta, index) => (
                            <button key={index} className={`buttonStyle mx-3 border border-dark rounded my-2`} style={{ width: 80, height: 64 }} onClick={() => questionCheker(respuesta.id)} disabled={botonClickeado}>
                                <img src={respuesta.imagen} alt={respuesta.nombre} />
                            </button>
                        ))}
                    </div>
                )} */}
                    {respuestas.map((respuesta, index) => (
                        <button key={index} className={`buttonStyle mx-3 border border-dark rounded my-2`} style={{ width: 80, height: 64 }} onClick={() => handleClick1(respuesta.id)} disabled={botonClickeado}>
                            <img src={respuesta.imagen} alt={respuesta.nombre} />
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );

};


// {shuffledRespuestas.map((respuesta, index) => (
//     <button key={index} className={`buttonStyle mx-3 border border-dark rounded my-2`} style={{ width: 80, height: 64 }} disabled={botonClickeado} onClick={() => questionCheker(respuesta.id)}>
//         <img src={respuesta.imagen} alt={respuesta.nombre} />
//     </button>
// ))}
