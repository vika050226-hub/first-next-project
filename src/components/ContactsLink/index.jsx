import Link from "next/link"

export default function ContactsLink({text, link}){
    return(
        <Link href={`/${link}`}>{text}</Link>
    )
}