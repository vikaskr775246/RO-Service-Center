import './mobileNavbar.css';
import HamBurger from "./hamBurger";
import Logo from "./logo";
import WhatsAppIcon from "./whatsappIcon";
import ContectIcon from "./contectIcon";
import NavLinks from './navLinks';

const MobileNavbar = () => {
    return (
        <header className="p-15 mobile-nav">
            <nav>
                <div className="nav-wapper">
                    <Logo />
                    <WhatsAppIcon />
                    <ContectIcon />
                    <HamBurger />
                    <div className="container p-15"><NavLinks /></div>
                </div>
            </nav>
        </header>
    )
}
export default MobileNavbar;