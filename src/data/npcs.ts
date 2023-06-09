import CharacterDataModel from '../models/character-data.model'

const NPCS: CharacterDataModel[] = [
  {
    id: 'tinker',
    name: 'Тинкер',
    type: 'NPC',
    race: 'dwarf',
    description: 'Глава гильдии ремесленников Кири.'
      + '\nБыл в сговоре с Виндхеймом, чтобы убить остальных королей взрывом в Кири. Читал свиток в защитном куполе, но'
      + ' герои прервали его. Погиб в результате взрыва.',
    tags: ['dwarf', 'kir_city', 'kir_craft_guild']
  },
  {
    id: 'chesvik',
    name: 'Чесвик',
    type: 'NPC',
    race: 'gnome',
    description: 'Заместитель главы гильдии ремесленников Кири.',
    tags: ['gnome', 'kir_city', 'kir_craft_guild']
  },
  {
    id: 'chess',
    name: 'Чесс',
    type: 'NPC',
    race: 'dwarf',
    description: 'Продавец и изобретатель из Вестрока. Состоит в гильдии торговцев и ремесленников Вестрока.'
      + ' Был в Кири во время фестиваля.',
    tags: ['dwarf', 'westrock', 'westrock_craft_guild']
  },
  {
    id: 'chonk',
    name: 'Чонк',
    type: 'NPC',
    race: 'gnome',
    description: 'Тренер псионики Орианны из Орзаммара. Был в Кири во время фестиваля.',
    tags: ['gnome', 'orzammar', 'orzammar_city']
  },
  {
    id: 'ralf',
    name: 'Ральф',
    type: 'NPC',
    race: 'human',
    description: 'Хозяин таверны “Никак” в Виндхейме. C протезом. Был в сопротивлении.',
    tags: ['human', 'kindvar', 'windeheim', 'windeheim_resistance', 'cursed_mark']
  },
  {
    id: 'braum',
    name: 'Браум',
    type: 'NPC',
    description: 'Лидер сопротивления в Виндхейме. Без руки, без глаза.',
    tags: ['kindvar', 'windeheim', 'windeheim_resistance', 'cursed_mark']
  },
  {
    id: 'mina',
    name: 'Мина',
    type: 'NPC',
    race: 'human',
    description: 'Жительница Виндхейма. Её забрали на глазах у героев из таверны "Никак" в замок, однако Трисс из'
      + ' сопротивления уговорила стражу забрать её саму вместо Мины.',
    tags: ['human', 'kindvar', 'windeheim', 'cursed_mark']
  },
  {
    id: 'triss',
    name: 'Трисс',
    type: 'NPC',
    race: 'human',
    description: 'Из сопротивления в Виндхейме. Сдалась в замок вместо девушки Мины.'
      + '\nДольф проводил эксперементальный ритуал, чтобы ценой жизни великанши Грахи избавиться от метки у Трисс. После'
      + ' прерывания ритуала Брок вернулся за ней в башню замка. Произошел небольшой взрыв, но Трисс выжила.',
    tags: ['human', 'kindvar', 'windeheim', 'windeheim_resistance', 'cursed_mark']
  },
  {
    id: 'ellis',
    name: 'Эллис',
    type: 'NPC',
    race: 'half-elf',
    description: 'Из сопротивления в Виндхейме. Отвела героев к главе сопротивления.',
    tags: ['half_elf', 'kindvar', 'windeheim', 'windeheim_resistance', 'cursed_mark']
  },
  {
    id: 'shchavli',
    name: 'Щавли Четерыхлистный',
    type: 'NPC',
    description: '',
    tags: ['druid', 'kindvar', 'windeheim', 'windeheim_resistance', 'cursed_mark']
  },
  {
    id: 'beri',
    name: 'Бэри',
    type: 'NPC',
    description: 'Из сопротивления в Виндхейме. В день разведки в замке Виндхейма он был замаскированным стражником,'
      + ' пропустившим героев в замок',
    tags: ['kindvar', 'windeheim', 'windeheim_resistance', 'cursed_mark']
  },
  {
    id: 'dermingar',
    name: 'Дермингар',
    type: 'NPC',
    description: 'Бывший король Киндвара. Чтобы избавиться от метки пожирал людей, из-за чего сам стал демоническим'
      + ' монстром. Вместе с Дальфом устроили взрыв в Кири, чтобы попытаться избавиться от метки ценой жизни других'
      + ' королей.'
      + '\nБыл убит героями.',
    tags: ['kindvar', 'windeheim', 'windeheim_castle', 'cursed_mark']
  },
  {
    id: 'frei',
    name: 'Фрей',
    type: 'NPC',
    description: 'Один из королевской элиты Виндхейма. Подготавливал взрыв в Кири. Каким-то образом пережил взрыв.'
      + ' Нашел героев и предложил вместе снести власть в Виндхейме.'
      + '\nБыл обращён в демона и убит во время сражения с королём Дермингаром.',
    tags: ['kindvar', 'windeheim', 'windeheim_castle', 'cursed_mark']
  },
  {
    id: 'dolf',
    name: 'Дольф',
    type: 'NPC',
    description: 'Придворный маг в замке Виндхейма. На самом деле именно он управлял почти всем в Киндваре.'
     + '\nИзучал метку. Думал, что метку можно снять с помощью жертвенного ритуала, пожертвовав больший объём душ.'
     + '\nБыл убит Лараисулом во время разведки в замке Виндхейма.',
    tags: ['kindvar', 'windeheim', 'windeheim_castle', 'cursed_mark']
  },
  {
    id: 'silk',
    name: 'Силк',
    type: 'NPC',
    race: 'gnome',
    description: 'Был изобретателем 50 лет назад. Его держали в заперти в пещере Клыки Мороза и заставляли крафтить'
      + ' всякое. Во время неудачного некромантского ритуала все еще был в пещере, потому умер и переродился нежитью'
      + ' прикованной к цепи. Просидел 50 лет на цепи.'
      + '\nГерои не нашли его. Отдал магический плащ Броку. После развеивания некромантской энергии он умер окончательно',
    tags: ['gnome', 'undead', 'artificer', 'kindvar']
  },
  {
    id: 'chel',
    name: 'Чел',
    type: 'NPC',
    race: 'human',
    description: 'Некромант, который хотел стать личом. Проводил ритуал в пещере Клыки Мороза. Не смог и сдох.'
      + ' Возродился в виде нежити'
      + '\nГерои победили его и после развеивания некроманской энергии он умер окончательно.',
    tags: ['human', 'undead', 'kindvar']
  },
  {
    id: 'gorm',
    name: 'Горм',
    type: 'NPC',
    race: 'giant',
    description: 'Вождь деревни великанов в Киндваре. Вечно бухает. Отказался помогать героям атаковать короля'
      + ' Виндхейма, т.к. его жену Граху держали в замке Виндхейма в заложниках. После того, как узнал, что жена'
      + ' погибла, все равно отказался помогать героям и продолжил бухать. Его дом был огорожен всеми остальными'
      + ' великанами а сам он был назван вождем опущенных великанов.',
    tags: ['giant', 'northern_giants', 'kindvar']
  },
  {
    id: 'grakha',
    name: 'Граха Сокрушительница',
    type: 'NPC',
    race: 'giant',
    description: 'Жена вождя деревни великанов Горма в Киндваре. Её держали в замке Виндхейма. Погибла из-за ритуала Дольфа.',
    tags: ['giant', 'northern_giants', 'kindvar', 'windeheim']
  },
  {
    id: 'zhazhor',
    name: 'Жажор Бездонное Пузо',
    type: 'NPC',
    description: 'Новый вождь деревни великанов в Киндваре.'
      + '\nРанее был правой рукой Горма. Секретно просил героев убить Граху, чтобы заставить Горма атаковать короля'
      + ' Дермингара. Устроил неудачный переворот у великанов. После смерти Грахи стал новым вождем. Помогал в битве с'
      + ' Дермингаром.',
    tags: ['giant', 'northern_giants', 'kindvar']
  },
  {
    id: 'grukh',
    name: 'Грух',
    type: 'NPC',
    race: 'giant',
    description: 'Трактирщик в деревне великанов в Киндваре.',
    tags: ['giant', 'northern_giants', 'kindvar']
  },
  {
    id: 'khromi',
    name: 'Хроми Хромое Копыто',
    type: 'NPC',
    race: 'giant',
    description: 'Разводчик и продавец бизонов, ослов и ворон в деревне великанов в Киндваре. По совместительству занимается перевозками.'
      + '\nВёз героев к пещере Клыки Мороза и обратно. Отправлял письма Кадрика в Церковь Первородного Пламени.',
    tags: ['giant', 'northern_giants', 'kindvar']
  },
  {
    id: 'gutsy',
    name: 'Гуцы',
    type: 'NPC',
    race: 'giant',
    description: 'Живёт в деревне великанов в Киндваре. Герои нашли и доставили ему письмо от его мамы Губы.',
    tags: ['giant', 'northern_giants', 'kindvar']
  },
  {
    id: 'baba_zina',
    name: 'Баба Зина',
    type: 'NPC',
    description: 'Алхимик в Виндхейме.',
    tags: ['alchemist', 'kindvar', 'windeheim', 'windeheim_resistance', 'cursed_mark']
  },
  {
    id: 'otom',
    name: 'Отом',
    type: 'NPC',
    description: 'Автор книги "Проклятая метка и все о её изучении". По его мнению метки у людей появляются случайным'
      + ' образом. Духовная энергия владельца метки постепенно покидает мир, а сам владелец получает другую энергию'
      + ' недоброго вида. Отом думает, что действие метки можно замедлить пожиранием (буквально) других людей с метками.',
    tags: ['cursed_mark']
  },
  {
    id: 'elton',
    name: 'Элтон',
    type: 'NPC',
    race: 'human',
    description: 'Мальчик Элтон с семьёй покидали Кирь, когда на них напали бандиты. Мальчик успел сбежать. Наткнувшись'
      + ' на героев попросил их о помощи. После полууспешной спасательной операции похоронил мать, а ночью ушел дальше'
      + ' с братом.',
    tags: ['kir_city']
  },
  {
    id: 'osfold',
    name: 'Осфольд',
    type: 'NPC',
    description: 'Новый глава Кири',
    tags: ['kir_city']
  },
  {
    id: 'kvazar',
    name: 'Квазар Бо',
    type: 'NPC',
    race: 'half-orc',
    description: 'Главарь банды Молотобойцы.',
    tags: ['half_orc', 'kir_city', 'hammerers']
  },
  {
    id: 'broggi',
    name: 'Брогги',
    type: 'NPC',
    description: 'Член банды Молотобойцы',
    tags: ['kir_city', 'hammerers']
  },
  {
    id: 'khavik',
    name: 'Хавик',
    type: 'NPC',
    race: 'dwarf',
    description: 'Кузнец в банде Молотобойцев. Помогает создавать големов. Был кузнецом в гильдии ремесленников Кири до взрыва.',
    tags: ['dwarf', 'blacksmith', 'kir_city', 'kir_craft_guild', 'hammerers']
  },
  {
    id: 'kirito',
    name: 'Кирито',
    type: 'NPC',
    race: 'gnome',
    description: 'Маг в банде Молотобойцев. Помогает создавать големов. Состоял в гильдии ремесленников Кири до взрыва.',
    tags: ['gnome', 'kir_city', 'kir_craft_guild', 'hammerers']
  }
]

export default NPCS
