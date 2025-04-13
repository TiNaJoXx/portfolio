const data = [
    {
        'id': 6,
        'name': 'Masterclass Inteligencia Artificial',
        'img': '/img/portal7.png',
        'client': 'Cliente externo',
        'year': 2025,
        'descr': 'Portal para acceder a Masterclasses sobre Inteligencia Artificial.',
        'description': 'Este proyecto ha sido desarrollado para la Universidad Internacional de La Rioja (UNIR) con el propósito de implementar un portal de acceso exclusivo para estudiantes, en el que se ofrece la posibilidad de visualizar seis masterclasses sobre la Inteligencia Artificial.\n\nLa plataforma es una aplicación que incorpora autenticación de usuarios mediante Microsoft, permitiendo a los estudiantes acceder directamente a un menú para reproducir las masterclasses. Además, el sistema realiza un seguimiento detallado de cada estudiante, monitorizando sus acciones dentro de la aplicación. Durante la reproducción de cada masterclass, se presentan preguntas a los usuarios, con el objetivo de recopilar información sobre su nivel de conocimientos.\n\nEl desarrollo del frontend de la aplicación se llevó a cabo utilizando React, garantizando un sistema ágil, flexible y eficiente. El backend se ha implementado con Django, por su robustez y capacidad para gestionar procesos complejos de manera eficaz.',
        'languages': [
            "react",
            "html",
            "css",
            "js",
            "django",
            "python",
            "sql",
            "git",
        ],
        'links': [
            {
                'name': 'Web',
                'url': 'https://techtalks.unir.net'
            }
        ]
    },
    {
        'id': 5,
        'name': 'Pokedex',
        'img': '/img/portal6.png',
        'client': 'Cliente externo',
        'year': 2024,
        'descr': 'Desarrollo web de la pokedex.',
        'description': 'Este proyecto es un desarrollo propio con el objetivo de visualizar la pokedex (lista de pokemon) y el detalle de cada pokemon.\n\nHay diversa funcionalidad como el empleo de la famosa API "pokeapi" y un buscador para filtrar elementos de un listado.\n\nAl entrar al detalle de un determiando pokemon, se visualizan los detalles del pokemon.',
        'languages': [
            "react",
            "html",
            "css",
            "js",
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
        'id': 4,
        'name': 'Procesamiento de vídeos',
        'img': '/img/portal4.png',
        'client': 'Cliente externo',
        'year': 2024,
        'descr': 'Eliminación de marcas de agua de un vídeo.',
        'description': 'Este proyecto es un desarrollo propio con el objetivo procesar un vídeo y detectar logos o marcas de agua y borrarlas para eliminar del proceso una edición manual.\n\nEl programa procesa un vídeo estabilizando los fotogramas por segundo y detectando frame a frame los posibles iconos y superponiendoles una máscara del color del fondo.\n\nLa velocidad del procesamiento puede variar dependiendo de algunos factores como la duración, las dimensiones del vídeo, etc... pero se puede acelerar empleando la GPU y la programación concurrente.',
        'languages': [
            "python",
            "opencv",
            "git",
        ],
        'links': [
            {
                'name': 'GitHub',
                'url': 'https://github.com/TiNaJoXx/remove-logo-from-video'
            }
        ]
    },
    {
        'id': 3,
        'name': 'Speech to text',
        'img': '/img/portal3.png',
        'client': 'Cliente externo',
        'year': 2024,
        'descr': 'Transcripción del audio de un vídeo a texto.',
        'description': 'Este proyecto es un desarrollo propio con el objetivo de probar la capacidad de la IA para la transcripción.\n\nEl programa transcribe automáticamente el audio de un vídeo a texto con velocidad mediante el empleo de GPU. Se puede elegir entre 99 diferentes idiomas. Es ideal para transcribir reuniones, entrevistas, clases, etc...\n\nEl siguiente nivel consistiría en una vez se ha realizado la transcripción se podría procesar el texto resultante y obtener información relevante sin necesidad de escuchar la grabación completa.',
        'languages': [
            "python",
            "git"
        ],
        'links': [
            {
                'name': 'GitHub',
                'url': 'https://github.com/TiNaJoXx/speech-to-text'
            }
        ]
    },
    {
        'id': 2,
        'name': 'Portal de escuchas',
        'img': '/img/portal2.png',
        'client': 'Cliente externo',
        'year': 2023,
        'descr': 'Aplicación para escuchar las grabaciones y evaluar la calidad de la venta.',
        'description': 'Este proyecto ha sido desarrollado para la Universidad Internacional de la Rioja (UNIR) con el objetivo de crear un portal donde puedan acceder a las grabaciones de ventas de sus asesores y poder evaluar de una manera muy flexible la calidad de la venta realizada.\n\nEl sistema es una aplicación basada en roles, dónde la información que un usuario puede ver y evaluar viene configurada por su rol. La creación de los formularios para evaluar es muy flexible para que sea fácil crear distintos mecanismos de evaluación que se adapten a las necesidades de los usuarios. Además, hay una funcionalidad de envío de reportes diarios automáticos y de visualización de datos para mantener un seguimiento del uso adecuado de la aplicación.',
        'languages': [
            "html",
            "css",
            "js",
            "django",
            "celery",
            "mongodb",
            "sql",
            "git",
        ],
        'links': [
            {
                'name': 'Web',
                'url': 'https://cqa.wimjapps.com'
            }
        ]
    },
    {
        'id': 1,
        'name': 'Sistema de recomendación',
        'img': '/img/portal5.png',
        'client': 'Cliente externo',
        'year': 2022,
        'descr': 'Sistema de recomendación de productos basados en filtrado colaborativo.',
        'description': 'Este proyecto es un desarrollo propio que consiste en implementar un tipo de filtro de productos para facilitar la recomendación de productos a un usuario del sistema.\n\nEl programa está desarrollado en un notebook de Jupyter y funciona basandose en la similitud de gustos entre usuarios.\n\n Cuando un usuario puntúa a un determinado producto se cálcula la correlación de Pearson con los demás usuarios que han puntuado ese mismo producto y se recomienda otra serie de productos de los usuarios con gustos similares.',
        'languages': [
            "python",
            "jupyter",
            "git",
        ],
        'links': [
            {
                'name': 'GitHub',
                'url': 'https://github.com/TiNaJoXx/recommendation-system'
            }
        ]
    },
]

export default data;
