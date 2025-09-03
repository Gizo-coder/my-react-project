
import { useState } from "react"
import Buttons from "./Buttons"
import Content from "./Content"

const BgColorUi = () => {

    const[rgb, setRgb] = useState({
        r: Math.floor(Math.random()*256), //renkleri random atmak için bunu kullanıyoruz
        g: Math.floor(Math.random()*256),
        b: Math.floor(Math.random()*256),
    })
    // her renk için 2 adet const fonksiyonu var
    const rColorUp = () => {
        setRgb(prev => {
            return {
                ...prev,
                r: prev.r === 255 ? 255 : prev.r + 1 //bu durumda sınırlamış oluyoruz  // r: prev.r + 1 // buttona sınırsız bastığımda sonsuza kadar gidebilir
            }
        })
    }

    const rColorDown = () => {
        setRgb(prev => {
            return {
                ...prev,
                r: prev.r === 0 ? 0 : prev.r - 1 //bu durumda sınırlamış oluyoruz  // r: prev.r + 1 // buttona sınırsız bastığımda sonsuza kadar gidebilir
            }
        })
    }
       const gColorUp = () => {
        setRgb(prev => {
            return {
                ...prev,
                g: prev.g === 255 ? 255 : prev.g + 1 //bu durumda sınırlamış oluyoruz  // r: prev.r + 1 // buttona sınırsız bastığımda sonsuza kadar gidebilir
            }
        })
    }

    const gColorDown = () => {
        setRgb(prev => {
            return {
                ...prev,
                g: prev.g === 0 ? 0 : prev.g - 1 //bu durumda sınırlamış oluyoruz  // r: prev.r + 1 // buttona sınırsız bastığımda sonsuza kadar gidebilir
            }
        })
    }
       const bColorUp = () => {
        setRgb(prev => {
            return {
                ...prev,
                b: prev.b === 255 ? 255 : prev.b + 1 //bu durumda sınırlamış oluyoruz  // r: prev.r + 1 // buttona sınırsız bastığımda sonsuza kadar gidebilir
            }
        })
    }

    const bColorDown = () => {
        setRgb(prev => {
            return {
                ...prev,
                b: prev.b === 0 ? 0 : prev.b - 1 //bu durumda sınırlamış oluyoruz  // r: prev.r + 1 // buttona sınırsız bastığımda sonsuza kadar gidebilir
            }
        })
    }

    const num1 = Math.random();

    return ( 
        <div>
            {num1}
            <div>
                <span>RED{rgb.r}</span>
                <Buttons ColorUp={rColorUp} ColorDown={rColorDown} />
            </div>
            <div>
                <span>GREEN{rgb.g}</span>
                <Buttons ColorUp={gColorUp} ColorDown={gColorDown}/>
            </div>
             <div>
                <span>BLUE{rgb.b}</span>
                <Buttons ColorUp={bColorUp} ColorDown={bColorDown}/>
            </div>
            <Content rgbColor = {rgb}/>
        </div>
    )
}

export default BgColorUi