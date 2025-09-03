import { useState, useEffect } from "react"
import Buttons from "./Buttons"

const SliderUi = () => {

    const sliders = [

        "https://pixabay.com/photos/bird-blue-clouds-weather-pen-8788491/",
        "https://pixabay.com/photos/painting-abstract-background-3135875/",
        "https://pixabay.com/photos/nature-waters-lake-island-3082832/"

    ]

    const [slide, setSlide] = useState(0); // useStateim 0 olduğu için sonsuza kadar gidiyor sınırlarsak durum farklı olur

    useEffect(() => {
        const time = setInterval(handleNext, 3000);

        return () => clearInterval(time);
    }, [])
  
    const handleNext = () => {

        setSlide(prev => {
            return (prev + 1) % sliders.length;
        })
    }

     const handlePrev = () => {

        setSlide(prev => {
            return (prev - 1 + sliders.length) % sliders.length
        })
    }
    return (

        <div>
            <img src={sliders[slide]} alt="" width={"500px"}/>
            <Buttons handleNext={handleNext} handlePrev={handlePrev}/>
        </div>
    )
}

export default SliderUi