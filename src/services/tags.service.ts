import { TagSM, TagVM } from '../models/tag.model'
import {
  FRACTIONS_TAGS,
  LOCATIONS_TAGS,
  OTHER_TAGS,
  PROFICIENCIES_TAGS,
  RACES_TAGS,
  TAGS_COLORS
} from '../data/tags'


export default class TagsService {
  public static readonly RACES = this.tagsSMToTagsVM(RACES_TAGS)
  public static readonly PROFICIENCIES = this.tagsSMToTagsVM(PROFICIENCIES_TAGS)
  public static readonly LOCATIONS = this.tagsSMToTagsVM(LOCATIONS_TAGS)
  public static readonly FRACTIONS = this.tagsSMToTagsVM(FRACTIONS_TAGS)
  public static readonly OTHER = this.tagsSMToTagsVM(OTHER_TAGS)
  public static readonly TAGS = [
    ...this.RACES,
    ...this.PROFICIENCIES,
    ...this.LOCATIONS,
    ...this.FRACTIONS,
    ...this.OTHER,
  ]

  private static tagsSMToTagsVM(tags: TagSM[]): TagVM[] {
    return tags.map((tag) => {
      return {
        ...tag,
        color: tag.type ? TAGS_COLORS[tag.type] : undefined
      } satisfies TagVM
    })
  }
}
