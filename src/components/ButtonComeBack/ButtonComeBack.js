import {Link} from "react-router-dom";
import {TbChevronLeft} from "react-icons/tb";
import "./ButtonComeBack.css"

export const ButtonComeBack = () => {
    return (
        <Link to="/" className="link">
            <TbChevronLeft className="arrow"/>
        </Link>
    )
}
