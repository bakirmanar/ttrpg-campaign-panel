import NPCS from '../data/npcs'
import PCS from '../data/pcs'
import { TagVM } from '../models/tag.model'
import { DataBM, DataVM } from '../models/data.model'
import TagsService from './tags.service'
import SESSIONS from '../data/sessions'
import FRACTIONS from '../data/fractions'
import LOCATIONS from '../data/locations'

type ContentBlocks = {
  PCS: ContentBlock
  NPCS: ContentBlock
  FRACTIONS: ContentBlock
  LOCATIONS: ContentBlock
  SESSIONS: ContentBlock
}

export type ContentBlock = {
  key: string,
  title: string,
  data: DataVM[]
}

export default class DataService {
  private static readonly BLOCKS: ContentBlocks = {
    PCS: { key: 'pcs', title: 'Главные персонажи', data: this.dataBMToDataVM(PCS) },
    NPCS: { key: 'npcs', title: 'NPC', data: this.dataBMToDataVM(NPCS) },
    FRACTIONS: { key: 'fractions', title: 'Фракции', data: this.dataBMToDataVM(FRACTIONS) },
    LOCATIONS: { key: 'locations', title: 'Локации', data: this.dataBMToDataVM(LOCATIONS) },
    SESSIONS: { key: 'sessions', title: 'Сессии', data: this.dataBMToDataVM(SESSIONS) },
  }

  private static dataBMToDataVM(data: DataBM[]): DataVM[] {
    return data.map((d) => {
      let tags = d.tags
          ?.map((dTag) => TagsService.TAGS.find((t) => t.id === dTag))
          // Filter out empty values
          .filter((tag) => tag) as TagVM[]
        || [];

      return {
        ...d,
        tags,
      } satisfies DataVM
    })
  }

  public static getBlocks(keys: Array<keyof ContentBlocks> = []): ContentBlock[] {
    const result: ContentBlock[] = []
    keys.forEach((blockKey) => {
      result.push(this.BLOCKS[blockKey])
    })
    return result
  }
}
