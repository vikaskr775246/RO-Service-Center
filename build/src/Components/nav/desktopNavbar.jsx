import "./desktopNavbar.css";

import HamBurger from "./hamBurger";
import Logo from "./logo";
import NavLinks from "./navLinks";
import Helpline from "./helpLine";
import WhatsAppIcon from "./whatsappIcon";

const DesktopNavbar = () => {

    return (
        <header className="p-15 destop-nav">
            <nav className="d-row-flex">
                <Logo />
                <NavLinks />
                <Helpline />
                <WhatsAppIcon />
                <div className="empty">
                    <HamBurger></HamBurger>
                    <div className="container p-15">
                        <NavLinks />
                        <Helpline />
                        <WhatsAppIcon />
                    </div>
                </div>
            </nav>
        </header>
    )
}
export default DesktopNavbar;