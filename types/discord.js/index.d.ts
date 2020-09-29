declare module "discord.js" {
  export interface Client {
    config: Config
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
