module.exports = [{
name: "leaderboard",
code: `$description[** __CANTIDAD DE LANOS__:**
$globalUserLeaderboard[lanos;asc;**{top}: {username}** - {value} lanos.]

** __CUENTAS GENERADAS__:**
$globalUserLeaderboard[usergencount;asc;**{top}: {username}** - {value} cuentas.]]
$color[GREEN]


$sendMessage[{description:Se está recopilando toda la información, porfavor espera...}{color:YELLOW}{delete:30s};no]
`
}]
