module.exports = ({
name: "buy-imagen",
code: `
$description[$getVar[goodemoji] Listo $username, desde ahora puede personalizar la imagen del embed de tu perfil con **+set-imagen**]
$color[GREEN]
$footer[Desarrollado por HuguitisYT#1234]

$setGlobalUserVar[fondotienes;$getVar[goodemoji]]
$setGlobalUserVar[fondoaccess;Activado]
$setGlobalUserVar[lanos;$sub[$getGlobalUserVar[lanos];150]]

$onlyIf[$getGlobalUserVar[lanos;$authorID]>=150;{description:$getVar[bademoji] **Hey $username, no tienes suficientes lanos, actualmente tienes $getGlobalUserVar[lanos] lanos y esta implementación cuesta 150 lanos.**}{color:RED}{footer: Desarrollado por HuguitisYT#1234}]

$onlyIf[$getGlobalUserVar[fondoaccess]!=Activado;{description:$getVar[bademoji] **Hey $username, ¡ya has comprado esa implementación para tu perfil!**}{color:RED}{footer: Desarrollado por HuguitisYT#1234}]
`
})