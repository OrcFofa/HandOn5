import "../styles/about.css";
import React from "react";
import {ButtonComeBack} from "../components/Cart/ButtonComeBack"
import ImageBack from '../../src/assets/img/image-back.png';
import ImageFront from '../../src/assets/img/image-front.png';
import Text from "../components/Text/Text";
import Footer from "../components/Footer/Footer";

export function About() {
    return (
        <>
        <div className="background-about">
        <div className="buttonComeBack">
                <ButtonComeBack/>
            </div>
        <section className="container flex">

            <div class="row gx-5">
            <div className="subtitle"> QUEM É A BREJA ? </div>
                <div className="figure">
                    <img src={ImageBack} className="image-back"  />
                    <img src={ImageFront} className="image-front" />
                </div>
            </div>
            <Text />
        </section>
        </div>
        <Footer/>
                    
        </>
    );
}



