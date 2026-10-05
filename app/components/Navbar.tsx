"use client";


import "./Navbar.css";
import Link from "next/link";
import { usePathname } from "next/navigation"; 

export default function Navbar(){

    const pathname = usePathname();

    return(

        <nav className="Navbar">

           {/* <div className="logo-container">
           <img src="/logo" alt="Logo" />
            </div> */}

        
            <ul className="links">

            <li><Link href="/"className={pathname === "/" ? "active" : ""} >Home</Link></li>

            <li><Link href="/services"className={pathname === "/services" ? "active" : ""} >Services</Link></li>

            <li><Link href="/contact"className={pathname === "/contact" ? "active" : ""} >Contact</Link></li>

            </ul>
        
        
        </nav>
    )

}