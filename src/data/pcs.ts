import CharacterDataModel from '../models/character-data.model'
import BrockImage from '../assets/images/Brock.png'

const PCS: CharacterDataModel[] = [
  {
    id: 'brock',
    name: 'Брок',
    image: BrockImage,
    race: 'gnome',
    description: 'Изобретатель из Кири.',
    tags: ['gnome', 'artificer', 'orzammar', 'orzammar_city', 'kir_city', 'kir_craft_guild']
  },
  {
    id: 'orianna',
    name: 'Орианна',
    race: 'tiefling',
    description: 'Воин-телекинетик из Вестрока.',
    tags: ['tiefling', 'fighter', 'verden', 'westrock']
  },
  {
    id: 'laraisul',
    name: 'Лараисул',
    race: 'elf',
    description: 'Разбойник из Вестрока.',
    tags: ['elf', 'rogue', 'verden', 'westrock']
  },
  {
    id: 'jamie',
    name: 'Джейми',
    race: 'half-elf',
    description: 'Чернокнижник из Дэйла.',
    tags: ['half_elf', 'warlock', 'eden', 'dale']
  },
  {
    id: 'kadrick',
    name: 'Кадрик',
    race: 'dwarf',
    description: 'Дворф-паладин из Орзаммара.',
    tags: ['dwarf', 'paladin', 'orzammar', 'orzammar_city', 'primordial_flame_church']
  }
]

 export default PCS
