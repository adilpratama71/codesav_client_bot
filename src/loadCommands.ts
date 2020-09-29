import fs from "fs"
import path from "path"
import { Client, Message } from "discord.js"
const commandDirectory = path.join(__dirname, "./commands")

export default (bot: Client) => {
  const commandFiles = fs
    .readdirSync(commandDirectory)
    .filter(file => file !== "index.ts" && file.endsWith(".ts"))
  commandFiles.forEach(file => {
    const commandEvent: Command<Client, Message> = require(path.join(
      commandDirectory,
      file
    ))
    bot.commands.set(commandEvent.name, commandEvent)
  })
}
