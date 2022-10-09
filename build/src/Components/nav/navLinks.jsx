

const NavLinks = () => {
    return (
        <ul className="navlinks d-row-flex">
            <li className="links-1"><a href="#">APPLIANCES CARE</a></li>
            <li className="sub-show links-2">
                <a href="#">HOME CARE <span><i className="fa-solid fa-angle-down"></i></span></a>
                <ul className="sub-ul">
                    <li><a href="#">vikas</a></li>
                    <li><a href="#">vikas kumar</a></li>
                </ul>
            </li>
            <li className="links-3"><a href="#">GADGET CARE</a></li>
            <li className="links-4"><a href="#">GHANDYMAN</a></li>
            <li className="sub-show link-5">
                <a href="#">BEAUTY CARE <span><i className="fa-solid fa-angle-down"></i></span></a>
                <ul className="sub-ul">
                    <li><a href="#">vikas</a></li>
                    <li><a href="#">vikas kumar</a></li>
                </ul>
            </li>
            <li className="link-6"><a href="#">FITNESS CARE</a></li>
            <li className="link-7"><a href="#">BUSINESS CARE</a></li>
            <li className="link-8"><a href="#">ALL SERVICES</a></li>
            <li className="link-9"><a href="#">BLOG</a></li>
        </ul>
    )
}
export default NavLinks;