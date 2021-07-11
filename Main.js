let Discord;
let Database;
let moment;
if (typeof window !== "undefined") {
    Discord = DiscordJS;
    Database = EasyDatabase;
    moment = Momentl;
} else {
    Discord = require("discord.js");
    Database = require("easy-json-database");
    moment = require('moment');
}

const {
    MessageButton,
    MessageActionRow
} = require("discord-buttons")
const delay = (ms) => new Promise((resolve) => setTimeout(() => resolve(), ms));
const s4d = {
    Discord,
    client: null,
    tokenInvalid: false,
    reply: null,
    joiningMember: null,
    database: new Database("./db.json"),
    checkMessageExists() {
        if (!s4d.client) throw new Error('You cannot perform message operations without a Discord.js client')
        if (!s4d.client.readyTimestamp) throw new Error('You cannot perform message operations while the bot is not connected to the Discord API')
    }
};
s4d.client = new s4d.Discord.Client({
    fetchAllMembers: true
});
require('discord-buttons')(s4d.client);

function mainchannel(guild) {
    let channelID;
    let channels = guild.channels.cache;
    for (let in channels) {
        if (channels[i].type === "text" && channels[i].permissionsFor(guild.me).has('SEND_MESSAGES')) {
            channelID = channels[i]
            return channelID.id
        }
    }
    return null
}
s4d.client.on('raw', async (packet) => {
    if (['MESSAGE_REACTION_ADD', 'MESSAGE_REACTION_REMOVE'].includes(packet.t)) {
        const guild = s4d.client.guilds.cache.get(packet.d.guild_id);
        if (!guild) return;
        const member = guild.members.cache.get(packet.d.user_id) || guild.members.fetch(d.user_id).catch(() => {});
        if (!member) return;
        const channel = s4d.client.channels.cache.get(packet.d.channel_id);
        if (!channel) return;
        const message = channel.messages.cache.get(packet.d.message_id) || await channel.messages.fetch(packet.d.message_id).catch(() => {});
        if (!message) return;
        s4d.client.emit(packet.t, guild, channel, message, member, packet.d.emoji.name);
    }
});
<<<<<<< HEAD
s4d.client.login(process.env.DJS_TOKEN).catch((e) => {
    s4d.tokenInvalid = true;
    s4d.tokenError = e;
});

=======
>>>>>>> d22288ac97f992bc880a0ee5832e55eaf6145a35
s4d.client.on('message', async (s4dmessage) => {
    if ((s4dmessage.member).hasPermission('ADMINISTRATOR')) {
        if ((((s4dmessage.content) || '').startsWith('=odmitnout' || '')) || (((s4dmessage.content) || '').startsWith('=Odmitnout' || ''))) {
            if ((s4dmessage.mentions.members.first()) != null) {
                (s4dmessage.mentions.members.first()).send(String('Tvůj nabor byl zamítnut.'));
                s4dmessage.channel.send({
                    embed: {
                        title: '✅ Uživatel byl úspěšně zamítnut!',
                        color: '#33cc00',
                        image: {
                            url: null
                        },
                        description: null,
                        footer: {
                            text: null
                        },
                        thumbnail: {
                            url: null
                        }
                    }
                });
            } else if ((s4dmessage.mentions.members.first()) == null) {
                s4dmessage.channel.send({
                    embed: {
                        title: '❌ Musíš někoho označit!',
                        color: '#ff0000',
                        image: {
                            url: null
                        },
                        description: null,
                        footer: {
                            text: null
                        },
                        thumbnail: {
                            url: null
                        }
                    }
                });
            }
        }
    } else {
        s4dmessage.channel.send({
            embed: {
                title: '❌ Na tohle nemáš permise!',
                color: '#ff0000',
                image: {
                    url: null
                },
                description: null,
                footer: {
                    text: null
                },
                thumbnail: {
                    url: null
                }
            }
        });
    }

});

