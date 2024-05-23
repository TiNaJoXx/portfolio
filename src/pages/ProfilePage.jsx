import React from 'react'
import userImage from '../assets/user.png'
import { TypeAnimation } from 'react-type-animation';
import { iconComponents } from '../assets/icons/Icons';

const ProfilePage = () => {
  return (
    <div className='flex flex-col justify-center items-center h-screen py-4 px-4 lg:px-20 lg:py-20 gap-8 lg:flex-row lg:gap-36'>
        <div className='text-center w-1/2 lg:w-1/3'>
            <img src={userImage} />
        </div>
        <div className='w-full lg:w-2/3'>
            <TypeAnimation
                sequence={[
                    "¡Hola, soy Javier Tinajo!"
                ]}
                wrapper="h1"
                speed={30}
                className='text-center mb-2 text-2xl lg:text-3xl lg:mb-8'
            />
            <p className='py-5 text-sm lg:text-base'>
                ¡Bienvenido a mi portfolio! Soy un apasionado <span className='text-[#00B191]'>ingeniero informático</span> con <span className='text-[#00B191]'>más de 4 años de experiencia en el desarrollo de soluciones tecnológicas innovadoras</span>. Mi enfoque se centra en la resolución de problemas y la creación de aplicaciones eficientes que impulsen el cambio de quien lo necesite.
            </p>
            <div className='flex gap-3'>
                <a href='https://www.linkedin.com/in/javier-tinajo-gallardo-a1111b19a' target='_blank'>
                    <div className='text-[#0a66c2] w-6 lg:w-9'>
                        {iconComponents['linkdn']}
                    </div>
                </a>
                <a href='https://github.com/TiNaJoXx?tab=repositories' target='_blank'>
                    <div className='text-black w-6 lg:w-9'>
                        {iconComponents['github']}
                    </div>
                </a>
            </div>
        </div>
    </div>
  )
}

export default ProfilePage