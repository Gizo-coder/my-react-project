

const Result = ({userChoice, computerChoice, gameResult}) => {

    return (

        <div>
            <div>
                Senin seçimin : {userChoice}
            </div>
            <div>
                Bilgisayarın seçimi : {computerChoice}
            </div>
            <div>
                Kazanan : {gameResult}
            </div>
        </div>
    )
}

export default Result;