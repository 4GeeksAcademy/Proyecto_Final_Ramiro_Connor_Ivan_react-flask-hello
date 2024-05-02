import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import podio from "../../img/podium-7920733_960_720.webp"
import ReactFlipCard from 'reactjs-flip-card'

import { Context } from "../store/appContext";
import { boolean } from "yup";

export const Flip = (props) => {
    const [modal, setModal] = useState("");
    
    const { store, actions } = useContext(Context);
    
    const styles = {
        card: {background: 'blue', color: 'white', borderRadius: 20, width: '460px', height : '600px' },
    }
    
    return (
        <ReactFlipCard
            frontStyle={styles.card}
            backStyle={styles.card}
            flipTrigger = 'onClick'
            dirección = 'horizontal'
            frontComponent={<div className="w-100"><img className="border border-dark rounded my-2 m-auto" src={store.question?.image} style={{ width: 450, height: 600 }} alt="Country Scene" /></div>}
            backComponent={<div>Back!</div>}
        />
    );
    
};
