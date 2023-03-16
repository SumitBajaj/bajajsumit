import React from "react";
import Image from "next/image";

import NavBar from "./NavBar";

export default function Header() {
    return (
        <header>
            <NavBar />
            <div className="header flex light-bg">
                <div>
                    <button>Principal Architect</button>
                    <h1 className="white">Skip the theory.</h1>
                    <h1 className="white">Let's discuss the code!</h1>
                    <p className="gray">I love to design and code complex problems into beautiful simple things.</p>
                    <a className="green" href="http://blogs.bajajsumit.com">Sneak peek into some of my craftwork</a>
                    {/* <a className="green" href="mailto:email.bajaj@gmail.com">Let&#39;s connect!</a> */}
                </div>
                <Image src="/images/sumit-profile.png" width={713} height={513} alt="sumit-profile"  /> 
            </div>
        </header>
    )
}