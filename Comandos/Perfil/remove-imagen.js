module.exports = ({
name: "remove-imagen",
aliases: ["setphoto"],
code: `
$description[$getVar[goodemoji] Listo $username, he eliminado tu fondo de perfil.]
$color[GREEN]
$footer[Desarrollado por HuguitisYT#1234]

$wait[1s]

$resetGlobalUserVar[fondo]

$cooldown[15s;{description:$getVar[bademoji] **Hey $username, debes esperar %time% antes de volver a ejecutar el comando.**}{color:RED}{footer: Desarrollado por HuguitisYT#1234}]

$onlyIf[$getGlobalUserVar[fondoaccess]!=Desactivado;{description:$getVar[bademoji] **Hey $username, primero debes comprar por lanos esta implementación para tu perfil. Puedes usar +shop o +buy-(item) para comprarlo.**}{color:RED}{footer: Desarrollado por HuguitisYT#1234}]

`
})