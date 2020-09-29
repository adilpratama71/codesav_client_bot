import { Collection } from "discord.js"
declare module "discord.js" {
  interface Client {
    config: Config
    commands: Map<any, any>
  }
  interface WhiteList {
    id: string
    name: string
  }

  export interface Config {
    prefix: string
    token: string
    whiteList: WhiteList[]
  }
}
