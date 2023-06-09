import { TagVM } from './tag.model'

export type DataBM = {
  id: string,
  name: string,
  type?: 'PC' | 'NPC' | 'Place',
  image?: string,
  description?: string,
  tags?: string[]
}

export type DataVM = {
  id: string,
  name: string,
  type?: 'PC' | 'NPC' | 'Place',
  image?: string,
  description?: string,
  tags?: TagVM[]
}