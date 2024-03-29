const SUBTITLE_STATES = [
    {
        id: 1,
        name: 'Previsto',
        color: 'rgb(255,255,255)'
    },
    {
        id: 2,
        name: 'Digitalização',
        color: 'rgb(252,141,89)'
    },
    {
        id: 3,
        name: 'Finalizada',
        color: 'rgb(217,239,139)'
    },
    {
        id: 4,
        name: 'Reambulação',
        color: 'rgb(254,224,139)'
    },
    {
        id: 5,
        name: 'Revisadas',
        color: 'rgb(49,83,222)'
    },
    {
        id: 6,
        name: 'Editadas',
        color: 'rgb(51,204,51)'
    },
    {
        id: 7,
        name: 'Vetorização',
        color: 'rgb(255,255,30)'
    },
    {
        id: 8,
        name: 'Adequadas',
        color: 'rgb(175,141,195)'
    },
    {
        id: 9,
        name: 'Generalização',
        color: 'rgb(224,243,248)'
    },
    {
        id: 10,
        name: 'Fototriangulação',
        color: 'rgb(44,127,184)'
    },
    {
        id: 11,
        name: 'Restituição',
        color: 'rgb(186,186,186)'
    },
    {
        id: 12,
        name: 'Sem insumos',
        color: 'rgb(215,48,39)'
    },
    {
        id: 13,
        name: 'Medição de pontos de controle',
        color: 'rgb(0,0,0)'
    },
    {
        id: 14,
        name: 'Geração de ortoimagem',
        color: 'rgb(128,205,193)'
    },
    {
        id: 15,
        name: 'Folhas do Projeto Bahia',
        color: 'rgb(255,255,255)'
    },
    {
        id: 16,
        name: 'Levantamento topográfico',
        color: 'rgb(37,52,148)'
    },
    {
        id: 17,
        name: 'Em Execução',
        color: 'rgb(49,83,222)'
    },
]

const INIT_ZOOM = {
    center: [-41, -9],
    zoom: 5.5
}

