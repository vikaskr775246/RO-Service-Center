

const LocationText = (props) => {
    return (<div className="location-wapper SubDiv">
        <ul className="d-row-flex">
            {props.text.map((txt, idx) => <li className="p-right-25" key={idx}>{txt}</li>)}
        </ul>
    </div>)
}
export default LocationText;