import "./Informations.css"

export const Informations = ({subtotal, total}) => {
    return (
        <div className="informations">
            <div>
                <span>SUBTOTAL</span>
                <span>{subtotal}</span>
            </div>
            <div>
                <span>ENTREGA</span>
                <span style={
                    {color: "#DA6A04"}
                }>a calcular</span>
            </div>
            <div>
                <span>TOTAL</span>
                <span>{total}</span>
            </div>
        </div>
    )
}