s4d.client.on('message', async (s4dmessage) => {
    if ((s4dmessage.member).hasPermission('ADMINISTRATOR')) {
        if ((((s4dmessage.content) || '').startsWith('=prijmout' || '')) || (((s4dmessage.content) || '').startsWith('=Prijmout' || ''))) {
            if ((s4dmessage.mentions.members.first()) != null) {
                (s4dmessage.mentions.members.first()).send(String('Tvůj nabor byl přijat. Napiš Reddy#6616 nebo F3nDyss#5937 pro další informace.'));
                s4dmessage.channel.send({
                    embed: {
                        title: '✅ Uživatel byl úspěšně přijat!',
                        color: '#33cc00',
                        image: {
                            url: null
                        },
                        description: null,
                        footer: {
                            text: null
                        },
                        thumbnail: {
                            url: null
                        }
                    }
                });
            } else if ((s4dmessage.mentions.members.first()) == null) {
                s4dmessage.channel.send({
                    embed: {
                        title: '❌ Musíš někoho označit!',
                        color: '#ff0000',
                        image: {
                            url: null
                        },
                        description: null,
                        footer: {
                            text: null
                        },
                        thumbnail: {
                            url: null
                        }
                    }
                });
            }
        }
    } else {
        s4dmessage.channel.send({
            embed: {
                title: '❌ Na tohle nemáš permise!',
                color: '#ff0000',
                image: {
                    url: null
                },
                description: null,
                footer: {
                    text: null
                },
                thumbnail: {
                    url: null
                }
            }
        });
    }

});

s4d.client.on('message', async (s4dmessage) => {
    if ((((s4dmessage.content) || '').startsWith('=nabor' || '')) || (((s4dmessage.content) || '').startsWith('=Nabor' || ''))) {
        (s4dmessage.channel).send(String('Kolik ti je let?'));
        (s4dmessage.channel).awaitMessages((m) => m.author.id === (s4dmessage.member).id, {
            time: (60 * 60 * 1000),
            max: 1
        }).then(async (collected) => {
            s4d.reply = collected.first().content;
            s4dmessage.channel.send(String('✅ Uloženo!'));
            s4d.client.channels.cache.get('847125519900082277').send(String(([s4dmessage.member, ' odpověděl na otázku: Kolik ti je let? odpověď: ', s4d.reply].join(''))));
            (s4dmessage.channel).send(String('Jak moc času si schopen investovat do serveru denně?'));
            (s4dmessage.channel).awaitMessages((m) => m.author.id === (s4dmessage.member).id, {
                time: (60 * 60 * 1000),
                max: 1
            }).then(async (collected) => {
                s4d.reply = collected.first().content;
                s4dmessage.channel.send(String('✅ Uloženo!'));
                s4d.client.channels.cache.get('847125519900082277').send(String(([s4dmessage.member, ' odpověděl na otázku: Jak moc času si schopen investovat do serveru denně? odpověď: ', s4d.reply].join(''))));
                (s4dmessage.channel).send(String('Proč bychom měli vybrat právě tebe?'));
                (s4dmessage.channel).awaitMessages((m) => m.author.id === (s4dmessage.member).id, {
                    time: (60 * 60 * 1000),
                    max: 1
                }).then(async (collected) => {
                    s4d.reply = collected.first().content;
                    s4dmessage.channel.send(String('✅ Uloženo!'));
                    s4d.client.channels.cache.get('847125519900082277').send(String(([s4dmessage.member, ' odpověděl na otázku: Proč bychom měli vybrat právě tebe? odpověď: ', s4d.reply].join(''))));
                    (s4dmessage.channel).send(String('Řekni nám neco o sobě'));
                    (s4dmessage.channel).awaitMessages((m) => m.author.id === (s4dmessage.member).id, {
                        time: (60 * 60 * 1000),
                        max: 1
                    }).then(async (collected) => {
                        s4d.reply = collected.first().content;
                        s4dmessage.channel.send(String('✅ Uloženo!'));
                        s4dmessage.channel.send(String('✅ Tvůj nabor byl uložen a bude vyhodnocen do 48 hodin.'));
                        s4d.client.channels.cache.get('847125519900082277').send(String(([s4dmessage.member, ' odpověděl na otázku: Řekni nám neco o sobě. odpověď: ', s4d.reply].join(''))));

                        s4d.reply = null;
                    }).catch(async (e) => {
                        console.error(e);
                        s4dmessage.channel.send(String((String(s4dmessage.member) + ' Časový limit vypršel, skus to znovu později!')));
                    });
                    s4d.reply = null;
                }).catch(async (e) => {
                    console.error(e);
                    s4dmessage.channel.send(String((String(s4dmessage.member) + ' Časový limit vypršel, skus to znovu později!')));
                });
                s4d.reply = null;
            }).catch(async (e) => {
                console.error(e);
                s4dmessage.channel.send(String((String(s4dmessage.member) + ' Časový limit vypršel, skus to znovu později!')));
            });
            s4d.reply = null;
        }).catch(async (e) => {
            console.error(e);
            s4dmessage.channel.send(String((String(s4dmessage.member) + ' Časový limit vypršel, skus to znovu později!')));
        });
    }

});

