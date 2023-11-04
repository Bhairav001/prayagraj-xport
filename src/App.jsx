import { GlobalStyle } from './styles/GlobalStyle'
import Quote from './sections/Quote'
import PhoneModel from './sections/PhoneModel'
import HeroSection from './sections/HeroSection'
import DesignSection from './sections/DesignSection'
import DisplaySection from './sections/DisplaySection'
import ProcessorSection from './sections/ProcessorSection'
import BatterySection from './sections/BatterySection'
import { ColorContextProvider } from './context/ColorContext'
import ColorSection from './sections/ColorSection'
import PricingSection from './sections/PricingSection'
import CameraSection from './sections/CameraSection'


function App() {

  return (
    <>
      <GlobalStyle/>
      <PhoneModel/>
      <HeroSection/>
      <DesignSection/>
      <DisplaySection/>
      <Quote/>
      <ProcessorSection/>
      <BatterySection/>
      <ColorContextProvider>
        <ColorSection />
        <CameraSection />
        <PricingSection />
      </ColorContextProvider>
    </>
  )
}

export default App
