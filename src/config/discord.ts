import { Config } from "discord.js"
console.log(process.env.BOT_TOKEN, " here")
const discordConfig: Config = {
  prefix: "!foxy",
  token: process.env.BOT_TOKEN,
  whiteList: [
    {
      id: "720609093848662018",
      name: "Bot_Develop"
    },
    {
      id: "710709613380632636",
      name: "Hacktiv8 Campus Remote"
    },
    {
      id: "691948509615751228",
      name: "Hacktiv8 Indonesia"
    }
  ]
}

export default discordConfig
