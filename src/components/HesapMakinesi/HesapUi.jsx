
import { useState } from "react"
import Button from "./Button"
import Result from "./Result"
import { RxValue } from "react-icons/rx";

const HesapUi = () => {
   
    const [clicks, setClicks] = useState('0');

    const handleClick = (value) => {

        setClicks(prev => {
            if (prev === '0') {
                return value;
            }
            else if (value === '=') {
                return eval(clicks)
            }
            else {
                return prev + value;
            }
        })
    }

    const handleReset = () => {

        setClicks('0')
    }

    return (
        
        <div>

            <Result clicks={clicks} handleReset={handleReset} />
            <Button handleClick={handleClick} />
            
        </div>
    )
}

export default HesapUi