import { TagSM, TagVM } from '../models/tag.model'
import TAGS, { TAGS_COLORS } from '../../data/tags'


export default class TagsService {
  public static readonly TAGS = this.tagsSMToTagsVM(TAGS);

  private static tagsSMToTagsVM(tags: TagSM[]): TagVM[] {
    return tags.map((tag) => {
      return {
        ...tag,
        color: tag.type ? TAGS_COLORS[tag.type] : undefined
      } satisfies TagVM
    })
  }
}
