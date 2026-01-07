"use client";

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import Image from "next/image";

import userImage from "@/public/user.png"

function Welcome() {
    const theme = useTheme();
    const isMdUp = useMediaQuery(theme.breakpoints.up('md'));

    const handleScrollTo = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const headerOffset = 40; // Altura total del AppBar + SubHeader en px
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth',
            });
        }
    };

    return (
        <Box sx={{position: "relative", width: "100%", marginBottom: 4}}>
            {
                isMdUp && (
                    <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[500px] h-[500px] bg-blue-100/50 dark:bg-primary/10 rounded-full blur-3xl pointer-events-none mix-blend-multiply dark:mix-blend-normal"></div>
                )
            }
            <Grid container spacing={1}>
                {
                    !isMdUp && (
                        <Grid size={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <div className="order-1 lg:order-2 flex justify-center lg:justify-end relative">
                                <div className="relative w-72 h-72 sm:w-96 sm:h-96 lg:w-[480px] lg:h-[480px]">
                                    <div className="absolute inset-0 rounded-full border-2 border-[#3b82f6]/20 animate-[spin_10s_linear_infinite]"></div>
                                    <div className="absolute inset-4 rounded-full border border-dashed border-slate-300 animate-[spin_15s_linear_infinite_reverse]"></div>
                                    <div className="absolute inset-4 rounded-full overflow-hidden bg-slate-100 shadow-2xl shadow-blue-500/10 border-4 border-white">
                                        <Image
                                            src={userImage}
                                            alt="Javier Tinajo"
                                            loading="eager"
                                        />
                                    </div>
                                    <div className="absolute -top-8 -left-8 sm:-left-10 bg-white p-3 rounded-xl shadow-xl border border-gray-100 flex items-center gap-3 animate-bounce">
                                        <div className="bg-green-100 p-2 rounded-lg text-green-600">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
                                                <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-xs text-slate-500 font-medium">Proyectos</p>
                                            <p className="text-xs font-bold text-slate-900">+15 Completados</p>
                                        </div>
                                    </div>
                                    <div className="absolute bottom-0 left-4 sm:-right-1 bg-white p-3 rounded-xl shadow-xl border border-gray-100 flex items-center gap-3 animate-bounce">
                                        <div className="bg-blue-100 p-2 rounded-lg text-[#3b82f6]">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
                                                <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-xs text-slate-500 font-medium">Experiencia</p>
                                            <p className="text-xs font-bold text-slate-900">+5 Años</p>
                                        </div>
                                    </div>
                                    <div className="absolute bottom-20 -right-4 sm:-right-34 bg-white p-3 rounded-xl shadow-xl border border-gray-100 flex items-center gap-3 animate-bounce">
                                        <div className="bg-red-100 p-2 rounded-lg text-red-600">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
                                                <path d="M11.7 2.805a.75.75 0 0 1 .6 0A60.65 60.65 0 0 1 22.83 8.72a.75.75 0 0 1-.231 1.337 49.948 49.948 0 0 0-9.902 3.912l-.003.002c-.114.06-.227.119-.34.18a.75.75 0 0 1-.707 0A50.88 50.88 0 0 0 7.5 12.173v-.224c0-.131.067-.248.172-.311a54.615 54.615 0 0 1 4.653-2.52.75.75 0 0 0-.65-1.352 56.123 56.123 0 0 0-4.78 2.589 1.858 1.858 0 0 0-.859 1.228 49.803 49.803 0 0 0-4.634-1.527.75.75 0 0 1-.231-1.337A60.653 60.653 0 0 1 11.7 2.805Z" />
                                                <path d="M13.06 15.473a48.45 48.45 0 0 1 7.666-3.282c.134 1.414.22 2.843.255 4.284a.75.75 0 0 1-.46.711 47.87 47.87 0 0 0-8.105 4.342.75.75 0 0 1-.832 0 47.87 47.87 0 0 0-8.104-4.342.75.75 0 0 1-.461-.71c.035-1.442.121-2.87.255-4.286.921.304 1.83.634 2.726.99v1.27a1.5 1.5 0 0 0-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.66a6.727 6.727 0 0 0 .551-1.607 1.5 1.5 0 0 0 .14-2.67v-.645a48.549 48.549 0 0 1 3.44 1.667 2.25 2.25 0 0 0 2.12 0Z" />
                                                <path d="M4.462 19.462c.42-.419.753-.89 1-1.395.453.214.902.435 1.347.662a6.742 6.742 0 0 1-1.286 1.794.75.75 0 0 1-1.06-1.06Z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-xs text-slate-500 font-medium">Máster Oficial</p>
                                            <p className="text-xs font-bold text-slate-900">Inteligencia Artificial</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Grid>
                    )
                }
                <Grid size={isMdUp ? 6 : 12}>
                    <h1 className="text-4xl sm:text-5xl lg:text-7xl leading-[1.1]">
                        Hola, soy <br className="hidden lg:block"/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3b82f6] to-indigo-500">Javier Tinajo</span>
                    </h1>
                    <h2 className="mt-4 text-xl sm:text-2xl text-slate-600">
                        Data Scientist / AI Engineer &amp; <br className="hidden sm:block"/>Full-Stack Developer
                    </h2>
                    <p className="mt-4 sm:text-lg text-slate-500 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                        Especializado en construir aplicaciones web escalables con la tecnología más moderna y principios de diseño moderno. Transformo ideas complejas en experiencias digitales elegantes y funcionales.
                    </p>
                    <Box sx={{ display: 'flex', gap: 2, marginY: 4, flexDirection: isMdUp ? "row" : "column" }}>
                        <Button sx={{ 
                            textTransform: 'none', 
                            backgroundColor: "#3b82f6", 
                            color: 'white', 
                            paddingX: 2,
                            svg: {
                                transition: 'transform 0.3s ease',
                            },
                            '&:hover svg': {
                                transform: 'translateX(4px)',
                            },
                        }} onClick={() => { handleScrollTo("projects")}}>
                            Ver Proyectos
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 ml-4">
                                <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                            </svg>
                        </Button>
                        <Button
                            component="a"
                            href="/cv/CV.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{ 
                                textTransform: 'none', 
                                paddingX: 2
                            }}
                        >
                            Descargar CV
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 ml-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                            </svg>
                        </Button>
                    </Box>
                    <Box className="pt-8 border-t border-gray-100 mt-4">
                        <p className="text-sm font-semibold text-slate-500 mb-4 uppercase">Tech Stack Principal</p>
                        <Box className="flex flex-wrap justify-center lg:justify-start gap-6 text-slate-500">
                            <svg viewBox="0 0 512 512" className="size-6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M420.967 175.647C415.655 173.819 410.152 172.089 404.485 170.453C405.416 166.652 406.271 162.9 407.031 159.212C419.508 98.6498 411.35 49.8605 383.495 33.797C356.785 18.3942 313.103 34.4541 268.986 72.8476C264.744 76.5394 260.489 80.4482 256.237 84.5448C253.404 81.8344 250.575 79.2152 247.753 76.7099C201.517 35.6571 155.173 18.3568 127.345 34.4668C100.661 49.9143 92.7584 95.7808 103.989 153.176C105.074 158.72 106.341 164.381 107.775 170.137C101.216 171.999 94.8837 173.984 88.825 176.096C34.6187 194.994 0 224.613 0 255.336C0 287.067 37.1632 318.893 93.6233 338.191C98.0789 339.714 102.702 341.154 107.467 342.521C105.92 348.746 104.575 354.847 103.446 360.797C92.7375 417.196 101.1 461.979 127.713 477.329C155.203 493.181 201.337 476.887 246.26 437.618C249.811 434.514 253.374 431.223 256.944 427.772C261.571 432.228 266.191 436.445 270.786 440.4C314.299 477.845 357.276 492.965 383.865 477.572C411.326 461.675 420.251 413.567 408.664 355.036C407.779 350.566 406.75 345.999 405.593 341.351C408.833 340.393 412.014 339.405 415.115 338.377C473.811 318.929 512 287.49 512 255.336C512 224.502 476.265 194.684 420.967 175.647ZM408.236 317.615C405.436 318.542 402.564 319.438 399.637 320.306C393.157 299.793 384.411 277.979 373.709 255.443C383.922 233.443 392.329 211.908 398.628 191.528C403.865 193.043 408.949 194.642 413.847 196.329C461.227 212.639 490.128 236.754 490.128 255.336C490.128 275.129 458.916 300.823 408.236 317.615ZM387.208 359.284C392.331 385.166 393.063 408.565 389.669 426.858C386.62 443.295 380.487 454.254 372.905 458.643C356.769 467.983 322.264 455.843 285.05 423.82C280.784 420.149 276.487 416.229 272.177 412.081C286.603 396.302 301.022 377.959 315.094 357.588C339.845 355.392 363.23 351.801 384.436 346.899C385.481 351.112 386.408 355.244 387.208 359.284ZM174.552 457.029C158.788 462.597 146.232 462.756 138.642 458.38C122.492 449.065 115.778 413.109 124.936 364.876C125.985 359.352 127.234 353.678 128.673 347.878C149.647 352.516 172.86 355.854 197.671 357.865C211.838 377.799 226.673 396.122 241.622 412.165C238.356 415.319 235.103 418.321 231.867 421.149C212.003 438.513 192.096 450.833 174.552 457.029ZM100.697 317.494C75.7316 308.961 55.1141 297.871 40.9817 285.769C28.2829 274.894 21.8716 264.097 21.8716 255.336C21.8716 236.692 49.6669 212.912 96.0247 196.75C101.65 194.788 107.538 192.94 113.648 191.204C120.055 212.045 128.46 233.834 138.602 255.868C128.329 278.229 119.805 300.366 113.335 321.451C108.979 320.199 104.758 318.881 100.697 317.494ZM125.454 148.976C115.832 99.8008 122.222 62.7051 138.303 53.3965C155.432 43.4801 193.309 57.6188 233.23 93.0659C235.782 95.3315 238.343 97.7029 240.913 100.156C226.037 116.13 211.337 134.315 197.296 154.131C173.216 156.363 150.166 159.948 128.974 164.749C127.641 159.39 126.461 154.124 125.454 148.976ZM346.308 203.51C341.242 194.759 336.041 186.215 330.738 177.905C347.074 179.97 362.726 182.711 377.424 186.066C373.011 200.208 367.511 214.995 361.037 230.153C356.393 221.336 351.481 212.446 346.308 203.51ZM256.244 115.788C266.333 126.718 276.436 138.921 286.374 152.161C276.36 151.688 266.222 151.442 256 151.442C245.875 151.442 235.812 151.682 225.86 152.147C235.807 139.03 245.998 126.843 256.244 115.788ZM165.604 203.661C160.543 212.437 155.722 221.279 151.151 230.137C144.781 215.031 139.332 200.177 134.881 185.834C149.489 182.565 165.067 179.892 181.299 177.866C175.922 186.254 170.678 194.862 165.604 203.661ZM181.767 334.366C164.996 332.495 149.184 329.959 134.58 326.781C139.102 312.182 144.671 297.01 151.175 281.579C155.758 290.431 160.599 299.277 165.69 308.071C170.877 317.031 176.251 325.807 181.767 334.366ZM256.849 396.426C246.483 385.241 236.143 372.869 226.044 359.56C235.847 359.945 245.842 360.142 256 360.142C266.436 360.142 276.752 359.906 286.907 359.454C276.937 373.003 266.87 385.394 256.849 396.426ZM361.246 280.793C368.089 296.391 373.858 311.483 378.438 325.833C363.593 329.219 347.565 331.947 330.678 333.974C335.993 325.551 341.24 316.861 346.395 307.921C351.611 298.877 356.563 289.819 361.246 280.793ZM327.449 296.994C319.446 310.871 311.229 324.119 302.887 336.623C287.694 337.71 271.998 338.269 256 338.269C240.067 338.269 224.568 337.774 209.644 336.805C200.966 324.137 192.571 310.85 184.618 297.113C176.687 283.414 169.389 269.599 162.774 255.861C169.387 242.091 176.668 228.261 184.554 214.586L184.552 214.588C192.459 200.877 200.78 187.655 209.378 175.066C224.605 173.915 240.219 173.314 255.999 173.314C271.85 173.314 287.485 173.919 302.708 175.08C311.174 187.578 319.439 200.757 327.377 214.47C335.405 228.337 342.78 242.076 349.449 255.55C342.8 269.256 335.442 283.133 327.449 296.994ZM372.569 52.7458C389.715 62.6331 396.382 102.508 385.61 154.797C384.923 158.134 384.149 161.532 383.309 164.976C362.067 160.075 339.001 156.428 314.851 154.162C300.782 134.128 286.203 115.914 271.57 100.146C275.504 96.3614 279.433 92.7524 283.345 89.3467C321.144 56.4514 356.473 43.4637 372.569 52.7458ZM256 209.616C281.25 209.616 301.72 230.085 301.72 255.336C301.72 280.586 281.25 301.056 256 301.056C230.75 301.056 210.28 280.586 210.28 255.336C210.28 230.085 230.75 209.616 256 209.616Z" fill="#00D8FF"/>
                            </svg>
                            <svg viewBox="0 0 512 512" className="size-6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M253.832 1.14453C124.167 1.14454 132.264 57.3749 132.264 57.3749L132.409 115.629H256.145V133.12H83.2614C83.2614 133.12 0.289063 123.71 0.289063 254.543C0.289053 385.375 72.7092 380.736 72.7092 380.736H115.93V320.024C115.93 320.024 113.6 247.604 187.194 247.604H309.918C309.918 247.604 378.868 248.719 378.868 180.966V68.939C378.868 68.939 389.337 1.14453 253.832 1.14453ZM185.604 40.3179C197.914 40.3179 207.864 50.2679 207.864 62.5787C207.864 74.8895 197.914 84.8396 185.604 84.8396C173.293 84.8396 163.343 74.8895 163.343 62.5787C163.343 50.2679 173.293 40.3179 185.604 40.3179Z" fill="url(#paint0_linear_53_376)"/>
                                <path d="M257.514 509.253C387.179 509.253 379.082 453.022 379.082 453.022L378.937 394.768H255.201V377.278H428.085C428.085 377.278 511.057 386.687 511.057 255.855C511.057 125.022 438.637 129.661 438.637 129.661H395.416V190.373C395.416 190.373 397.746 262.793 324.152 262.793H201.428C201.428 262.793 132.478 261.678 132.478 329.431V441.458C132.478 441.458 122.009 509.253 257.514 509.253ZM325.742 470.079C313.432 470.079 303.482 460.129 303.482 447.818C303.482 435.508 313.432 425.558 325.742 425.558C338.053 425.558 348.003 435.508 348.003 447.818C348.003 460.129 338.053 470.079 325.742 470.079Z" fill="url(#paint1_linear_53_376)"/>
                                <defs>
                                    <linearGradient id="paint0_linear_53_376" x1="4908.86" y1="4571.44" x2="30220.7" y2="29630.7" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#387EB8"/>
                                    <stop offset="1" stopColor="#366994"/>
                                    </linearGradient>
                                    <linearGradient id="paint1_linear_53_376" x1="7377.16" y1="7941.74" x2="34559.3" y2="33637.9" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#FFE052"/>
                                    <stop offset="1" stopColor="#FFC331"/>
                                    </linearGradient>
                                </defs>
                            </svg>
                            <svg viewBox="0 0 512 512" className="size-6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M128 0C110.4 0 96 14.4 96 32V480C96 497.6 110.4 512 128 512H448C465.6 512 480 497.6 480 480V128L352 0H128Z" fill="#E2E5E7"/>
                                <path d="M384 128H480L352 0V96C352 113.6 366.4 128 384 128Z" fill="#B0B7BD"/>
                                <path d="M480 224L384 128H480V224Z" fill="#CAD1D8"/>
                                <path d="M416 416C416 424.8 408.8 432 400 432H48C39.2 432 32 424.8 32 416V256C32 247.2 39.2 240 48 240H400C408.8 240 416 247.2 416 256V416Z" fill="#F15642"/>
                                <path d="M98.1282 314.672C101.072 289.84 138.544 285.376 156.192 298.944C164.896 305.968 155.696 317.104 148 311.472C138.544 305.472 117.04 302.656 114.352 315.936C110.896 336.928 166.56 324.912 165.648 358.944C164.752 391.44 117.68 392.192 100.016 377.616C95.7922 374.16 95.9202 368.544 98.2402 365.072C101.552 361.76 105.264 360.608 109.616 364.192C120.112 371.344 147.104 376.72 149.024 358.544C147.376 339.632 94.1602 351.008 98.1282 314.672Z" fill="white"/>
                                <path d="M265.488 369.424L267.536 371.84C275.968 379.52 264.976 392.064 256.4 384L252.064 380.56C245.408 385.152 237.616 387.344 227.248 387.344C204.736 387.344 179.008 371.84 179.008 340.368C179.008 308.896 204.592 292.912 227.248 292.912C251.024 292.912 274.32 308.896 274.32 340.368C274.32 352.528 271.232 361.504 265.488 369.424ZM257.792 340.368C257.792 320.032 241.808 309.68 227.232 309.68C211.504 309.68 196.016 320.016 196.016 340.368C196.016 355.872 209.184 370.576 227.232 370.576C231.824 370.576 236.304 369.424 240.784 368.272L226.208 354.832C219.424 346.64 230.176 334.992 238.736 342.544L253.2 356.992C256.384 352.528 257.792 347.024 257.792 340.368Z" fill="white"/>
                                <path d="M293.168 303.152C293.168 298.928 296.752 295.344 301.232 295.344C305.328 295.344 308.784 298.944 308.784 303.152V367.248H343.584C356.112 367.248 356.384 384 343.584 384H301.248C296.768 384 293.184 380.816 293.184 376.208V303.152H293.168Z" fill="white"/>
                                <path d="M400 432H96V448H400C408.8 448 416 440.8 416 432V416C416 424.8 408.8 432 400 432Z" fill="#CAD1D8"/>
                            </svg>
                            <svg viewBox="0 0 512 512" className="size-6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_44_240)">
                                    <path d="M256 512C397.385 512 512 397.385 512 256C512 114.615 397.385 0 256 0C114.615 0 0 114.615 0 256C0 397.385 114.615 512 256 512Z" fill="#13AA52"/>
                                    <path d="M324.43 224.72C308.26 153.355 270.045 129.89 265.93 120.925C261.43 114.6 256.87 103.35 256.87 103.35C256.795 103.16 256.675 102.825 256.535 102.5C256.07 108.825 255.83 111.265 249.85 117.645C240.59 124.885 193.08 164.75 189.215 245.83C185.61 321.45 243.84 366.51 251.715 372.255L252.61 372.89V372.835C252.66 373.215 255.11 390.835 256.83 409.505H263C264.448 396.308 266.618 383.2 269.5 370.24L270 369.915C273.523 367.389 276.881 364.642 280.055 361.69L280.415 361.365C297.155 345.9 327.25 310.13 326.955 253.1C326.893 243.587 326.048 234.095 324.43 224.72ZM256.175 329.56C256.175 329.56 256.175 223.5 259.675 223.52C262.405 223.52 265.94 360.325 265.94 360.325C261.08 359.74 256.175 337.81 256.175 329.56Z" fill="white"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_44_240">
                                    <rect width="512" height="512" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
                            <svg viewBox="0 0 512 512" className="size-6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M41.3658 278.611C28.8781 266.123 28.8781 245.877 41.3658 233.389L233.389 41.3658C245.877 28.8781 266.123 28.8781 278.611 41.3658L470.634 233.389C483.122 245.877 483.122 266.123 470.634 278.611L278.611 470.634C266.123 483.122 245.877 483.122 233.389 470.634L41.3658 278.611Z" fill="#EE513B"/>
                                <path d="M194.382 80.9844L174.938 100.43L225.16 150.652C223.128 155.011 221.993 159.872 221.993 164.998C221.993 179.552 231.137 191.97 243.993 196.819V319.677C231.137 324.526 221.993 336.944 221.993 351.498C221.993 370.275 237.216 385.498 255.993 385.498C274.771 385.498 289.993 370.275 289.993 351.498C289.993 338.304 282.478 326.864 271.494 321.229V196.987L319.502 244.995C317.57 249.266 316.494 254.006 316.494 258.998C316.494 277.776 331.717 292.998 350.494 292.998C369.272 292.998 384.494 277.776 384.494 258.998C384.494 240.221 369.272 224.998 350.494 224.998C346.845 224.998 343.331 225.573 340.035 226.637L288.475 175.077C289.462 171.893 289.993 168.507 289.993 164.998C289.993 146.221 274.771 130.998 255.993 130.998C252.485 130.998 249.101 131.53 245.915 132.517L194.382 80.9844Z" fill="white"/>
                            </svg>
                        </Box>
                    </Box>
                </Grid>
                {
                    isMdUp && (
                        <Grid size={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <div className="order-1 lg:order-2 flex justify-center lg:justify-end relative">
                                <div className="relative w-72 h-72 sm:w-96 sm:h-96 lg:w-[480px] lg:h-[480px]">
                                    <div className="absolute inset-0 rounded-full border-2 border-[#3b82f6]/20 animate-[spin_10s_linear_infinite]"></div>
                                    <div className="absolute inset-4 rounded-full border border-dashed border-slate-300 animate-[spin_15s_linear_infinite_reverse]"></div>
                                    <div className="absolute inset-4 rounded-full overflow-hidden bg-slate-100 shadow-2xl shadow-blue-500/10 border-4 border-white">
                                        <Image
                                            src={userImage}
                                            alt="Javier Tinajo"
                                            loading="eager"
                                        />
                                    </div>
                                    <div className="absolute top-0 -left-4 sm:-left-10 bg-white p-3 rounded-xl shadow-xl border border-gray-100 flex items-center gap-3 animate-bounce">
                                        <div className="bg-green-100 p-2 rounded-lg text-green-600">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                                <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-xs text-slate-500 font-medium">Proyectos</p>
                                            <p className="text-sm font-bold text-slate-900">15+ Completados</p>
                                        </div>
                                    </div>
                                    <div className="absolute bottom-0 -right-4 sm:-right-1 bg-white p-3 rounded-xl shadow-xl border border-gray-100 flex items-center gap-3 animate-bounce">
                                        <div className="bg-blue-100 p-2 rounded-lg text-[#3b82f6]">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                                <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-xs text-slate-500 font-medium">Experiencia</p>
                                            <p className="text-sm font-bold text-slate-900">5 Años</p>
                                        </div>
                                    </div>
                                    <div className="absolute bottom-70 right-34 sm:-right-34 bg-white p-3 rounded-xl shadow-xl border border-gray-100 flex items-center gap-3 animate-bounce">
                                        <div className="bg-red-100 p-2 rounded-lg text-red-600">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                                <path d="M11.7 2.805a.75.75 0 0 1 .6 0A60.65 60.65 0 0 1 22.83 8.72a.75.75 0 0 1-.231 1.337 49.948 49.948 0 0 0-9.902 3.912l-.003.002c-.114.06-.227.119-.34.18a.75.75 0 0 1-.707 0A50.88 50.88 0 0 0 7.5 12.173v-.224c0-.131.067-.248.172-.311a54.615 54.615 0 0 1 4.653-2.52.75.75 0 0 0-.65-1.352 56.123 56.123 0 0 0-4.78 2.589 1.858 1.858 0 0 0-.859 1.228 49.803 49.803 0 0 0-4.634-1.527.75.75 0 0 1-.231-1.337A60.653 60.653 0 0 1 11.7 2.805Z" />
                                                <path d="M13.06 15.473a48.45 48.45 0 0 1 7.666-3.282c.134 1.414.22 2.843.255 4.284a.75.75 0 0 1-.46.711 47.87 47.87 0 0 0-8.105 4.342.75.75 0 0 1-.832 0 47.87 47.87 0 0 0-8.104-4.342.75.75 0 0 1-.461-.71c.035-1.442.121-2.87.255-4.286.921.304 1.83.634 2.726.99v1.27a1.5 1.5 0 0 0-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.66a6.727 6.727 0 0 0 .551-1.607 1.5 1.5 0 0 0 .14-2.67v-.645a48.549 48.549 0 0 1 3.44 1.667 2.25 2.25 0 0 0 2.12 0Z" />
                                                <path d="M4.462 19.462c.42-.419.753-.89 1-1.395.453.214.902.435 1.347.662a6.742 6.742 0 0 1-1.286 1.794.75.75 0 0 1-1.06-1.06Z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-xs text-slate-500 font-medium">Máster Oficial</p>
                                            <p className="text-sm font-bold text-slate-900">Inteligencia Artificial</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Grid>
                    )
                }
            </Grid>
            {
                isMdUp && (
                    <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] bg-indigo-100/50 dark:bg-indigo-500/10 rounded-full blur-3xl pointer-events-none mix-blend-multiply dark:mix-blend-normal"></div>
                )
            }
        </Box>
    )
}

export default Welcome