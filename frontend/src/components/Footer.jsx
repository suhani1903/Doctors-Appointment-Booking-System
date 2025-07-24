import React from 'react'
import { assets } from '../assests/assets'

const Footer = () => {
  return (
    <div className='md:mx-20'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            <div>
                <img className='mb-5 w-40'  src={assets.logo} alt="" />
                <p className='w-full md:w-2/3 text-gray-600 leading-6'>We’re here to make healthcare more accessible and convenient for everyone.
                Book appointments with verified doctors in just a few clicks.
                Stay healthy, stay connected — anytime, anywhere.</p>
            </div>



            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>HOME</li>
                    <li>ABOUT US</li>
                    <li>CONTACT US</li>
                    <li>PRIVACY POLICY</li>
                </ul>
            </div>



            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>+91-8834567895</li>
                    <li>suhanipatle1903@gmail.com</li>
                </ul>
            </div>
        </div>
        <div>
            <hr />
            <p className='py-5 text-sm text-center '>Copyright 2025@Prescripto-All Right Reserved</p>
        </div>
    </div>
  )
}

export default Footer