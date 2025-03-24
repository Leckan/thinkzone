import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import { socialMedia } from '@/data'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='w-full mb-10 pb-10' id ="contact">
      

      <div className='flex flex-col items-center'>
        <h1 className='heading lg:max-w-[45vw]'>
          Unlock <span className='text-purple'>AI-Powered</span> growth for your business
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">Reach out to us today and let&apos;s discuss how we can help you achieve your goals </p>
        <Link href="mailto:info@thinkzonellc.com">
          <MagicButton title="Let's get in touch"
          icon={<FaLocationArrow />} position='right'
          />
        </Link>
      </div>
      <div className='flex flex-col md:flex-row items-center mt-16 justify-between'>
        <p className='md:text-base text-sm md:font-normal font-light'>Copyright © 2025 Think Zone LLC</p>

        <div className='flex items-center md:gap-3 gap-6'>
            {
              socialMedia.map((profile) => (
                <div className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300' key={profile.id}>
                <Link href={profile.link} key={profile.id}>
                  <Image src={profile.img} alt={profile.name} width={20} height={20} />
                </Link>
                </div>
              ))
            }
        </div>
      </div>
    </footer>
  )
}

export default Footer