import "./Informations.css"

export const Informations = () => {
    return (
        <div className="informations">
            <div>
                <span>SUBTOTAL</span>
                <span>R$25,00</span>
            </div>
            <div>
                <span>ENTREGA</span>
                <span style={
                    {color: "#DA6A04"}
                }>a calcular</span>
            </div>
            <div>
                <span>TOTAL</span>
                <span>R$25,00</span>
            </div>
        </div>
    )
}
