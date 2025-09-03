import { useState } from 'react'
import Buttons from "./Buttons";
import Content from "./Content";


const FontUi = () => {
    const [font, setFont] = useState(12);

    //font size büyütme 
    const handleFontUp  = () => {
        setFont(prev => {
            return prev >= 24  ? 24 : prev +1
        })
    }

    //font size küçültme
    const handleFontDown = () => {
        setFont(prev => {
            return prev <= 12 ? 12 : prev - 1
        })
    }
    return (
        <div>
            <Content fontSize={font}/>
            <Buttons handleFontUp={handleFontUp} handleFontDown={handleFontDown}/>
        </div>
    )
}

export default FontUi;