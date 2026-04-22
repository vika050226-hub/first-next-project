import './style.css'
import {useState} from "react";

//const clickAct = () => {
//    alert('Вы нажали кнопку')
//}

export default function ClickAlert() {
    const [count, setCount] = useState(0);
    const clickAct = () => {
        setCount(count+1);
        alert(`Вы нажали на кнопку: ${count + 1} раз`);
    }
    return (
        <button className={"AlertButton"} onClick={clickAct}>НАЖМИТЕ КНОПКУ</button>
    )
}
