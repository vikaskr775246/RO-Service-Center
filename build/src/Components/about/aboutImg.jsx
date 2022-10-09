

const AboutImg = (props) => {
    return (
        <aside className="m-15 about-img d-row-flex">
            <div className="aside-wapper">
                {props.images.map((img, idx) => <div className="about-img m-15" key={idx}>
                    <figure>
                        <img src={img} alt="Images"></img>
                    </figure>
                </div>)}
            </div>
        </aside>
    )
}
export default AboutImg;