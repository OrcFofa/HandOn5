import Logo from "../../assets/home-img/logo.png";
import Beer from "../../assets/home-img/breja-larger.png";
import "./home.css";

function Home(){
  return (
   <>
    <section className="intro-bg">
      <div className="container-xxl d-flex justify-content-between">
        <img src={Logo} alt="Logo da Breja"/>
        <div>
          <h1>CONHEÇA E APRECIE NOSSAS CERVEJAS</h1>
          <p>Acreditamos que cerveja artesanal de qualidade é para todo mundo, e por isso temos uma linha bem completa de produtos desde cervejas mais leves e refrescantes até cerveja mais complexas e intensas.</p>
          <p>Se prepare para uma experiência única com a melhor cerveja já produzida!</p>
          <p>Afinal, a vida merece um brinde!</p>
        </div>
      </div>
    </section>
   </>
  )
}

export default Home;