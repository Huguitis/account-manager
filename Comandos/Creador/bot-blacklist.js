module.exports = ({
name: "bot-blacklist",
code: `
$description[
$getVar[goodemoji] ¡El usuario <@$findUser[$message]> ha sido vetado de usar el generador del bot! ]
$color[GREEN]

$setGlobalUserVar[baneado;Si;$findUser[$message]]
$setGlobalUserVar[blacklist;Blacklisteado;$findUser[$message]]

$onlyIf[$getGlobalUserVar[blacklist;$findUser[$message]]!=Blacklisteado;{color: #FF0000}{description: $getVar[bademoji] $username, $username[$findUser[$message]] ya está blacklisteado.}]

$onlyForIDs[$getVar[ownerid];]
$argsCheck[>1;]`
})
