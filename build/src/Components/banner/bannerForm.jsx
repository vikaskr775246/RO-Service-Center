import "./bannerForm.css";


const BannerForm = (props) => {
    let options = [{ name: 'select your city' }, { name: 'Delhi NCR' }];
    let selectedOptionId = 0;
    const data = props.formData;
    // console.log(data)
    return (
        <div id="form-wapper" className="top-m-15">
            <h2>Where do you need a service?</h2>
            <form className="top-m-15">
                <select name="City" id="select" defaultValue={selectedOptionId}>
                    {data.map((elm, id) =>
                        <option key={id} value={data[id].dropdownItem}>{data[id].dropdownItem}</option>
                        // console.log(id)
                    )}
                </select>
            </form>
        </div>
    )
}
export default BannerForm;