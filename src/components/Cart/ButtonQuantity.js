import "./ButtonQuantity.css"

export const ButtonQuantity = () => {
    return (
        <div className="cart-product-quantity">
            <button>
                -
            </button>
            <div className="count">1</div>
            <button>
                +
            </button>
        </div>
    )
}
