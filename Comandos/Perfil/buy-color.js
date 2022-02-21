module.exports = ({
name: "buy-color",
code: `
$description[$getVar[goodemoji] Listo $username, desde ahora puede personalizar el color del embed de tu perfil con **+set-color**]
$color[GREEN]
$footer[Desarrollado por HuguitisYT#1234]

$setGlobalUserVar[colortienes;$getVar[goodemoji]]
$setGlobalUserVar[coloraccess;Activado]
$setGlobalUserVar[lanos;$sub[$getGlobalUserVar[lanos];50]]

$onlyIf[$getGlobalUserVar[lanos;$authorID]>=50;{description:$getVar[bademoji] **Hey $username, no tienes suficientes lanos, actualmente tienes $getGlobalUserVar[lanos] lanos y esta implementación cuesta 50 lanos.**}{color:RED}{footer: Desarrollado por HuguitisYT#1234}]

$onlyIf[$getGlobalUserVar[coloraccess]!=Activado;{description:$getVar[bademoji] **Hey $username, ¡ya has comprado esa implementación para tu perfil!**}{color:RED}{footer: Desarrollado por HuguitisYT#1234}]
`
})