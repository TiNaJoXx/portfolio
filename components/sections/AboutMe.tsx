"use client";

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LinearProgress from '@mui/material/LinearProgress';

function AboutMe() {
    return (
        <Box sx={{ width: "100%", marginY: 4 }}>
            <Grid container spacing={2} sx={{ paddingY: 2, borderBottom: 1, borderTop: 1, borderColor: "#efefef" }}>
                <Grid sx={{ textAlign: 'center' }} size={4}>
                    <h4 className='text-3xl font-black text-slate-900 mb-1'>
                        5+
                    </h4>
                    <p className="text-sm text-slate-500">Años de Experiencia</p>
                </Grid>
                <Grid sx={{ textAlign: 'center' }} size={4}>
                    <h4 className='text-3xl font-black text-slate-900 mb-1'>
                        15+
                    </h4>
                    <p className="text-sm text-slate-500">Proyectos Completados</p>
                </Grid>
                <Grid sx={{ textAlign: 'center' }} size={4}>
                    <h4 className='text-3xl font-black text-slate-900 mb-1'>
                        100%
                    </h4>
                    <p className="text-sm text-slate-500">Clientes Satisfechos</p>
                </Grid>
            </Grid>
            <Grid container spacing={10} sx={{ marginY: 8 }}>
                <Grid size={7}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <div className="bg-blue-100 p-2 rounded-lg text-[#3b82f6]">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                <path fillRule="evenodd" d="M7.5 5.25a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0 1 12 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 0 1 7.5 5.455V5.25Zm7.5 0v.09a49.488 49.488 0 0 0-6 0v-.09a1.5 1.5 0 0 1 1.5-1.5h3a1.5 1.5 0 0 1 1.5 1.5Zm-3 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
                                <path d="M3 18.4v-2.796a4.3 4.3 0 0 0 .713.31A26.226 26.226 0 0 0 12 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 0 1-6.477-.427C4.047 21.128 3 19.852 3 18.4Z" />
                            </svg>
                        </div>
                        <h4 className='text-xl font-black text-slate-900 mb-1'>Experiencia Laboral</h4>
                    </Box>
                    <Grid container sx={{ paddingY: 4 }}>
                        <Grid size={1} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <div className='w-3 h-3 rounded-full bg-[#3b82f6]'></div>
                        </Grid>
                        <Grid size={11} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <h5 className='text-lg'>Data Scientist / Full Stack Developer</h5>
                            <div className="bg-blue-100 p-2 rounded-lg text-[#3b82f6]">
                                sep. 2020 - Presente
                            </div>
                        </Grid>
                        <Grid size={1} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <div className='w-0.5 h-full bg-[#efefef]'></div>
                        </Grid>
                        <Grid size={11} sx={{ marginBottom: 6 }}>
                            <p className='text-lg mb-3'>Grupo PROEDUCA</p>
                            <p>Desarrollo de soluciones tecnológicas orientadas a la obtención, procesamiento y explotación de grandes volúmenes de datos, mediante la creación de scrapers y la aplicación de técnicas de Big Data. Diseño e implementación de sistemas basados en inteligencia artificial. Desarrollo full stack de aplicaciones, abarcando el diseño de arquitecturas y bases de datos escalables. Experiencia en procesos ETL para la integración, transformación y procesamiento de datos, optimizando la gestión de flujos de información complejos. Administración de servidores, despliegue de sistemas en entornos de producción y automatización de tareas mediante el uso de procesos en segundo plano.</p>
                        </Grid>
                        <Grid size={1} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <div className='w-3 h-3 rounded-full bg-[#efefef]'></div>
                        </Grid>
                        <Grid size={11} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <h5 className='text-lg'>Analista de datos en proyecto de investigación</h5>
                            <div className="bg-gray-100 p-2 rounded-lg text-gray-600">
                                oct. 2023 - dic. 2023
                            </div>
                        </Grid>
                        <Grid size={1} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <div className='w-0.5 h-full bg-[#efefef]'></div>
                        </Grid>
                        <Grid size={11} sx={{ marginBottom: 6 }}>
                            <p className='text-lg mb-3'>Universidad Internacional de la Rioja</p>
                            <p>Compresión y análisis de un modelo de datos basados en encuestas lanzadas en destinos enoturísticos de España para conocer la opinión de los visitantes sobre el enoturismo. Y creación de un dashboard en Power BI que reflejen los KPIs establecidos por el cliente.</p>
                        </Grid>
                        <Grid size={1} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <div className='w-3 h-3 rounded-full bg-[#efefef]'></div>
                        </Grid>
                        <Grid size={11} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <h5 className='text-lg'>Desarrollador iOS</h5>
                            <div className="bg-gray-100 p-2 rounded-lg text-gray-600">
                                jun. 2019 - sep. 2020
                            </div>
                        </Grid>
                        <Grid size={1} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <div className='w-0.5 h-full bg-[#efefef]'></div>
                        </Grid>
                        <Grid size={11} sx={{ marginBottom: 6 }}>
                            <p className='text-lg mb-3'>Radmas Technologies S.L</p>
                            <p>Desarrollo y mantenimiento de aplicaciones móviles para iOS, aplicando principios de Clean Architecture y SOLID para garantizar soluciones escalables, mantenibles y de alta calidad. Experiencia en la gestión del ciclo completo de publicación, incluyendo la subida y despliegue de aplicaciones en la App Store.</p>
                        </Grid>
                    </Grid>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <div className="bg-blue-100 p-2 rounded-lg text-[#3b82f6]">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                <path d="M11.7 2.805a.75.75 0 0 1 .6 0A60.65 60.65 0 0 1 22.83 8.72a.75.75 0 0 1-.231 1.337 49.948 49.948 0 0 0-9.902 3.912l-.003.002c-.114.06-.227.119-.34.18a.75.75 0 0 1-.707 0A50.88 50.88 0 0 0 7.5 12.173v-.224c0-.131.067-.248.172-.311a54.615 54.615 0 0 1 4.653-2.52.75.75 0 0 0-.65-1.352 56.123 56.123 0 0 0-4.78 2.589 1.858 1.858 0 0 0-.859 1.228 49.803 49.803 0 0 0-4.634-1.527.75.75 0 0 1-.231-1.337A60.653 60.653 0 0 1 11.7 2.805Z" />
                                <path d="M13.06 15.473a48.45 48.45 0 0 1 7.666-3.282c.134 1.414.22 2.843.255 4.284a.75.75 0 0 1-.46.711 47.87 47.87 0 0 0-8.105 4.342.75.75 0 0 1-.832 0 47.87 47.87 0 0 0-8.104-4.342.75.75 0 0 1-.461-.71c.035-1.442.121-2.87.255-4.286.921.304 1.83.634 2.726.99v1.27a1.5 1.5 0 0 0-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.66a6.727 6.727 0 0 0 .551-1.607 1.5 1.5 0 0 0 .14-2.67v-.645a48.549 48.549 0 0 1 3.44 1.667 2.25 2.25 0 0 0 2.12 0Z" />
                                <path d="M4.462 19.462c.42-.419.753-.89 1-1.395.453.214.902.435 1.347.662a6.742 6.742 0 0 1-1.286 1.794.75.75 0 0 1-1.06-1.06Z" />
                            </svg>
                        </div>
                        <h4 className='text-xl font-black text-slate-900 mb-1'>Educación</h4>
                    </Box>
                    <Grid container sx={{ paddingY: 4 }}>
                        <Grid size={1} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'start' }}>
                            <div className='w-3 h-3 rounded-full bg-[#efefef] mt-2'></div>
                        </Grid>
                        <Grid size={11}>
                            <h5 className='text-lg'>Máster Universitario en Inteligencia Artificial</h5>
                        </Grid>
                        <Grid size={1} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <div className='w-0.5 h-full bg-[#efefef]'></div>
                        </Grid>
                        <Grid size={11} sx={{ marginBottom: 4 }}>
                            <p className='mb-2'>Universidad Internacional de la Rioja</p>
                            <p className='text-[#979797] text-sm'>2021 - 2022</p>
                        </Grid>
                        <Grid size={1} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'start' }}>
                            <div className='w-3 h-3 rounded-full bg-[#efefef] mt-2'></div>
                        </Grid>
                        <Grid size={11}>
                            <h5 className='text-lg'>Grado en Ingeniería Informática</h5>
                        </Grid>
                        <Grid size={1} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <div className='w-0.5 h-full bg-[#efefef]'></div>
                        </Grid>
                        <Grid size={11} sx={{ marginBottom: 4 }}>
                            <p className='mb-2'>Universidad Carlos III de Madrid</p>
                            <p className='text-[#979797] text-sm'>2016 - 2020</p>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid size={5}>
                    <Box sx={{ padding: 2, borderRadius: 2, border: 1, borderColor: "#efefef", marginY: 2 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, marginBottom: 2 }}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#3b82f6" className="size-8 rotate-90">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
                            </svg>
                            <h4 className='text-xl font-black text-slate-900 mb-1'>Tecnologías</h4>
                        </Box>
                        <h5 className='text-md text-slate-600 ml-2'>Frontend</h5>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flexWrap: 'wrap', margin: 2 }}>
                            <div className="bg-gray-100 p-2 rounded-lg text-gray-600 text-sm">React</div>
                            <div className="bg-gray-100 p-2 rounded-lg text-gray-600 text-sm">TypeScript</div>
                            <div className="bg-gray-100 p-2 rounded-lg text-gray-600 text-sm">JavaScript</div>
                            <div className="bg-gray-100 p-2 rounded-lg text-gray-600 text-sm">Vite.js</div>
                            <div className="bg-gray-100 p-2 rounded-lg text-gray-600 text-sm">Next.js</div>
                            <div className="bg-gray-100 p-2 rounded-lg text-gray-600 text-sm">Tailwind CSS</div>
                        </Box>
                        <h5 className='text-md text-slate-600 ml-2'>Backend</h5>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flexWrap: 'wrap', margin: 2 }}>
                            <div className="bg-gray-100 p-2 rounded-lg text-gray-600 text-sm">Python</div>
                            <div className="bg-gray-100 p-2 rounded-lg text-gray-600 text-sm">Node.js</div>
                            <div className="bg-gray-100 p-2 rounded-lg text-gray-600 text-sm">MySQL</div>
                            <div className="bg-gray-100 p-2 rounded-lg text-gray-600 text-sm">DJango</div>
                            <div className="bg-gray-100 p-2 rounded-lg text-gray-600 text-sm">MongoDB</div>
                        </Box>
                        <h5 className='text-md text-slate-600 ml-2'>AI</h5>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flexWrap: 'wrap', margin: 2 }}>
                            <div className="bg-gray-100 p-2 rounded-lg text-gray-600 text-sm">TensorFlow</div>
                            <div className="bg-gray-100 p-2 rounded-lg text-gray-600 text-sm">Keras</div>
                            <div className="bg-gray-100 p-2 rounded-lg text-gray-600 text-sm">OpenCV</div>
                            <div className="bg-gray-100 p-2 rounded-lg text-gray-600 text-sm">LangChain</div>
                        </Box>
                        <h5 className='text-md text-slate-600 ml-2'>DevOps y herramientas</h5>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flexWrap: 'wrap', margin: 2 }}>
                            <div className="bg-gray-100 p-2 rounded-lg text-gray-600 text-sm">Docker</div>
                            <div className="bg-gray-100 p-2 rounded-lg text-gray-600 text-sm">AWS</div>
                            <div className="bg-gray-100 p-2 rounded-lg text-gray-600 text-sm">Git</div>
                            <div className="bg-gray-100 p-2 rounded-lg text-gray-600 text-sm">Studio 3T</div>
                            <div className="bg-gray-100 p-2 rounded-lg text-gray-600 text-sm">DBeaver</div>
                            <div className="bg-gray-100 p-2 rounded-lg text-gray-600 text-sm">Apache</div>
                            <div className="bg-gray-100 p-2 rounded-lg text-gray-600 text-sm">CI/CD</div>
                            <div className="bg-gray-100 p-2 rounded-lg text-gray-600 text-sm">Postman</div>
                            <div className="bg-gray-100 p-2 rounded-lg text-gray-600 text-sm">Figma</div>
                        </Box>
                    </Box>
                    <Box sx={{ padding: 2, borderRadius: 2, border: 1, borderColor: "#efefef", marginY: 2 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, marginBottom: 2 }}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#3b82f6" className="size-6">
                                <path fillRule="evenodd" d="M8.25 6.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM15.75 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM2.25 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM6.31 15.117A6.745 6.745 0 0 1 12 12a6.745 6.745 0 0 1 6.709 7.498.75.75 0 0 1-.372.568A12.696 12.696 0 0 1 12 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 0 1-.372-.568 6.787 6.787 0 0 1 1.019-4.38Z" clipRule="evenodd" />
                                <path d="M5.082 14.254a8.287 8.287 0 0 0-1.308 5.135 9.687 9.687 0 0 1-1.764-.44l-.115-.04a.563.563 0 0 1-.373-.487l-.01-.121a3.75 3.75 0 0 1 3.57-4.047ZM20.226 19.389a8.287 8.287 0 0 0-1.308-5.135 3.75 3.75 0 0 1 3.57 4.047l-.01.121a.563.563 0 0 1-.373.486l-.115.04c-.567.2-1.156.349-1.764.441Z" />
                            </svg>
                            <h4 className='text-xl font-black text-slate-900 mb-1'>Habiliades Blandas</h4>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flexWrap: 'wrap', margin: 2 }}>
                            <div className="bg-gray-100 p-2 rounded-lg text-gray-600 text-sm">Comunicación Efectiva</div>
                            <div className="bg-gray-100 p-2 rounded-lg text-gray-600 text-sm">Resolución de Problemas</div>
                            <div className="bg-gray-100 p-2 rounded-lg text-gray-600 text-sm">Metodologías Ágiles</div>
                            <div className="bg-gray-100 p-2 rounded-lg text-gray-600 text-sm">Proactividad</div>
                            <div className="bg-gray-100 p-2 rounded-lg text-gray-600 text-sm">Rápido Aprendizaje</div>
                            <div className="bg-gray-100 p-2 rounded-lg text-gray-600 text-sm">Amabilidad</div>
                            <div className="bg-gray-100 p-2 rounded-lg text-gray-600 text-sm">Empatía</div>
                        </Box>
                    </Box>
                    <Box sx={{ padding: 2, borderRadius: 2, border: 1, borderColor: "#efefef", marginY: 2 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, marginBottom: 2 }}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#3b82f6" className="size-6">
                                <path fillRule="evenodd" d="M9 2.25a.75.75 0 0 1 .75.75v1.506a49.384 49.384 0 0 1 5.343.371.75.75 0 1 1-.186 1.489c-.66-.083-1.323-.151-1.99-.206a18.67 18.67 0 0 1-2.97 6.323c.318.384.65.753 1 1.107a.75.75 0 0 1-1.07 1.052A18.902 18.902 0 0 1 9 13.687a18.823 18.823 0 0 1-5.656 4.482.75.75 0 0 1-.688-1.333 17.323 17.323 0 0 0 5.396-4.353A18.72 18.72 0 0 1 5.89 8.598a.75.75 0 0 1 1.388-.568A17.21 17.21 0 0 0 9 11.224a17.168 17.168 0 0 0 2.391-5.165 48.04 48.04 0 0 0-8.298.307.75.75 0 0 1-.186-1.489 49.159 49.159 0 0 1 5.343-.371V3A.75.75 0 0 1 9 2.25ZM15.75 9a.75.75 0 0 1 .68.433l5.25 11.25a.75.75 0 1 1-1.36.634l-1.198-2.567h-6.744l-1.198 2.567a.75.75 0 0 1-1.36-.634l5.25-11.25A.75.75 0 0 1 15.75 9Zm-2.672 8.25h5.344l-2.672-5.726-2.672 5.726Z" clipRule="evenodd" />
                            </svg>
                            <h4 className='text-xl font-black text-slate-900 mb-1'>Idiomas</h4>
                        </Box>
                        <Grid container>
                            <Grid size={6} sx={{ fontSize: 14 }}>Español</Grid>
                            <Grid size={6} sx={{ fontSize: 14, textAlign: 'right', color: "#979797" }}>Nativo</Grid>
                            <Grid size={12} sx={{ marginTop: 1, marginBottom: 2 }}>
                                <LinearProgress variant="determinate" value={100} sx={{ borderRadius: 100, height: 6 }} />
                            </Grid>
                            <Grid size={6} sx={{ fontSize: 14 }}>Inglés</Grid>
                            <Grid size={6} sx={{ fontSize: 14, textAlign: 'right', color: "#979797" }}>Intermedio</Grid>
                            <Grid size={12} sx={{ marginTop: 1, marginBottom: 2 }}>
                                <LinearProgress variant="determinate" value={50} sx={{ borderRadius: 100, height: 6 }} />
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default AboutMe