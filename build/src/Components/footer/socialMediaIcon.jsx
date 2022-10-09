


const SocialMediaIcon = (props) => {
    // console.log();
    return (<ul className="social-media-icons m-15 d-row-flex top-m-3rem">
        {props.icons.map((icon, idx) => <li key={idx}><a href="#"><i className={icon}></i></a></li>)}
    </ul>)
}
export default SocialMediaIcon;