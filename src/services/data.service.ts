import NPCS from '../data/npcs'
import PCS from '../data/pcs'
import TAGS, { TAGS_COLORS } from '../data/tags'
import { TagVm } from '../models/tag'
import { DataBM, DataVM } from '../models/data'

export type ContentBlock = {
  key: string,
  title: string,
  data: DataVM[]
}

export default class DataService {
  private static pcs: ContentBlock = {
    key: 'pcs',
    title: 'Главные персонажи',
    data: this.dataBMToDataVM(PCS),
  }
  private static npcs: ContentBlock = {
    key: 'npcs',
    title: 'NPC',
    data: this.dataBMToDataVM(NPCS),
  }

  private static dataBMToDataVM(data: DataBM[]): DataVM[] {
    return data.map((d) => {
      return {
        ...d,
        tags: d.tags?.map((dTag) => {
          const result = TAGS.find((t) => t.id === dTag);

          return {
            ...result,
            color: result?.type ? TAGS_COLORS[result?.type] : undefined
          } as TagVm
        })
      } satisfies DataVM
    })
  }

  public static getAllBlocks() {
    return [
      this.pcs,
      this.npcs,
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
