const data = [
    {
        'id': 3,
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
        'id': 2,
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
        'id': 1,
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
]

export default data;
