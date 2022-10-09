import "./choose.css"
import ChooseImg from "./chooseImg";
import ChooseText from "./chooseText";
const Choose = (props) => {
    return (
        <div className="choose-us">
            <div className="choose-us-wapper top-m-15">
                <ChooseImg />
                <ChooseText />
            </div>
        </div>
    )
}

export default Choose;