import "./ButtonQuantity.css"

export const ButtonQuantity = ({quantity}) => {
    return (
        <div className="cart-product-quantity">
            <button>
                -
            </button>
            <div className="count">{quantity}</div>
            <button>
                +
            </button>
        </div>
    )
}