s4d.client.on('guildMemberAdd', async (param1) => {
    s4d.joiningMember = param1;
    s4d.client.channels.cache.get('710613549537296509').send(String((['Hej ', s4d.joiningMember, ', Vítej na serveru **| • F3nDyss Community • |**'].join(''))));
    s4d.joiningMember = null
});

s4d.client.on('message', async (s4dmessage) => {
    if ((((s4dmessage.content) || '').startsWith('=kick' || '')) || (((s4dmessage.content) || '').startsWith('=Kick' || ''))) {
        if ((s4dmessage.member).hasPermission('KICK_MEMBERS')) {
            if ((s4dmessage.mentions.members.first()) != null) {
                (s4dmessage.mentions.members.first()).kick();
                s4dmessage.channel.send({
                    embed: {
                        title: '✅ Úspešně vyhození!',
                        color: '#33cc00',
                        image: {
                            url: null
                        },
                        description: null,
                        footer: {
                            text: null
                        },
                        thumbnail: {
                            url: null
                        }
                    }
                });
                s4dmessage.delete();
                s4d.client.channels.cache.get('846797180861284372').send(String((String(s4dmessage.mentions.members.first()) + ' byl úspešně vyhození! ✅')));
            } else if ((s4dmessage.mentions.members.first()) == null) {
                s4dmessage.channel.send({
                    embed: {
                        title: '❌ Musíš někoho označit!',
                        color: '#ff0000',
                        image: {
                            url: null
                        },
                        description: null,
                        footer: {
                            text: null
                        },
                        thumbnail: {
                            url: null
                        }
                    }
                });
            }
        } else {
            s4dmessage.channel.send({
                embed: {
                    title: '❌ Na tohle nemáš permise!',
                    color: '#ff0000',
                    image: {
                        url: null
                    },
                    description: null,
                    footer: {
                        text: null
                    },
                    thumbnail: {
                        url: null
                    }
                }
            });
        }
    }

});

s4d.client.on('message', async (s4dmessage) => {
    if ((((s4dmessage.content) || '').startsWith('=ban' || '')) || (((s4dmessage.content) || '').startsWith('=Ban' || ''))) {
        if ((s4dmessage.member).hasPermission('BAN_MEMBERS')) {
            if ((s4dmessage.mentions.members.first()) != null) {
                (s4dmessage.mentions.members.first()).ban();
                s4dmessage.channel.send({
                    embed: {
                        title: '✅ Úspešně zabanován!',
                        color: '#33cc00',
                        image: {
                            url: null
                        },
                        description: null,
                        footer: {
                            text: null
                        },
                        thumbnail: {
                            url: null
                        }
                    }
                });
                s4dmessage.delete();
                s4d.client.channels.cache.get('846797180861284372').send(String((String(s4dmessage.mentions.members.first()) + ' byl úspešně zabanován! ✅')));
            } else if ((s4dmessage.mentions.members.first()) == null) {
                s4dmessage.channel.send({
                    embed: {
                        title: '❌ Musíš někoho označit!',
                        color: '#ff0000',
                        image: {
                            url: null
                        },
                        description: null,
                        footer: {
                            text: null
                        },
                        thumbnail: {
                            url: null
                        }
                    }
                });
            }
        } else {
            s4dmessage.channel.send({
                embed: {
                    title: '❌ Na tohle nemáš permise!',
                    color: '#ff0000',
                    image: {
                        url: null
                    },
                    description: null,
                    footer: {
                        text: null
                    },
                    thumbnail: {
                        url: null
                    }
                }
            });
        }
    }

});

