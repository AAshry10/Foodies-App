import Link from "next/link"
import Image from "next/image";

import logoImg from '@/assets/logo.png';
import classes from './main-header.module.css';

import MainHeaderBackground from "./main-header-background.js";
import NavLink from "./NavLink.js";

export default function MainHeader() {
    return (
        <>
            <MainHeaderBackground/>
            <header className={classes.header}>
                <Link href="/" className={classes.logo} >
                    <Image src={logoImg} alt="A Food Logo" priority />
                    NextLevel Food
                </Link>

                <nav className={classes.nav}>
                    <ul>
                        <li>
                            <NavLink href="/meals">
                                Browse Meals
                            </NavLink>
                        </li>
                        <li>
                            <NavLink href="/community">
                                Foodies Communitys
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}