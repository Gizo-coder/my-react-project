   // components
       // -fontsize
       // -fontuı
       // -button+ - buttons
       // -content - içerik bulunacak

        //random bg color üretme
        //-- rgb (255, 255, 30)
        // 3 random değer 0 - 255
        // +- button gruplar
        //içerik alanı

        // SliderUi
        //-Button 
import Zar from './components/Zar/ZarUi'
import BgColor from './components/BgColor/BgColorUi'
import FontSize from './components/FontSize/FontUi'
import HesapMakinesi from './components/HesapMakinesi/HesapUi'
import Slider from './components/Slider/SliderUi'
import TasKagit from './components/TasKagit/TasKagitUi'

function App() {

  return (
    <>
    
      <div>
        <BgColor/>
      </div>
      <div>
        <FontSize/>
      </div>
      <div>
        <HesapMakinesi/>
      </div>
      <div>
        <Slider/>
      </div>
      <div>
        <TasKagit/>
      </div>
      <div>
        <Zar/>
      </div>
    </>
  )
}

export default App

