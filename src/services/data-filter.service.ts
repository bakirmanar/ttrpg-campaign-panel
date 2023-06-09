import { ContentBlock } from './data.service'
import Filters from '../models/data-filter.model'
import { TagVM } from '../models/tag.model'


export default class DataFilterService {
  public static filterContent(content: ContentBlock[], filters: Filters): ContentBlock[] {
    let result = content;

    if (filters?.tags?.length) {
      result = this.filterContentByTags(result, filters.tags)
    }

    if (filters?.qry) {
      result = this.filterContentByQuery(result, filters.qry.toLocaleLowerCase())
    }

    return result
  }

  public static filterContentByTags(content: ContentBlock[], qTags: string[]): ContentBlock[] {
    return content.map((block) => this.filterBlockByTags(block, qTags))
  }

  private static filterBlockByTags(block: ContentBlock, qTags: string[]): ContentBlock {
    return {
      key: block.key,
      title: block.title,
      data: block.data.filter((data) =>
        data.tags?.some((dTag) => qTags.includes(dTag.id))
      )
    }
  }

  public static filterContentByQuery(content: ContentBlock[], qry: string): ContentBlock[] {
    return content.map((block) => this.filterBlockByQuery(block, qry))
  }

  private static filterBlockByQuery(block: ContentBlock, qry: string): ContentBlock {
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
