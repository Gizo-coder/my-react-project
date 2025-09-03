

const Buttons = ({handleFontUp,handleFontDown}) => {
    return (
        <div>
            <button onClick={handleFontUp}>+</button>
            <button onClick={handleFontDown}>-</button>
        </div>
    )
}

export default  Buttons;