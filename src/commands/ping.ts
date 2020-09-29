import { MessageEmbed, Message, Client } from "discord.js"

export = {
  name: "ping",
  description: "Check user latency",
  fn: async (bot: Client, message: Message) => {
    const botResponse = await message.channel.send("Pinging ... 📡")
    const embed = new MessageEmbed({
      title: "🏓 Pong",
      description: `Latency is ${bot.ws.ping} ms ⏳`,
      color: "ORANGE"
    })
    botResponse.edit(embed)
  }
} as Command<Client, Message>
