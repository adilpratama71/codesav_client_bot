import { Message, Client } from "discord.js"
import getAttributeFromArguments from "../utils/getAttributeFromArguments"

export = {
  name: "save",
  description: "Register new code",
  fn: async (_: Client, message: Message, args: string[]) => {
    const id_discord = message.author.id

    const argCommand = getAttributeFromArguments(args)

    await message.channel.send(argCommand)
  }
} as Command<Client, Message>
