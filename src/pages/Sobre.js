import "./Sobre.css";
import React from "react";
import ImageBack from '../../src/assets/image-back.png';
import ImageFront from '../../src/assets/image-front.png';
import Text from "../components/Text";

export function Sobre() {
    return (
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
    );
}



