import Link from "next/link"
import './style.css'

export default function NavBar (){
    return(
        <nav id={"navbar"}>
            <ul>
                <li><div><Link className={"navlink"} href="/main">Главная</Link></div></li>
                <li><Link className={"navlink"} href="/contacts">Контакты</Link></li>
                <li><Link className={"navlink"} href="/about">О нас</Link></li>
            </ul>
        </nav>
    )
}