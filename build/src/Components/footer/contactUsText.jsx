


const ContactUsText = (props) => {
    return (<div className="contact-wapper SubDiv">
        <p><span>Phone: +91 782 762 1417</span> <span>Email: support@roservicecenter.live</span></p>
        <ul>
            {props.text.map((txt, idx) => <li key={idx}><a href="#">{txt}</a></li>)}
        </ul>
    </div>)
}
export default ContactUsText;