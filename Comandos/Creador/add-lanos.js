module.exports = ({
name: "add-lanos",
aliases: ["addlanos"],
code: `
$description[$getVar[goodemoji] **Listo $username, ¡he dado $message[2] lanos a <@$findUser[$message]>!**] 
$color[GREEN]
$footer[Desarrollado por HuguitisYT#1234]

$setGlobalUserVar[lanos;$sum[$getGlobalUserVar[lanos;$findUser[$message]];$message[2]];$findUser[$message]]

$onlyForIDs[$getVar[ownerid];]
$argsCheck[>1;]
$suppressErrors[Error, ejemplo: +add-lanos @huguitis 1000]
`
})
