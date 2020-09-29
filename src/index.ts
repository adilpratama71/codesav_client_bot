import { Client, Message } from "discord.js"
import config from "./config/discord"
import loadCommand from "./loadCommands"

const bot: Client = new Client()

bot.config = config
bot.commands = new Map()
loadCommand(bot)

bot.on("ready", () => {
  console.log("code save at your service")
})

bot.on("message", (message: Message) => {
  const prefix = bot.config.prefix
  const [cmd, ...args] = message.content
    .substring(prefix.length)
    .trim()
    .split(/\s+/)

  if (message.author.bot || !message.guild) return

  if (!message.content.startsWith(prefix)) return

  if (cmd.length === 0) return
  if (bot.commands.has(cmd)) {
    const command: Command<Client, Message> = bot.commands.get(cmd)
    command.fn(bot, message, args)
  }
})

bot.login(bot.config.token)
