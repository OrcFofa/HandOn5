import "./Informations.css"

export const Informations = ({subtotal, total}) => {

    let BRreal = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    });

    return (
        <div className="informations">
            <div>
                <span>SUBTOTAL</span>
                <span>{BRreal.format(subtotal)}</span>
            </div>
            <div>
                <span>ENTREGA</span>
                <span style={
                    {color: "#DA6A04"}
                }>a calcular</span>
            </div>
            <div>
                <span>TOTAL</span>
                <span>{BRreal.format(total)}</span>
            </div>
        </div>
    )
}
