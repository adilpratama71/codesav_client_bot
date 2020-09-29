import { Client } from "discord.js"
import config from "./config/discord"

const bot: Client = new Client()

bot.config = config

bot.on("ready", () => {
  console.log("code save at your service")
})

bot.on("message", message => {
  console.log(message.content)
})
console.log(bot.config.token)

bot.login(bot.config.token)
