const random = (pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered) => {
	return `💉 ~》 *RANDOM MENU* 《~ 💉
Hallo, ${pushname} 👋
Semoga harimu Menyenangkan User, ${sender.split("@")[0]}
┏━━━━━━━━━━━━━━━━━━━━┓
┃╭───────────────────
┃│➸ NAMA : ${pushname}
┃│➸ LEVEL : ${getLevelingLevel(sender)}
┃│➸ USER ${botName} : ${_registered.length}
┃╰───────────────────
┗━━━━━━━━━━━━━━━━━━━━┛
Berikut adalah fitur yang ada pada bot ini!🔫
┏━━━━━━━━━━━━━━━━━━━━┓
┃╭───────────────────
┃│➸ *${prefix}randomhentong*
┃│➸ *${prefix}nekonime*
┃│➸ *${prefix}wibu*
┃│➸ *${prefix}loli*
┃│➸ *${prefix}blowjob*
┃│➸ *${prefix}shota*
┃│➸ *${prefix}husbu*
┃│➸ *${prefix}kpop*
┃│➸ *${prefix}anjing*
┃│➸ *${prefix}pokemon*
┃╰───────────────────
┗━━━━━━━━━━━━━━━━━━━━┛
💉 》 *POWERED BY ${ownerName}* 《 💉`
}
exports.random = random