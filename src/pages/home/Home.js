import Logo from "../../assets/home-img/logo.png";
import Beer from "../../assets/home-img/breja-larger.png";
import "./home.css";

function Home(){
  return (
   <main>
    <section className="intro-bg">
      <div className="container-xxl d-flex">
        <div className="container-img"><img src={Logo} alt="Logo da Breja"/></div>
        <div>
          <h1>CONHEÇA<br/><span className="title-detail-p">NOSSAS</span><br/><span className="title-detail-s">CERVEJAS</span></h1>
          <p>SE PREPARE PARA UMA EXPERIÊNCIA ÚNICA, COM A MELHOR CERVEJA JÁ PRODUZIDA.</p>
        </div>
      </div>
    </section>
    
    <section className="highlights-bg">
      <div className="highlights container-xxl d-flex justify-content-between">
        <div className="container-img"><img src={Beer} alt="Cerveja da Breja"/></div>
        <div className="grid">
          <h2>DESTAQUE</h2>
          <div className="highlight">
            <h3>DESCRIÇÃO</h3>
            <p>A BREJA Lager é uma cerveja leve e refrescante, com amargor bem inserido, notas floraise e condimentos de lúpulo. <br/>Cerveja ideal para dias quentes.</p>
          </div>
          <div className="highlight">
            <h3>HARMONIZAÇÃO</h3>
            <p>SALADAS <br/> PEIXES BRANCOS <br/> GRELHADOS <br/> QUEIJOS SUAVES <br/> AVES</p>
          </div>
        </div> 
        <div className="highlight info">
          <span>IBU 14</span>
          <span>ABV 5%</span>
          <span>EBC 6</span>
        </div>
      </div>
    </section>

    <section className="quote-bg">
      <div>
        <q>BRINDO À CASA, BRINDO À VIDA, MEUS AMORES, MINHA FAMÍLIA ...</q>
        <span>Mar de gente (O RAPPA)</span>
      </div>
    </section>
   </main>
  )
}

export default Home;