s4d.client.on('guildMemberRemove', async (param1) => {
    s4d.leavingMember = param1;
    s4d.client.channels.cache.get('710613549537296509').send(String((String(s4d.leavingMember.user.username) + ' Právě dal Alt+F4')));
    s4d.leavingMember = null
});

s4d.client.login('ODQ1NzY4Mzc3OTc2NzUwMTEx.YKlxLg.ZN_kGOs2oLPlTW2ni3IXRH88Ihs').catch((e) => {
    s4d.tokenInvalid = true;
    s4d.tokenError = e;
});

s4d.client.on('message', async (s4dmessage) => {
    if ((((s4dmessage.content) || '').startsWith('=moderator' || '')) || (((s4dmessage.content) || '').startsWith('=Moderator' || ''))) {
        if ((s4dmessage.mentions.members.first()) != null) {
            if ((s4dmessage.member).hasPermission('ADMINISTRATOR')) {
                (s4dmessage.mentions.members.first()).roles.add((s4dmessage.mentions.members.first()).guild.roles.cache.find((role) => role.id === '643509052369797120' || role.name === '643509052369797120' || '@' + role.name === '643509052369797120'));
                (s4dmessage.mentions.members.first()).roles.add((s4dmessage.mentions.members.first()).guild.roles.cache.find((role) => role.id === '788791322772504586' || role.name === '788791322772504586' || '@' + role.name === '788791322772504586'));
                s4dmessage.channel.send({
                    embed: {
                        title: '✅ Uživateli byla úspěšně přiřazena role Moderator!',
                        color: '#33cc00',
                        image: {
                            url: null
                        },
                        description: null,
                        footer: {
                            text: null
                        },
                        thumbnail: {
                            url: null
                        }
                    }
                });
            } else {
                s4dmessage.channel.send({
                    embed: {
                        title: '❌ Na tohle nemáš permise!',
                        color: '#ff0000',
                        image: {
                            url: null
                        },
                        description: null,
                        footer: {
                            text: null
                        },
                        thumbnail: {
                            url: null
                        }
                    }
                });
            }
        } else if ((s4dmessage.mentions.members.first()) == null) {
            s4dmessage.channel.send({
                embed: {
                    title: '❌ Musíš někoho označit!',
                    color: '#ff0000',
                    image: {
                        url: null
                    },
                    description: null,
                    footer: {
                        text: null
                    },
                    thumbnail: {
                        url: null
                    }
                }
            });
        }
    }

});

