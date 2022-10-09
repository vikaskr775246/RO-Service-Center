import "./about.css"

import AboutText from "./aboutText";
import AboutImg from "./aboutImg";

const About = (props) => {
    return (<div className="about" >
        <div className="about-wapper">
            <AboutText title={props.data.title}
            description={props.data.description} />
            <AboutImg images={props.data.imgs} />
        </div>
    </div >)
}
export default About;