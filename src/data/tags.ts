import { TagSM } from '../models/tag.model'

export const TAGS_COLORS: { [key: string]: string } = {
  race: 'red',
  proficiency: 'magenta',
  location: 'purple',
  fraction: 'geekblue',
}

export const RACES_TAGS: TagSM[] = [
  {
    id: 'dwarf',
    name: 'Дварф',
    type: 'race'
  },
  {
    id: 'gnome',
    name: 'Гном',
    type: 'race'
  },
  {
    id: 'human',
    name: 'Человек',
    type: 'race'
  },
  {
    id: 'half_elf',
    name: 'Полуэльф',
    type: 'race'
  },
  {
    id: 'undead',
    name: 'Нежить',
    type: 'race'
  },
  {
    id: 'giant',
    name: 'Великан',
    type: 'race'
  },
  {
    id: 'half_orc',
    name: 'Полуорк',
    type: 'race'
  },
  {
    id: 'tiefling',
    name: 'Тифлинг',
    type: 'race'
  },
  {
    id: 'elf',
    name: 'Эльф',
    type: 'race'
  },
]

export const PROFICIENCIES_TAGS: TagSM[] = [
  {
    id: 'druid',
    name: 'Друид',
    type: 'proficiency'
  },
  {
    id: 'artificer',
    name: 'Изобретатель',
    type: 'proficiency'
  },
  {
    id: 'alchemist',
    name: 'Алхимик',
    type: 'proficiency'
  },
  {
    id: 'blacksmith',
    name: 'Кузнец',
    type: 'proficiency'
  },
  {
    id: 'fighter',
    name: 'Воин',
    type: 'proficiency'
  },
  {
    id: 'rogue',
    name: 'Разбойник',
    type: 'proficiency'
  },
  {
    id: 'warlock',
    name: 'Колдун',
    type: 'proficiency'
  },
  {
    id: 'paladin',
    name: 'Паладин',
    type: 'proficiency'
  },
  {
    id: 'mage',
    name: 'Маг',
    type: 'proficiency'
  },
]

export const LOCATIONS_TAGS: TagSM[] = [
  {
    id: 'kir_city',
    name: 'Кирь',
    type: 'location'
  },
  {
    id: 'verden',
    name: 'Верден',
    type: 'location'
  },
  {
    id: 'westrock',
    name: 'Вестрок',
    type: 'location'
  },
  {
    id: 'orzammar',
    name: 'Орзаммар',
    type: 'location'
  },
  {
    id: 'orzammar_city',
    name: 'Орзаммар(город)',
    type: 'location'
  },
  {
    id: 'kindvar',
    name: 'Киндвар',
    type: 'location'
  },
  {
    id: 'windeheim',
    name: 'Виндхейм',
    type: 'location'
  },
  {
    id: 'edena',
    name: 'Эдена',
    type: 'location'
  },
  {
    id: 'dale',
    name: 'Дейл',
    type: 'location'
  },
]

export const FRACTIONS_TAGS: TagSM[] = [
  {
    id: 'kir_craft_guild',
    name: 'Ремесленная гильдия Кири',
    type: 'fraction'
  },
  {
    id: 'westrock_craft_guild',
    name: 'Ремесленная гильдия Вестрока',
    type: 'fraction'
  },
  {
    id: 'windeheim_resistance',
    name: 'Сопротивление Виндхейма',
    type: 'fraction'
  },
  {
    id: 'windeheim_castle',
    name: 'Замок Виндхейма',
    type: 'fraction'
  },
  {
    id: 'northern_giants',
    name: 'Великаны севера',
    type: 'fraction'
  },
  {
    id: 'hammerers',
    name: 'Молотобойцы',
    type: 'fraction'
  },
  {
    id: 'primordial_flame_church',
    name: 'Церковь Первородного Пламени',
    type: 'fraction'
  },
]

export const OTHER_TAGS: TagSM[] = [
  {
    id: 'cursed_mark',
    name: 'Метка'
  },
]

const TAGS: TagSM[] = [
  ...RACES_TAGS,
  ...PROFICIENCIES_TAGS,
  ...LOCATIONS_TAGS,
  ...FRACTIONS_TAGS,
  ...OTHER_TAGS,
]
export default TAGS