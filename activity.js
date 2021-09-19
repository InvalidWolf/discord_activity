const {client} = require("../../index"); // Client definition
const {MessageActionRow, MessageSelectMenu} = require("discord.js");
const fetch = require("node-fetch")

// IMPORTANT:
// REPLACE ALL "TOKEN" WITH YOUR BOT TOKEN

module.exports.run = async (interaction) => {
    const getchannel = interaction.options.getChannel("channel")
    const getvoice = client.channels.cache.get(getchannel.id)

    const row = new MessageActionRow()
        .addComponents(
            new MessageSelectMenu()
                .setCustomId("activity")
                .setPlaceholder("Bitte wähle eine Activity aus")
                .setMaxValues(1)
                .setMaxValues(1)
                .addOptions([
                    {
                        label: "Poker Night",
                        description: "Spiele Poker Night",
                        value: "PokerNight"
                    },
                    {
                        label: "Betrayal.io",
                        description: "Spiele Betrayal.io",
                        value: "Betrayal"
                    },
                    {
                        label: "YouTube Together",
                        description: "Schaue YouTube Together",
                        value: "YouTube"
                    },
                    {
                        label: "Fishington.io",
                        description: "Spiele Fishington.io",
                        value: "Fishington"
                    },
                    {
                        label: "Chess in the Park",
                        description: "Spiele Chess in the Park",
                        value: "Chess"
                    }
                ])
        )


    await interaction.reply({
        content: "Bitte wähle in dem Drop-Down Menü eine Aktivität aus!",
        ephemeral: true,
        components: [row]
    })
    const filter = (interaction) => interaction.isSelectMenu();

    const collector = interaction.channel.createMessageComponentCollector({
        filter,
        max: 1,
    })
    collector.on("collect", async collected => {
        if (collected.values[0] === "PokerNight") {
            fetch(`https://discord.com/api/v8/channels/${getchannel.id}/invites`, {
                method: "POST",
                body: JSON.stringify({
                    max_age: 86400,
                    max_uses: 0,
                    target_application_id: "755827207812677713",
                    target_type: 2,
                    temporary: false,
                    validate: null
                }),
                headers: {
                    "Authorization": `Bot TOKEN`,
                    "Content-Type": "application/json"
                }
            }).then(res => res.json())
                .then(invite => {
                    interaction.editReply({
                        content: `https://discord.com/invite/${invite.code}`,
                        ephemeral: true,
                        components: []
                    })

                })
        }
        if (collected.values[0] === "Betrayal") {
            fetch(`https://discord.com/api/v8/channels/${getchannel.id}/invites`, {
                method: "POST",
                body: JSON.stringify({
                    max_age: 86400,
                    max_uses: 0,
                    target_application_id: "773336526917861400",
                    target_type: 2,
                    temporary: false,
                    validate: null
                }),
                headers: {
                    "Authorization": `Bot TOKEN`,
                    "Content-Type": "application/json"
                }
            }).then(res => res.json())
                .then(invite => {
                    interaction.editReply({
                        content: `https://discord.com/invite/${invite.code}`,
                        ephemeral: true,
                        components: []
                    })

                })
        }
        if (collected.values[0] === "YouTube") {
            fetch(`https://discord.com/api/v8/channels/${getchannel.id}/invites`, {
                method: "POST",
                body: JSON.stringify({
                    max_age: 86400,
                    max_uses: 0,
                    target_application_id: "755600276941176913",
                    target_type: 2,
                    temporary: false,
                    validate: null
                }),
                headers: {
                    "Authorization": `Bot TOKEN`,
                    "Content-Type": "application/json"
                }
            }).then(res => res.json())
                .then(invite => {
                    interaction.editReply({
                        content: `https://discord.com/invite/${invite.code}`,
                        ephemeral: true,
                        components: []
                    })

                })
        }
        if (collected.values[0] === "Fishington") {
            fetch(`https://discord.com/api/v8/channels/${getchannel.id}/invites`, {
                method: "POST",
                body: JSON.stringify({
                    max_age: 86400,
                    max_uses: 0,
                    target_application_id: "814288819477020702",
                    target_type: 2,
                    temporary: false,
                    validate: null
                }),
                headers: {
                    "Authorization": `Bot TOKEN`,
                    "Content-Type": "application/json"
                }
            }).then(res => res.json())
                .then(invite => {
                    interaction.editReply({
                        content: `https://discord.com/invite/${invite.code}`,
                        ephemeral: true,
                        components: []
                    })

                })
        }
        if (collected.values[0] === "Chess") {
            fetch(`https://discord.com/api/v8/channels/${getchannel.id}/invites`, {
                method: "POST",
                body: JSON.stringify({
                    max_age: 86400,
                    max_uses: 0,
                    target_application_id: "832012774040141894",
                    target_type: 2,
                    temporary: false,
                    validate: null
                }),
                headers: {
                    "Authorization": `Bot TOKEN`,
                    "Content-Type": "application/json"
                }
            }).then(res => res.json())
                .then(invite => {
                    interaction.editReply({
                        content: `https://discord.com/invite/${invite.code}`,
                        ephemeral: true,
                        components: []
                    })
                })
        }
    })
}

// Command Name and ohter things
module.exports.help = {
    name: "activity",
}
