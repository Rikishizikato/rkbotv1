const dompet = (pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered) => {
	return `💉 ~》 *DOMPETKU MENU* 《~ 💉
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
┃│➸ *${prefix}limit*
┃│➸ *${prefix}atm*
┃│➸ *${prefix}transfer*
┃│➸ *${prefix}buylimit*
┃╰───────────────────
┗━━━━━━━━━━━━━━━━━━━━┛
💉 》 *POWERED BY ${ownerName}* 《 💉`
}
exports.dompet = dompet