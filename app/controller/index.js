const axios = require("axios");
const httpAdapter = require("axios/lib/adapters/http");


exports.getSongs = async (req, resp) => {
    resp.status(201).json(
      [
        {   
            id: 1,
            albumPath: 'https://s2.glbimg.com/jyQw61FDISK4PQN7ey8Y_dXcOow=/0x0:1283x1134/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2021/B/K/aOxZEsRny0zkDIZBgJhA/foto-2-tarcisio.jpg',
            author: 'Tarcizio do Acordeon',
            name: 'Protecao de Tela',
            releaseYear: 2021,
            fileName: `PROTEÇÃO DE TELA - Tarcísio do Acordeon (DVD Meu Sonho) (128 kbps).mp3`,
            duration: '3:37'
        },
        {
            id: 2,
            albumPath: 'https://cdn.mos.cms.futurecdn.net/f4AnJxT2YZuN4bGY593Vgi.png',
            author: 'Steve Wilson',
            name: 'Drive Home',
            releaseYear: 2013,
            fileName: `Steven Wilson - Drive Home (128 kbps).mp3`,
            duration: '8:21',
            subtitle: [
                {
                    phrase: "Cold windowpane",
                    time: "00:29"
                },
                {
                    phrase: "A car upturned in the rain",
                    time: "00:35"
                },
                {
                    phrase: "Wait on in vain",
                    time: "00:43"
                },
                {
                    phrase: "Don't try to bear the blame",
                    time: "00:49"
                },
                {
                    phrase: "Deal with the pain",
                    time: "00:58"
                },
                {
                    phrase: "Dust down your wings again",
                    time: "01:04"
                },
                {
                    phrase: "You need to clear away",
                    time: "01:22"
                },
                {
                    phrase: "All the jetsam in your brain",
                    time: "01:26"
                },
                {
                    phrase: "And face the truth",
                    time: "01:29"
                },
                {
                    phrase: "Well love can make amends",
                    time: "01:38"
                },
                {
                    phrase: "But while the darkness always ends",
                    time: "01:41"
                },
                {
                    phrase: "You're still alone",
                    time: "01:45"
                },
                {
                    phrase: "So drive home",
                    time: "01:49"
                },
                {
                    phrase: "Pause without end",
                    time: "01:54"
                },
                {
                    phrase: "A moment in time suspends",
                    time: "02:02"
                },
                {
                    phrase: "How could she leave?",
                    time: "02:09"
                },
                {
                    phrase: "Release all your guilt and breathe",
                    time: "02:16"
                },
                {
                    phrase: "Give up your pain",
                    time: "02:24"
                },
                {
                    phrase: "Hold up your head again",
                    time: "02:31"
                },
                {
                    phrase: "You need to clear away",
                    time: "02:49"
                },
                {
                    phrase: "All the jetsam in your brain",
                    time: "02:52"
                },
                {
                    phrase: "And face the truth",
                    time: "02:56"
                },
                {
                    phrase: "Well love can make amends",
                    time: "03:04"
                },
                {
                    phrase: "While the darkness always ends",
                    time: "03:08"
                },
                {
                    phrase: "You're still alone",
                    time: "03:11"
                },
                {
                    phrase: "So drive home",
                    time: "03:15"
                },
                
                {
                    phrase: "Drive home",
                    time: "03:23"
                },
                {
                    phrase: "Drive home",
                    time: "03:27"
                },
                {
                    phrase: "Drive home",
                    time: "03:38"
                },
                {
                    phrase: "Drive home",
                    time: "03:42"
                },
            
                {
                    phrase: "PRELUDE...",
                    time: "04:18"
                },
                {
                    phrase: "SOLO...",
                    time: "05:07"
                },

            ]
        },

        {   
            id: 3,
            albumPath: 'https://s2.glbimg.com/jyQw61FDISK4PQN7ey8Y_dXcOow=/0x0:1283x1134/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2021/B/K/aOxZEsRny0zkDIZBgJhA/foto-2-tarcisio.jpg',
            author: 'Tarcizio do Acordeon',
            name: 'Protecao de Tela',
            releaseYear: 2021,
            fileName: `PROTEÇÃO DE TELA - Tarcísio do Acordeon (DVD Meu Sonho) (128 kbps).mp3`,
            duration: '3:37'
        },
        {
            id: 4,
            albumPath: 'https://cdn.mos.cms.futurecdn.net/f4AnJxT2YZuN4bGY593Vgi.png',
            author: 'Steve Wilson',
            name: 'Drive Home',
            releaseYear: 2013,
            fileName: `Steven Wilson - Drive Home (128 kbps).mp3`,
            duration: '8:21'
        },
        {   
            id: 5,
            albumPath: 'https://s2.glbimg.com/jyQw61FDISK4PQN7ey8Y_dXcOow=/0x0:1283x1134/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2021/B/K/aOxZEsRny0zkDIZBgJhA/foto-2-tarcisio.jpg',
            author: 'Tarcizio do Acordeon',
            name: 'Protecao de Tela',
            releaseYear: 2021,
            fileName: `PROTEÇÃO DE TELA - Tarcísio do Acordeon (DVD Meu Sonho) (128 kbps).mp3`,
            duration: '3:37'
        },
        {
            id: 6,
            albumPath: 'https://cdn.mos.cms.futurecdn.net/f4AnJxT2YZuN4bGY593Vgi.png',
            author: 'Steve Wilson',
            name: 'Drive Home',
            releaseYear: 2013,
            fileName: `Steven Wilson - Drive Home (128 kbps).mp3`,
            duration: '8:21'
        },

        {   
            id: 7,
            albumPath: 'https://s2.glbimg.com/jyQw61FDISK4PQN7ey8Y_dXcOow=/0x0:1283x1134/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2021/B/K/aOxZEsRny0zkDIZBgJhA/foto-2-tarcisio.jpg',
            author: 'Tarcizio do Acordeon',
            name: 'Protecao de Tela',
            releaseYear: 2021,
            fileName: `PROTEÇÃO DE TELA - Tarcísio do Acordeon (DVD Meu Sonho) (128 kbps).mp3`,
            duration: '3:37'
        },
        {
            id: 8,
            albumPath: 'https://cdn.mos.cms.futurecdn.net/f4AnJxT2YZuN4bGY593Vgi.png',
            author: 'Steve Wilson',
            name: 'Drive Home',
            releaseYear: 2013,
            fileName: `Steven Wilson - Drive Home (128 kbps).mp3`,
            duration: '8:21'
        },

        {   
            id: 9,
            albumPath: 'https://s2.glbimg.com/jyQw61FDISK4PQN7ey8Y_dXcOow=/0x0:1283x1134/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2021/B/K/aOxZEsRny0zkDIZBgJhA/foto-2-tarcisio.jpg',
            author: 'Tarcizio do Acordeon',
            name: 'Protecao de Tela',
            releaseYear: 2021,
            fileName: `PROTEÇÃO DE TELA - Tarcísio do Acordeon (DVD Meu Sonho) (128 kbps).mp3`,
            duration: '3:37'
        },
        {
            id: 10,
            albumPath: 'https://cdn.mos.cms.futurecdn.net/f4AnJxT2YZuN4bGY593Vgi.png',
            author: 'Steve Wilson',
            name: 'Drive Home',
            releaseYear: 2013,
            fileName: `Steven Wilson - Drive Home (128 kbps).mp3`,
            duration: '8:21'
        },

        {   
            id: 11,
            albumPath: 'https://s2.glbimg.com/jyQw61FDISK4PQN7ey8Y_dXcOow=/0x0:1283x1134/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2021/B/K/aOxZEsRny0zkDIZBgJhA/foto-2-tarcisio.jpg',
            author: 'Tarcizio do Acordeon',
            name: 'Protecao de Tela',
            releaseYear: 2021,
            fileName: `PROTEÇÃO DE TELA - Tarcísio do Acordeon (DVD Meu Sonho) (128 kbps).mp3`,
            duration: '3:37'
        },
        {
            id: 12,
            albumPath: 'https://cdn.mos.cms.futurecdn.net/f4AnJxT2YZuN4bGY593Vgi.png',
            author: 'Steve Wilson',
            name: 'Drive Home',
            releaseYear: 2013,
            fileName: `Steven Wilson - Drive Home (128 kbps).mp3`,
            duration: '8:21'
        },

        {   
            id: 13,
            albumPath: 'https://s2.glbimg.com/jyQw61FDISK4PQN7ey8Y_dXcOow=/0x0:1283x1134/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2021/B/K/aOxZEsRny0zkDIZBgJhA/foto-2-tarcisio.jpg',
            author: 'Tarcizio do Acordeon',
            name: 'Protecao de Tela',
            releaseYear: 2021,
            fileName: `PROTEÇÃO DE TELA - Tarcísio do Acordeon (DVD Meu Sonho) (128 kbps).mp3`,
            duration: '3:37'
        },
        {
            id: 14,
            albumPath: 'https://cdn.mos.cms.futurecdn.net/f4AnJxT2YZuN4bGY593Vgi.png',
            author: 'Steve Wilson',
            name: 'Drive Home',
            releaseYear: 2013,
            fileName: `Steven Wilson - Drive Home (128 kbps).mp3`,
            duration: '8:21'
        },
        
            
    ]    
    );}
