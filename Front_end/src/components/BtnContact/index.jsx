import { NavLink } from "react-router-dom";
import './btnContact.scss'
import ArrowTop from "../ArrowTop";

function BtnContact() {

    return (
        <>
            <div className="contact__arrowTop">
                        <NavLink className="btn__contact"
                            to="/Contact"
                        >
                            Contact
                        </NavLink>
                        <ArrowTop />
            </div>
        </>
    )
}
export default BtnContact;