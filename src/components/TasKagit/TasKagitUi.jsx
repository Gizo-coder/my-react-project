
import { useState } from "react"
import Button from "./Button"
import Result from "./Result"


const TasKagitUi = () => {

    const [user, setUser] = useState(null);
    const [computer, setComputer] = useState(null);
    const [game, setGame] = useState(null);

    const deger = ['taş', 'kağıt', 'makas'];
    const handleClick = (value) => {
        setUser(value);
        setComputer(randomChoice);

        const randomChoice = deger[Math.floor(Math.random() * 3)];       

        if (value === randomChoice) {
            setGame('Berabere')
        }else if ((value === 'taş' && randomChoice === 'makas')||
                  (value === 'kağıt' && randomChoice === 'taş') ||
                  (value === 'makas' && randomChoice === 'kağıt')
        ){
            setGame('Kazandın')
        } else {
            setGame('Kaybettin')
        }
    }

    return (

        <div>

            <Button handleClick={handleClick} />
            <Result userChoice={user} computerChoice={computer} gameResult={game}/>

        </div>


    )
}

export default TasKagitUi 