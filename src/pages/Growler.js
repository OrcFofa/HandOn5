import Menu from "../components/Header/Menu"
import { Container } from "reactstrap"
import Imagrowler from "../assets/img/imggrowler.png"
import Seta from "../assets/img/seta.png"
import "../styles/growler.css"

export default function Growler() {
    return (
        <>
        <Menu/>
        <div className="conteudo"> 
        <Container className="">
        <div className="container px-4 text-center">
        <div className="row gx-5">
        <div className="col">
        <div className="p-3">
                <div> 
                <img className="seta"src={Seta} alt="voltar"/> 
                <text className="texto"> AGORA VAI TER ! </text> 
                <img src={Imagrowler} alt="Imagrowler"/>
                </div></div>
        </div>
        <div className="col text">
        <div className="p-3">
            <div className="span"> 
            <div className="paragrafo1">
            <span>Os growlers chegaram com tudo! Nunca ouviu falar ?</span>
            </div>
            
            <span>São garrafas retornáveis que você pode levar a bebida direto das torneiras da cervejaria para sua casa.</span>
            <span>Os garrafões trazem diversas vantagens para o consumidor, a primeira é que a bebida pode ser consumida fresca e com todas suas características intactas .</span>
            
            <span>Outro ponto importante é que essas garrafas cortam custos, e você passa a pagar somente pelo líquido.</span>
            <div> 
            <h2> Entre em contato com a gente e marque seu rolê aqui na Breja, temos vários growlers esperando por você.</h2></div>
            </div>
        </div>
        </div>
    </div>
    </div>
    </Container>
    </div>
    <footer>
        <div>teste </div>
    </footer>
    </>
    )
}