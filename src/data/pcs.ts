import CharacterDataModel from '../models/character-data.model'
import BrockImage from '../assets/images/Brock_200x200.png'
import OriannaImage from '../assets/images/Orianna_200x200.png'
import LairasulImage from '../assets/images/Lairasul_200x200.png'

const PCS: CharacterDataModel[] = [
  {
    id: 'brock',
    name: 'Брок',
    image: BrockImage,
    race: 'gnome',
    description: 'Изобретатель из Кири.'
      + '\nБрок прожил большую часть жизни в городе Орзаммар. Учился в государственной школе магии.'
      + '\nБыл заклинателем в боевом отряде частной организации которая выполняла заказы государства, в том числе рейды'
      + ' и зачистки. Во время рейда на банду магов отряд Брока угодил в ловушку, после которой Брок чудом остался жить'
      + ' и контроль его магии стал нестабильным. Из-за неизлечимой травмы его уволили из организации.'
      + '\nБрок решил покинуть Орзаммар и отправился в город Кирь, где вступил в местную гильдию ремесленников. Там'
      + ' занимался различным ремеслом, а в свободное время углубленно изучал магические руны. Спустя год он научился'
      + ' наносить простые руны на предметы. После начал изучать Рунный Жемчуг и вскоре придумал как вернуть себе'
      + ' использование заклинаний: перчатка покрытая рунами простых заклинаний, которые активируются магическим'
      + ' механизмом, используя магию из заполненного Рунного Жемчуга.',
    tags: ['gnome', 'artificer', 'orzammar', 'orzammar_city', 'kir_city', 'kir_craft_guild']
  },
  {
    id: 'orianna',
    name: 'Орианна',
    image: OriannaImage,
    race: 'tiefling',
    description: 'Воин-телекинетик из Вестрока.',
    tags: ['tiefling', 'fighter', 'verden', 'westrock']
  },
  {
    id: 'lairasul',
    name: 'Лаирасул',
    image: LairasulImage,
    race: 'elf',
    description: 'Плут из Вестрока.',
    tags: ['elf', 'rogue', 'verden', 'westrock']
  },
  {
    id: 'jamie',
    name: 'Джейми',
    race: 'half-elf',
    description: 'Чернокнижник из Дэйла.',
    tags: ['half_elf', 'warlock', 'edena', 'dale']
  },
  {
    id: 'kadrick',
    name: 'Кадрик',
    race: 'dwarf',
    description: 'Паладин из Орзаммара.',
    tags: ['dwarf', 'paladin', 'orzammar', 'orzammar_city', 'primordial_flame_church']
  }
]

 export default PCS
