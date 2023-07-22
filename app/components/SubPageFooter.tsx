import React from 'react'
import Link from 'next/link'

function SubPageFooter() {
  return (
    <div>
        <div className='bg-black text-white text-2xl flex flex-row p-12 space-x-96'>
            <div className='space-x-2'>
                <Link href=""><p>HOME</p></Link>
                <Link href=""><p>NOTICE BOARD</p></Link>
                <Link href=""><p>IN THE NEWS</p></Link>
                <Link href=""><p>PUBLICATIONS</p></Link>
                <Link href=""><p>SUPPORT US</p></Link>
            </div>
            <div className='text-right'>
                <div>
                <p>CONTACT US</p>
                <p>EMAIL - pfc@gmail.com</p>
                <p>PHONE - 1234567890</p>
                </div>
                <div>CONNECT WITH US</div>
                <p>icons</p>
            </div>
        </div>
        <div className='bg-black text-white flex justify-center text-xl'>© Copyright - Kolkata People’s Film Festival</div>
    </div>
  )
}

export default SubPageFooter