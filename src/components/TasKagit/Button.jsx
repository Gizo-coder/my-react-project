

const Button = ({handleClick}) => {

    return (
        <div>
            <button onClick={() => handleClick('taş')}>Taş</button>
            <button onClick={() => handleClick('kağıt')}>Kağıt</button>
            <button onClick={() => handleClick('makas')}>Makas</button>
        </div>        
    )
}

export default Button;