const albums = [
  {
    artist: 'Green Day',
    name: '¡TRÉ!',
    releaseYear: 2012,
    cover:
      'https://upload.wikimedia.org/wikipedia/en/thumb/2/2e/Green_Day_-_Tr%C3%A9%21_cover.jpg/220px-Green_Day_-_Tr%C3%A9%21_cover.jpg'
  },
  {
    artist: 'Three Days Grace',
    name: 'Human',
    releaseYear: 2015,
    cover:
      'https://upload.wikimedia.org/wikipedia/en/1/1b/Three_Days_Grace_Human.jpg'
  },
  {
    artist: 'The Doors',
    name: 'L.A. Woman',
    releaseYear: 1971,
    cover:
      'https://upload.wikimedia.org/wikipedia/en/thumb/4/41/The_Doors_-_L.A._Woman.jpg/220px-The_Doors_-_L.A._Woman.jpg'
  },
  {
    artist: 'Blink-182',
    name: 'Enema Of The State',
    releaseYear: 1999,
    cover:
      'https://upload.wikimedia.org/wikipedia/en/thumb/a/a6/Blink-182_-_Enema_of_the_State_cover.jpg/220px-Blink-182_-_Enema_of_the_State_cover.jpg'
  },
  {
    artist: 'Charlie Brown Jr.',
    name: 'Acústico (Ao Vivo)',
    releaseYear: 2003,
    cover:
      'https://http2.mlstatic.com/cd-charlie-brown-jr-acustico-mtv-D_NQ_NP_482401-MLB20316078302_062015-F.jpg'
  },
  {
    artist: 'Barns Courtney',
    name: 'The Attractions Of Youth',
    releaseYear: 2017,
    cover: 'https://e.snmc.io/i/300/w/451877f821fe772b57bcb035dec6bc54/6687174'
  },
  {
    artist: 'Panic! at the Disco',
    name: 'Pretty. Odd.',
    releaseYear: 2008,
    cover:
      'https://upload.wikimedia.org/wikipedia/en/0/09/PatD_-_Pretty._Odd..jpg'
  },
  {
    artist: 'Misfits',
    name: 'Project 1950',
    releaseYear: 2003,
    cover:
      'https://images-na.ssl-images-amazon.com/images/I/51l1RbxuuDL._SY355_.jpg'
  },
  {
    artist: 'Audioslave',
    name: 'Audioslave',
    releaseYear: 2002,
    cover:
      'https://upload.wikimedia.org/wikipedia/en/a/ac/Audioslave_-_Audioslave.jpg'
  },
  {
    artist: 'Matanza',
    name: 'Thunder Dope',
    releaseYear: 2012,
    cover: 'https://i.imgur.com/kW5Z9Bd.png'
  },
  {
    artist: 'Foo Fighters',
    name: 'There Is Nothing Left To Lose',
    releaseYear: 1999,
    cover:
      'https://upload.wikimedia.org/wikipedia/en/8/8b/Foo_Fighters_-_There_Is_Nothing_Left_to_Lose.jpg'
  },
  {
    artist: 'Linkin Park',
    name: 'Hybrid Theory',
    releaseYear: 2000,
    cover:
      'https://upload.wikimedia.org/wikipedia/en/thumb/c/c9/Linkin_park_hybrid_theory.jpg/220px-Linkin_park_hybrid_theory.jpg'
  },
  {
    artist: 'Catedral',
    name: 'Acima do Nível do Mar',
    releaseYear: 2003,
    cover:
      'https://upload.wikimedia.org/wikipedia/pt/thumb/f/f0/Catedral_-_Acima_do_N%C3%ADvel_do_Mar.jpg/220px-Catedral_-_Acima_do_N%C3%ADvel_do_Mar.jpg'
  },
  {
    artist: 'Matanza',
    name: 'Santa Madre Cassino',
    releaseYear: 2006,
    cover:
      'https://armazemdovinil.com/wp-content/uploads/2014/11/LP-Matanza-Santa-Madre-Cassino-510x510.jpg'
  },
  {
    artist: 'Legião Urbana',
    name: 'As Quatro Estações',
    releaseYear: 1989,
    cover:
      'https://upload.wikimedia.org/wikipedia/pt/e/e9/Legi%C3%A3o_Urbana_-_As_Quatro_Esta%C3%A7%C3%B5es.jpg'
  },
  {
    artist: 'Legião Urbana',
    name: 'Dois',
    releaseYear: 1986,
    cover:
      'https://upload.wikimedia.org/wikipedia/pt/7/72/Legi%C3%A3o_Urbana_-_Dois.jpg'
  },
  {
    artist: 'Legião Urbana',
    name: 'V',
    releaseYear: 1991,
    cover:
      'https://upload.wikimedia.org/wikipedia/pt/5/56/Legi%C3%A3o_Urbana_-_V.jpg'
  },
  {
    artist: 'Legião Urbana',
    name: 'O Descobrimento Do Brasil',
    releaseYear: 1993,
    cover:
      'https://upload.wikimedia.org/wikipedia/en/thumb/a/a3/Descobrimento_do_brasil.jpg/220px-Descobrimento_do_brasil.jpg'
  },
  {
    artist: 'Iron Maiden',
    name: 'Seventh Son Of A Seventh Son',
    releaseYear: 1988,
    cover:
      'https://upload.wikimedia.org/wikipedia/pt/c/c0/Iron_Maiden_-_Seventh_Son_Of_A_Seventh_Son.jpg'
  },
  {
    artist: 'Led Zeppelin',
    name: 'Led Zeppelin IV',
    releaseYear: 1971,
    cover: 'https://upload.wikimedia.org/wikipedia/pt/4/4b/LedZeppelinIV.jpg'
  },
  {
    artist: 'Inocentes',
    name: 'Pânico em SP',
    releaseYear: 1986,
    cover: 'http://www.museudocd.com.br/produtos/prod23599.jpg'
  },
  {
    artist: 'Ramones',
    name: 'Brain Drain',
    releaseYear: 1989,
    cover:
      'https://http2.mlstatic.com/cd-ramones-brain-drain-D_NQ_NP_936315-MLB27785263749_072018-F.jpg'
  },
  {
    artist: 'Panic! at the Disco',
    name: 'Death Of A Bachelor',
    releaseYear: 2016,
    cover:
      'https://images-na.ssl-images-amazon.com/images/I/81hKk1Evy%2BL._SL1422_.jpg'
  },
  {
    artist: 'Matanza Inc',
    name:
      'Crônicas do Post Mortem: Um Guia Para Demônios e Espíritos Obsessores',
    releaseYear: 2019,
    cover:
      'http://www.tenhomaisdiscosqueamigos.com/wp-content/uploads/2019/05/matanza-inc-cronicas-post-mortem-capa.jpg'
  },
  {
    artist: 'Raimundos, Ultraje a Rigor',
    name: 'Ultraje a Rigor X Raimundos',
    releaseYear: 2012,
    cover:
      'https://upload.wikimedia.org/wikipedia/pt/3/3b/Ultrajearigorvsraimundos.jpg'
  },
  {
    artist: 'Iron Maiden',
    name: 'Powerslave',
    releaseYear: 1984,
    cover:
      'https://lastfm.freetls.fastly.net/i/u/770x0/d986e23bb975697ca430073c96c18c08.jpg'
  },
  {
    artist: 'Iron Maiden',
    name: 'The Number Of The Beast',
    releaseYear: 1982,
    cover:
      'https://http2.mlstatic.com/iron-maiden-the-number-of-the-beast-D_NQ_NP_666772-MLB26992170434_032018-F.jpg'
  },
  {
    artist: 'Europe',
    name: 'The Final Countdown',
    releaseYear: 1986,
    cover: 'https://popsdiscos.com.br/images/uploads/SBM69843-2%20EUROPE.jpg'
  },
  {
    artist: 'Raimundos',
    name: 'Éramos 4',
    releaseYear: 2001,
    cover:
      'https://upload.wikimedia.org/wikipedia/pt/e/e8/Raimundos_-_%C3%89ramos_4_-_2001.jpg'
  },
  {
    artist: 'Misfits',
    name: 'Static Age',
    releaseYear: 1997,
    cover:
      'https://upload.wikimedia.org/wikipedia/en/thumb/d/d9/Misfits_-_Static_Age_cover.jpg/220px-Misfits_-_Static_Age_cover.jpg'
  },
  {
    artist: 'Mötley Crüe',
    name: 'Shout At The Devil',
    releaseYear: 1983,
    cover:
      'https://images-na.ssl-images-amazon.com/images/I/81GNOBE273L._SL1500_.jpg'
  },
  {
    artist: 'Ozzy Osbourne',
    name: 'Diary Of A Madman',
    releaseYear: 1981,
    cover:
      'https://upload.wikimedia.org/wikipedia/pt/thumb/c/ce/Diary-of-a-Madman.jpg/220px-Diary-of-a-Madman.jpg'
  },
  {
    artist: 'Mötley Crüe',
    name: 'Too Fast For Love',
    releaseYear: 1981,
    cover: 'http://roadie-metal.com/wp-content/uploads/2018/11/CD17574.jpg'
  },
  {
    artist: 'Metallica',
    name: 'Master Of Puppets',
    releaseYear: 1986,
    cover:
      'https://upload.wikimedia.org/wikipedia/pt/thumb/4/4d/Master_of_Puppets.jpg/220px-Master_of_Puppets.jpg'
  },
  {
    artist: 'Nirvana',
    name: 'In Utero',
    releaseYear: 1993,
    cover: 'https://upload.wikimedia.org/wikipedia/pt/b/b4/InUtero.jpeg'
  },
  {
    artist: 'Ramones',
    name: 'Ramones',
    releaseYear: 1976,
    cover:
      'https://upload.wikimedia.org/wikipedia/en/b/bb/Ramones_-_Ramones_cover.jpg'
  },
  {
    artist: 'Radiohead',
    name: 'OK Computer',
    releaseYear: 1997,
    cover:
      'https://upload.wikimedia.org/wikipedia/en/thumb/a/a1/Radiohead.okcomputer.albumart.jpg/220px-Radiohead.okcomputer.albumart.jpg'
  },
  {
    artist: 'Black Sabbath',
    name: 'Paranoid',
    releaseYear: 1970,
    cover:
      'https://images-na.ssl-images-amazon.com/images/I/51557Q%2Bj2cL._SY355_.jpg'
  },
  {
    artist: 'Slipknot',
    name: 'We Are Not Your Kind',
    releaseYear: 2019,
    cover:
      'https://upload.wikimedia.org/wikipedia/en/1/18/Slipknot_-_We_Are_Not_Your_Kind.png'
  },
  {
    artist: 'Anthrax',
    name: 'Fistful of Metal',
    releaseYear: 1984,
    cover: 'https://m.media-amazon.com/images/I/817qhS4vfEL._SS500_.jpg'
  },
  {
    artist: 'Ghost',
    name: 'Prequelle',
    releaseYear: 2018,
    cover: 'https://upload.wikimedia.org/wikipedia/pt/6/6a/Prequelle.jpg'
  },
  {
    artist: 'Nervosa',
    name: 'Victim Of Yourself',
    releaseYear: 2014,
    cover:
      'https://studiosol-a.akamaihd.net/uploadfile/letras/albuns/8/5/e/3/406581419867449.jpg'
  },
  {
    artist: 'Avenged Sevenfold',
    name: 'Nightmare',
    releaseYear: 2010,
    cover:
      'https://upload.wikimedia.org/wikipedia/pt/thumb/2/29/Avenged-Sevenfold-Nightmare.jpg.png/220px-Avenged-Sevenfold-Nightmare.jpg.png'
  },
  {
    artist: 'Angra',
    name: 'Rebirth',
    releaseYear: 2001,
    cover:
      'https://upload.wikimedia.org/wikipedia/pt/thumb/5/5a/RebirthAngra.jpg/220px-RebirthAngra.jpg'
  },
  {
    artist: 'System Of A Down',
    name: 'Steal This Album!',
    releaseYear: 2002,
    cover: 'https://upload.wikimedia.org/wikipedia/en/4/45/StealThisAlbum.png'
  },
  {
    artist: 'Iron Maiden',
    name: 'No Prayer for the Dying',
    releaseYear: 1990,
    cover:
      'https://livrariascuritiba.vteximg.com.br/arquivos/ids/1865600-525-525/av014002_1.jpg?v=636947610598530000'
  },
  {
    artist: 'Queen',
    name: 'A Night at the Opera',
    releaseYear: 1975,
    cover:
      'https://upload.wikimedia.org/wikipedia/pt/b/bf/A_Night_at_the_Opera_Queen.jpg'
  },
  {
    artist: 'Judas Priest',
    name: 'Defenders Of The Faith',
    releaseYear: 1984,
    cover:
      'https://upload.wikimedia.org/wikipedia/en/thumb/8/87/Defenders_of_the_Faith.jpg/220px-Defenders_of_the_Faith.jpg'
  },
  {
    artist: 'Dio',
    name: 'Holy Diver',
    releaseYear: 1983,
    cover: 'https://upload.wikimedia.org/wikipedia/pt/8/85/HolyDiver.jpg'
  },
  {
    artist: 'Rainbow',
    name: 'Rising',
    releaseYear: 1976,
    cover:
      'https://upload.wikimedia.org/wikipedia/pt/thumb/5/53/Rainbow_Rising.jpg/220px-Rainbow_Rising.jpg'
  },
  {
    artist: 'Rainbow',
    name: "Ritchie Blackmore's Rainbow",
    releaseYear: 1975,
    cover:
      'https://upload.wikimedia.org/wikipedia/pt/8/8f/Rainbow_-_Ritchie_Blackmore%27s_Rainbow_%281975%29_front_cover.jpg'
  },
  {
    artist: 'Queen',
    name: 'Jazz',
    releaseYear: 1978,
    cover: 'https://upload.wikimedia.org/wikipedia/en/0/06/Queen_Jazz.png'
  },
  {
    artist: 'KISS',
    name: 'Love Gun',
    releaseYear: 1977,
    cover:
      'https://upload.wikimedia.org/wikipedia/pt/thumb/5/58/Kiss_love_gun.jpg/220px-Kiss_love_gun.jpg'
  },
  {
    artist: 'David Bowie',
    name: 'Aladdin Sane',
    releaseYear: 1973,
    cover:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQIcHWfdzM7I_9rXAx9Kdv3SFqTXS9ScKR4cMSXgolVHA3QHD3l'
  },
  {
    artist: 'David Bowie',
    name: 'Hunky Dory',
    releaseYear: 1971,
    cover:
      'https://upload.wikimedia.org/wikipedia/pt/4/40/David_Bowie_-_Hunky_Dory.jpg'
  },
  {
    artist: 'Black Sabbath',
    name: 'Dehumanizer',
    releaseYear: 1992,
    cover:
      'https://upload.wikimedia.org/wikipedia/pt/thumb/1/12/Black-sabbath-dehumanizer.jpg/220px-Black-sabbath-dehumanizer.jpg'
  },
  {
    artist: 'Raul Seixas',
    name: 'Há 10 Mil Anos Atrás',
    releaseYear: 1976,
    cover:
      'https://upload.wikimedia.org/wikipedia/en/6/6b/H%C3%A1_10_Mil_Anos_Atr%C3%A1s.jpg'
  },
  {
    artist: 'Motörhead',
    name: 'Motörhead',
    releaseYear: 1977,
    cover:
      'https://upload.wikimedia.org/wikipedia/en/thumb/3/39/Mot%C3%B6rhead_-_Mot%C3%B6rhead_%281977%29.jpg/220px-Mot%C3%B6rhead_-_Mot%C3%B6rhead_%281977%29.jpg'
  }
];
