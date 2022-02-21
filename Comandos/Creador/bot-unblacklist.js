module.exports = ({
name: "bot-unblacklist",
code: `
$description[
$getVar[goodemoji] ¡El usuario <@$findUser[$message]> ya no está vetado del generador!]
$color[GREEN]

$setGlobalUserVar[baneado;No;$findUser[$message]]
$setGlobalUserVar[blacklist;No Blacklisteado;$findUser[$message]]

$onlyIf[$getGlobalUserVar[blacklist;$findUser[$message]]!=No Blacklisteado;{color: #FF0000}{description: $getVar[bademoji] $username, $username[$findUser[$message]] no está blacklisteado.}]

$onlyForIDs[$getVar[ownerid];]
$argsCheck[>1;]`
});