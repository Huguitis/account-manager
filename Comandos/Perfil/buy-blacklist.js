module.exports = ({
name: "buy-blacklist",
code: `
$description[$getVar[goodemoji] Listo $username, ¡desde ahora puedes blacklistear usuarios en tu servidor!]
$color[GREEN]
$footer[Desarrollado por HuguitisYT#1234]

$setGlobalUserVar[blacktienes;$getVar[goodemoji]]
$setGlobalUserVar[blackaccess;Activado]
$setGlobalUserVar[lanos;$sub[$getGlobalUserVar[lanos];300]]

$onlyIf[$getGlobalUserVar[lanos;$authorID]>=300;{description:$getVar[bademoji] **Hey $username, no tienes suficientes lanos, actualmente tienes $getGlobalUserVar[lanos] lanos y esta implementación cuesta 300 lanos.**}{color:RED}{footer: Desarrollado por HuguitisYT#1234}]

$onlyIf[$getGlobalUserVar[blackaccess]!=Activado;{description:$getVar[bademoji] **Hey $username, ¡ya has comprado esa implementación!**}{color:RED}{footer: Desarrollado por HuguitisYT#1234}]
`
})