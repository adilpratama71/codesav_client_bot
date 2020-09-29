interface Command<C, M> {
  name: string
  description: string
  fn(bot: C, message?: M): Promise<void>
}
