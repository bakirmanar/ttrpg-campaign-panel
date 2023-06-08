export type TagBm = {
  id: string,
  name: string,
  type?: string
}

export type TagVm = TagBm & {
  color?: string,
}
