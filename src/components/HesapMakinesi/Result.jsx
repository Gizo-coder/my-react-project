


const Result = ({ clicks, handleReset }) => {

    return (
        <div>
            {clicks}
            <button onClick={handleReset}>C</button>
        </div>
    )
}

export default Result