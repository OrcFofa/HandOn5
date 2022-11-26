import './style.css'
import foto from '../../assets/produtos/retangulo.png'
function Card() {
    return (
        <div className='card'>
            <img src={foto} alt=""/>
            <h2>Breja IPA</h2>
            <p>
                American IPA com uma dose
                generosa de lúpulo, muito aromática e com
                amargor característico .
                IBU 56 - ABV 5,6% - EBC 6,6
            </p>
            <div><span>R$ 25,00</span>
                <button>Comprar</button>
            </div>
        </div>
    )
}
export default Card