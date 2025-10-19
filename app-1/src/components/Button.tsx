import {ButtonHTMLAttributes, useState} from "react";
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button = (props: ButtonProps) => {
    const [count,setCount] = useState(0)
    return <button
        {...props}
        onClick={() => setCount(count +1)}
    > BTN APP 1: {count} </button>
}
export default Button