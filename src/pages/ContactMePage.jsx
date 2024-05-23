import React from 'react'
import { iconComponents } from '../assets/icons/Icons'

const ContactMePage = () => {
  return (
    <div className='py-5 px-4 lg:px-20 text-sm lg:text-base'>
        <h2 className='text-center mb-5'>Contáctame</h2>
        <div className='mb-2'>
            Si te ha gustado mi trabajo y te gustaría que te ayudara a ti también, no dudes en contactar conmigo.
        </div>
        <div className='mb-2'>
            Estaré encantado de escucharte y cumplir con lo que necesites.
        </div>
        <div className='mb-4'>
            Gracias!
        </div>
        <h3 className='mb-2'>Email de contacto</h3>
        <div className='mb-4'>
            javiertinajo1998@gmail.com
        </div>
        <div className='mb-2'>
            O también puedes contactarme por mis redes sociales:
        </div>
        <a href='https://www.linkedin.com/in/javier-tinajo-gallardo-a1111b19a' target='_blank'>
            <div className='text-[#0a66c2] w-6 lg:w-8'>
                {iconComponents['linkdn']}
            </div>
        </a>
    </div>
  )
}

export default ContactMePage