import "./hamBurger.css";

const HamBurger = (props) => {
    // console.log(props)
    function HamBurger(e) {
        console.log('HamBurger');
        const spans = document.querySelectorAll('.line');
        const container = document.querySelector('.container');
        spans[0].classList.toggle('span-first');
        spans[1].classList.toggle('span-meddle');
        spans[2].classList.toggle('span-second');
        container.classList.toggle('destop_show');
    }
    return (
        <>
            <div className="hamburger" onClick={HamBurger}>
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
            </div>
        </>
    )
}
export default HamBurger;