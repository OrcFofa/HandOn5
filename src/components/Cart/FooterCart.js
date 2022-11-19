import { ButtonChooseMore } from "./ButtonChooseMore";
import { ButtonFinishOrder } from "./ButtonFinishOrder";
import "./FooterCart.css";

export const FooterCart = () => {
  return (
<div className="footerCart">
  <div className="btnFooter">
 <ButtonChooseMore />
 </div>
 <div className="btnFooter">
 <ButtonFinishOrder />
 </div>
 </div>
  )
}
