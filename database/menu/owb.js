const owb = (pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered) => {
	return `💉 ~》 *OWNER MENU* 《~ 💉
Hallo, ${pushname} 👋
Semoga harimu Menyenangkan User, ${sender.split("@")[0]}
┏━━━━━━━━━━━━━━━━━━━━┓
┃╭───────────────────
┃│➸ NAMA : ${pushname}
┃│➸ LEVEL : ${getLevelingLevel(sender)}
┃│➸ USER ${botName} : ${_registered.length}
┃╰───────────────────
┗━━━━━━━━━━━━━━━━━━━━┛
Hello Rikishizikato Yang Ganteng😊😙
┏━━━━━━━━━━━━━━━━━━━━┓
┃╭───────────────────
┃│➸ *${prefix}bc*
┃│➸ *${prefix}bcgc*
┃│➸ *${prefix}clearall*
┃│➸ *${prefix}block*
┃│➸ *${prefix}unblock*
┃│➸ *${prefix}clone*
┃│➸ *${prefix}leave*
┃│➸ *${prefix}setppbot*
┃│➸ *${prefix}setreply*
┃│➸ *${prefix}setprefix*
┃│➸ *${prefix}ban*
┃│➸ *${prefix}unban*
┃╰───────────────────
┗━━━━━━━━━━━━━━━━━━━━┛
💉 》 *POWERED BY ${ownerName}* 《 💉`
}
exports.owb = owb