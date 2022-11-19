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
    
    <section className="highlights-bg">
      <div className="highlights container-xxl d-flex justify-content-between">
        <img src={Beer} alt="Cerveja da Breja"/>
        <div className="grid">
          <h2>DESTAQUE</h2>
          <div className="highlight">
            <h3>DESCRIÇÃO</h3>
            <p>A BREJA Lager é uma cerveja leve e refrescante, com amargor bem inserido, notas floraise e condimentos de lúpulo. Cerveja ideal para dias quentes.</p>
          </div>
          <div className="highlight">
            <h3>HARMONIZAÇÃO</h3>
            <p>SALADAS <br/> PEIXES BRANCOS <br/> GRELHADOS <br/> QUEIJOS SUAVES <br/> AVES</p>
          </div>
        </div> 
        <div className="highlight">
          <span>IBU 14</span>
          <span>ABV 5%</span>
          <span>EBC 6</span>
        </div>
      </div>
    </section>
   </>
  )
}

export default Home;