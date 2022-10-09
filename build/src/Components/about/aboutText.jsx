


const AboutText = (props) => {
    return (
        <article className="m-15 about-text">
            <h3 className="about-title">{props.title}</h3>
            <p className="top-m-15">{props.description}</p>
        </article>
    )
}
export default AboutText;
