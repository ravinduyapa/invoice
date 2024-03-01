import React from 'react'

const Footer = () => {
  return (
    <>

{/* Footer Details of Invoice Form */}

<footer className='footer border-t-2 border-gray-300'>
  <ul className="mt-5 flex flex-wrap items-center justify-center">
    <li className="font-bold bg-gray-100" style={{ marginRight: '20px' }}>HelaScript</li>
    <li className="font-bold bg-gray-100" style={{ marginRight: '20px' }}>Colombo, Sri Lanka</li>
    <li className="font-bold bg-gray-100" style={{ marginRight: '20px' }}>hello@helascript.com</li>
    <li className="font-bold bg-gray-100" style={{ marginRight: '20px' }}>0715201977</li>
    <li className="font-bold bg-red-100" style={{ marginRight: '20px' }} ><a href='http://helascript.com'>Visit Our Website</a></li>
  </ul>
</footer>


    </>
  )
}

export default Footer