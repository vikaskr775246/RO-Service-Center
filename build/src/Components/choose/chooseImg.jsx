import "./chooseImg.css";
import image from './Images/why-choose-us-banner.webp';


const ChooseImg = () => {
    return (
        <div className="choose-img">
            <figure>
                <img src={image}></img>
            </figure>
        </div>
    )
}
export default ChooseImg;