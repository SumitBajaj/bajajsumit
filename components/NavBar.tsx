import React from "react";
import Link from "next/link";

export default function NavBar() {

    return (
        <nav className="flex light-bg justify-space">
            <div className="logo white">
                <Link href="/">Sumit Bajaj</Link>
            </div>

            <ul className="flex white">
                <li className="green">
                    <Link href="/">{"< Home />"}</Link>
                </li>
                <li>
                    <Link href="http://blogs.sumitbajaj.com">Tech Blogs</Link>
                </li>
                <li>
                    <Link href="/#about">About Me</Link>
                </li>
                <li>
                    <Link href="mailto:email.bajaj@gmail.com">Let's Connect</Link>
                </li>
            </ul>
        </nav>
    )
}