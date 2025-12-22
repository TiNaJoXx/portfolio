"use client";

import { useState } from "react";

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import CardComponent from '../CardComponent';

import portal2 from '@/public/portal2.png';
import portal3 from '@/public/portal3.png';
import portal4 from '@/public/portal4.png';
import portal5 from '@/public/portal5.png';
import portal6 from '@/public/portal6.png';
import portal7 from '@/public/portal7.png';

const dataProjects = [
    {
        'id': 6,
        'name': 'TechTalks',
        'img': portal7.src,
        'year': 2025,
        'description': 'Portal de acceso para visualizar masterclasses sobre la Inteligencia Artificial. Se explora cómo la IA puede convertirse en un motor clave para la innovación, el desarrollo profesional y la competitividad empresarial.',
        'languages': [
            "react",
            "django",
            "python",
            "sql"
        ],
        'links': [
            {
                'name': 'Web',
                'url': 'https://techtalks.unir.net'
            },
            {
                'name': 'GitHub',
                'url': ''
            }
        ]
    },
    {
        'id': 2,
        'name': 'Portal de escuchas',
        'img': portal2.src,
        'description': 'Aplicación web para realizar un mantenimiento de la calidad de la venta llevada a cabo por los asesores.',
        'languages': [
            "react",
            "django",
            "celery",
            "mongodb",
            "sql"
        ],
        'links': [
            {
                'name': 'Web',
                'url': 'https://cqa.wimjapps.com'
            },
            {
                'name': 'GitHub',
                'url': ''
            }
        ]
    },
    {
        'id': 4,
        'name': 'Procesamiento de vídeos',
        'img': portal4.src,
        'description': 'Eliminación de marcas de agua en un vídeo mediante el uso de inteligencia artificial.',
        'languages': [
            "python",
            "opencv",
            "git",
        ],
        'links': [
            {
                'name': 'Web',
                'url': ''
            },
            {
                'name': 'GitHub',
                'url': 'https://github.com/TiNaJoXx/remove-logo-from-video'
            }
        ]
    },
    {
        'id': 3,
        'name': 'Speech to text',
        'img': portal3.src,
        'description': 'Transcriptor con Inteligencia Artificial de voz a texto.',
        'languages': [
            "python",
            "git"
        ],
        'links': [
            {
                'name': 'Web',
                'url': ''
            },
            {
                'name': 'GitHub',
                'url': 'https://github.com/TiNaJoXx/speech-to-text'
            }
        ]
    },
    {
        'id': 5,
        'name': 'Pokedex',
        'img': portal6.src,
        'description': 'Desarrollo de una pokédex con los 251 primeros pokémons y sus datos de entrada.',
        'languages': [
            "react",
            "git",
            "figma",
        ],
        'links': [
            {
                'name': 'Web',
                'url': 'https://pokedex1-1.netlify.app/'
            },
            {
                'name': 'GitHub',
                'url': 'https://github.com/TiNaJoXx/pokedex'
            },
            {
                'name': 'Figma',
                'url': 'https://www.figma.com/design/zwBJlJcTsMufp1AonuFDVm/Pokedex?node-id=0-1&t=0BWK9Gt2nHEZpIc5-1'
            }
        ]
    },
    {
        'id': 1,
        'name': 'Sistema de recomendación',
        'img': portal5.src,
        'description': 'Sistema de recomendación de productos basados en filtrado colaborativo de una tienda online.',
        'languages': [
            "python",
            "jupyter",
            "git",
        ],
        'links': [
            {
                'name': 'Web',
                'url': ''
            },
            {
                'name': 'GitHub',
                'url': 'https://github.com/TiNaJoXx/recommendation-system'
            }
        ]
    }
]

function Projects() {
    const theme = useTheme();
    const isMdUp = useMediaQuery(theme.breakpoints.up('md'));

    const [visibleProjects, setVisibleProjects] = useState(isMdUp ? 3 : 4);
    const [expanded, setExpanded] = useState(false);

    const handleLoadMore = () => {
        setVisibleProjects(dataProjects.length);
        setExpanded(true);
    };

    return (
        <Box sx={{ width: "100%", marginY: isMdUp ? 4 : 0 }}>
            <h2 className='mb-8 text-xl sm:text-2xl'>Proyectos</h2>
            <Grid container rowSpacing={isMdUp ? 4 : 2} columnSpacing={isMdUp ? 4 : 2}>
                {
                    dataProjects.slice(0, visibleProjects).map((project, index) => 
                        <Grid 
                            key={project.id} 
                            size={isMdUp ? 4 : 6}
                            sx={{
                                opacity: expanded || index < (isMdUp ? 3 : 4) ? 1 : 0,
                                transform:
                                    expanded || index < (isMdUp ? 3 : 4)
                                    ? "translateY(0)"
                                    : "translateY(20px)",
                                transition: "opacity 0.6s ease, transform 0.6s ease",
                                transitionDelay: expanded ? `${index * 80}ms` : "0ms",
                            }}
                        >
                            <CardComponent 
                                imageSrc={project.img}
                                title={project.name}
                                descr={project.description}
                                links={project.links}
                            />
                        </Grid>
                    )
                }
            </Grid>
            {visibleProjects < dataProjects.length && (
                <Box sx={{ textAlign: "center", marginTop: isMdUp ? 8 : 4 }}>
                    <Button
                        sx={{ textTransform: "none" }}
                        onClick={handleLoadMore}
                    >
                        Cargar más proyectos
                    </Button>
                </Box>
            )}
        </Box>
    )
}

export default Projects