s4d.client.on('message', async (s4dmessage) => {
    if ((((s4dmessage.content) || '').startsWith('=zkmoderator' || '')) || (((s4dmessage.content) || '').startsWith('=Zkmoderator' || ''))) {
        if ((s4dmessage.mentions.members.first()) != null) {
            if ((s4dmessage.member).hasPermission('ADMINISTRATOR')) {
                (s4dmessage.mentions.members.first()).roles.add((s4dmessage.mentions.members.first()).guild.roles.cache.find((role) => role.id === '784016361063972864' || role.name === '784016361063972864' || '@' + role.name === '784016361063972864'));
                (s4dmessage.mentions.members.first()).roles.add((s4dmessage.mentions.members.first()).guild.roles.cache.find((role) => role.id === '788791322772504586' || role.name === '788791322772504586' || '@' + role.name === '788791322772504586'));
                s4dmessage.channel.send({
                    embed: {
                        title: '✅ Uživateli byla úspěšně přiřazena role Zk.Moderator!',
                        color: '#33cc00',
                        image: {
                            url: null
                        },
                        description: null,
                        footer: {
                            text: null
                        },
                        thumbnail: {
                            url: null
                        }
                    }
                });
            } else {
                s4dmessage.channel.send({
                    embed: {
                        title: '❌ Na tohle nemáš permise!',
                        color: '#ff0000',
                        image: {
                            url: null
                        },
                        description: null,
                        footer: {
                            text: null
                        },
                        thumbnail: {
                            url: null
                        }
                    }
                });
            }
        } else if ((s4dmessage.mentions.members.first()) == null) {
            s4dmessage.channel.send({
                embed: {
                    title: '❌ Musíš někoho označit!',
                    color: '#ff0000',
                    image: {
                        url: null
                    },
                    description: null,
                    footer: {
                        text: null
                    },
                    thumbnail: {
                        url: null
                    }
                }
            });
        }
    }

});

s4d.client.on('message', async (s4dmessage) => {
    if ((((s4dmessage.content) || '').startsWith('=youtube' || '')) || (((s4dmessage.content) || '').startsWith('=Youtube' || ''))) {
        s4dmessage.delete();
        (s4dmessage.member).send(String('https://www.youtube.com/channel/UCwVpo61_6ubUzqLUCh5PbGQ'));
    }

});

s4d.client.on('message', async (s4dmessage) => {
    if ((((s4dmessage.content) || '').startsWith('=ig' || '')) || (((s4dmessage.content) || '').startsWith('=Ig' || ''))) {
        s4dmessage.delete();
        (s4dmessage.member).send(String('https://www.instagram.com/_f3ndyss_/'));
    }

});

s4d.client.on('ready', async () => {

    while (s4d.client && s4d.client.token) {
        await delay(50);
        s4d.client.user.setPresence({
            status: "online",
            activity: {
                name: (String((s4d.client.guilds.cache.get('532554177772126227')).memberCount) + ' uživatelů'),
                type: "WATCHING"
            }
        });;
        await delay(Number(15) * 1000);
        s4d.client.user.setPresence({
            status: "online",
            activity: {
                name: (String(s4d.client.ws.ping) + ' ping'),
                type: "PLAYING"
            }
        });;
        await delay(Number(15) * 1000);
        s4d.client.user.setPresence({
            status: "online",
            activity: {
                name: 'Sub to F3nDyss on YT!',
                type: "PLAYING"
            }
        });;
        await delay(Number(15) * 1000);

        console.log('ran')
    }

});

s4d.client.on('message', async (s4dmessage) => {
    if ((((s4dmessage.content) || '').startsWith('=mute' || '')) || (((s4dmessage.content) || '').startsWith('=Mute' || ''))) {
        if ((s4dmessage.mentions.members.first()) != null) {
            if ((s4dmessage.member).hasPermission('KICK_MEMBERS')) {
                (s4dmessage.mentions.members.first()).roles.add((s4dmessage.mentions.members.first()).guild.roles.cache.find((role) => role.id === '847873978609434634' || role.name === '847873978609434634' || '@' + role.name === '847873978609434634'));
                (s4dmessage.mentions.members.first()).roles.remove((s4dmessage.mentions.members.first()).guild.roles.cache.find((role) => role.id === '648170485582135306' || role.name === '648170485582135306' || '@' + role.name === '648170485582135306'));
                s4dmessage.channel.send({
                    embed: {
                        title: '✅ Úspešně muted!',
                        color: '#33cc00',
                        image: {
                            url: null
                        },
                        description: null,
                        footer: {
                            text: null
                        },
                        thumbnail: {
                            url: null
                        }
                    }
                });
            } else {
                s4dmessage.channel.send({
                    embed: {
                        title: '❌ Na tohle nemáš permise!',
                        color: '#ff0000',
                        image: {
                            url: null
                        },
                        description: null,
                        footer: {
                            text: null
                        },
                        thumbnail: {
                            url: null
                        }
                    }
                });
            }
        } else if ((s4dmessage.mentions.members.first()) == null) {
            s4dmessage.channel.send({
                embed: {
                    title: '❌ Musíš někoho označit!',
                    color: '#ff0000',
                    image: {
                        url: null
                    },
                    description: null,
                    footer: {
                        text: null
                    },
                    thumbnail: {
                        url: null
                    }
                }
            });
        }
    }

});

