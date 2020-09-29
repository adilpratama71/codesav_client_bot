export interface IProcessEnv {
  BOT_TOKEN: string
}

declare global {
  namespace NodeJS {
    interface ProcessEnv extends IProcessEnv {}
  }
}

export {}
