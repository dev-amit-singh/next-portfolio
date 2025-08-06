import React from 'react'
import ContactForm from './ContactForm'
import ContactInfo from './ContactInfo'

const Contact = () => {
  return (
    <div id='contacts' className='pt-16 pb-16 bg-[#1e0e29]'>
        <div className='grid grid-cols-1 xl:grid-cols-2 w-[90%] sm:w-[80%] mx-auto items-center gap-10 mt-10'>
            {/* contact form */}
            <div>
                <ContactForm/>
            </div>

            {/* contact info */}
            <div className='xl:mx-auto'>
                <ContactInfo/>
            </div>
        </div>
    </div>
  )
}

export default Contact