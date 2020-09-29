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

bot.login("NzU5NzUyNTgxOTc5MDQ1OTMx.X3CEuw.2OAd_RC_vM7uB6kr3qih8p3JYwY")
