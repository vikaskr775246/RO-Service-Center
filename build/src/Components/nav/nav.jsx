import "./nav.css";
import React, { Component, Suspense, lazy, useState } from "react";

const fun = () => {
    const isDestop = window.screen.width >= 786;
    console.log("after you doing 786px less then plz refresh the page")
    const DesktopNavbar = lazy(() => import("./desktopNavbar"));
    const MobileNavbar = lazy(() => import("./mobileNavbar"));
    const val = isDestop ? <DesktopNavbar /> : <MobileNavbar />;
    return val;
}

class Nav extends Component {
    render() {
        return (
            <>
                <Suspense>{fun()}</Suspense>
            </>
        )
    }
};
export default Nav;