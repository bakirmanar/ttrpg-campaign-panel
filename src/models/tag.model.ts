export type TagSM = {
  id: string,
  name: string,
  type?: string
}

export type TagVM = TagSM & {
  color?: string,
}
