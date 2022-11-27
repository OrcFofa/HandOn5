import { ButtonComeBack } from "../components/Cart/ButtonComeBack";
import ImageBack from "../../src/assets/img/image-back.png";
import ImageFront from "../../src/assets/img/image-front.png";
import Text from "../components/Text/Text";
import Footer from "../components/Footer/Footer";
import "../styles/about.css";

export function About() {
  return (
    <>
      <div className="background-about">
        <div className="buttonComeBack">
          <ButtonComeBack />
        </div>
        <section className="container">
          <div class="row">
          <div className="subtitle"> QUEM É A BREJA ? </div>
            <div className="col figure">
              <img src={ImageBack} className="image-back" />
              <img src={ImageFront} className="image-front" />
            </div>
            <div className="col">
            <Text />
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}