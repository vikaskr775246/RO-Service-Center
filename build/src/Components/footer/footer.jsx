import './footer.css';



import LocationText from './locationText';
import ContactUsText from './contactUsText';
import SocialMediaIcon from './socialMediaIcon';
const Footer = (props) => {
    // console.log(props.icons);
    // props.locationtext.map((txt,idx)=>)
    return (
        <footer>
            <div className="footer-wapper p-15 d-col-flex">
                <div className="location d-row-flex">
                    <h4>TOP LOCATIONS</h4>
                    <LocationText text={props.locationstext} />
                </div>
                <div className="contact top-m-3rem d-row-flex">
                    <h4>CONTACT US</h4>
                    <ContactUsText text={props.menu} />
                </div>
                <SocialMediaIcon icons={props.icons}/>
                <p className="d-row-flex">&#169; 2021 OyeBusy Technologies Pvt. Ltd. </p>
            </div>
        </footer>
    )
}
export default Footer;