s4d.client.on('message', async (s4dmessage) => {
    if ((((s4dmessage.content) || '').startsWith('=help' || '')) || (((s4dmessage.content) || '').startsWith('=Help' || ''))) {
        s4dmessage.channel.send({
            embed: {
                title: 'Příkazy',
                color: '#ff9900',
                image: {
                    url: null
                },
                description: (['=nabor', '\n', '***Spustí dotazník k náboru***', '\n', '=prijmout @user', '\n', '***Automaticky prijme nábor daného uživatela***', '\n', '=odmitnout @user', '\n', '***Automaticky odmietne nábor daného uživatela***', '\n', '=moderator @user', '\n', '***Nahodí rolu Moderator danému uživatelovi***', '\n', '=zkmoderator @user', '\n', '***Nahodí rolu Zk.Moderator danému uživatelovi***', '\n', '=kick @user', '\n', '***Vyhodí daného uživatela z serveru***', '\n', '=ban @user', '\n', '***Zakáže permanetný prístup danému uživatelovy na server***', '\n', '=youtube', '\n', '***Pošle odkaz na youtube channel***', '\n', '=ig', '\n', '***Pošle odkaz na instagram***', '\n', '=mute', '\n', '***Umlčí daného uživatela***', '\n', '=unmute', '\n', '***Zruší umlčenie danému uživatelovi***'].join('')),
                footer: {
                    text: '© 2021 F3nDyss Community Bot | All rights reserved.'
                },
                thumbnail: {
                    url: null
                }
            }
        });
    }

});

s4d.client.on('messageDelete', async (s4dmessage) => {
    s4d.client.channels.cache.get('846797180861284372').send({
        embed: {
            title: '**Audit Log**',
            color: '#ff0000',
            image: {
                url: null
            },
            description: (['***Zpráva od:*** ', s4dmessage.member, ' ***smazána***', '\n', s4dmessage.content].join('')),
            footer: {
                text: '© 2021 F3nDyss Community Bot | All rights reserved.'
            },
            thumbnail: {
                url: null
            }
        }
    });

});

s4d.client.on('message', async (s4dmessage) => {
    if ((((s4dmessage.content) || '').startsWith('=profile' || '')) || (((s4dmessage.content) || '').startsWith('=Profile' || ''))) {
        if ((s4dmessage.mentions.members.first()) != null) {
            s4dmessage.channel.send({
                embed: {
                    title: ('**Profilovka uživatele:** ' + String(s4dmessage.mentions.members.first())),
                    color: '#ff9900',
                    image: {
                        url: null
                    },
                    description: null,
                    footer: {
                        text: '© 2021 F3nDyss Community Bot | All rights reserved.'
                    },
                    thumbnail: {
                        url: null
                    }
                }
            });
        } else if ((s4dmessage.mentions.members.first()) == null) {
            s4dmessage.channel.send({
                embed: {
                    title: ('**Profilovka uživatele:** ' + String(s4dmessage.member)),
                    color: '#ff9900',
                    image: {
                        url: null
                    },
                    description: null,
                    footer: {
                        text: '© 2021 F3nDyss Community Bot | All rights reserved.'
                    },
                    thumbnail: {
                        url: null
                    }
                }
            });
        }
    }

});

