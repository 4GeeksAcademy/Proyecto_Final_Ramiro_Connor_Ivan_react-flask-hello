import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { disableValidation } from "schema-utils";

export const Session = () => {
    const {store,actions}=useContext(Context)
    let randNum1 = Math.floor(Math.random() * 10) + 1;
    let randNum2 = Math.floor(Math.random() * 15) + 1;
    let randNum3 = Math.floor(Math.random() * 15) + 1;
    // let questionImage= store.question.image;
    useEffect(()=>{
        
        actions.questionRandom(randNum1);
        actions.wrongChoice(randNum2);
        actions.wrongChoice1(randNum3);
        
    },[])
    console.log(store.option2?.image)
    
	return (
		<div className="SessionContainer cambria ">
           <div className="IconWrapper d-flex flex-row justify-content-center  " >
                <div className="Iconholder d-flex flex-row justify-content-center p-1 border border-dark rounded my-2" style={{width:120, height:40}}>
                    <div className="bg-success text-center rounded-circle mx-1" style={{width:30, height:30}} >
                        <i className="fa-solid fa-question fa-beat-fade"></i>
                        </div>
                        
                    <div className="bg-danger text-center rounded-circle mx-1" style={{width:30, height:30}}><i class="fa-solid fa-fire fa-bounce"></i></div>
                    <div className="bg-primary text-center rounded-circle mx-1" style={{width:30, height:30}}>
                        <p className="Contador"> 1</p>
                    </div>
                </div>
            </div>
             <div className="container text-center" >
                 <img className=" border border-dark rounded my-2"src={store.question?.image} style={{width:300, height:400}} />
                </div>
                
            <div className="QuestionHolder text-center">
                <h1>¿A qué país pertenece esta imagen?</h1>
            </div>
            <div className="FlagWrapper d-flex flex-row justify-content-center">
                <div className="Flagholder d-flex flex-row justify-content-center text-center p-1 my-2 mb-5">
                <button className="botoncorrectoPH  mx-3 border border-dark rounded" style={{width:160, height:80}}>
                    <img src={store.question?.country_info.image}/>
                </button> 
                <button className="botonmalo1  mx-3 border border-dark rounded" style={{width:160, height:80}}>
                    <img src={store.option1?.image}/>
                </button> 
                <button className="botonmalo2  mx-3 border border-dark rounded" style={{width:160, height:80}}>
                    <img src={store.option2?.image}/>
                </button> 
                </div>
            </div>

        </div>
        
        
	);
};