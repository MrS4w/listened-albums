const albums = [
  {
    artist: 'The Beatles',
    name: 'Please Please Me',
    releaseYear: 1963,
    cover:
      'https://upload.wikimedia.org/wikipedia/pt/thumb/4/49/The_Beatles_-_Please_Please_Me.jpg/220px-The_Beatles_-_Please_Please_Me.jpg',
  },
  {
    artist: 'The Beatles',
    name: 'With The Beatles',
    releaseYear: 1963,
    cover:
      'https://upload.wikimedia.org/wikipedia/pt/thumb/b/bc/The_Beatles_-_With_the_Beatles.jpg/220px-The_Beatles_-_With_the_Beatles.jpg',
  },
  {
    artist: 'Three Days Grace',
    name: 'Three Days Grace',
    releaseYear: 2003,
    cover:
      'https://is1-ssl.mzstatic.com/image/thumb/Music/v4/04/79/6b/04796b5e-e015-4c94-05a0-3cacefc1e307/source/1200x1200bb.jpg',
  },
  {
    artist: 'The Beatles',
    name: "A Hard Day's Night",
    releaseYear: 1964,
    cover:
      'https://upload.wikimedia.org/wikipedia/pt/thumb/2/2f/A-hard-days-night.jpg/200px-A-hard-days-night.jpg',
  },
  {
    artist: 'Iron Maiden',
    name: 'Somewhere in Time',
    releaseYear: 1986,
    cover:
      'https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Iron_Maiden_-_Somewhere_in_Time.jpg/220px-Iron_Maiden_-_Somewhere_in_Time.jpg',
  },
  {
    artist: 'Black Sabbath',
    name: 'Master of Reality',
    releaseYear: 1971,
    cover: 'https://i.ebayimg.com/images/g/n~AAAOSwCgNbuMdj/s-l300.jpg',
  },
  {
    artist: 'Judas Priest',
    name: 'British Steel',
    releaseYear: 1980,
    cover:
      'https://www.yurisrecords.com/wp-content/uploads/2017/01/judas-priest-british-steel.jpg',
  },
  {
    artist: 'Ratt',
    name: 'Detonator',
    releaseYear: 1990,
    cover: 'https://upload.wikimedia.org/wikipedia/en/6/6f/DetonatorRatt.jpg',
  },
  {
    artist: 'Misfits',
    name: 'Famous Monsters',
    releaseYear: 1999,
    cover:
      'https://upload.wikimedia.org/wikipedia/en/c/cb/Misfits_-_Famous_Monsters_cover.jpg',
  },
  {
    artist: 'Sex Pistols',
    name: "Never Mind the Bollocks, Here's the Sex Pistols",
    releaseYear: 1977,
    cover:
      'https://upload.wikimedia.org/wikipedia/pt/3/33/NevermindTheBollocks.jpg',
  },
  {
    artist: 'Green Day',
    name: 'Revolution Radio',
    releaseYear: 2016,
    cover:
      'https://upload.wikimedia.org/wikipedia/en/thumb/1/18/GreenDayRevRad.jpg/220px-GreenDayRevRad.jpg',
  },
  {
    artist: 'Rush',
    name: 'Fly by Night',
    releaseYear: 1975,
    cover:
      'https://upload.wikimedia.org/wikipedia/en/0/00/Rush_Fly_by_Night.jpg',
  },
  {
    artist: 'Pantera',
    name: 'Cowboys from Hell',
    releaseYear: 1990,
    cover:
      'https://images-na.ssl-images-amazon.com/images/I/91gDINDQ7sL._SL1425_.jpg',
  },
  {
    artist: 'Dio',
    name: 'Strange Highways',
    releaseYear: 1993,
    cover:
      'https://upload.wikimedia.org/wikipedia/en/4/40/DioStrangeHighways.jpg',
  },
  {
    artist: 'Black Sabbath',
    name: 'Sabotage',
    releaseYear: 1975,
    cover:
      'https://upload.wikimedia.org/wikipedia/en/thumb/1/10/Black_Sabbath_Sabotage.jpg/220px-Black_Sabbath_Sabotage.jpg',
  },
  {
    artist: 'Aerosmith',
    name: 'Pump',
    releaseYear: 1989,
    cover: 'https://upload.wikimedia.org/wikipedia/en/2/20/Aerosmith_Pump.jpg',
  },
  {
    artist: 'Black Sabbath',
    name: 'Black Sabbath',
    releaseYear: 1970,
    cover:
      'https://upload.wikimedia.org/wikipedia/pt/d/da/Black_Sabbath_debut_album.jpg',
  },
  {
    artist: 'Elf',
    name: 'Elf',
    releaseYear: 1972,
    cover:
      'https://upload.wikimedia.org/wikipedia/en/thumb/4/4b/Elf-Elf.jpg/220px-Elf-Elf.jpg',
  },
  {
    artist: 'AC/DC',
    name: 'High Voltage',
    releaseYear: 1976,
    cover:
      'https://cdn-s3.allmusic.com/release-covers/500/0000/279/0000279905.jpg',
  },
  {
    artist: 'Metallica',
    name: 'Ride The Lightning',
    releaseYear: 1984,
    cover:
      'https://images-na.ssl-images-amazon.com/images/I/71VpqI19tpL._AC_SY355_.jpg',
  },
  {
    artist: 'Raul Seixas',
    name: 'Krig-ha, Bandolo!',
    releaseYear: 1973,
    cover: 'https://upload.wikimedia.org/wikipedia/pt/7/75/KrigHaBandolo.jpg',
  },
  {
    artist: 'Aerosmith',
    name: 'Aerosmith',
    releaseYear: 1973,
    cover:
      'https://upload.wikimedia.org/wikipedia/en/5/58/Aerosmith_-_Aerosmith.jpg',
  },
  {
    artist: 'Slayer',
    name: 'Reign In Blood',
    releaseYear: 1986,
    cover:
      'https://upload.wikimedia.org/wikipedia/pt/1/13/Reign_in_blood_-_slayer_-_1986.jpg',
  },
  {
    artist: 'Misfits',
    name: 'American Psycho',
    releaseYear: 1997,
    cover:
      'https://images-na.ssl-images-amazon.com/images/I/713yDJUWZ2L._AC_SY355_.jpg',
  },
  {
    artist: 'Pearl Jam',
    name: 'Ten',
    releaseYear: 1991,
    cover: 'https://images-na.ssl-images-amazon.com/images/I/61-PXKEROvL.jpg',
  },
  {
    artist: 'Black Sabbath',
    name: 'Sabbath Bloody Sabbath',
    releaseYear: 1973,
    cover:
      'https://townsquare.media/site/366/files/2015/09/Sabbath-Bloody-Sabbath.png?w=980&q=75',
  },
  {
    artist: 'KISS',
    name: 'Kiss',
    releaseYear: 1974,
    cover:
      'https://upload.wikimedia.org/wikipedia/en/thumb/a/ab/Kiss_first_album_cover.jpg/220px-Kiss_first_album_cover.jpg',
  },
  {
    artist: 'Dio',
    name: 'Master of the Moon',
    releaseYear: 2004,
    cover:
      'https://upload.wikimedia.org/wikipedia/en/thumb/f/fb/DioMasterOfTheMoon.jpg/220px-DioMasterOfTheMoon.jpg',
  },
  {
    artist: 'Rage Against the Machine',
    name: 'Rage Against the Machine',
    releaseYear: 1992,
    cover:
      'https://upload.wikimedia.org/wikipedia/en/1/1a/RageAgainsttheMachineRageAgainsttheMachine.jpg',
  },
  {
    artist: 'Raul Seixas',
    name: 'Novo Aeon',
    releaseYear: 1975,
    cover:
      'https://upload.wikimedia.org/wikipedia/pt/thumb/c/c4/Novo-aeon.jpeg/220px-Novo-aeon.jpeg',
  },
  {
    artist: 'Lynyrd Skynyrd',
    name: 'Second Helping',
    releaseYear: 1974,
    cover:
      'https://upload.wikimedia.org/wikipedia/en/thumb/c/c5/SecondHelpingLynyrdSkynyrd.jpg/220px-SecondHelpingLynyrdSkynyrd.jpg',
  },
  {
    artist: 'Ozzy Osbourne',
    name: 'Ordinary Man',
    releaseYear: 2020,
    cover:
      'https://whiplash.net/imagens_promo/ozzyosbourne_capa_ordinaryman.jpg',
  },
  {
    artist: 'Ozzy Osbourne',
    name: 'No More Tears',
    releaseYear: 1991,
    cover: 'https://i.ebayimg.com/images/g/OncAAOSwJstasr3K/s-l400.jpg',
  },
  {
    artist: 'Iron Maiden',
    name: 'Iron Maiden',
    releaseYear: 1980,
    cover:
      'https://static.fnac-static.com/multimedia/Images/FR/NR/99/56/5f/6248089/1540-1/tsp20140827103036/Iron-Maiden.jpg',
  },
  {
    artist: 'Pantera',
    name: 'Far Beyond Driven',
    releaseYear: 1994,
    cover:
      'https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Pantera-FarBeyondDriven.jpg/220px-Pantera-FarBeyondDriven.jpg',
  },
  {
    artist: 'Raulzito e os Panteras',
    name: 'Raulzito e os Panteras',
    releaseYear: 1968,
    cover:
      'https://upload.wikimedia.org/wikipedia/pt/thumb/d/d4/Raulzito_e_os_Panteras.jpg/220px-Raulzito_e_os_Panteras.jpg',
  },
  {
    artist: 'Radiohead',
    name: 'In Rainbows',
    releaseYear: 2007,
    cover: 'https://upload.wikimedia.org/wikipedia/en/1/14/Inrainbowscover.png',
  },
  {
    artist: 'Raimundos',
    name: 'Só no Forevis',
    releaseYear: 1999,
    cover:
      'https://upload.wikimedia.org/wikipedia/pt/thumb/1/1e/SoNoForevis.jpg/220px-SoNoForevis.jpg',
  },
  {
    artist: 'Ozzy Osbourne',
    name: 'Blizzard of Ozz',
    releaseYear: 1980,
    cover:
      'https://images-na.ssl-images-amazon.com/images/I/71shg4iED3L._AC_SL1500_.jpg',
  },
  {
    artist: 'Alice Cooper',
    name: "School's Out",
    releaseYear: 1972,
    cover: 'http://roadie-metal.com/wp-content/uploads/2019/02/schools-out.png',
  },
  {
    artist: 'Angra',
    name: 'Angels Cry',
    releaseYear: 1993,
    cover: 'https://upload.wikimedia.org/wikipedia/pt/7/78/AngraAngelsCry.jpg',
  },
  {
    artist: 'My Chemical Romance',
    name: 'Three Cheers for Sweet Revenge',
    releaseYear: 2004,
    cover:
      'https://upload.wikimedia.org/wikipedia/pt/thumb/a/a6/Three_Cheers_for_Sweet_Revenge.jpg/220px-Three_Cheers_for_Sweet_Revenge.jpg',
  },
  {
    artist: 'David Bowie',
    name: 'The Rise and Fall of Ziggy Stardust and the Spiders from Mars',
    releaseYear: 1972,
    cover:
      'https://upload.wikimedia.org/wikipedia/en/thumb/0/01/ZiggyStardust.jpg/220px-ZiggyStardust.jpg',
  },
  {
    artist: 'Rush',
    name: 'Permanent Waves',
    releaseYear: 1980,
    cover:
      'https://upload.wikimedia.org/wikipedia/en/thumb/5/51/Rush_Permanent_Waves.jpg/220px-Rush_Permanent_Waves.jpg',
  },
  {
    artist: 'Scorpions',
    name: 'Love at First Sting',
    releaseYear: 1984,
    cover:
      'https://images-na.ssl-images-amazon.com/images/I/51VbnUHBLmL._AC_SY355_.jpg',
  },
  {
    artist: 'Manowar',
    name: 'Kings of Metal',
    releaseYear: 1988,
    cover:
      'https://www.hrrshop.de/bilder/produkte/gross/MANOWAR-Kings-of-Metal-LP-GOLD.jpg',
  },
  {
    artist: 'Rodox',
    name: 'Estreito',
    releaseYear: 2002,
    cover:
      'https://upload.wikimedia.org/wikipedia/pt/f/fc/Rodox_-_Estreito_-_2002.jpg',
  },
  {
    artist: 'AC/DC',
    name: 'Back In Black',
    releaseYear: 1980,
    cover:
      'https://upload.wikimedia.org/wikipedia/commons/9/92/ACDC_Back_in_Black.png',
  },
  {
    artist: 'Heaven & Hell',
    name: 'The Devil You Know',
    releaseYear: 2009,
    cover: 'https://e.snmc.io/i/600/w/1447e4263b3e5e3634ad93e2178cbcde/2602356',
  },
  {
    artist: 'Raul Seixas, Marcelo Nova',
    name: 'A Panela do Diabo',
    releaseYear: 1989,
    cover: 'https://upload.wikimedia.org/wikipedia/pt/6/68/PanelaDiabo.jpg',
  },
  {
    artist: 'Slayer',
    name: 'South of Heaven',
    releaseYear: 1988,
    cover: 'https://upload.wikimedia.org/wikipedia/pt/5/5e/Southofheaven.jpg',
  },
  {
    artist: 'Sepultura',
    name: 'Beneath the Remains',
    releaseYear: 1989,
    cover:
      'https://upload.wikimedia.org/wikipedia/en/thumb/5/51/Sepultura_-_Beneath_the_Remains.jpg/220px-Sepultura_-_Beneath_the_Remains.jpg',
  },
  {
    artist: 'Manowar',
    name: 'Fighting the World',
    releaseYear: 1987,
    cover:
      'https://upload.wikimedia.org/wikipedia/en/2/23/ManowarFightingtheworld.jpg',
  },
];
