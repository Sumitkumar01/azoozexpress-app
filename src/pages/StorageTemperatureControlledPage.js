import React from 'react'
import STCHeader from '../features/storage-temperature-controlled/STCHeader'
import STCTopSection from '../features/storage-temperature-controlled/STCTopSection'
import STCSecondSection from '../features/storage-temperature-controlled/STCSecondSection'
import STCThredSection from '../features/storage-temperature-controlled/STCThredSection'
import STCTestimonials from '../features/storage-temperature-controlled/STCTestimonials'
import Footer from '../features/footer/Footer'
import WhatsApp from '../features/chat/WhatsApp'

function StorageTemperatureControlledPage() {
  return (
    <>
    <STCHeader/>
    <STCTopSection/>
    <STCSecondSection/>
    <STCThredSection/>
    <STCTestimonials/>
    <Footer/>
    <WhatsApp/>
    </>
  )
}

export default StorageTemperatureControlledPage