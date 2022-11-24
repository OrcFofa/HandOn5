import Menu from "../components/Header/Menu"
import ImgGrowler  from "../assets/img/imggrowler.png"
import { ButtonComeBack } from "../components/Cart/ButtonComeBack"
import "../styles/growler.css"


export default function Growler() {
    return (
        <>
        <section>
        <Menu/>
       <div className="but"> <ButtonComeBack /></div> 
      
    <div class="container">
        
     <div class="row gx-5">
     <div className="subtitle"> AGORA VAI TER ! </div>
    <div class="col-12 col-lg-6">
     <div class="p-3 ">  
    <img src={ImgGrowler} alt="Logo"/>
    </div>
    </div>
    <div class="col-12 col-lg-6">
      <div class="p-3">
        <div className="textone"> 
        <span>Os growlers chegaram com tudo! Nunca ouviu falar ?</span>
        <span> São garrafas retornáveis que você pode levar a bebida direto das torneiras da cervejaria para sua casa.</span>
        <span> Os garrafões trazem diversas vantagens para o consumidor, a primeira é que a bebida pode ser consumida fresca e com todas suas características intactas .</span>
        <span> Outro ponto importante é que essas garrafas cortam custos, e você passa a pagar somente pelo líquido.</span>
    </div>
    <div className="texttwo">
    <p> <strong>  Entre em contato com a gente e marque seu rolê aqui na Breja, temos vários growlers esperando por você. </strong></p>
    </div></div>
    </div>
  </div>
</div>
</section>
  </>
    )
}