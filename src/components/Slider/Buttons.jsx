


const Buttons = ({handleNext, handlePrev}) => {
    
    return (
        <div>
            <button onClick={handleNext}>İleri</button>
            <button onClick={handlePrev}>Geri</button>
        </div>
    )    
}

export default Buttons