var PROJECTS = {
    'mapeamento-pe': {
        title: 'Mapeamento do Estado de Pernambuco 1:25.000',
        legend: [
            12,
            15,
            8,
            5,
            6
        ],
        description: `O objetivo do presente projeto consiste em realizar o mapeamento do estado de Pernambuco,
        gerando 467 novas cartas na escala 1:25.000, das quais 467 (100%) já foram Adequadas, 190 (40,7%) Revisadas 
        e 72 (15,4%) Editadas.`,
        lotes: [
            {
                name: 'mapeamento-pe',
                subtitle: 'Mapeamento 1:25.000',
                zoom: [
                    [-42, -10], // southwestern corner of the bounds
                    [-33, -7] // northeastern corner of the bounds
                ],
                styles: [
                    {
                        'id': 'mapeamento-pe-fill',
                        'source': 'mapeamento-pe',
                        'type': 'fill',
                        'layout': {},
                        'paint': {
                            'fill-opacity': 0.9
                        }
                    },
                    {
                        'id': 'mapeamento-pe-border',
                        'source': 'mapeamento-pe,3',
                        'type': 'line',
                        'layout': {},
                        'paint': {
                            'line-color': '#050505',
                            'line-width': 0.5
                        }
                    },
                    {
                        'id': 'mapeamento-pe-text',
                        'source': 'mapeamento-pe',
                        "type": "symbol",
                        "maxzoom": 10,
                        "minzoom": 7.4,
                        'layout': {
                            'text-field': ['to-string', ['get', 'identificador']]

                        },
                        'paint': {

                        }
                    }
                ]
            },
            
        ]
    },
    'mapeamento-do-estado-de-pernambuco-1:50.000': {
        title: 'Mapeamento do Estado de Pernambuco 1:50.000',
        description: `O objetivo do presente projeto consiste em realizar o mapeamento do estado de Pernambuco,
        para gerar  69 cartas ortoimagens na escala 1:50.000 visando atender a meta do Plano Interno de Trabalho(PIT) 2023 da Diretoria de Serviço Geográfico.`,
        legend: [
            1
        ],
       
        lotes: [
            {
                name: 'mapeamento-do-estado-de-pernambuco-50000',
                subtitle: 'Mapeamento 1:50.000',
                zoom: [
                    [-42, -10], // southwestern corner of the bounds
                    [-33, -7] // northeastern corner of the bounds
                ],
                styles: [
                    {
                        'id': 'mapeamento-do-estado-de-pernambuco-50000-fill',
                        'source': 'mapeamento-do-estado-de-pernambuco-50000',
                        'type': 'fill',
                        'layout': {},
                        'paint': {
                            'fill-opacity': 0.9
                        }
                    },
                    {
                        'id': 'mapeamento-do-estado-de-pernambuco-50000-border',
                        'source': 'mapeamento-do-estado-de-pernambuco-50000',
                        'type': 'line',
                        'layout': {},
                        'paint': {
                            'line-color': '#050505',
                            'line-width': 0.5
                        }
                    },
                    {
                        'id': 'mapeamento-do-estado-de-pernambuco-50000-text',
                        'source': 'mapeamento-do-estado-de-pernambuco-50000',
                        "type": "symbol",
                        "maxzoom": 10,
                        "minzoom": 7.4,
                        'layout': {
                            'text-field': ['to-string', ['get', 'identificador']]

                        },
                        'paint': {

                        }
                    }
                ]
            },
            
        ]
    },
    'combater-2023': {
        title: 'Vetorização de cartas para a certificação da FORPRON',
        legend: [
            7
        ],
        description: `O objetivo do presente projeto consiste em realizar a vetorização de 24 cartas na escala 1:50.000, 
        no intuito de apoiar a simulação construtiva da 10ª Bda Inf Mtz no contexto da certificação daquela GU como FORPRON
        `,
        lotes: [
            {
                name: 'combater-2023',
                subtitle: 'Vetorização da FORPRON 1:50.000',
                zoom: [
                    [-38, -10], // southwestern corner of the bounds
                    [-33, -6] // northeastern corner of the bounds
                ],
                styles: [
                    {
                        'id': 'combater-2023-fill',
                        'source': 'combater-2023',
                        'type': 'fill',
                        'layout': {},
                        'paint': {
                            'fill-opacity': 0.9
                        }
                    },
                    {
                        'id': 'combater-2023-border',
                        'source': 'combater-2023',
                        'type': 'line',
                        'layout': {},
                        'paint': {
                            'line-color': '#050505',
                            'line-width': 0.5
                        }
                    },
                    {
                        'id': 'combater-2023-text',
                        'source': 'combater-2023',
                        "type": "symbol",
                        "maxzoom": 10,
                        "minzoom": 7.4,
                        'layout': {
                            'text-field': ['to-string', ['get', 'identificador']]

                        },
                        'paint': {

                        }
                    }
                ]
            },
            
        ]
    },
    'pddmt': {
        title: 'Plano de Desenvolvimento da Doutrina Militar Terrestre (PDDMT)',
        description: `O objetivo do presente projeto consiste na produção de Cartas Ortoimagem de 
        toda a área compreendida pela cidade de Teresina-PI, 2 cartas no Ceará e 16 Cartas da Área 
        Campo de Instrução 28º Batalhão Caçadores.
        Tem como objetivo ainda a produção de 7 Cartas Topográficas e 3 Mapas Temáticos`,
        legend: [
            1,
            6
        ],
       
        lotes: [
            {
                name: 'pddmt',
                subtitle: 'PDDMT',
                zoom: [
                    [-43, -5.7], // southwestern corner of the bounds
                    [-37, -3.6] // northeastern corner of the bounds
                ],
                styles: [
                    {
                        'id': 'pddmt-fill',
                        'source': 'pddmt',
                        'type': 'fill',
                        'layout': {},
                        'paint': {
                            'fill-opacity': 0.9
                        }
                    },
                    {
                        'id': 'pddmt-border',
                        'source': 'pddmt',
                        'type': 'line',
                        'layout': {},
                        'paint': {
                            'line-color': '#050505',
                            'line-width': 0.5
                        }
                    },
                    {
                        'id': 'pddmt-text',
                        'source': 'pddmt',
                        "type": "symbol",
                        "maxzoom": 11.0,
                        "minzoom": 9,
                        'layout': {
                            'text-field': ['to-string', ['get', 'identificador']]
    
                        },
                        'paint': {
    
                        }
                    }
                ]
            },
            
        ]
    },
    'levantamento-patrimonial': {
        title: 'Levantamento de Áreas Patrimoniais',
        legend: [
//             1,
//             17,
//             3
        ],
        description: `O objetivo do presente levantamento é prestar apoio ao HMAR (Remembramento 31 imóveis), 
        CIMNC (georreferenciamento de imóveis) e 59ª BI Mtz (desmembramento de 3 imóveis AL07-0001, 0002 e 0003)`,
        lotes: [
            {
                name: 'levantamento-patrimonial',
                subtitle: 'Levatamento Patrimonial',
                zoom: [
                    [-35.8, -9.75], // southwestern corner of the bounds
                    [-34.7, -7.7] // northeastern corner of the bounds
                ],
                styles: [
                    {
                        'id': 'levantamento-patrimonial-fill',
                        'source': 'levantamento-patrimonial',
                        'type': 'fill',
                        'layout': {},
                        'paint': {
                            'fill-opacity': 0.9
                        }
                    },
                    {
                        'id': 'levantamento-patrimonial-border',
                        'source': 'levantamento-patrimonial,3',
                        'type': 'line',
                        'layout': {},
                        'paint': {
                            'line-color': '#FF0000',
                            'line-width': 0.5
                        }
                    },
                    {
                        'id': 'levantamento-patrimonial-text',
                        'source': 'levantamento-patrimonial',
                        "type": "symbol",
                        "maxzoom": 10,
                        "minzoom": 7.4,
                        'layout': {
                            'text-field': ['to-string', ['get', 'identificador']]

                        },
                        'paint': {

                        }
                    }
                ]
            },
            
        ]
    },
    
    
}
