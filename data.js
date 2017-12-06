function getMapNameByID(id){
  for(let i=0;i<maps.length;i++){
    if(maps[i].id==id) return maps[i].name;
  }
}
function getChampionByID(id){
  for(let i=0;i<champions.length;i++){
    if(champions[i].id==id) return champions[i].name;
  }
}

maps = [
  {
    id: 'D57BBC373C35B426E93CB844B3C67C12',
    name: 'Mount Araz - Day'
  },
  {
    id: 'AB201E3B9454141FE9C9352CC296AD61',
    name: 'Mount Araz - Night'
  },
  {
    id: '02EF7F035729241EF81A9BC09463DD00',
    name: 'Orman Temple - Day'
  },
  {
    id: '3482480FED2AC482AA7DA471C1990591',
    name: 'Orman Temple - Night'
  },
  {
    id: '80D7970B6650D41108D71083ECF0E49E',
    name: 'Sky Ring - Day'
  },
  {
    id: '417DE573937D74E39BF40EB6CF82670B',
    name: 'Sky Ring - Night'
  },
  {
    id: '975402A5539C6491789B36DC4D26D566',
    name: 'Blackstone Arena - Day'
  },
  {
    id: '319DDC57E70174B6C85EF137BAF34E9E',
    name: 'Blackstone Arena - Night'
  },
  {
    id: '1C67FA3426A324D39BED64501C46C1E6',
    name: 'Dragon Garden - Day'
  },
  {
    id: 'FFFFE4774561141D49B46892B5CBACFA',
    name: 'Dragon Garden - Night'
  }
];
champions = [
  {
    id: '1318732017',
    name: 'Rook'
  },
  {
    id: '550061327',
    name: 'Ruh Kaan'
  },
  {
    id: '763360732',
    name: 'Shifu'
  },
  {
    id: '1422481252',
    name: 'Bakko'
  },
  {
    id: '1749055646',
    name: 'Raigon'
  },
  {
    id: '1606711539',
    name: 'Freya'
  },
  {
    id: '1208445212',
    name: 'Croak'
  },
  {
    id: '1463164578',
    name: 'Thorn'
  },
  {
    id: '65687534',
    name: 'Jade'
  },
  {
    id: '1',
    name: 'Ashka'
  },
  {
    id: '369797039',
    name: 'Varesh'
  },
  {
    id: '1377055301',
    name: 'Ezmo'
  },
  {
    id: '39373466',
    name: 'Jumong'
  },
  {
    id: '842211418',
    name: 'Iva'
  },
  {
    id: '870711570',
    name: 'Destiny'
  },
  {
    id: '154382530',
    name: 'Taya'
  },
  {
    id: '467463015',
    name: 'Lucie'
  },
  {
    id: '259914044',
    name: 'Sirius'
  },
  {
    id: '1134478706',
    name: 'Poloma'
  },
  {
    id: '543520739',
    name: 'Blossom'
  },
  {
    id: '1649551456',
    name: 'Pestilus'
  },
  {
    id: '1908945514',
    name: 'Oldur'
  },
  {
    id: '44962063',
    name: 'Pearl'
  }
];
