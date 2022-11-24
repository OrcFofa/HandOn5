import {ButtonChooseMore} from "./ButtonChooseMore";
import {ButtonFinishOrder} from "./ButtonFinishOrder";
import "./FooterCart.css";
import { Informations } from "./Informations";

export const FooterCart = ({subtotal, total}) => {
    return (
        <div className="footerCart">
            <div className="btnFooter">
                <ButtonChooseMore/>
            </div>
            <Informations subtotal={subtotal} total={total}/>
            <div className="btnFooter">
                <ButtonFinishOrder/>
            </div>
        </div>
    )
}
