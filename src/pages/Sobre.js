import "./Sobre.css";
import React from "react";
import {ButtonComeBack} from "../components/Cart/ButtonComeBack"
import ImageBack from '../../src/assets/img/image-back.png';
import ImageFront from '../../src/assets/img/image-front.png';
import Text from "../components/Text";
import Footer from "../components/Footer/Footer";

export function Sobre() {
    return (
        <>
        <div className="buttonComeBack">
                <ButtonComeBack/>
            </div>

        <section className="container flex">
            <div>
            <h1> QUEM É A BREJA ? </h1>
                <div className="figure">
                    <img src={ImageBack} className="image-back"  />
                    <img src={ImageFront} className="image-front" />
                </div>
            </div>
            <Text />
        </section>
        <Footer/>
                    
        </>
    );
}



