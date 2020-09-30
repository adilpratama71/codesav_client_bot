import { Message, Client } from "discord.js"

export = {
  name: "reg",
  description: "Register new code",
  fn: async (_: Client, message: Message) => {
    const author = message.author.username
    const id_discord = message.author.id
    await message.channel.send(`${author}, ${id_discord}`)
  }
} as Command<Client, Message>
