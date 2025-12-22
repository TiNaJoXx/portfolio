"use client";

import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

interface CardProps {
    imageSrc: string;
    title: string;
    descr: string;
    links: {
        name: string;
        url: string;
    }[]
}

function CardComponent({ imageSrc, title, descr, links }: CardProps) {
    const theme = useTheme();
    const isMdUp = useMediaQuery(theme.breakpoints.up('md'));
        
    return (
        <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
            <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image={imageSrc}
            />
            <CardContent sx={{ flexGrow: 1 }}>
                <h5 className='text-lg mb-2'>{ title }</h5>
                <p className={`text-slate-600 line-clamp-3 ${isMdUp ? "text-base" : "text-sm"} `} title={ descr }>
                    { descr }
                </p>
            </CardContent>
            <CardActions sx={{ borderTop: 1, borderColor: "#efefef" }}>
                <Grid container spacing={1} sx={{ width: "100%" }}>
                    <Grid size={isMdUp ? 4 : 12}>
                        <Button sx={{
                            width: "100%",
                            textTransform: 'none',
                        }}>
                            Más info
                        </Button>
                    </Grid>
                    {
                        links.map((link, index) => {
                            if(link.name === "Web" && link.url !== "") {
                                return (
                                    <Grid key={link.url} size={isMdUp ? 4 : 12}>
                                        <Button sx={{
                                            width: "100%",
                                            textTransform: 'none',
                                            backgroundColor: "#3b82f6", 
                                            color: 'white', 
                                            gap: 2
                                        }} onClick={() => window.open(link.url, "_blank")}>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
                                                <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                                                <path fillRule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 0 1 0-1.113ZM17.25 12a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0Z" clipRule="evenodd" />
                                            </svg>
                                            Demo
                                        </Button>
                                    </Grid>
                                )
                            } else if(link.name === "Web" && link.url === "") {
                                return (
                                    <Grid key={`${link.url}_ ${index}`} size={isMdUp ? 4 : 12}>
                                        <Button disabled sx={{
                                            width: "100%",
                                            textTransform: 'none',
                                            backgroundColor: "#efefef", 
                                            color: 'white', 
                                            gap: 2
                                        }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
                                                <path d="M3.53 2.47a.75.75 0 0 0-1.06 1.06l18 18a.75.75 0 1 0 1.06-1.06l-18-18ZM22.676 12.553a11.249 11.249 0 0 1-2.631 4.31l-3.099-3.099a5.25 5.25 0 0 0-6.71-6.71L7.759 4.577a11.217 11.217 0 0 1 4.242-.827c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113Z" />
                                                <path d="M15.75 12c0 .18-.013.357-.037.53l-4.244-4.243A3.75 3.75 0 0 1 15.75 12ZM12.53 15.713l-4.243-4.244a3.75 3.75 0 0 0 4.244 4.243Z" />
                                                <path d="M6.75 12c0-.619.107-1.213.304-1.764l-3.1-3.1a11.25 11.25 0 0 0-2.63 4.31c-.12.362-.12.752 0 1.114 1.489 4.467 5.704 7.69 10.675 7.69 1.5 0 2.933-.294 4.242-.827l-2.477-2.477A5.25 5.25 0 0 1 6.75 12Z" />
                                            </svg>
                                            Demo
                                        </Button>
                                    </Grid>
                                )
                            } else if(link.name === "GitHub" && link.url !== "") {
                                return (
                                    <Grid key={link.url} size={isMdUp ? 4 : 12}>
                                        <Button sx={{
                                            width: "100%",
                                            textTransform: 'none',
                                            border: 1,
                                            borderColor: "black",
                                            color: "black",
                                            gap: 1
                                        }} onClick={() => window.open(link.url, "_blank")}>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 rotate-90">
                                                <path fillRule="evenodd" d="M11.47 4.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1-1.06 1.06L12 6.31 8.78 9.53a.75.75 0 0 1-1.06-1.06l3.75-3.75Zm-3.75 9.75a.75.75 0 0 1 1.06 0L12 17.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-3.75 3.75a.75.75 0 0 1-1.06 0l-3.75-3.75a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                                            </svg>
                                            Github
                                        </Button>
                                    </Grid>
                                )
                            } else if(link.name === "GitHub" && link.url === "") {
                                return (
                                    <Grid key={link.url} size={isMdUp ? 4 : 12}>
                                        <Button disabled sx={{
                                            width: "100%",
                                            textTransform: 'none',
                                            border: 1,
                                            borderColor: "#efefef",
                                            color: "black",
                                            gap: 1
                                        }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
                                                <path fillRule="evenodd" d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z" clipRule="evenodd" />
                                            </svg>

                                            Github
                                        </Button>
                                    </Grid>
                                )
                            }
                        })
                    }
                </Grid>
            </CardActions>
        </Card>
    )
}

export default CardComponent