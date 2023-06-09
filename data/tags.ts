import { TagSM } from '../src/models/tag.model'

export const TAGS_COLORS: { [key: string]: string } = {
  race: 'red',
  proficiency: 'orange',
  place: 'blue',
  fraction: 'purple',
}

const TAGS: TagSM[] = [
  // region Races
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
  // endregion
  // region Proficiencies
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
  // endregion
  // region Places
  {
    id: 'kir_city',
    name: 'Кирь',
    type: 'place'
  },
  {
    id: 'verden',
    name: 'Верден',
    type: 'place'
  },
  {
    id: 'westrock',
    name: 'Вестрок',
    type: 'place'
  },
  {
    id: 'orzammar',
    name: 'Орзаммар',
    type: 'place'
  },
  {
    id: 'orzammar_city',
    name: 'Орзаммар(город)',
    type: 'place'
  },
  {
    id: 'kindvar',
    name: 'Киндвар',
    type: 'place'
  },
  {
    id: 'windeheim',
    name: 'Виндхейм',
    type: 'place'
  },
  {
    id: 'edena',
    name: 'Эдена',
    type: 'place'
  },
  {
    id: 'dale',
    name: 'Дейл',
    type: 'place'
  },
  // endregion
  // region Fractions
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
  // endregion
  // region Other
  {
    id: 'cursed_mark',
    name: 'Метка'
  },
  // endregion
]
export default TAGS