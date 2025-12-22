"use client";

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LinearProgress from '@mui/material/LinearProgress';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

function Skills() {
    const theme = useTheme();
    const isMdUp = useMediaQuery(theme.breakpoints.up('md'));

    return (
        <Box sx={{ position: "relative", width: "100%", marginY: isMdUp ? 4 : 8 }}>
            <h2 className='mb-8 text-xl sm:text-2xl'>Tecnologías</h2>
            <Grid container spacing={isMdUp ? 8 : 2}>
                <Grid
                    size={isMdUp ? 3 : 6}
                    sx={{
                        boxShadow: 3,
                        padding: 2,
                        borderRadius: 2,
                        border: 1,
                        borderColor: "#efefef",
                        transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
                        '&:hover': {
                        transform: 'translateY(-0.25rem)',
                        borderColor: '#FFE052',
                        boxShadow: 6,
                        },
                    }}
                >
                    <div className='rounded-lg bg-yellow-50 p-2 w-14 h-14 flex justify-center items-center mb-4 hover:-translate-y-1'>
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
                    </div>
                    <h4 className='text-lg mb-4'>Python</h4>
                    <LinearProgress variant="determinate" value={95} 
                        sx={{ 
                            borderRadius: 100, 
                            height: 6, 
                            backgroundColor: '#f9eac5ff',
                            '& .MuiLinearProgress-bar': {
                                backgroundColor: '#FFC331'
                            },
                        }}
                    />
                </Grid>
                <Grid
                    size={isMdUp ? 3 : 6}
                    sx={{
                        boxShadow: 3,
                        padding: 2,
                        borderRadius: 2,
                        border: 1,
                        borderColor: "#efefef",
                        transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
                        '&:hover': {
                        transform: 'translateY(-0.25rem)',
                        borderColor: '#00D8FF',
                        boxShadow: 6,
                        },
                    }}
                >
                    <div className='rounded-lg bg-blue-50 p-2 w-14 h-14 flex justify-center items-center mb-4'>
                        <svg viewBox="0 0 512 512" className="size-6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M420.967 175.647C415.655 173.819 410.152 172.089 404.485 170.453C405.416 166.652 406.271 162.9 407.031 159.212C419.508 98.6498 411.35 49.8605 383.495 33.797C356.785 18.3942 313.103 34.4541 268.986 72.8476C264.744 76.5394 260.489 80.4482 256.237 84.5448C253.404 81.8344 250.575 79.2152 247.753 76.7099C201.517 35.6571 155.173 18.3568 127.345 34.4668C100.661 49.9143 92.7584 95.7808 103.989 153.176C105.074 158.72 106.341 164.381 107.775 170.137C101.216 171.999 94.8837 173.984 88.825 176.096C34.6187 194.994 0 224.613 0 255.336C0 287.067 37.1632 318.893 93.6233 338.191C98.0789 339.714 102.702 341.154 107.467 342.521C105.92 348.746 104.575 354.847 103.446 360.797C92.7375 417.196 101.1 461.979 127.713 477.329C155.203 493.181 201.337 476.887 246.26 437.618C249.811 434.514 253.374 431.223 256.944 427.772C261.571 432.228 266.191 436.445 270.786 440.4C314.299 477.845 357.276 492.965 383.865 477.572C411.326 461.675 420.251 413.567 408.664 355.036C407.779 350.566 406.75 345.999 405.593 341.351C408.833 340.393 412.014 339.405 415.115 338.377C473.811 318.929 512 287.49 512 255.336C512 224.502 476.265 194.684 420.967 175.647ZM408.236 317.615C405.436 318.542 402.564 319.438 399.637 320.306C393.157 299.793 384.411 277.979 373.709 255.443C383.922 233.443 392.329 211.908 398.628 191.528C403.865 193.043 408.949 194.642 413.847 196.329C461.227 212.639 490.128 236.754 490.128 255.336C490.128 275.129 458.916 300.823 408.236 317.615ZM387.208 359.284C392.331 385.166 393.063 408.565 389.669 426.858C386.62 443.295 380.487 454.254 372.905 458.643C356.769 467.983 322.264 455.843 285.05 423.82C280.784 420.149 276.487 416.229 272.177 412.081C286.603 396.302 301.022 377.959 315.094 357.588C339.845 355.392 363.23 351.801 384.436 346.899C385.481 351.112 386.408 355.244 387.208 359.284ZM174.552 457.029C158.788 462.597 146.232 462.756 138.642 458.38C122.492 449.065 115.778 413.109 124.936 364.876C125.985 359.352 127.234 353.678 128.673 347.878C149.647 352.516 172.86 355.854 197.671 357.865C211.838 377.799 226.673 396.122 241.622 412.165C238.356 415.319 235.103 418.321 231.867 421.149C212.003 438.513 192.096 450.833 174.552 457.029ZM100.697 317.494C75.7316 308.961 55.1141 297.871 40.9817 285.769C28.2829 274.894 21.8716 264.097 21.8716 255.336C21.8716 236.692 49.6669 212.912 96.0247 196.75C101.65 194.788 107.538 192.94 113.648 191.204C120.055 212.045 128.46 233.834 138.602 255.868C128.329 278.229 119.805 300.366 113.335 321.451C108.979 320.199 104.758 318.881 100.697 317.494ZM125.454 148.976C115.832 99.8008 122.222 62.7051 138.303 53.3965C155.432 43.4801 193.309 57.6188 233.23 93.0659C235.782 95.3315 238.343 97.7029 240.913 100.156C226.037 116.13 211.337 134.315 197.296 154.131C173.216 156.363 150.166 159.948 128.974 164.749C127.641 159.39 126.461 154.124 125.454 148.976ZM346.308 203.51C341.242 194.759 336.041 186.215 330.738 177.905C347.074 179.97 362.726 182.711 377.424 186.066C373.011 200.208 367.511 214.995 361.037 230.153C356.393 221.336 351.481 212.446 346.308 203.51ZM256.244 115.788C266.333 126.718 276.436 138.921 286.374 152.161C276.36 151.688 266.222 151.442 256 151.442C245.875 151.442 235.812 151.682 225.86 152.147C235.807 139.03 245.998 126.843 256.244 115.788ZM165.604 203.661C160.543 212.437 155.722 221.279 151.151 230.137C144.781 215.031 139.332 200.177 134.881 185.834C149.489 182.565 165.067 179.892 181.299 177.866C175.922 186.254 170.678 194.862 165.604 203.661ZM181.767 334.366C164.996 332.495 149.184 329.959 134.58 326.781C139.102 312.182 144.671 297.01 151.175 281.579C155.758 290.431 160.599 299.277 165.69 308.071C170.877 317.031 176.251 325.807 181.767 334.366ZM256.849 396.426C246.483 385.241 236.143 372.869 226.044 359.56C235.847 359.945 245.842 360.142 256 360.142C266.436 360.142 276.752 359.906 286.907 359.454C276.937 373.003 266.87 385.394 256.849 396.426ZM361.246 280.793C368.089 296.391 373.858 311.483 378.438 325.833C363.593 329.219 347.565 331.947 330.678 333.974C335.993 325.551 341.24 316.861 346.395 307.921C351.611 298.877 356.563 289.819 361.246 280.793ZM327.449 296.994C319.446 310.871 311.229 324.119 302.887 336.623C287.694 337.71 271.998 338.269 256 338.269C240.067 338.269 224.568 337.774 209.644 336.805C200.966 324.137 192.571 310.85 184.618 297.113C176.687 283.414 169.389 269.599 162.774 255.861C169.387 242.091 176.668 228.261 184.554 214.586L184.552 214.588C192.459 200.877 200.78 187.655 209.378 175.066C224.605 173.915 240.219 173.314 255.999 173.314C271.85 173.314 287.485 173.919 302.708 175.08C311.174 187.578 319.439 200.757 327.377 214.47C335.405 228.337 342.78 242.076 349.449 255.55C342.8 269.256 335.442 283.133 327.449 296.994ZM372.569 52.7458C389.715 62.6331 396.382 102.508 385.61 154.797C384.923 158.134 384.149 161.532 383.309 164.976C362.067 160.075 339.001 156.428 314.851 154.162C300.782 134.128 286.203 115.914 271.57 100.146C275.504 96.3614 279.433 92.7524 283.345 89.3467C321.144 56.4514 356.473 43.4637 372.569 52.7458ZM256 209.616C281.25 209.616 301.72 230.085 301.72 255.336C301.72 280.586 281.25 301.056 256 301.056C230.75 301.056 210.28 280.586 210.28 255.336C210.28 230.085 230.75 209.616 256 209.616Z" fill="#00D8FF"/>
                        </svg>
                    </div>
                    <h4 className='text-lg mb-4'>React</h4>
                    <LinearProgress variant="determinate" value={80} 
                        sx={{ 
                            borderRadius: 100, 
                            height: 6, 
                            backgroundColor: '#cbf7feff',
                            '& .MuiLinearProgress-bar': {
                                backgroundColor: '#00D8FF'
                            },
                        }}
                    />
                </Grid>
                <Grid
                    size={isMdUp ? 3 : 6}
                    sx={{
                        boxShadow: 3,
                        padding: 2,
                        borderRadius: 2,
                        border: 1,
                        borderColor: "#efefef",
                        transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
                        '&:hover': {
                        transform: 'translateY(-0.25rem)',
                        borderColor: '#3178C6',
                        boxShadow: 6,
                        },
                    }}
                >
                    <div className='rounded-lg bg-blue-200 p-2 w-14 h-14 flex justify-center items-center mb-4'>
                        <svg viewBox="0 0 512 512" className="size-6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M459.008 32H52.992C41.3984 32 32 41.3984 32 52.992V459.008C32 470.602 41.3984 480 52.992 480H459.008C470.602 480 480 470.602 480 459.008V52.992C480 41.3984 470.602 32 459.008 32Z" fill="#3178C6"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M291.92 380.144V429.232C300.839 433.634 310.344 436.732 320.144 438.432C331.469 440.523 342.964 441.551 354.48 441.504C365.704 441.557 376.902 440.426 387.888 438.128C397.752 436.135 407.163 432.338 415.648 426.928C423.525 421.843 430.018 414.883 434.544 406.672C442.65 389.669 443.719 370.155 437.52 352.368C434.904 345.717 431.006 339.644 426.048 334.496C420.726 329.022 414.681 324.301 408.08 320.464C400.481 316.013 392.585 312.089 384.448 308.72C378.048 306.064 372.288 303.483 367.168 300.976C362.62 298.799 358.268 296.235 354.16 293.312C350.942 291.056 348.147 288.251 345.904 285.024C343.966 282.094 342.956 278.648 343.008 275.136C342.965 271.903 343.866 268.729 345.6 266C347.483 263.144 349.995 260.758 352.944 259.024C356.548 256.902 360.47 255.373 364.56 254.496C369.581 253.381 374.713 252.844 379.856 252.896C384.181 252.911 388.501 253.221 392.784 253.824C397.409 254.449 401.986 255.396 406.48 256.656C411.051 257.923 415.522 259.527 419.856 261.456C424.061 263.331 428.084 265.591 431.872 268.208V222.4C423.986 219.416 415.807 217.271 407.472 216C397.406 214.535 387.243 213.845 377.072 213.936C365.954 213.876 354.868 215.138 344.048 217.696C334.268 219.931 324.968 223.903 316.592 229.424C308.811 234.607 302.386 241.581 297.856 249.76C293.055 258.843 290.68 269.011 290.96 279.28C290.605 292.861 295.078 306.127 303.584 316.72C314.019 328.465 327.177 337.47 341.904 342.944C348.624 345.717 354.891 348.432 360.704 351.088C365.949 353.422 370.99 356.189 375.776 359.36C379.636 361.871 383.026 365.039 385.792 368.72C388.224 372.059 389.515 376.093 389.472 380.224C389.494 383.319 388.699 386.366 387.168 389.056C385.466 391.947 383.075 394.371 380.208 396.112C376.62 398.299 372.695 399.878 368.592 400.784C363.247 401.979 357.78 402.543 352.304 402.464C341.557 402.444 330.895 400.549 320.8 396.864C310.253 393.058 300.472 387.395 291.92 380.144ZM209.456 257.936H273.456V217.504H95.0078V257.936H158.72V438H209.456V257.936Z" fill="white"/>
                        </svg>

                    </div>
                    <h4 className='text-lg mb-4'>TypeScript</h4>
                    <LinearProgress variant="determinate" value={75} 
                        sx={{ 
                            borderRadius: 100, 
                            height: 6, 
                            backgroundColor: '#a2bbd6ff',
                            '& .MuiLinearProgress-bar': {
                                backgroundColor: '#3178C6'
                            },
                        }}
                    />
                </Grid>
                <Grid
                    size={isMdUp ? 3 : 6}
                    sx={{
                        boxShadow: 3,
                        padding: 2,
                        borderRadius: 2,
                        border: 1,
                        borderColor: "#efefef",
                        transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
                        '&:hover': {
                        transform: 'translateY(-0.25rem)',
                        borderColor: '#F05138',
                        boxShadow: 6,
                        },
                    }}
                >
                    <div className='rounded-lg bg-red-100 p-2 w-14 h-14 flex justify-center items-center mb-4'>
                        <svg viewBox="0 0 512 512" className="size-6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_50_325)">
                                <path d="M512 141.874V126.432C511.518 115.333 511.035 103.751 509.105 92.6521C507.175 81.5531 503.797 70.9367 498.488 60.8029C493.18 50.669 486.907 41.5003 478.703 33.7793C470.5 25.5757 461.331 19.3023 451.68 13.9941C441.546 8.68594 430.93 5.30809 419.831 3.37783C408.732 1.44758 397.633 0.482422 386.051 0.482422H126.914C124.019 0.482422 121.124 0.482451 118.711 0.965015C110.507 1.44758 101.821 1.93014 93.6175 3.37783C85.4139 4.82552 77.2104 7.23831 69.4893 10.1337C67.0765 11.0988 64.1812 12.5466 61.7684 13.5117C54.0474 17.3722 47.2914 22.1978 40.5355 27.506C38.6053 29.4363 36.1925 31.3664 34.2623 33.2967C26.0587 41.5003 19.7853 50.669 14.4771 60.3203C9.16893 70.4541 5.791 81.0705 3.86074 92.1695C1.93049 103.268 1.4479 114.367 0.965332 125.949V385.086C1.4479 396.185 1.93049 407.766 3.86074 418.865C5.791 429.964 9.16893 440.58 14.4771 450.714C19.7853 460.848 26.0587 470.017 34.2623 477.738C42.4658 485.941 51.6345 492.215 61.2858 497.523C71.4196 502.831 82.036 506.209 93.135 508.139C104.234 510.07 115.333 511.035 126.914 511.035H386.051C397.15 510.552 408.732 510.07 419.831 508.139C430.93 506.209 441.546 502.831 451.68 497.523C461.814 492.215 470.982 485.941 478.703 477.738C486.907 469.534 493.18 460.366 498.488 450.714C503.797 440.58 507.175 429.964 509.105 418.865C511.035 407.766 512 396.667 512 385.086V369.644V159.728V141.874Z" fill="#F05138"/>
                                <path d="M405.353 316.079L406.801 310.289C428.034 225.84 376.399 125.467 288.573 72.8672C327.178 124.984 344.068 188.2 329.108 243.212C327.66 248.038 326.213 252.863 324.283 257.689C322.352 256.241 319.939 254.794 316.562 253.346C316.562 253.346 229.217 199.299 134.635 104.234C132.222 101.821 185.304 179.996 245.142 243.212C216.671 227.287 138.013 169.863 87.8263 124.502C94.0997 134.635 101.338 144.769 109.059 153.938C150.56 207.02 205.089 272.166 270.235 322.353C224.392 350.341 159.728 352.754 95.5474 322.353C79.6228 315.114 64.6633 305.945 50.6689 295.812C77.6925 339.242 119.676 376.882 170.827 399.08C231.63 425.139 292.433 423.691 337.312 399.563C337.312 399.563 337.794 399.563 337.794 399.08C339.725 398.115 341.655 396.667 343.585 395.702C365.3 384.603 407.766 373.504 430.929 417.9C437.685 428.034 449.749 370.126 405.353 316.079Z" fill="white"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_50_325">
                                <rect width="512" height="512" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    <h4 className='text-lg mb-4'>Swift</h4>
                    <LinearProgress variant="determinate" value={55} 
                        sx={{ 
                            borderRadius: 100, 
                            height: 6, 
                            backgroundColor: '#e8b1a8ff',
                            '& .MuiLinearProgress-bar': {
                                backgroundColor: '#F05138'
                            },
                        }}
                    />
                </Grid>
            </Grid>
            <Grid container spacing={isMdUp ? 8 : 4} sx={{ marginY: 6 }}>
                <Grid size={isMdUp ? 7 : 12}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <div className="bg-blue-100 p-2 rounded-lg text-[#3b82f6]">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                <path fillRule="evenodd" d="M1.5 7.125c0-1.036.84-1.875 1.875-1.875h6c1.036 0 1.875.84 1.875 1.875v3.75c0 1.036-.84 1.875-1.875 1.875h-6A1.875 1.875 0 0 1 1.5 10.875v-3.75Zm12 1.5c0-1.036.84-1.875 1.875-1.875h5.25c1.035 0 1.875.84 1.875 1.875v8.25c0 1.035-.84 1.875-1.875 1.875h-5.25a1.875 1.875 0 0 1-1.875-1.875v-8.25ZM3 16.125c0-1.036.84-1.875 1.875-1.875h5.25c1.036 0 1.875.84 1.875 1.875v2.25c0 1.035-.84 1.875-1.875 1.875h-5.25A1.875 1.875 0 0 1 3 18.375v-2.25Z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <h4 className='text-xl font-black  mb-1'>Frontend</h4>
                    </Box>
                    <Box sx={{ padding: 2, boxShadow: 3, borderRadius: 2, marginY: 2, border: 1, borderColor: "#efefef", backgroundColor: 'white' }}>
                        <Grid container spacing={2}>
                            <Grid size={isMdUp ? 2.5 : 3.5}>
                                HTML5 & CSS3
                            </Grid>
                            <Grid size={isMdUp ? 8.5 : 6.5} sx={{ display: 'grid', alignItems: 'center' }}>
                                <LinearProgress variant="determinate" value={95} sx={{ borderRadius: 100, height: 6 }} />
                            </Grid>
                            <Grid size={isMdUp ? 1 : 2}>
                                95%
                            </Grid>
                            <Grid size={isMdUp ? 2.5 : 3.5}>
                                TailwindCSS
                            </Grid>
                            <Grid size={isMdUp ? 8.5 : 6.5} sx={{ display: 'grid', alignItems: 'center' }}>
                                <LinearProgress variant="determinate" value={85} sx={{ borderRadius: 100, height: 6 }} />
                            </Grid>
                            <Grid size={isMdUp ? 1 : 2}>
                                85%
                            </Grid>
                            <Grid size={isMdUp ? 2.5 : 3.5}>
                                Vite.js
                            </Grid>
                            <Grid size={isMdUp ? 8.5 : 6.5} sx={{ display: 'grid', alignItems: 'center' }}>
                                <LinearProgress variant="determinate" value={80} sx={{ borderRadius: 100, height: 6 }} />
                            </Grid>
                            <Grid size={isMdUp ? 1 : 2}>
                                80%
                            </Grid>
                            <Grid size={isMdUp ? 2.5 : 3.5}>
                                Next.js
                            </Grid>
                            <Grid size={isMdUp ? 8.5 : 6.5} sx={{ display: 'grid', alignItems: 'center' }}>
                                <LinearProgress variant="determinate" value={65} sx={{ borderRadius: 100, height: 6 }} />
                            </Grid>
                            <Grid size={isMdUp ? 1 : 2}>
                                65%
                            </Grid>
                            <Grid size={isMdUp ? 2.5 : 3.5}>
                                React Native
                            </Grid>
                            <Grid size={isMdUp ? 8.5 : 6.5} sx={{ display: 'grid', alignItems: 'center' }}>
                                <LinearProgress variant="determinate" value={60} sx={{ borderRadius: 100, height: 6 }} />
                            </Grid>
                            <Grid size={isMdUp ? 1 : 2}>
                                60%
                            </Grid>
                        </Grid>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, marginTop: 6 }}>
                        <div className="bg-green-100 p-2 rounded-lg text-green-600">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                <path d="M21 6.375c0 2.692-4.03 4.875-9 4.875S3 9.067 3 6.375 7.03 1.5 12 1.5s9 2.183 9 4.875Z" />
                                <path d="M12 12.75c2.685 0 5.19-.586 7.078-1.609a8.283 8.283 0 0 0 1.897-1.384c.016.121.025.244.025.368C21 12.817 16.97 15 12 15s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.285 8.285 0 0 0 1.897 1.384C6.809 12.164 9.315 12.75 12 12.75Z" />
                                <path d="M12 16.5c2.685 0 5.19-.586 7.078-1.609a8.282 8.282 0 0 0 1.897-1.384c.016.121.025.244.025.368 0 2.692-4.03 4.875-9 4.875s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.284 8.284 0 0 0 1.897 1.384C6.809 15.914 9.315 16.5 12 16.5Z" />
                                <path d="M12 20.25c2.685 0 5.19-.586 7.078-1.609a8.282 8.282 0 0 0 1.897-1.384c.016.121.025.244.025.368 0 2.692-4.03 4.875-9 4.875s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.284 8.284 0 0 0 1.897 1.384C6.809 19.664 9.315 20.25 12 20.25Z" />
                            </svg>
                        </div>
                        <h4 className='text-xl font-black  mb-1'>Backend</h4>
                    </Box>
                    <Box sx={{ padding: 2, boxShadow: 3, borderRadius: 2, marginY: 2, border: 1, borderColor: "#efefef", backgroundColor: 'white' }}>
                        <Grid container spacing={2}>
                            <Grid size={2.5}>
                                DJango
                            </Grid>
                            <Grid size={isMdUp ? 8.5 : 8} sx={{ display: 'grid', alignItems: 'center' }}>
                                <LinearProgress variant="determinate" value={95}
                                    sx={{ 
                                        borderRadius: 100, 
                                        height: 6,
                                        backgroundColor: '#a8debcff',
                                        '& .MuiLinearProgress-bar': {
                                            backgroundColor: '#00a63e'
                                        },
                                    }} 
                                />
                            </Grid>
                            <Grid size={isMdUp ? 1 : 1.5}>
                                95%
                            </Grid>
                            <Grid size={2.5}>
                                Node.js
                            </Grid>
                            <Grid size={isMdUp ? 8.5 : 8} sx={{ display: 'grid', alignItems: 'center' }}>
                                <LinearProgress variant="determinate" value={70} 
                                    sx={{ 
                                        borderRadius: 100, 
                                        height: 6,
                                        backgroundColor: '#a8debcff',
                                        '& .MuiLinearProgress-bar': {
                                            backgroundColor: '#00a63e'
                                        },
                                    }}  
                                />
                            </Grid>
                            <Grid size={isMdUp ? 1 : 1.5}>
                                70%
                            </Grid>
                            <Grid size={2.5}>
                                FastApi
                            </Grid>
                            <Grid size={isMdUp ? 8.5 : 8} sx={{ display: 'grid', alignItems: 'center' }}>
                                <LinearProgress variant="determinate" value={50}
                                    sx={{ 
                                        borderRadius: 100, 
                                        height: 6,
                                        backgroundColor: '#a8debcff',
                                        '& .MuiLinearProgress-bar': {
                                            backgroundColor: '#00a63e'
                                        },
                                    }} 
                                />
                            </Grid>
                            <Grid size={isMdUp ? 1 : 1.5}>
                                50%
                            </Grid>
                        </Grid>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, marginTop: 6 }}>
                        <div className="bg-purple-100 p-2 rounded-lg text-purple-600">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                <path fillRule="evenodd" d="M9 4.5a.75.75 0 0 1 .721.544l.813 2.846a3.75 3.75 0 0 0 2.576 2.576l2.846.813a.75.75 0 0 1 0 1.442l-2.846.813a3.75 3.75 0 0 0-2.576 2.576l-.813 2.846a.75.75 0 0 1-1.442 0l-.813-2.846a3.75 3.75 0 0 0-2.576-2.576l-2.846-.813a.75.75 0 0 1 0-1.442l2.846-.813A3.75 3.75 0 0 0 7.466 7.89l.813-2.846A.75.75 0 0 1 9 4.5ZM18 1.5a.75.75 0 0 1 .728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 0 1 0 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 0 1-1.456 0l-.258-1.036a2.625 2.625 0 0 0-1.91-1.91l-1.036-.258a.75.75 0 0 1 0-1.456l1.036-.258a2.625 2.625 0 0 0 1.91-1.91l.258-1.036A.75.75 0 0 1 18 1.5ZM16.5 15a.75.75 0 0 1 .712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 0 1 0 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 0 1-1.422 0l-.395-1.183a1.5 1.5 0 0 0-.948-.948l-1.183-.395a.75.75 0 0 1 0-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0 1 16.5 15Z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <h4 className='text-xl font-black  mb-1'>Artificial Intelligence</h4>
                    </Box>
                    <Box sx={{ padding: 2, boxShadow: 3, borderRadius: 2, marginY: 2, border: 1, borderColor: "#efefef", backgroundColor: 'white' }}>
                        <Grid container spacing={2}>
                            <Grid size={2.5}>
                                LangChain
                            </Grid>
                            <Grid size={isMdUp ? 8.5 : 8} sx={{ display: 'grid', alignItems: 'center' }}>
                                <LinearProgress variant="determinate" value={80}
                                    sx={{ 
                                        borderRadius: 100, 
                                        height: 6,
                                        backgroundColor: '#e0cdedff',
                                        '& .MuiLinearProgress-bar': {
                                            backgroundColor: '#9810fa'
                                        },
                                    }} 
                                />
                            </Grid>
                            <Grid size={isMdUp ? 1 : 1.5}>
                                80%
                            </Grid>
                            <Grid size={2.5}>
                                OpenCV
                            </Grid>
                            <Grid size={isMdUp ? 8.5 : 8} sx={{ display: 'grid', alignItems: 'center' }}>
                                <LinearProgress variant="determinate" value={70} 
                                    sx={{ 
                                        borderRadius: 100, 
                                        height: 6,
                                        backgroundColor: '#e0cdedff',
                                        '& .MuiLinearProgress-bar': {
                                            backgroundColor: '#9810fa'
                                        },
                                    }}  
                                />
                            </Grid>
                            <Grid size={isMdUp ? 1 : 1.5}>
                                70%
                            </Grid>
                            <Grid size={2.5}>
                                Tensorflow
                            </Grid>
                            <Grid size={isMdUp ? 8.5 : 8} sx={{ display: 'grid', alignItems: 'center' }}>
                                <LinearProgress variant="determinate" value={65}
                                    sx={{ 
                                        borderRadius: 100, 
                                        height: 6,
                                        backgroundColor: '#e0cdedff',
                                        '& .MuiLinearProgress-bar': {
                                            backgroundColor: '#9810fa'
                                        },
                                    }} 
                                />
                            </Grid>
                            <Grid size={isMdUp ? 1 : 1.5}>
                                65%
                            </Grid>
                            <Grid size={2.5}>
                                Keras
                            </Grid>
                            <Grid size={isMdUp ? 8.5 : 8} sx={{ display: 'grid', alignItems: 'center' }}>
                                <LinearProgress variant="determinate" value={60}
                                    sx={{ 
                                        borderRadius: 100, 
                                        height: 6,
                                        backgroundColor: '#e0cdedff',
                                        '& .MuiLinearProgress-bar': {
                                            backgroundColor: '#9810fa'
                                        },
                                    }} 
                                />
                            </Grid>
                            <Grid size={isMdUp ? 1 : 1.5}>
                                60%
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
                <Grid size={isMdUp ? 5 : 12}>
                    <Box sx={{ padding: 2, borderRadius: 2, marginY: 2, border: 1, borderColor: "#efefef", backgroundColor: 'white' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                            <div className="bg-rose-100 p-2 rounded-lg text-rose-600">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                    <path d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375Z" />
                                    <path fillRule="evenodd" d="m3.087 9 .54 9.176A3 3 0 0 0 6.62 21h10.757a3 3 0 0 0 2.995-2.824L20.913 9H3.087Zm6.163 3.75A.75.75 0 0 1 10 12h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <h4 className='text-xl font-black  mb-1'>Data</h4>
                        </Box>
                        <Grid container spacing={1} sx={{ marginTop: 2 }}>
                            <Grid size={6} sx={{ backgroundColor: "#d0fae5", borderRadius: 2, padding: 1 }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 text-emerald-600">
                                        <path d="M5.507 4.048A3 3 0 0 1 7.785 3h8.43a3 3 0 0 1 2.278 1.048l1.722 2.008A4.533 4.533 0 0 0 19.5 6h-15c-.243 0-.482.02-.715.056l1.722-2.008Z" />
                                        <path fillRule="evenodd" d="M1.5 10.5a3 3 0 0 1 3-3h15a3 3 0 1 1 0 6h-15a3 3 0 0 1-3-3Zm15 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm2.25.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM4.5 15a3 3 0 1 0 0 6h15a3 3 0 1 0 0-6h-15Zm11.25 3.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM19.5 18a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" clipRule="evenodd" />
                                    </svg>
                                    <h5 className='text-base text-emerald-600'>MongoDB</h5>
                                </Box>
                                <p className='text-slate-600 text-xs mt-1'>Diseño de esquemas, agregaciones complejas y optimización de índices.</p>
                            </Grid>
                            <Grid size={6} sx={{ backgroundColor: "#dff2fe", borderRadius: 2, padding: 1 }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 text-sky-600">
                                        <path fillRule="evenodd" d="M1.5 5.625c0-1.036.84-1.875 1.875-1.875h17.25c1.035 0 1.875.84 1.875 1.875v12.75c0 1.035-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 0 1 1.5 18.375V5.625ZM21 9.375A.375.375 0 0 0 20.625 9h-7.5a.375.375 0 0 0-.375.375v1.5c0 .207.168.375.375.375h7.5a.375.375 0 0 0 .375-.375v-1.5Zm0 3.75a.375.375 0 0 0-.375-.375h-7.5a.375.375 0 0 0-.375.375v1.5c0 .207.168.375.375.375h7.5a.375.375 0 0 0 .375-.375v-1.5Zm0 3.75a.375.375 0 0 0-.375-.375h-7.5a.375.375 0 0 0-.375.375v1.5c0 .207.168.375.375.375h7.5a.375.375 0 0 0 .375-.375v-1.5ZM10.875 18.75a.375.375 0 0 0 .375-.375v-1.5a.375.375 0 0 0-.375-.375h-7.5a.375.375 0 0 0-.375.375v1.5c0 .207.168.375.375.375h7.5ZM3.375 15h7.5a.375.375 0 0 0 .375-.375v-1.5a.375.375 0 0 0-.375-.375h-7.5a.375.375 0 0 0-.375.375v1.5c0 .207.168.375.375.375Zm0-3.75h7.5a.375.375 0 0 0 .375-.375v-1.5A.375.375 0 0 0 10.875 9h-7.5A.375.375 0 0 0 3 9.375v1.5c0 .207.168.375.375.375Z" clipRule="evenodd" />
                                    </svg>
                                    <h5 className='text-base text-sky-600'>MySQL</h5>
                                </Box>
                                <p className='text-slate-600 text-xs mt-1'>Relacional, diseño de tablas y optimización.</p>
                            </Grid>
                            <Grid size={6} sx={{ backgroundColor: "#fef3c6", borderRadius: 2, padding: 1 }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 text-amber-600">
                                        <path fillRule="evenodd" d="M4.5 9.75a6 6 0 0 1 11.573-2.226 3.75 3.75 0 0 1 4.133 4.303A4.5 4.5 0 0 1 18 20.25H6.75a5.25 5.25 0 0 1-2.23-10.004 6.072 6.072 0 0 1-.02-.496Z" clipRule="evenodd" />
                                    </svg>

                                    <h5 className='text-base text-amber-600'>AWS</h5>
                                </Box>
                                <p className='text-slate-600 text-xs mt-1'>EC2, RDS, manejor básico de infraestructura.</p>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box sx={{ padding: 2, borderRadius: 2, marginY: 2, border: 1, borderColor: "#efefef", backgroundColor: 'white' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                            <div className="bg-stone-100 p-2 rounded-lg text-stone-600">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                    <path fillRule="evenodd" d="M12 6.75a5.25 5.25 0 0 1 6.775-5.025.75.75 0 0 1 .313 1.248l-3.32 3.319c.063.475.276.934.641 1.299.365.365.824.578 1.3.64l3.318-3.319a.75.75 0 0 1 1.248.313 5.25 5.25 0 0 1-5.472 6.756c-1.018-.086-1.87.1-2.309.634L7.344 21.3A3.298 3.298 0 1 1 2.7 16.657l8.684-7.151c.533-.44.72-1.291.634-2.309A5.342 5.342 0 0 1 12 6.75ZM4.117 19.125a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75v-.008Z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <h4 className='text-xl font-black  mb-1'>Herramientas</h4>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flexWrap: 'wrap', marginY: 2 }}>
                            <div className="bg-gray-100 p-2 rounded-lg text-gray-600 text-sm">Git</div>
                            <div className="bg-gray-100 p-2 rounded-lg text-gray-600 text-sm">Docker</div>
                            <div className="bg-gray-100 p-2 rounded-lg text-gray-600 text-sm">Figma</div>
                            <div className="bg-gray-100 p-2 rounded-lg text-gray-600 text-sm">Postman</div>
                            <div className="bg-gray-100 p-2 rounded-lg text-gray-600 text-sm">Studio 3T</div>
                            <div className="bg-gray-100 p-2 rounded-lg text-gray-600 text-sm">DBeaver</div>
                            <div className="bg-gray-100 p-2 rounded-lg text-gray-600 text-sm">Power BI</div>
                            <div className="bg-gray-100 p-2 rounded-lg text-gray-600 text-sm">Excel</div>
                            <div className="bg-gray-100 p-2 rounded-lg text-gray-600 text-sm">Celery</div>
                            <div className="bg-gray-100 p-2 rounded-lg text-gray-600 text-sm">Apache</div>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Skills
