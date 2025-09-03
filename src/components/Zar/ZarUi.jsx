import { useState } from "react"


const ZarUi = () => {

    const [computer, setComputer] = useState([]);
    const [user, setUser] = useState([]);
    const [result, setResult] = useState("");    


    const addRandomNumber = () => {

        const num1 = Math.ceil(Math.random() * 6) + 1;
        const num2 = Math.ceil(Math.random() * 6) + 1;
        return [num1, num2];
    };
    

    const startGame = () => {
        const newUser = addRandomNumber();
        const newComputer = addRandomNumber();

        setComputer(newComputer);
        setUser(newUser)

        const totalUser = nweUser[0] + newUser[1];
        const totalComputer = newComputer[0] + newComputer[1];

        if (totalUser > totalComputer) {
            
            setResult("Kazandın");
        }
        else if (totalComputer > totalUser) {           
            setResult("Kaybettin");
        } else if (totalComputer === totalUser) {
            setResult('Berabere');
            
        }
        else {
            setResult('');
        }
       
    };

    return (

        <div>
            <div>
                <button onClick={startGame}>Zar At</button>
            </div>
            <div>
                Senin zarların:{user[0]} - {user[1]}
            </div>
            <div>
                Bilgisayarın zarları: {computer[0]} - {computer[1]}
            </div>
            <div>
                Kazanan: {result}
            </div>
        </div>
    );
};

export default ZarUi;