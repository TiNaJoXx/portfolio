import React from 'react'
import pointIcon from '../assets/point.svg'

import { 
    PythonIcon, 
    ReactIcon, 
    NodeJSIcon, 
    DJangoIcon, 
    HtmlIcon, 
    CssIcon, 
    JSIcon, 
    GitIcon, 
    TensorFlowIcon, 
    KerasIcon,
    OpenCvIcon,
    JupyterIcon,
    PowerBiIcon,
    CeleryIcon,
    MongoIcon,
    SQLIcon,
    JavaIcon,
    FigmaIcon,
    SwiftIcon,
    ExcelIcon,
    iconComponents
} from '../assets/icons/Icons'

import data from '../json/jobs'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import cv from '../assets/cv/CV.pdf'

const AboutMePage = () => {
    const bornDate = new Date(1998, 10, 26);
    const date = new Date();
    const diff = date - bornDate;
    const age_mm = new Date(diff);
    const age = Math.abs(age_mm.getUTCFullYear() - 1970);

    const settings = {
        arrows: false,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 1,
        autoplay: true
    };

    return (
        <div>
            <div className='flex flex-col justify-center py-4 gap-4 px-4 lg:px-20 lg:py-16 lg:flex-row'>
                <div className='flex-grow basis-0 flex flex-col justify-between'>
                    <div className='bg-white/[.3] rounded shadow-xl px-4 py-4 mb-8 flex-grow text-sm lg:text-base lg:px-16 lg:py-16'>
                        <h2 className='text-center mb-10'>Sobre mí</h2>
                        <p className='mb-8'>¡Saludos! Tengo {age} años y soy un <span className='text-[#00B191]'>ingeniero informático</span> apasionado con una sólida formación académica. Me gradué en Ingeniería Informática por la Universidad Carlos III de Madrid (UC3M) y obtuve un máster especializado en <span className='text-[#00B191]'>Inteligencia Artificial</span> de la Universidad Internacional de La Rioja (UNIR).</p>
                        <p className='mb-8'>Decidí dedicarme al desarrollo del software por lo mucho que me gusta <span className='text-[#00B191]'>ayudar a los demás</span> a facilitarles su trabajo y proporcionarles las herramientas necesarias para que sean <span className='text-[#00B191]'>más eficientes</span>.</p>
                        <p className='mb-8'>Me gusta mucho la fotografía y viajar por el mundo para conocer nuevos lugares y culturas diferentes. </p>
                        <div className='flex justify-center'>
                            <a 
                                href={cv}
                                target='_blank'
                                className='flex justify-center items-center gap-2 bg-[#00B191] text-white rounded py-2 px-4'
                            >
                                <div className='w-5'>
                                    {iconComponents['download']}
                                </div>
                                DESCARGAR CV
                            </a>
                        </div>
                    </div>
                    <div className='bg-white/[.3] rounded shadow-xl py-4 flex justify-center items-center px-1 lg:px-5'>
                        <div className='lg:ml-9 w-72 xl:w-96 2xl:w-[500px]'>
                            <Slider {...settings} className='pt-4'>
                                <div>
                                    <PythonIcon class="w-6 lg:w-8" />
                                </div>
                                <div>
                                    <ReactIcon class="w-6 lg:w-8" />
                                </div>
                                <div>
                                    <NodeJSIcon class="w-7 lg:w-10" />
                                </div>
                                <div>
                                    <DJangoIcon class="w-6 lg:w-8" />
                                </div>
                                <div>
                                    <HtmlIcon class="w-6 lg:w-8" />
                                </div>
                                <div>
                                    <CssIcon class="w-6 lg:w-8" />
                                </div>
                                <div>
                                    <JSIcon class="w-6 lg:w-8" />
                                </div>
                                <div>
                                    <GitIcon class="w-6 lg:w-8" />
                                </div>
                                <div>
                                    <TensorFlowIcon class="w-6 lg:w-8" />
                                </div>
                                <div>
                                    <KerasIcon class="w-6 lg:w-8" />
                                </div>
                                <div>
                                    <OpenCvIcon class="w-6 lg:w-8" />
                                </div>
                                <div>
                                    <JupyterIcon class="w-6 lg:w-8" />
                                </div>
                                <div>
                                    <PowerBiIcon class="w-6 lg:w-8" />
                                </div>
                                <div>
                                    <ExcelIcon class="w-6 lg:w-8" />
                                </div>
                                <div>
                                    <CeleryIcon class="w-6 lg:w-8" />
                                </div>
                                <div>
                                    <MongoIcon class="w-6 lg:w-8" />
                                </div>
                                <div>
                                    <SQLIcon class="w-6 lg:w-8" />
                                </div>
                                <div>
                                    <JavaIcon class="w-6 lg:w-8" />
                                </div>
                                <div>
                                    <FigmaIcon class="w-6 lg:w-8" />
                                </div>
                                <div>
                                    <SwiftIcon class="w-6 lg:w-8" />
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
                <div className='flex-grow basis-0 p-0'>
                    <div className='bg-white/[.3] rounded shadow-xl px-4 py-4 lg:px-16 lg:py-16 text-sm lg:text-base'>
                        <h2 className='text-center mb-10'>Experiencia</h2>
                        {
                            data.map(company => (
                                <div key={company.company}>
                                    <div className='flex gap-3 items-center mb-3'>
                                        <div className='rounded-full bg-[#00B191] w-3 h-3 lg:w-5 lg:h-5'></div>
                                        <span className='font-bold'>{company.company}</span>
                                    </div>
                                    {company.jobs.map(job => (
                                        <div key={job.name} className='pl-4 lg:pl-8'>
                                            <div className='flex gap-3 items-center mb-3'>
                                                <img src={pointIcon} className='w-2 h-2 lg:w-3 lg:h-3' />
                                                <div>
                                                    <span>{job.name}</span>
                                                    <p className='text-sm'>({job.period})</p>
                                                </div>
                                            </div>
                                            <ul className='text-sm mb-3 pl-7 lg:pl-9'>
                                                {job.description.map((desc, index) => (
                                                    <li key={index}>{desc}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMePage