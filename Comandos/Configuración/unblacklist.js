module.exports = ({
name: "unblacklist",
code: `
$description[
$getVar[goodemoji] ¡El usuario <@$findUser[$message]> ha sido desbaneado de usar el generador del bot en este servidor por $username! ]
$color[GREEN]

$setGlobalUserVar[blacklistpublico;No Blacklisteado;$findUser[$message]]

$onlyIf[$getGlobalUserVar[blacklistpublico;$findUser[$message]]!=No Blacklisteado;{color: #FF0000}{description: $getVar[bademoji] $username, $username[$findUser[$message]] no está blacklisteado en este servidor.}]

$onlyIf[$findUser[$message]!=$authorID;{description:$getVar[bademoji] **$username, debes mencionar a la persona que quieres desbanear del generador.**}{color:RED}{footer: Desarrollado por HuguitisYT#1234}]

$argsCheck[>1;{color: #FF0000}{description: $getVar[bademoji] $username, necesitas mencionar a alguien para desbanearle del generador.}]

$onlyIf[$getGlobalUserVar[blackaccess]!=Desactivado;{description:$getVar[bademoji] **Hey $username, primero debes comprar por lanos esta implementación. Puedes usar +shop o +buy-(item) para comprarlo.**}{color:RED}{footer: Desarrollado por HuguitisYT#1234}]

$onlyPerms[admin;{color: #FF0000}{description: $getVar[bademoji] $username, necesitas administrador para poder hacer eso.}]`
})