s4d.client.on('message', async (s4dmessage) => {
    if ((((s4dmessage.content) || '').startsWith('=info' || '')) || (((s4dmessage.content) || '').startsWith('=Info' || ''))) {
        if ((s4dmessage.member).hasPermission('MANAGE_GUILD')) {
            if ((s4dmessage.mentions.members.first()) != null) {
                s4dmessage.channel.send({
                    embed: {
                        title: ('Informace uživatela: ' + String(s4dmessage.mentions.members.first())),
                        color: '#ff9900',
                        image: {
                            url: null
                        },
                        description: (['**Account Create Date:** ', '\n', moment((s4dmessage.mentions.members.first()).user.createdAt).format('LLLL')].join('')),
                        footer: {
                            text: '© 2021 F3nDyss Community Bot | All rights reserved.'
                        },
                        thumbnail: {
                            url: null
                        }
                    }
                });
            } else if ((s4dmessage.mentions.members.first()) == null) {
                s4dmessage.channel.send({
                    embed: {
                        title: ('Informace uživatela: ' + String(s4dmessage.member)),
                        color: '#ff9900',
                        image: {
                            url: null
                        },
                        description: (['**Acount Create Date:** ', '\n', moment((s4dmessage.member).user.createdAt).format('LLLL')].join('')),
                        footer: {
                            text: '© 2021 F3nDyss Community Bot | All rights reserved.'
                        },
                        thumbnail: {
                            url: null
                        }
                    }
                });
            }
        }
    }

});

s4d.client.on('message', async (s4dmessage) => {
    if ((((s4dmessage.content) || '').startsWith('=unmute' || '')) || (((s4dmessage.content) || '').startsWith('=Unmute' || ''))) {
        if ((s4dmessage.mentions.members.first()) != null) {
            if ((s4dmessage.member).hasPermission('KICK_MEMBERS')) {
                (s4dmessage.mentions.members.first()).roles.add((s4dmessage.mentions.members.first()).guild.roles.cache.find((role) => role.id === '648170485582135306' || role.name === '648170485582135306' || '@' + role.name === '648170485582135306'));
                (s4dmessage.mentions.members.first()).roles.remove((s4dmessage.mentions.members.first()).guild.roles.cache.find((role) => role.id === '847873978609434634' || role.name === '847873978609434634' || '@' + role.name === '847873978609434634'));
                s4dmessage.channel.send({
                    embed: {
                        title: '✅ Úspešně muted!',
                        color: '#33cc00',
                        image: {
                            url: null
                        },
                        description: null,
                        footer: {
                            text: null
                        },
                        thumbnail: {
                            url: null
                        }
                    }
                });
            } else {
                s4dmessage.channel.send({
                    embed: {
                        title: '❌ Na tohle nemáš permise!',
                        color: '#ff0000',
                        image: {
                            url: null
                        },
                        description: null,
                        footer: {
                            text: null
                        },
                        thumbnail: {
                            url: null
                        }
                    }
                });
            }
        } else if ((s4dmessage.mentions.members.first()) == null) {
            s4dmessage.channel.send({
                embed: {
                    title: '❌ Musíš někoho označit!',
                    color: '#ff0000',
                    image: {
                        url: null
                    },
                    description: null,
                    footer: {
                        text: null
                    },
                    thumbnail: {
                        url: null
                    }
                }
            });
        }
    }

});

s4d.client.on('message', async (s4dmessage) => {
    if ((((s4dmessage.content) || '').startsWith('=members' || '')) || (((s4dmessage.content) || '').startsWith('=Members' || ''))) {
        let embed = new Discord.MessageEmbed()
        embed.setColor('#ff9900');
        embed.setTitle(('**Memberov:** ' + String((s4d.client.guilds.cache.get('532554177772126227')).members.cache.filter(m => !m.bot).size)));
        embed.setFooter('© 2021 F3nDyss Community Bot | All rights reserved.', );
        s4dmessage.channel.send(embed);

    }

});

s4d;
