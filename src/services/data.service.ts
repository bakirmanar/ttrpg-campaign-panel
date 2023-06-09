import NPCS from '../data/npcs'
import PCS from '../data/pcs'
import { TagVM } from '../models/tag.model'
import { DataBM, DataVM } from '../models/data.model'
import TagsService from './tags.service'

export type ContentBlock = {
  key: string,
  title: string,
  data: DataVM[]
}

export default class DataService {
  private static readonly PCS: ContentBlock = {
    key: 'pcs',
    title: 'Главные персонажи',
    data: this.dataBMToDataVM(PCS),
  }
  private static readonly NPCS: ContentBlock = {
    key: 'npcs',
    title: 'NPC',
    data: this.dataBMToDataVM(NPCS),
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

  public static getAllBlocks() {
    return [
      this.PCS,
      this.NPCS,
    ]
  }

  public static filterBlocksByQuery(qry: string) {
    return this.getAllBlocks()
      .map((block) => this.filterSingleBlockByQuery(block, qry))
  }

  private static filterSingleBlockByQuery(block: ContentBlock, qry: string): ContentBlock {
    return {
      key: block.key,
      title: block.title,
      data: block.data.filter((data) =>
        data.name?.toLocaleLowerCase().includes(qry)
          || data.description?.toLocaleLowerCase().includes(qry)
      )
    }
  }
}
