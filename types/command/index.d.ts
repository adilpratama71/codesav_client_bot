interface Command<C, M> {
  name: string
  description: string
  fn(bot: C, message?: M, args?: string[]): Promise<void>
}
